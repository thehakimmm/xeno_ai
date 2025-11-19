export const toastStyles = {
  container: "flex items-center justify-between p-4 rounded-lg shadow-lg backdrop-blur-sm animate-slide-up min-w-[300px] max-w-md",
  content: "flex items-center space-x-3",
  icon: "w-5 h-5 flex-shrink-0",
  message: "text-sm font-medium",
  closeButton: "ml-4 p-1 rounded hover:bg-white/10 transition-colors",
  
  types: {
    success: "bg-red-500/90 text-white border border-red-600",
    error: "bg-red-700/90 text-white border border-red-800",
    info: "bg-gray-800/90 text-white border border-red-900"
  }
};

export const toastContainerStyles = {
  container: "fixed bottom-4 right-4 z-50 flex flex-col space-y-2"
};

