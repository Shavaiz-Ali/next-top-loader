# @next-top-loader/core

A lightweight, customizable top loading progress bar for Next.js App Router applications. Works seamlessly with Next.js 13, 14, and 15.

![NPM Version](https://img.shields.io/npm/v/@next-top-loader/core)
![License](https://img.shields.io/npm/l/@next-top-loader/core)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@next-top-loader/core)

## ✨ Features

- ✅ **App Router Compatible** - Built specifically for Next.js 13+ App Router
- ✅ **Automatic Detection** - Detects route changes using `usePathname()` and `useSearchParams()`
- ✅ **Manual Control** - Programmatically trigger the loader for API calls or custom scenarios
- ✅ **Highly Customizable** - 10+ configuration options for colors, animations, and behavior
- ✅ **TypeScript First** - Written in TypeScript with full type definitions
- ✅ **Zero Dependencies** - Only requires React as a peer dependency
- ✅ **Lightweight** - Minimal bundle size impact with tree-shaking support
- ✅ **Smooth Animations** - CSS-based animations with customizable easing

## 📦 Installation

```bash
npm install @next-top-loader/core
```

or

```bash
yarn add @next-top-loader/core
```

or

````bash
pnpm add @next-top-loader/core
| ----------------- | --------- | -------- | -------------------------------------------------- |
| `color`           | `string`  | `"#29D"` | Color of the progress bar                          |
| `height`          | `number`  | `3`      | Height of the progress bar in pixels               |
| `speed`           | `number`  | `200`    | Animation speed in milliseconds                    |
| `easing`          | `string`  | `"ease"` | CSS easing function for animations                 |
| `shadow`          | `boolean` | `true`   | Whether to show a shadow below the bar             |
| `showSpinner`     | `boolean` | `true`   | Whether to show the spinner on the right           |
| `initialPosition` | `number`  | `0.08`   | Initial position of the bar (0-1)                  |
| `crawl`           | `boolean` | `true`   | Whether the bar should crawl forward automatically |
| `crawlSpeed`      | `number`  | `200`    | Speed of the crawl animation in ms                 |
| `zIndex`          | `number`  | `9999`   | Z-index of the loader                              |

## 🎯 Manual Control

You can manually control the loader for API calls, form submissions, or any async operation:

### Basic Manual Trigger

```tsx
"use client";

import { useLoader } from "@next-top-loader/core";

export function MyComponent() {
  const { startLoader, stopLoader } = useLoader();

  const handleClick = async () => {
    startLoader();

    try {
      const response = await fetch("/api/data");
      const data = await response.json();
      // Process data...
    } finally {
      stopLoader();
    }
  };

  return <button onClick={handleClick}>Load Data</button>;
}
```

### With Progress Control

```tsx
"use client";

import { useLoader } from "@next-top-loader/core";

export function UploadComponent() {
  const { startLoader, stopLoader, setProgress } = useLoader();

  const handleUpload = async (file: File) => {
    startLoader();

    // Simulate upload with progress
    for (let i = 0; i <= 100; i += 10) {
      setProgress(i);
      await uploadChunk(file, i);
    }

    stopLoader();
  };

  return (
    <input type="file" onChange={(e) => handleUpload(e.target.files?.[0])} />
  );
}
```

### API Reference

The `useLoader` hook provides three functions:

- **`startLoader()`** - Start showing the loading bar
- **`stopLoader()`** - Complete the loading animation and hide the bar
- **`setProgress(progress: number)`** - Manually set progress (0-100)

## 🎨 Customization Examples

### Matching Your Brand

```tsx
<TopLoader
  color="#FF6B6B" // Custom brand color
  height={4} // Thicker bar
  shadow={true} // Glow effect
/>
```

### Minimal Style

```tsx
<TopLoader color="#000000" height={2} showSpinner={false} shadow={false} />
```

### Fast and Snappy

```tsx
<TopLoader speed={100} crawlSpeed={100} easing="linear" />
```

## 🧪 How It Works

The package uses Next.js App Router hooks to detect navigation:

1. **`usePathname()`** - Detects when the pathname changes
2. **`useSearchParams()`** - Detects when search parameters change
3. Automatically triggers the loading bar on any route transition
4. Works with `<Link>`, `router.push()`, `router.replace()`, and server actions

## 📝 TypeScript Support

The package is written in TypeScript and includes full type definitions:

```tsx
import TopLoader, { TopLoaderProps, useLoader } from "@next-top-loader/core";

// All props are typed
const config: TopLoaderProps = {
  color: "#0070f3",
  height: 3,
};

// Hook return types are inferred
const { startLoader, stopLoader, setProgress } = useLoader();
```

## ⚠️ Important Notes

1. **Client Component Required**: The `TopLoader` component must be used in a client component context. If you're adding it to a Server Component layout, make sure it's wrapped properly.

2. **CSS Import**: Don't forget to import the styles:

   ```tsx
   import "@next-top-loader/core/styles.css";
   ```

3. **App Router Only**: This package is designed specifically for the Next.js App Router (Next.js 13+). It will not work with the Pages Router.

4. **React 18/19**: Requires React 18 or React 19.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes
4. Write or update tests as needed
5. Commit your changes: `git commit -am 'Add new feature'`
6. Push to the branch: `git push origin feature/my-feature`
7. Submit a pull request

### Development Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/next-top-loader.git
cd next-top-loader

# Install dependencies
npm install

# Build the package
npm run build

# Run the demo app
cd example
npm install
npm run dev
```

## 📄 License

MIT © [Your Name]

## 🙏 Acknowledgments

This package was created as an alternative to `nextjs-toploader` with better support for the Next.js App Router and modern React features.

## 📦 Publishing

### Prerequisites

1. Update version in `package.json`
2. Build the package: `npm run build`
3. Test thoroughly using the example app

### Publish to NPM

```bash
# Login to NPM (if not already logged in)
npm login

# Publish the package
npm publish --access public
```

### Version Management

Follow semantic versioning:

- **Patch** (1.0.x) - Bug fixes
- **Minor** (1.x.0) - New features (backwards compatible)
- **Major** (x.0.0) - Breaking changes

```bash
# Bump version
npm version patch  # or minor, or major

# Publish
npm publish --access public
```

### What Gets Published

The published package includes:

- `/dist` - Compiled JavaScript and TypeScript declarations
- `README.md` - Documentation
- `LICENSE` - License file
- `package.json` - Package metadata

Source files (`/src`) and example app are excluded via `.npmignore`.

## 🔗 Links

- [NPM Package](https://www.npmjs.com/package/@next-top-loader/core)
- [GitHub Repository](https://github.com/yourusername/next-top-loader)
- [Report Issues](https://github.com/yourusername/next-top-loader/issues)
- [Next.js Documentation](https://nextjs.org/docs)

## 💬 Support

If you have questions or need help:

1. Check the [documentation](#-quick-start)
2. Search [existing issues](https://github.com/yourusername/next-top-loader/issues)
3. Open a [new issue](https://github.com/yourusername/next-top-loader/issues/new)

---

**Made with ❤️ for the Next.js community**
````
