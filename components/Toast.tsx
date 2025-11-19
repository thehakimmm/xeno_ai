"use client";

import { useEffect } from "react";
import { toastStyles } from "@/styles/toast.styles";
import { CheckIcon, XIcon } from "@/styles/icons";

export interface ToastProps {
  message: string;
  type: "success" | "error" | "info";
  onClose: () => void;
  duration?: number;
}

export default function Toast({ message, type, onClose, duration = 3000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`${toastStyles.container} ${toastStyles.types[type]}`}>
      <div className={toastStyles.content}>
        {type === "success" && <CheckIcon className={toastStyles.icon} />}
        {type === "error" && <XIcon className={toastStyles.icon} />}
        <span className={toastStyles.message}>{message}</span>
      </div>
      <button onClick={onClose} className={toastStyles.closeButton}>
        <XIcon className="w-4 h-4" />
      </button>
    </div>
  );
}

