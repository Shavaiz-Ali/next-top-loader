# Next Top Loader - Example App

This is a demo application showing how to use `@next-top-loader/core` in a Next.js App Router application.

## Features Demonstrated

- ✅ Automatic route change detection
- ✅ Manual loader triggering
- ✅ Custom progress control
- ✅ Various configuration options

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Pages

- **Home** (`/`) - Overview and quick start guide
- **About** (`/about`) - Feature details
- **Demo** (`/demo`) - Interactive manual trigger examples
- **Contact** (`/contact`) - Support information

## Try It Out

1. Navigate between pages to see automatic route detection
2. Visit the Demo page to try manual triggering
3. Observe the smooth loading animations

## Local Development

The example app uses the local package via `file:..` reference in package.json. Any changes to the main package will be reflected after rebuilding:

```bash
# In the root directory
npm run build

# In the example directory
npm install
npm run dev
```
