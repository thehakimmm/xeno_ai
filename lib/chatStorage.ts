import { Message } from "@/app/page";

export interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

const STORAGE_KEY = "xenoai_chats";
const ACTIVE_CHAT_KEY = "xenoai_active_chat";

/**
 * Get all chat sessions from localStorage
 */
export function getAllChats(): ChatSession[] {
  if (typeof window === "undefined") return [];
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    
    const chats = JSON.parse(stored);
    return chats.map((chat: any) => ({
      ...chat,
      createdAt: new Date(chat.createdAt),
      updatedAt: new Date(chat.updatedAt),
      messages: chat.messages.map((msg: any) => ({
        ...msg,
        timestamp: new Date(msg.timestamp),
      })),
    }));
  } catch (error) {
    console.error("Error loading chats:", error);
    return [];
  }
}

/**
 * Get a specific chat by ID
 */
export function getChat(chatId: string): ChatSession | null {
  const chats = getAllChats();
  return chats.find(chat => chat.id === chatId) || null;
}

/**
 * Save a chat session
 */
export function saveChat(chat: ChatSession): void {
  if (typeof window === "undefined") return;
  
  try {
    const chats = getAllChats();
    const existingIndex = chats.findIndex(c => c.id === chat.id);
    
    if (existingIndex >= 0) {
      chats[existingIndex] = chat;
    } else {
      chats.unshift(chat); // Add new chat at the beginning
    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(chats));
  } catch (error) {
    console.error("Error saving chat:", error);
  }
}

/**
 * Delete a chat session
 */
export function deleteChat(chatId: string): void {
  if (typeof window === "undefined") return;
  
  try {
    const chats = getAllChats();
    const filtered = chats.filter(chat => chat.id !== chatId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    
    // If deleted chat was active, clear active chat
    if (getActiveChatId() === chatId) {
      localStorage.removeItem(ACTIVE_CHAT_KEY);
    }
  } catch (error) {
    console.error("Error deleting chat:", error);
  }
}

/**
 * Create a new chat session
 */
export function createNewChat(): ChatSession {
  const now = new Date();
  const chat: ChatSession = {
    id: `chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    title: "New Chat",
    messages: [],
    createdAt: now,
    updatedAt: now,
  };
  
  saveChat(chat);
  setActiveChatId(chat.id);
  
  return chat;
}

/**
 * Update chat title (auto-generate from first message)
 */
export function updateChatTitle(chatId: string, title: string): void {
  const chat = getChat(chatId);
  if (!chat) return;
  
  chat.title = title;
  chat.updatedAt = new Date();
  saveChat(chat);
}

/**
 * Generate chat title from first user message
 */
export function generateChatTitle(message: string): string {
  // Take first 50 characters or until first newline
  let title = message.split('\n')[0].substring(0, 50);
  if (message.length > 50) title += "...";
  return title;
}

/**
 * Get active chat ID
 */
export function getActiveChatId(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(ACTIVE_CHAT_KEY);
}

/**
 * Set active chat ID
 */
export function setActiveChatId(chatId: string): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(ACTIVE_CHAT_KEY, chatId);
}

/**
 * Clear all chats (for testing/reset)
 */
export function clearAllChats(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(ACTIVE_CHAT_KEY);
}

