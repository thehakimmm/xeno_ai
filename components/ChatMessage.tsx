"use client";

import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import type { Message } from "@/app/page";
import { chatMessageStyles } from "@/styles/chatMessage.styles";
import { CopyIcon } from "@/styles/icons";

interface ChatMessageProps {
  message: Message;
  onCopy: (content: string) => void;
}

export default function ChatMessage({ message, onCopy }: ChatMessageProps) {
  const isUser = message.role === "user";

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    onCopy(message.content);
  };

  return (
    <div className={chatMessageStyles.container(isUser)}>
      <div className={chatMessageStyles.wrapper}>
        {/* Avatar */}
        <div
          className={`${chatMessageStyles.avatar.base} ${
            isUser ? chatMessageStyles.avatar.user : chatMessageStyles.avatar.assistant
          }`}
        >
          {isUser ? (
            <span className={chatMessageStyles.avatarText}>Y</span>
          ) : (
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="/images/logo/xeno.jpg"
                alt="XenoAI"
                fill
                className="object-cover rounded-full"
              />
            </div>
          )}
        </div>

        {/* Message Content */}
        <div className={chatMessageStyles.messageBox.base}>
          <div className={chatMessageStyles.content}>
            <ReactMarkdown
              components={{
                code({ node, inline, className, children, ...props }: any) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {message.content}
            </ReactMarkdown>
          </div>
          
          {/* Message Actions */}
          <div className={chatMessageStyles.messageActions.container}>
            <button
              onClick={handleCopy}
              className={chatMessageStyles.messageActions.button}
              title="Copy message"
            >
              <CopyIcon className={chatMessageStyles.messageActions.icon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

