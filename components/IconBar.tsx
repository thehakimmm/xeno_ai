"use client";

import { SidebarIcon, EditIcon } from "@/styles/icons";

interface IconBarProps {
  onToggleSidebar: () => void;
  onNewChat: () => void;
}

export default function IconBar({ onToggleSidebar, onNewChat }: IconBarProps) {
  return (
    <div className="hidden md:flex fixed left-0 top-0 bottom-0 h-screen w-14 bg-gradient-to-b from-red-950 via-red-900 to-red-950 border-r-2 border-red-600/40 md:border-r-0 md:border-transparent flex-col items-center py-3 gap-2 z-40 shadow-2xl shadow-red-900/50">
      {/* Toggle Sidebar Button */}
      <button
        onClick={onToggleSidebar}
        className="w-11 h-11 rounded-lg bg-red-800/50 hover:bg-red-700/70 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 border-2 border-red-600/40 hover:border-red-500/70 shadow-lg"
        title="Toggle sidebar"
      >
        <SidebarIcon className="w-5 h-5 text-red-200 hover:text-white transition-colors" />
      </button>

      {/* New Chat Button */}
      <button
        onClick={onNewChat}
        className="w-11 h-11 rounded-lg bg-red-800/50 hover:bg-red-700/70 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 border-2 border-red-600/40 hover:border-red-500/70 shadow-lg"
        title="New chat"
      >
        <EditIcon className="w-5 h-5 text-red-200 hover:text-white transition-colors" />
      </button>
    </div>
  );
}

