export const chatMessageStyles = {
  container: (isUser: boolean) => `group py-8 border-b border-gray-900/30 hover:bg-gray-900/20 transition-all duration-300`,
  wrapper: "max-w-4xl mx-auto px-6 flex items-start gap-5",
  
  avatar: {
    base: "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-xl transform group-hover:scale-110 transition-all duration-300",
    user: "bg-gradient-to-br from-red-600 to-red-700 ring-4 ring-red-600/20 group-hover:ring-red-600/40",
    assistant: "bg-gradient-to-br from-gray-800 via-gray-900 to-red-900 ring-4 ring-red-900/20 group-hover:ring-red-900/40 group-hover:shadow-red-900/50"
  },
  
  avatarText: "text-sm font-black",
  
  messageBox: {
    base: "flex-1 space-y-3 pt-1",
    content: "text-gray-100"
  },
  
  content: "markdown-content prose prose-sm prose-invert max-w-none leading-relaxed",
  
  messageActions: {
    container: "flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2",
    button: "p-2 hover:bg-red-900/30 rounded-lg transition-all duration-200 border border-transparent hover:border-red-900/50 hover:shadow-lg hover:scale-110",
    icon: "w-4 h-4 text-gray-600 hover:text-red-500 transition-colors"
  }
};

