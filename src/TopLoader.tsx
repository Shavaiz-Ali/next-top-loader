"use client";

import { useEffect, useRef, Suspense } from 'react';
import { useLoaderContext } from './context';
import { useRouteChange } from './hooks/useRouteChange';
import './styles.css';

export interface TopLoaderProps {
  /**
   * Color of the progress bar
   * @default "#29D"
   */
  color?: string;
  
  /**
   * Height of the progress bar in pixels
   * @default 3
   */
  height?: number;
  
  /**
   * Animation speed in milliseconds
   * @default 200
   */
  speed?: number;
  
  /**
   * CSS easing function
   * @default "ease"
   */
  easing?: string;
  
  /**
   * Whether to show shadow below the progress bar
   * @default true
   */
  shadow?: boolean;
  
  /**
   * Whether to show spinner on the right
   * @default true
   */
  showSpinner?: boolean;
  
  /**
   * Initial position of the progress bar (0-100)
   * @default 0.08
   */
  initialPosition?: number;
  
  /**
   * Whether the progress bar should crawl automatically
   * @default true
   */
  crawl?: boolean;
  
  /**
   * Speed of crawling in milliseconds
   * @default 200
   */
  crawlSpeed?: number;
  
  /**
   * Custom z-index for the loader
   * @default 9999
   */
  zIndex?: number;
}

// Component that uses useRouteChange (needs Suspense)
function RouteChangeHandler() {
  const { startLoader, stopLoader } = useLoaderContext();
  useRouteChange(startLoader, stopLoader);
  return null;
}

function TopLoaderInner({
  color = '#29D',
  height = 3,
  speed = 200,
  easing = 'ease',
  shadow = true,
  showSpinner = true,
  initialPosition = 0.08,
  crawl = true,
  crawlSpeed = 200,
  zIndex = 9999,
}: TopLoaderProps) {
  const { isLoading, progress, setProgress } = useLoaderContext();
  const crawlIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-crawl effect
  useEffect(() => {
    if (isLoading && crawl) {
      // Clear any existing interval
      if (crawlIntervalRef.current) {
        clearInterval(crawlIntervalRef.current);
      }

      // Start crawling
      let currentProgress = progress;
      crawlIntervalRef.current = setInterval(() => {
        currentProgress = Math.min(90, currentProgress + Math.random() * (0.1 - (currentProgress / 1000)));
        setProgress(currentProgress);
      }, crawlSpeed);

      return () => {
        if (crawlIntervalRef.current) {
          clearInterval(crawlIntervalRef.current);
        }
      };
    }
    return undefined;
  }, [isLoading, crawl, crawlSpeed, setProgress, progress]);

  // Set initial position when loading starts
  useEffect(() => {
    if (isLoading && progress === 0) {
      setProgress(initialPosition * 100);
    }
  }, [isLoading, progress, initialPosition, setProgress]);

  if (!isLoading && progress === 0) {
    return null;
  }

  const boxShadow = shadow
    ? `0 0 10px ${color}, 0 0 5px ${color}`
    : 'none';

  return (
    <>
      <div
        className="next-top-loader"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: `${height}px`,
          background: color,
          boxShadow,
          transform: `translateX(${progress - 100}%)`,
          transition: `transform ${speed}ms ${easing}`,
          zIndex,
        }}
      />
      {showSpinner && (
        <div
          className="next-top-loader-spinner"
          style={{
            position: 'fixed',
            top: '15px',
            right: '15px',
            width: '18px',
            height: '18px',
            border: `2px solid ${color}`,
            borderRadius: '50%',
            borderTopColor: 'transparent',
            zIndex,
            opacity: isLoading ? 1 : 0,
            transition: `opacity ${speed}ms ${easing}`,
          }}
        />
      )}
    </>
  );
}

/**
 * TopLoader component for Next.js App Router
 * 
 * @example
 * ```tsx
 * // app/layout.tsx
 * import TopLoader, { LoaderProvider } from '@next-top-loader/core';
 * 
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       <body>
 *         <LoaderProvider>
 *           <TopLoader color="#29D" height={3} />
 *           {children}
 *         </LoaderProvider>
 *       </body>
 *     </html>
 *   );
 * }
 * ```
 */
export default function TopLoader(props: TopLoaderProps) {
  return (
    <>
      <Suspense fallback={null}>
        <RouteChangeHandler />
      </Suspense>
      <TopLoaderInner {...props} />
    </>
  );
}
