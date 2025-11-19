export const sidebarStyles = {
  overlay: "fixed inset-0 bg-black/50 z-40",
  
  container: "fixed top-0 left-0 h-full bg-gradient-to-b from-red-950 via-red-900 to-red-950 text-white z-50 transition-all duration-300 flex flex-col border-r-2 border-red-600/40 md:border-r-0 md:border-transparent shadow-2xl shadow-red-900/50",
  open: "translate-x-0 w-64",
  closed: "-translate-x-full w-64",
  
  content: "flex flex-col h-full w-64",
  
  header: {
    container: "px-4 pt-6 pb-4",
    closeButton: "md:hidden p-2 hover:bg-red-800/40 rounded-lg transition-all duration-200 hover:scale-110",
    newChatButton: "w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 rounded-xl transition-all duration-300 text-sm font-semibold shadow-lg shadow-black/50 hover:shadow-xl hover:scale-105 active:scale-95 border border-red-500/30",
    icon: "w-4 h-4"
  },
  
  chatList: {
    container: "flex-1 overflow-y-auto py-4 px-3",
    section: "mb-6",
    sectionTitle: "px-3 py-2 text-[11px] font-bold text-red-300 uppercase tracking-widest",
    item: "flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-red-800/40 cursor-pointer transition-all duration-200 group mb-1 hover:translate-x-1 border border-transparent hover:border-red-600/20",
    itemActive: "bg-gradient-to-r from-black via-black/95 to-black/90 border-l-4 border-red-500 shadow-lg shadow-black/60",
    itemIcon: "w-4 h-4 text-red-400/70 group-hover:text-red-300 transition-all group-hover:scale-110",
    itemText: "text-sm truncate flex-1 text-red-100/90 group-hover:text-white transition-colors"
  },
  
  footer: {
    container: "p-2 md:bg-red-950/50",
    button: "flex items-center gap-2 px-3 py-2 w-full hover:bg-red-800/30 rounded-lg transition-colors text-xs text-red-300",
    icon: "w-3.5 h-3.5",
    divider: "h-px bg-red-700/50 my-1.5",
    user: "flex items-center gap-2 px-3 py-1.5",
    avatar: "w-7 h-7 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center font-bold text-xs border border-red-400/30",
    userName: "text-xs font-medium text-red-100"
  }
};

