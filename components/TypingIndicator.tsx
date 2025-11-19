"use client";

import Image from "next/image";
import { typingIndicatorStyles } from "@/styles/typingIndicator.styles";

export default function TypingIndicator() {
  return (
    <div className={typingIndicatorStyles.container}>
      <div className={typingIndicatorStyles.wrapper}>
        {/* Avatar */}
        <div className={typingIndicatorStyles.avatar}>
          <div className="relative w-full h-full">
            <Image
              src="/images/logo/xeno.jpg"
              alt="XenoAI"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Typing Animation */}
        <div className={typingIndicatorStyles.messageBox}>
          <div className={typingIndicatorStyles.dotsContainer}>
            <div className={typingIndicatorStyles.dot} style={{ animationDelay: "0ms" }}></div>
            <div className={typingIndicatorStyles.dot} style={{ animationDelay: "150ms" }}></div>
            <div className={typingIndicatorStyles.dot} style={{ animationDelay: "300ms" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

