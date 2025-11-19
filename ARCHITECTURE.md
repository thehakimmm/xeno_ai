# Project Architecture

## 📁 Clean Code Structure

This project follows a clean architecture pattern with separation of concerns:

### Directory Structure

```
hakim_LLM/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # API endpoint for OpenAI integration
│   ├── globals.css                # Global styles and Tailwind config
│   ├── layout.tsx                 # Root layout component
│   └── page.tsx                   # Main chat page (clean, uses styles)
│
├── components/
│   ├── ChatInput.tsx              # Message input component (clean)
│   ├── ChatMessage.tsx            # Message display component (clean)
│   └── Header.tsx                 # App header component (clean)
│
├── styles/
│   ├── chatInput.styles.ts        # ChatInput component styles
│   ├── chatMessage.styles.ts      # ChatMessage component styles
│   ├── header.styles.ts           # Header component styles
│   ├── page.styles.ts             # Main page styles
│   └── icons.tsx                  # Reusable SVG icon components
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.mjs
└── README.md
```

## 🎨 Styling Architecture

### Separation of Concerns

All styles are now separated from components into dedicated style files:

#### 1. **Style Files** (`styles/*.styles.ts`)
- Contain all Tailwind CSS class strings
- Organized by component
- Easy to maintain and update
- Type-safe with TypeScript

#### 2. **Icon Components** (`styles/icons.tsx`)
- Reusable SVG icon components
- Centralized icon management
- Consistent styling across the app

#### 3. **Components** (`components/*.tsx`)
- Clean and readable
- Focus on logic and structure
- Import styles from dedicated files
- Easy to understand and test

## 📋 Style File Structure

Each style file follows this pattern:

```typescript
export const componentStyles = {
  // Base styles
  container: "classes...",
  wrapper: "classes...",
  
  // Nested objects for grouped styles
  element: {
    base: "classes...",
    variant: "classes..."
  },
  
  // Functions for dynamic styles
  dynamicElement: (condition: boolean) => `classes ${condition ? 'class1' : 'class2'}`
};
```

## 🔄 Benefits of This Architecture

### 1. **Maintainability**
- Easy to find and update styles
- Changes in one place affect all uses
- Clear organization

### 2. **Reusability**
- Icons and styles can be reused
- Consistent design across components
- DRY principle

### 3. **Readability**
- Components focus on logic
- Styles focus on presentation
- Clear separation of concerns

### 4. **Scalability**
- Easy to add new components
- Simple to extend existing styles
- Organized growth

### 5. **Type Safety**
- TypeScript ensures correct usage
- Autocomplete in IDE
- Catch errors early

## 🎯 Usage Examples

### Importing and Using Styles

```typescript
import { componentStyles } from "@/styles/component.styles";

// Static styles
<div className={componentStyles.container}>

// Dynamic styles
<div className={componentStyles.element(isActive)}>

// Combined styles
<div className={`${componentStyles.base} ${componentStyles.variant}`}>
```

### Using Icons

```typescript
import { ChatIcon } from "@/styles/icons";

<ChatIcon className="w-6 h-6 text-blue-500" />
```

## 🔧 Customization Guide

### To Modify Styles:
1. Navigate to the appropriate file in `styles/`
2. Update the class strings
3. Save and see changes reflected everywhere

### To Add New Components:
1. Create component in `components/`
2. Create corresponding style file in `styles/`
3. Import and use styles in component

### To Add New Icons:
1. Add new icon component to `styles/icons.tsx`
2. Export and use throughout the app

## 🚀 Best Practices

1. **Keep styles in style files** - Don't add inline styles in components
2. **Use semantic names** - Name styles based on purpose, not appearance
3. **Group related styles** - Use nested objects for related elements
4. **Document complex styles** - Add comments for non-obvious styling
5. **Reuse common patterns** - Extract repeated styles into shared objects

## 📝 Naming Conventions

- **Style objects**: `camelCase` (e.g., `container`, `inputWrapper`)
- **Style files**: `component.styles.ts`
- **Icon components**: `PascalCase` (e.g., `ChatIcon`, `UserIcon`)
- **Functions**: `camelCase` with descriptive names

This architecture ensures your codebase remains clean, maintainable, and scalable as your project grows!

