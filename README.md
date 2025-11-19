# Hakim LLM Chatbox 🤖

A beautiful, modern AI chatbot application built with Next.js 14, TypeScript, and Tailwind CSS. Powered by OpenAI's GPT models.

![Hakim LLM Chatbox](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwind-css)

## ✨ Features

### Core Features
- 💬 **Real-time Chat Interface** - Beautiful, responsive chat UI with smooth animations
- 🎨 **Modern Design** - Gradient backgrounds, smooth transitions, and dark mode support
- 📝 **Markdown Support** - Rich text formatting and syntax highlighting for code blocks
- 🔒 **Secure API Integration** - Server-side API calls to OpenAI
- 🚀 **Fast & Efficient** - Built on Next.js 14 with App Router
- 📱 **Responsive** - Works perfectly on desktop, tablet, and mobile devices
- 🎯 **Type-Safe** - Full TypeScript support for better development experience

### Interactive Features ✨
- 🔔 **Toast Notifications** - Real-time feedback for user actions
- 📋 **Copy Messages** - One-click copy with hover-to-reveal button
- ⌨️ **Typing Indicator** - Animated "AI is thinking..." with bouncing dots
- 💭 **Quick Suggestions** - Interactive cards to start conversations
- 🎭 **Hover Effects** - Smooth animations on avatars, buttons, and messages
- 🎨 **Message Actions** - Hidden actions revealed on hover
- ✨ **Premium Scrollbar** - Custom gradient scrollbar matching app theme

See [FEATURES.md](./FEATURES.md) for complete interactive features documentation.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- An OpenAI API key (get one at https://platform.openai.com/api-keys)

### Installation

1. **Clone or download this repository**

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit the `.env` file and add your OpenAI API key:

```env
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-3.5-turbo
```

4. **Run the development server**

```bash
npm run dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see your chatbot in action!

## 🛠️ Project Structure

```
hakim_LLM/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # API endpoint for chat
│   ├── globals.css                # Global styles
│   ├── layout.tsx                 # Root layout
│   └── page.tsx                   # Main chat page
├── components/
│   ├── ChatInput.tsx              # Message input component
│   ├── ChatMessage.tsx            # Message display component
│   └── Header.tsx                 # App header
├── styles/                        # 🎨 Separated styles (Clean Code!)
│   ├── chatInput.styles.ts        # ChatInput styles
│   ├── chatMessage.styles.ts      # ChatMessage styles
│   ├── header.styles.ts           # Header styles
│   ├── page.styles.ts             # Main page styles
│   └── icons.tsx                  # Reusable icon components
├── .env.example                   # Environment variables template
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── ARCHITECTURE.md                # Detailed architecture documentation
└── README.md
```

### 🎨 Clean Code Architecture

This project follows clean code principles with **separated styles**:
- ✅ **Components** focus on logic and structure
- ✅ **Style files** contain all Tailwind classes
- ✅ **Icons** are reusable React components
- ✅ Easy to maintain and scale

See [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed documentation.

## 🎨 Customization

### Change the AI Model

Edit the `.env` file:

```env
OPENAI_MODEL=gpt-4  # or gpt-3.5-turbo, gpt-4-turbo, etc.
```

### Customize the System Prompt

Edit `app/api/chat/route.ts` and modify the system message:

```typescript
{
  role: "system",
  content: "Your custom system prompt here..."
}
```

### Modify Colors and Styling

The app uses Tailwind CSS. You can customize colors in `tailwind.config.ts` or modify component styles directly in the component files.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add your `OPENAI_API_KEY` environment variable in Vercel's project settings
4. Deploy!

### Deploy to Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- Render
- AWS
- Google Cloud
- etc.

## 🔒 Security Notes

- Never commit your `.env` file or expose your API keys
- The API key is only used server-side (in the API route)
- Consider adding rate limiting for production use
- Monitor your OpenAI API usage to avoid unexpected costs

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💡 Tips

- Use **Shift+Enter** to create new lines in your message
- Click the **Clear Chat** button to start a new conversation
- The AI supports markdown formatting in its responses
- Code blocks are automatically syntax highlighted

## 🐛 Troubleshooting

### "OpenAI API key is not configured"
- Make sure you created a `.env` file with your API key
- Restart the development server after adding the `.env` file

### "OpenAI API quota exceeded"
- Check your OpenAI account billing and usage limits
- You may need to add credits to your OpenAI account

### Build errors
- Delete `node_modules` and `.next` folders
- Run `npm install` again
- Make sure you're using Node.js 18 or higher

## 📞 Support

If you need help or have questions, please open an issue in the repository.

---

Built with ❤️ using Next.js and OpenAI

