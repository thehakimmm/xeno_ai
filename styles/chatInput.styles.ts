export const chatInputStyles = {
  container: "max-w-4xl mx-auto w-full",
  wrapper: "relative bg-gradient-to-r from-red-950/40 via-black/90 to-red-950/40 backdrop-blur-xl rounded-3xl border-2 border-red-900/50 overflow-hidden transition-all duration-300 hover:border-red-700/70 focus-within:border-red-600 focus-within:shadow-2xl focus-within:shadow-red-600/40 focus-within:scale-[1.02]",
  inputWrapper: "flex items-end p-4 gap-4",
  
  textarea: {
    base: "flex-1 bg-transparent px-3 pt-2 pb-3 text-white placeholder-gray-400 placeholder:font-light resize-none outline-none max-h-32 min-h-[52px] text-base leading-relaxed",
    style: {
      height: "auto",
      minHeight: "52px",
      maxHeight: "200px"
    }
  },
  
  button: {
    base: "p-3 rounded-2xl transition-all duration-300 flex-shrink-0 shadow-lg",
    disabled: "bg-gray-800/50 text-gray-500 cursor-not-allowed opacity-40",
    enabled: "bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 hover:scale-110 hover:rotate-12 active:scale-90 shadow-red-900/50 hover:shadow-xl hover:shadow-red-600/50"
  },
  
  buttonIcon: "w-5 h-5",
  
  footer: "text-[10px] text-gray-500 text-center mt-3 font-mono uppercase tracking-widest"
};

