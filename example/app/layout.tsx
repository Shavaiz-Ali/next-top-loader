import type { Metadata } from "next";
import TopLoader, { LoaderProvider } from "@shavaizali/next-top-loader";
import "@shavaizali/next-top-loader/styles.css";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next Top Loader Demo",
  description: "Demo application for @next-top-loader/core package",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LoaderProvider>
          <TopLoader 
            color="#0070f3" 
            height={3} 
            showSpinner={true}
            crawl={true}
            shadow={true}
          />
          <nav className="navbar">
            <div className="nav-container">
              <h1 className="nav-title">Next Top Loader</h1>
              <div className="nav-links">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/demo">Demo</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
          </nav>
          <main className="main-content">
            {children}
          </main>
        </LoaderProvider>
      </body>
    </html>
  );
}
