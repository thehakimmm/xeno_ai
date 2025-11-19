# Styles Directory

This directory contains all styling logic for the application, following clean code principles.

## 📁 Files

### Component Styles
- `header.styles.ts` - Header component styles
- `chatMessage.styles.ts` - Chat message component styles
- `chatInput.styles.ts` - Chat input component styles
- `page.styles.ts` - Main page component styles

### Shared Resources
- `icons.tsx` - Reusable SVG icon components
- `constants.ts` - Design system constants (colors, spacing, etc.)

## 🎯 Usage

### Basic Import and Usage

```typescript
import { componentStyles } from "@/styles/component.styles";

export default function Component() {
  return (
    <div className={componentStyles.container}>
      Content here
    </div>
  );
}
```

### Using Icons

```typescript
import { ChatIcon } from "@/styles/icons";

export default function Component() {
  return <ChatIcon className="w-6 h-6" />;
}
```

### Using Constants

```typescript
import { colors, animations } from "@/styles/constants";

export const myStyles = {
  header: `${colors.bg.primary} ${colors.text.primary} ${animations.fadeIn}`,
};
```

## 📝 Adding New Styles

1. Create a new file: `componentName.styles.ts`
2. Define and export your styles object:

```typescript
export const componentNameStyles = {
  container: "flex flex-col space-y-4",
  header: "text-lg font-bold",
  // ... more styles
};
```

3. Import in your component:

```typescript
import { componentNameStyles } from "@/styles/componentName.styles";
```

## 🎨 Best Practices

1. **Keep styles organized** - Group related styles together
2. **Use constants** - Import from `constants.ts` for consistency
3. **Be semantic** - Name based on purpose, not appearance
4. **Document complex styles** - Add comments when needed
5. **Stay DRY** - Reuse styles via constants and shared objects

## 🔄 Refactoring Guidelines

When refactoring inline styles to this directory:

1. Extract all className strings from component
2. Create logical grouping in style file
3. Replace inline strings with imports
4. Test component still renders correctly
5. Update relevant documentation

## 🚀 Benefits

- ✅ **Maintainability** - Easy to find and update styles
- ✅ **Consistency** - Shared constants ensure uniformity
- ✅ **Reusability** - Icons and styles can be reused
- ✅ **Readability** - Components focus on logic, not styling
- ✅ **Scalability** - Easy to extend and grow

