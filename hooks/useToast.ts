"use client";

import { useState, useCallback } from "react";
import { ToastProps } from "@/components/Toast";

interface Toast extends ToastProps {
  id: string;
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((message: string, type: ToastProps["type"] = "info", duration?: number) => {
    const id = Math.random().toString(36).substring(7);
    const newToast: Toast = { id, message, type, duration, onClose: () => {} };
    
    setToasts((prev) => [...prev, newToast]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const showSuccess = useCallback((message: string) => addToast(message, "success"), [addToast]);
  const showError = useCallback((message: string) => addToast(message, "error"), [addToast]);
  const showInfo = useCallback((message: string) => addToast(message, "info"), [addToast]);

  return {
    toasts,
    removeToast,
    showSuccess,
    showError,
    showInfo,
  };
}

