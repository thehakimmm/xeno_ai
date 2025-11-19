export const pageStyles = {
  container: "flex h-screen bg-black",
  mainContent: "flex-1 flex flex-col transition-all duration-300",
  messagesContainer: "flex-1 overflow-y-auto scroll-smooth",
  
  emptyState: {
    container: "flex flex-col items-center justify-center h-full text-center space-y-12 animate-fade-in px-4",
    logoWrapper: "relative w-40 h-40 rounded-3xl overflow-hidden group cursor-pointer transform hover:scale-110 transition-all duration-500",
    logoImage: "w-full h-full object-cover relative z-10 group-hover:scale-110 transition-transform duration-700",
    glowEffect: "absolute inset-0 bg-gradient-to-br from-red-600/40 via-red-500/30 to-transparent blur-3xl group-hover:blur-[60px] transition-all duration-500",
    textContainer: "space-y-3",
    logo: "w-40 h-40 rounded-3xl bg-gradient-to-br from-black to-red-600 flex items-center justify-center shadow-2xl shadow-red-900/50",
    logoText: "text-6xl font-bold text-white",
    title: "text-7xl font-black bg-gradient-to-r from-white via-gray-200 to-red-500 bg-clip-text text-transparent tracking-tight hover:tracking-wide transition-all duration-300",
    subtitle: "flex items-center justify-center gap-2 text-sm text-gray-500 font-mono uppercase tracking-widest",
    subtitleDot: "w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-lg shadow-red-600/50",
    suggestions: {
      container: "flex flex-wrap items-center justify-center gap-4 max-w-3xl",
      card: "group relative px-5 py-3 bg-gray-900/30 backdrop-blur-sm border-2 border-red-900/30 rounded-full hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 hover:border-red-500 hover:shadow-xl hover:shadow-red-600/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-center gap-2.5",
      icon: "text-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-300",
      text: "text-sm text-gray-400 group-hover:text-white font-medium tracking-wide"
    }
  },
  
  inputContainer: "border-t border-red-900/20 bg-black p-3"
};

