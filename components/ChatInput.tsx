"use client";

import { useState, KeyboardEvent } from "react";
import { chatInputStyles } from "@/styles/chatInput.styles";
import { SendIcon } from "@/styles/icons";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const isDisabledOrEmpty = disabled || !input.trim();

  return (
    <div className={chatInputStyles.container}>
      <div className={chatInputStyles.wrapper}>
        <div className={chatInputStyles.inputWrapper}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message"
            disabled={disabled}
            className={chatInputStyles.textarea.base}
            rows={1}
            style={chatInputStyles.textarea.style}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = "auto";
              target.style.height = Math.min(target.scrollHeight, 128) + "px";
            }}
          />
          
          <button
            onClick={handleSend}
            disabled={isDisabledOrEmpty}
            className={`${chatInputStyles.button.base} ${
              isDisabledOrEmpty
                ? chatInputStyles.button.disabled
                : chatInputStyles.button.enabled
            }`}
          >
            <SendIcon className={chatInputStyles.buttonIcon} />
          </button>
        </div>
      </div>
      
      <p className={chatInputStyles.footer}>
        <span className="hidden md:inline">Powered by Google Gemini • Press Enter to send, Shift+Enter for new line</span>
        <span className="md:hidden">Powered by Google Gemini</span>
      </p>
    </div>
  );
}

