'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="hero">
      <h1>Next Top Loader</h1>
      <p>A beautiful, customizable loading bar for Next.js App Router</p>
      
      <div className="button-group">
        <Link href="/about" className="button">
          View About Page
        </Link>
        <Link href="/demo" className="button">
          Try Demo
        </Link>
      </div>

      <div className="card-grid">
        <div className="card">
          <h3>🚀 Easy to Use</h3>
          <p>
            Simply add the TopLoader component to your root layout and it works automatically.
            No complex setup required.
          </p>
        </div>

        <div className="card">
          <h3>🎨 Fully Customizable</h3>
          <p>
            Customize colors, height, speed, easing, shadow, spinner, and more to match your
            brand perfectly.
          </p>
        </div>

        <div className="card">
          <h3>⚡ Lightweight</h3>
          <p>
            Zero dependencies except React. Tree-shakeable and optimized for minimal bundle size
            impact.
          </p>
        </div>

        <div className="card">
          <h3>🔄 Auto Detection</h3>
          <p>
            Automatically detects route changes using Next.js App Router hooks. Works with
            useRouter, Link, and more.
          </p>
        </div>

        <div className="card">
          <h3>🎯 Manual Control</h3>
          <p>
            Trigger the loader manually for API calls, form submissions, or any async operation
            you want to show progress for.
          </p>
        </div>

        <div className="card">
          <h3>📦 TypeScript</h3>
          <p>
            Written in TypeScript with full type definitions included. Get autocomplete and type
            safety out of the box.
          </p>
        </div>
      </div>

      <div className="content-section" style={{ marginTop: '3rem' }}>
        <h2>Quick Start</h2>
        <p>Install the package:</p>
        <pre><code>npm install @next-top-loader/core</code></pre>
        
        <p style={{ marginTop: '1.5rem' }}>Add to your root layout:</p>
        <pre><code>{`import TopLoader from '@next-top-loader/core';
import '@next-top-loader/core/styles.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <TopLoader color="#0070f3" height={3} />
        {children}
      </body>
    </html>
  );
}`}</code></pre>
        
        <p style={{ marginTop: '1.5rem' }}>That's it! The loader will now show automatically on route changes.</p>
      </div>
    </div>
  );
}
