# Astro Gitbook Template

A reusable Astro component library for building gitbook-style documentation sites with a clean, editorial aesthetic.

## Features

- **3 Layout Components** - Base HTML shell, MainLayout with navigation, BlogPost template
- **22 UI Components** - Navigation, cards, badges, buttons, and more
- **Built-in Dark Mode** - Via Tailwind CSS with class strategy
- **Typography Plugin** - Configured for beautiful blog content
- **Responsive Design** - Desktop sidebar, mobile hamburger menu
- **SEO-Friendly** - Meta tags, structured layouts, breadcrumbs

## Installation

```bash
# Using pnpm (recommended)
pnpm add github:bhavaniravi/astro-gitbook-template

# Using npm
npm install github:bhavaniravi/astro-gitbook-template

# Using yarn
yarn add github:bhavaniravi/astro-gitbook-template
```

## Usage

### Import Components

```typescript
import { MainLayout, ContentCard, Button } from '@til/template';
```

### Example Page

```astro
---
import { MainLayout, PageHeader, ContentCard } from '@til/template';

const navSections = [
  {
    id: 'writing',
    title: 'Writing',
    items: [
      { title: 'Getting Started', url: '/docs/getting-started' },
      { title: 'Components', url: '/docs/components' }
    ]
  }
];
---

<MainLayout title="My Documentation" sections={navSections}>
  <PageHeader
    title="Welcome"
    description="Get started with your documentation site"
  />

  <ContentCard
    title="Quick Start"
    description="Learn the basics in 5 minutes"
    url="/docs/getting-started"
  />
</MainLayout>
```

### Extend Tailwind Config

**Important:** You must include the template's source files in your Tailwind content configuration:

```javascript
// tailwind.config.mjs
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    // Include template components for Tailwind to scan
    './node_modules/@til/template/src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  // Extend with your custom theme
  theme: {
    extend: {
      colors: {
        // Your custom colors
      }
    }
  }
};
```

### Import Global Styles (Optional)

```typescript
// In your base layout or astro.config.mjs
import '@til/template/styles';
```

## Components

### Layouts

- **`Base`** - HTML shell with SEO meta tags, dark mode support
- **`MainLayout`** - Sidebar navigation + TopNav wrapper
- **`BlogPost`** - Blog post template with breadcrumbs and article styling

### Navigation Components

- **`Sidebar`** - Fixed left sidebar navigation for desktop
- **`MobileNav`** - Hamburger menu overlay for mobile
- **`TopNav`** - Header with logo and theme toggle
- **`NavSection`** - Navigation section grouping
- **`NavItem`** - Individual navigation link

### Content Components

- **`ContentCard`** - Flexible card component (default/compact/grid variants)
- **`PageHeader`** - Page title and subtitle
- **`Breadcrumbs`** - Navigation breadcrumbs
- **`Prose`** - Styled content wrapper with typography
- **`PrevNextNav`** - Previous/next navigation for blog posts

### UI Components

- **`Badge`** - Colored badge/tag component
- **`Button`** - Button component with variants
- **`InfoItem`** - Icon + text information display
- **`ThemeToggle`** - Dark mode toggle switch

### Marketing Components

- **`Section`** - Marketing section wrapper with spacing
- **`FeatureGrid`** - Grid layout for features
- **`CTA`** - Call-to-action component
- **`VideoEmbed`** - Responsive video embed (YouTube, etc.)

### Utility Components

- **`SearchResults`** - Search results display
- **`CodeCopyButton`** - Copy button for code blocks

## Component Props

### MainLayout

```typescript
interface Props {
  title: string;
  description?: string;
  sections: NavSection[];
  currentPath?: string;
}
```

### ContentCard

```typescript
interface Props {
  title: string;
  description?: string;
  url?: string;
  variant?: 'default' | 'compact' | 'grid';
  tags?: string[];
}
```

### PageHeader

```typescript
interface Props {
  title: string;
  description?: string;
}
```

## Dark Mode

The template includes built-in dark mode support using Tailwind's `class` strategy:

```astro
---
// Dark mode is automatically available in all components
// Toggle is included in TopNav component
---
```

The theme toggle uses `localStorage` to persist user preference and respects system preferences.

## Customization

### Custom Theme Colors

Extend the Tailwind config with your own color palette:

```javascript
// tailwind.config.mjs
export default {
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#8b5cf6',
        accent: '#10b981'
      }
    }
  }
};
```

### Override Component Styles

All components use Tailwind classes, so you can override styles using Tailwind's utility classes:

```astro
<ContentCard
  title="Custom Card"
  class="bg-blue-500 text-white"
/>
```

## Requirements

- **Astro:** ^5.0.0
- **Tailwind CSS:** ^3.4.0
- **Node.js:** 18 or higher

## Examples

Check out the [example site](https://github.com/bhavaniravi/astro-gitbook-template/tree/main/example) for a complete implementation.

## License

MIT License - see [LICENSE](./LICENSE) file for details.

## Author

**Bhavani Ravi**

- Website: [bhavaniravi.com](https://bhavaniravi.com)
- GitHub: [@bhavaniravi](https://github.com/bhavaniravi)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

If you find this template useful, please consider:
- Starring the repository on GitHub
- Sharing it with others
- Contributing improvements

For issues and questions, please use the [GitHub Issues](https://github.com/bhavaniravi/astro-gitbook-template/issues) page.
