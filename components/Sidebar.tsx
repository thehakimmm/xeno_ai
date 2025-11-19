"use client";

import Image from "next/image";
import { ChatSession } from "@/lib/chatStorage";
import { sidebarStyles } from "@/styles/sidebar.styles";
import { ChatIcon, TrashIcon, SidebarIcon, PlusIcon } from "@/styles/icons";
import { format, isToday, isYesterday, isThisWeek } from "date-fns";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNewChat: () => void;
  chats: ChatSession[];
  currentChatId: string;
  onSelectChat: (chatId: string) => void;
  onDeleteChat: (chatId: string) => void;
}

export default function Sidebar({ 
  isOpen, 
  onClose, 
  onNewChat, 
  chats, 
  currentChatId, 
  onSelectChat, 
  onDeleteChat 
}: SidebarProps) {
  
  // Group chats by date
  const groupedChats = {
    today: chats.filter(chat => isToday(chat.updatedAt)),
    yesterday: chats.filter(chat => isYesterday(chat.updatedAt)),
    thisWeek: chats.filter(chat => isThisWeek(chat.updatedAt) && !isToday(chat.updatedAt) && !isYesterday(chat.updatedAt)),
    older: chats.filter(chat => !isThisWeek(chat.updatedAt)),
  };

  const handleToggle = () => {
    console.log("Sidebar toggle clicked!");
    onClose();
  };

  return (
    <>
      {/* Mobile Overlay - Only show on mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" />
      )}

      {/* Sidebar */}
      <aside className={`${sidebarStyles.container} ${isOpen ? sidebarStyles.open : sidebarStyles.closed}`}>
        <div className={sidebarStyles.content}>
          {/* Brand Section */}
          <div className="p-5">
            <div className="flex items-center justify-between gap-3">
              <button 
                onClick={handleToggle}
                className="flex items-center gap-3 hover:bg-red-800/40 rounded-lg p-2 -m-2 transition-all duration-200 cursor-pointer group"
                title="Toggle sidebar"
              >
                <div className="relative w-10 h-10 rounded-lg overflow-hidden ring-2 ring-red-500/50 shadow-lg shadow-black/50 group-hover:ring-red-400/70 transition-all">
                  <Image
                    src="/images/logo/xeno.jpg"
                    alt="Xeno Industry"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent leading-tight group-hover:tracking-wide transition-all">
                    Xeno Industry
                  </span>
                  <span className="text-[9px] text-red-300/70 font-mono uppercase tracking-wider leading-tight group-hover:text-red-200 transition-colors">
                    AI Solutions
                  </span>
                </div>
              </button>
              <button 
                onClick={handleToggle}
                className="p-3 hover:bg-red-800/40 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
                title="Toggle sidebar"
              >
                <SidebarIcon className="w-5 h-5 text-red-300 hover:text-white transition-colors" />
              </button>
            </div>
          </div>

          {/* New Chat Button */}
          <div className={sidebarStyles.header.container}>
            <button onClick={onNewChat} className={sidebarStyles.header.newChatButton}>
              <PlusIcon className={sidebarStyles.header.icon} />
              <span>New chat</span>
            </button>
          </div>

          {/* Chat History */}
          <div className={sidebarStyles.chatList.container}>
            {groupedChats.today.length > 0 && (
              <div className={sidebarStyles.chatList.section}>
                <h3 className={sidebarStyles.chatList.sectionTitle}>Today</h3>
                {groupedChats.today.map((chat) => (
                  <div
                    key={chat.id}
                    className={`${sidebarStyles.chatList.item} ${
                      chat.id === currentChatId ? sidebarStyles.chatList.itemActive : ""
                    }`}
                    onClick={() => onSelectChat(chat.id)}
                  >
                    <ChatIcon className={sidebarStyles.chatList.itemIcon} />
                    <span className={sidebarStyles.chatList.itemText}>{chat.title}</span>
                    <button 
                      className="opacity-0 group-hover:opacity-100 hover:text-red-500 transition-opacity"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeleteChat(chat.id);
                      }}
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {groupedChats.yesterday.length > 0 && (
              <div className={sidebarStyles.chatList.section}>
                <h3 className={sidebarStyles.chatList.sectionTitle}>Yesterday</h3>
                {groupedChats.yesterday.map((chat) => (
                  <div
                    key={chat.id}
                    className={`${sidebarStyles.chatList.item} ${
                      chat.id === currentChatId ? sidebarStyles.chatList.itemActive : ""
                    }`}
                    onClick={() => onSelectChat(chat.id)}
                  >
                    <ChatIcon className={sidebarStyles.chatList.itemIcon} />
                    <span className={sidebarStyles.chatList.itemText}>{chat.title}</span>
                    <button 
                      className="opacity-0 group-hover:opacity-100 hover:text-red-500 transition-opacity"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeleteChat(chat.id);
                      }}
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {groupedChats.thisWeek.length > 0 && (
              <div className={sidebarStyles.chatList.section}>
                <h3 className={sidebarStyles.chatList.sectionTitle}>This Week</h3>
                {groupedChats.thisWeek.map((chat) => (
                  <div
                    key={chat.id}
                    className={`${sidebarStyles.chatList.item} ${
                      chat.id === currentChatId ? sidebarStyles.chatList.itemActive : ""
                    }`}
                    onClick={() => onSelectChat(chat.id)}
                  >
                    <ChatIcon className={sidebarStyles.chatList.itemIcon} />
                    <span className={sidebarStyles.chatList.itemText}>{chat.title}</span>
                    <button 
                      className="opacity-0 group-hover:opacity-100 hover:text-red-500 transition-opacity"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeleteChat(chat.id);
                      }}
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {groupedChats.older.length > 0 && (
              <div className={sidebarStyles.chatList.section}>
                <h3 className={sidebarStyles.chatList.sectionTitle}>Older</h3>
                {groupedChats.older.map((chat) => (
                  <div
                    key={chat.id}
                    className={`${sidebarStyles.chatList.item} ${
                      chat.id === currentChatId ? sidebarStyles.chatList.itemActive : ""
                    }`}
                    onClick={() => onSelectChat(chat.id)}
                  >
                    <ChatIcon className={sidebarStyles.chatList.itemIcon} />
                    <span className={sidebarStyles.chatList.itemText}>{chat.title}</span>
                    <button 
                      className="opacity-0 group-hover:opacity-100 hover:text-red-500 transition-opacity"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeleteChat(chat.id);
                      }}
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {chats.length === 0 && (
              <div className="text-center text-gray-500 py-8 px-4">
                <p className="text-sm">No conversations yet</p>
                <p className="text-xs mt-2">Click &quot;New chat&quot; to start</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className={sidebarStyles.footer.container}>
            <div className={sidebarStyles.footer.divider} />
            <div className={sidebarStyles.footer.user}>
              <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-red-600/30">
                <Image
                  src="/images/logo/xeno.jpg"
                  alt="User"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <span className={sidebarStyles.footer.userName}>XenoAI User</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

