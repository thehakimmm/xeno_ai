# 💬 XenoAI Chat Session Management

## Overview

Your XenoAI now has **full chat session management** with persistent storage! No more losing your conversations.

---

## ✨ Features

### **1. Multiple Chat Sessions**
- Create unlimited separate conversations
- Each chat has its own history
- Switch between chats instantly

### **2. Persistent Storage**
- All chats saved in browser localStorage
- Survives page refreshes
- Automatic saving after each message

### **3. Auto-Generated Titles**
- Chat titles auto-generated from first message
- Takes first 50 characters
- Updates automatically

### **4. Organized History**
- **Today** - Chats from today
- **Yesterday** - Chats from yesterday  
- **This Week** - Recent chats
- **Older** - Everything else

### **5. Easy Management**
- ➕ Create new chat
- 🗑️ Delete individual chats
- 🔄 Switch between chats
- 💾 Auto-save everything

---

## 🎮 How to Use

### **Create New Chat:**
1. Click menu icon (☰) in header
2. Click "New chat" button
3. Start fresh conversation

### **Switch Between Chats:**
1. Open sidebar
2. Click any chat from history
3. Conversation loads instantly

### **Delete a Chat:**
1. Hover over chat in sidebar
2. Click trash icon that appears
3. Chat deleted (can't undo)

### **Auto-Save:**
- Every message automatically saved
- No manual save needed
- Nothing to configure

---

## 🔧 Technical Details

### **Storage System**

**Location:** `lib/chatStorage.ts`

```typescript
// Create new chat
const chat = createNewChat();

// Get all chats
const chats = getAllChats();

// Save chat
saveChat(chat);

// Delete chat
deleteChat(chatId);

// Get specific chat
const chat = getChat(chatId);
```

### **Data Structure**

```typescript
interface ChatSession {
  id: string;              // Unique ID
  title: string;           // Chat title
  messages: Message[];     // All messages
  createdAt: Date;         // Created timestamp
  updatedAt: Date;         // Last updated
}

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
}
```

### **Storage Keys**

- `xenoai_chats` - All chat sessions
- `xenoai_active_chat` - Current active chat ID

---

## 📦 File Structure

```
lib/
  └── chatStorage.ts          # Storage management

components/
  └── Sidebar.tsx             # Updated with real chat list

app/
  └── page.tsx                # Main page with session management
```

---

## 🎨 Sidebar Features

### **Grouped Chats:**
```typescript
// Automatically groups by date
Today       → chats from today
Yesterday   → chats from yesterday
This Week   → recent chats
Older       → everything else
```

### **Interactive:**
- Click chat → switch to it
- Hover → show delete button
- Active chat highlighted in red

---

## 💡 Usage Examples

### **Example 1: Create New Chat**
```typescript
// User clicks "New chat"
const handleNewChat = () => {
  const newChat = createNewChat();
  setCurrentChatId(newChat.id);
  setMessages([]);
  setChatList(getAllChats());
};
```

### **Example 2: Switch Chat**
```typescript
// User clicks chat in sidebar
const handleSwitchChat = (chatId: string) => {
  const chat = getChat(chatId);
  setCurrentChatId(chat.id);
  setMessages(chat.messages);
  setActiveChatId(chat.id);
};
```

### **Example 3: Auto-Save**
```typescript
// After every message
const saveCurrentChat = (messages: Message[]) => {
  const chat = getChat(currentChatId);
  chat.messages = messages;
  chat.updatedAt = new Date();
  saveChat(chat);
};
```

---

## 🔒 Privacy & Security

- ✅ All data stored locally (browser localStorage)
- ✅ No server storage
- ✅ Data never leaves your device
- ✅ Clear data anytime (browser settings)

---

## 🛠️ Advanced Features

### **Clear All Data:**
```typescript
import { clearAllChats } from "@/lib/chatStorage";

// Delete all chats (use with caution!)
clearAllChats();
```

### **Export Chats:**
```typescript
// Get all chats as JSON
const chats = getAllChats();
const json = JSON.stringify(chats, null, 2);

// Download or save
console.log(json);
```

### **Import Chats:**
```typescript
// Load from JSON
const chats = JSON.parse(jsonString);
chats.forEach(chat => saveChat(chat));
```

---

## 📊 Limits

| Feature | Limit |
|---------|-------|
| Max Chats | ~100-1000* |
| Max Messages/Chat | ~1000* |
| Storage Size | ~5-10MB* |
| Title Length | 50 characters |

*Depends on browser localStorage limit (typically 5-10MB)

---

## 🐛 Troubleshooting

### **Chat not saving?**
- Check browser console for errors
- Verify localStorage enabled
- Try incognito mode

### **Old chats disappeared?**
- Check if localStorage was cleared
- Browser settings → Clear data
- Can't recover deleted chats

### **Storage full?**
- Delete old chats
- Each chat ~5-10KB
- 10MB = ~1000-2000 chats

---

## 🚀 Future Enhancements

Possible additions:
- [ ] Export/Import chats
- [ ] Search chat history
- [ ] Edit chat titles
- [ ] Pin important chats
- [ ] Sync across devices (cloud)
- [ ] Chat categories/folders
- [ ] Bulk operations
- [ ] Chat statistics

---

## 📝 API Reference

See `lib/chatStorage.ts` for full API:

```typescript
// Core functions
getAllChats(): ChatSession[]
getChat(id: string): ChatSession | null
saveChat(chat: ChatSession): void
deleteChat(id: string): void
createNewChat(): ChatSession

// Utility functions
updateChatTitle(id: string, title: string): void
generateChatTitle(message: string): string
getActiveChatId(): string | null
setActiveChatId(id: string): void
clearAllChats(): void
```

---

**Enjoy your organized conversations! 🎉**

Questions? Check the code or create an issue.

