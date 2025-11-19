"use client";

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function useRouteChange(onRouteChangeStart: () => void, onRouteChangeComplete: () => void) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Skip the initial render
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Start the loader
    onRouteChangeStart();

    // Complete the loader after route has settled
    timeoutRef.current = setTimeout(() => {
      onRouteChangeComplete();
    }, 100);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [pathname, searchParams, onRouteChangeStart, onRouteChangeComplete]);
}
