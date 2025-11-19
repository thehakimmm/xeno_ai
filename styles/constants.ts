/**
 * Design System Constants
 * Centralized constants for consistent styling across the application
 */

export const colors = {
  // Gradients
  gradient: {
    primary: "from-blue-500 to-purple-600",
    primaryHover: "from-blue-600 to-purple-700",
    background: "from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800",
  },
  
  // Text colors
  text: {
    primary: "text-gray-800 dark:text-gray-100",
    secondary: "text-gray-600 dark:text-gray-400",
    muted: "text-gray-500 dark:text-gray-400",
  },
  
  // Background colors
  bg: {
    primary: "bg-white dark:bg-gray-800",
    secondary: "bg-gray-100 dark:bg-gray-700",
    transparent: "bg-transparent",
  },
  
  // Border colors
  border: {
    default: "border-gray-200 dark:border-gray-700",
  },
};

export const spacing = {
  container: {
    maxWidth: "max-w-5xl",
    padding: "px-4",
  },
};

export const animations = {
  fadeIn: "animate-fade-in",
  slideUp: "animate-slide-up",
  bounce: "animate-bounce",
};

export const shadows = {
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
};

export const transitions = {
  default: "transition-colors duration-200",
  all: "transition-all duration-200",
};

export const borderRadius = {
  sm: "rounded",
  md: "rounded-lg",
  lg: "rounded-xl",
  xl: "rounded-2xl",
  full: "rounded-full",
};

