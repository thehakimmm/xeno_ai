"use client";

import Toast, { ToastProps } from "./Toast";
import { toastContainerStyles } from "@/styles/toast.styles";

interface ToastContainerProps {
  toasts: Array<ToastProps & { id: string }>;
  removeToast: (id: string) => void;
}

export default function ToastContainer({ toasts, removeToast }: ToastContainerProps) {
  if (toasts.length === 0) return null;

  return (
    <div className={toastContainerStyles.container}>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
          duration={toast.duration}
        />
      ))}
    </div>
  );
}

