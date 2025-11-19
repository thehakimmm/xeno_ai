# Images Folder

This folder contains all image assets for the XenoAI application.

## Usage

Place your images here and access them in your code:

```typescript
// In Next.js components
<Image src="/images/your-image.png" alt="Description" width={100} height={100} />

// Or with regular img tag
<img src="/images/your-image.png" alt="Description" />
```

## Recommended Structure

```
public/images/
├── logo/           # Logos and branding
├── icons/          # Icon assets
├── avatars/        # User/AI avatars
└── backgrounds/    # Background images
```

## Supported Formats

- PNG (recommended for logos with transparency)
- JPG/JPEG (recommended for photos)
- SVG (recommended for icons)
- WebP (recommended for optimized images)
- GIF (for animations)

## Best Practices

1. **Optimize images** before adding them (use tools like TinyPNG)
2. **Use descriptive names** (e.g., `xenoai-logo.png` instead of `img1.png`)
3. **Keep file sizes small** for better performance
4. **Use Next.js Image component** for automatic optimization

## Example

```typescript
import Image from 'next/image';

export default function Logo() {
  return (
    <Image 
      src="/images/logo/xenoai-logo.png" 
      alt="XenoAI Logo" 
      width={200} 
      height={200}
      priority
    />
  );
}
```

