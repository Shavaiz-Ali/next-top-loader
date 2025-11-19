"use client";

import { useLoaderContext, LoaderContextValue } from '../context';

export function useLoader(): Pick<LoaderContextValue, 'startLoader' | 'stopLoader' | 'setProgress'> {
  const { startLoader, stopLoader, setProgress } = useLoaderContext();
  
  return {
    startLoader,
    stopLoader,
    setProgress,
  };
}
