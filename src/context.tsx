"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export interface LoaderContextValue {
  isLoading: boolean;
  progress: number;
  startLoader: () => void;
  stopLoader: () => void;
  setProgress: (progress: number) => void;
}

const LoaderContext = createContext<LoaderContextValue | undefined>(undefined);

export interface LoaderProviderProps {
  children: ReactNode;
}

export function LoaderProvider({ children }: LoaderProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgressState] = useState(0);

  const startLoader = useCallback(() => {
    setIsLoading(true);
    setProgressState(0);
  }, []);

  const stopLoader = useCallback(() => {
    setProgressState(100);
    setTimeout(() => {
      setIsLoading(false);
      setProgressState(0);
    }, 200);
  }, []);

  const setProgress = useCallback((newProgress: number) => {
    setProgressState(Math.min(100, Math.max(0, newProgress)));
  }, []);

  const value: LoaderContextValue = {
    isLoading,
    progress,
    startLoader,
    stopLoader,
    setProgress,
  };

  return (
    <LoaderContext.Provider value={value}>
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoaderContext(): LoaderContextValue {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error('useLoaderContext must be used within LoaderProvider');
  }
  return context;
}
