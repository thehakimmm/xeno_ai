import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XenoAI - Your Intelligent Assistant",
  description: "Chat with XenoAI, your intelligent AI assistant powered by OpenAI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

