"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import Sidebar from "@/components/Sidebar";
import IconBar from "@/components/IconBar";
import ChatGPTHeader from "@/components/ChatGPTHeader";
import TypingIndicator from "@/components/TypingIndicator";
import ToastContainer from "@/components/ToastContainer";
import { pageStyles } from "@/styles/page.styles";
import { useToast } from "@/hooks/useToast";
import {
  getAllChats,
  getChat,
  saveChat,
  deleteChat,
  createNewChat,
  getActiveChatId,
  setActiveChatId,
  generateChatTitle,
  updateChatTitle,
  ChatSession,
} from "@/lib/chatStorage";

export interface Message {
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
}

const SUGGESTIONS = [
  { icon: "🚀", text: "Boost my productivity" },
  { icon: "🧠", text: "Solve complex problems" },
  { icon: "✨", text: "Get creative ideas" },
  { icon: "📚", text: "Learn something new" },
];

export default function Home() {
  // Xeno Industry AI - Build v1.1
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // Start closed - icon bar visible
  const [currentChatId, setCurrentChatId] = useState<string | null>(null);
  const [chatList, setChatList] = useState<ChatSession[]>([]);

  // Debug: Log sidebar state changes
  useEffect(() => {
    console.log("Sidebar state changed:", sidebarOpen);
  }, [sidebarOpen]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toasts, removeToast, showSuccess, showError } = useToast();

  // Load chats on mount
  useEffect(() => {
    const chats = getAllChats();
    setChatList(chats);

    // Load active chat or create new one
    const activeChatId = getActiveChatId();
    if (activeChatId) {
      const chat = getChat(activeChatId);
      if (chat) {
        setCurrentChatId(chat.id);
        setMessages(chat.messages);
        return;
      }
    }

    // No active chat, create new one
    if (chats.length === 0) {
      const newChat = createNewChat();
      setCurrentChatId(newChat.id);
      setChatList([newChat]);
    } else {
      // Use first chat
      setCurrentChatId(chats[0].id);
      setMessages(chats[0].messages);
      setActiveChatId(chats[0].id);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Save current chat
  const saveCurrentChat = (updatedMessages: Message[]) => {
    if (!currentChatId) return;

    const chat = getChat(currentChatId);
    if (!chat) return;

    // Auto-generate title from first user message
    if (chat.title === "New Chat" && updatedMessages.length > 0) {
      const firstUserMessage = updatedMessages.find(m => m.role === "user");
      if (firstUserMessage) {
        const title = generateChatTitle(firstUserMessage.content);
        chat.title = title;
      }
    }

    chat.messages = updatedMessages;
    chat.updatedAt = new Date();
    saveChat(chat);

    // Refresh chat list to show updated title
    setChatList(getAllChats());
  };

  const sendMessage = async (content: string) => {
    const userMessage: Message = {
      role: "user",
      content,
      timestamp: new Date(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    saveCurrentChat(updatedMessages);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();

      const assistantMessage: Message = {
        role: "assistant",
        content: data.message,
        timestamp: new Date(),
      };

      const finalMessages = [...updatedMessages, assistantMessage];
      setMessages(finalMessages);
      saveCurrentChat(finalMessages);
    } catch (error) {
      console.error("Error sending message:", error);
      showError("Failed to get response. Please check your API configuration.");
      const errorMessage: Message = {
        role: "assistant",
        content: "Sorry, I encountered an error. Please make sure your API key is configured correctly.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewChat = () => {
    const newChat = createNewChat();
    setCurrentChatId(newChat.id);
    setMessages([]);
    setChatList(getAllChats());
    showSuccess("New chat created!");
  };

  const handleSwitchChat = (chatId: string) => {
    const chat = getChat(chatId);
    if (!chat) return;

    setCurrentChatId(chat.id);
    setMessages(chat.messages);
    setActiveChatId(chat.id);
  };

  const handleDeleteChat = (chatId: string) => {
    deleteChat(chatId);
    const remainingChats = getAllChats();
    setChatList(remainingChats);

    // If deleted current chat, switch to another or create new
    if (chatId === currentChatId) {
      if (remainingChats.length > 0) {
        handleSwitchChat(remainingChats[0].id);
      } else {
        handleNewChat();
      }
    }

    showSuccess("Chat deleted");
  };

  const clearChat = () => {
    setMessages([]);
    if (currentChatId) {
      const chat = getChat(currentChatId);
      if (chat) {
        chat.messages = [];
        chat.updatedAt = new Date();
        saveChat(chat);
        setChatList(getAllChats());
      }
    }
    showSuccess("Conversation cleared!");
  };

  const handleCopyMessage = () => {
    showSuccess("Copied to clipboard!");
  };

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage(suggestion);
  };

  return (
    <div className={pageStyles.container}>
      {/* Icon Bar - Shows when sidebar is closed */}
      {!sidebarOpen && (
        <IconBar 
          onToggleSidebar={() => setSidebarOpen(true)}
          onNewChat={handleNewChat}
        />
      )}
      
      <Sidebar 
        isOpen={sidebarOpen}
        onClose={() => {
          console.log("Parent onClose called, setting sidebarOpen to false");
          setSidebarOpen(false);
        }}
        onNewChat={handleNewChat}
        chats={chatList}
        currentChatId={currentChatId || ""}
        onSelectChat={handleSwitchChat}
        onDeleteChat={handleDeleteChat}
      />
      
      <div className={`${pageStyles.mainContent} ${sidebarOpen ? 'md:ml-64' : 'md:ml-14'} transition-all duration-300`}>
        <ChatGPTHeader 
          onMenuClick={() => {
            console.log("Toggling sidebar, current state:", sidebarOpen);
            setSidebarOpen(!sidebarOpen);
          }}
          model="GEMINI-2.5"
          sidebarOpen={sidebarOpen}
        />
        
        <div className={pageStyles.messagesContainer}>
          {messages.length === 0 && !isLoading && (
            <div className={pageStyles.emptyState.container}>
              <div className={pageStyles.emptyState.logoWrapper}>
                <Image 
                  src="/images/logo/xeno.jpg" 
                  alt="XenoAI Logo" 
                  width={80} 
                  height={80}
                  className={pageStyles.emptyState.logoImage}
                  priority
                />
                <div className={pageStyles.emptyState.glowEffect}></div>
              </div>
              <div className={pageStyles.emptyState.textContainer}>
                <h1 className={pageStyles.emptyState.title}>XenoAI</h1>
                <div className={pageStyles.emptyState.subtitle}>
                  <span className={pageStyles.emptyState.subtitleDot}></span>
                  Advanced AI Assistant
                </div>
              </div>
              
              <div className={`${pageStyles.emptyState.suggestions.container} hidden md:flex`}>
                {SUGGESTIONS.map((suggestion, index) => (
                  <button
                    key={index}
                    className={pageStyles.emptyState.suggestions.card}
                    onClick={() => handleSuggestionClick(suggestion.text)}
                  >
                    <span className={pageStyles.emptyState.suggestions.icon}>
                      {suggestion.icon}
                    </span>
                    <span className={pageStyles.emptyState.suggestions.text}>
                      {suggestion.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {messages.map((message, index) => (
            <ChatMessage 
              key={index} 
              message={message} 
              onCopy={handleCopyMessage}
            />
          ))}
          
          {isLoading && <TypingIndicator />}
          
          <div ref={messagesEndRef} />
        </div>
        
        <div className={pageStyles.inputContainer}>
          <ChatInput onSend={sendMessage} disabled={isLoading} />
        </div>
      </div>

      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </div>
  );
}

