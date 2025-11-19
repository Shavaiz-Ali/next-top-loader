'use client';

import { useLoader } from "@shavaizali/next-top-loader";
import { useState } from 'react';

export default function Demo() {
  const { startLoader, stopLoader, setProgress } = useLoader();
  const [isLoading, setIsLoading] = useState(false);

  const simulateApiCall = async () => {
    setIsLoading(true);
    startLoader();
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    stopLoader();
    setIsLoading(false);
  };

  const simulateProgressiveLoad = async () => {
    setIsLoading(true);
    startLoader();
    
    // Simulate progressive loading
    for (let i = 0; i <= 100; i += 10) {
      setProgress(i);
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    
    stopLoader();
    setIsLoading(false);
  };

  const customProgress = async () => {
    startLoader();
    setProgress(30);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setProgress(60);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setProgress(90);
    await new Promise(resolve => setTimeout(resolve, 500));
    stopLoader();
  };

  return (
    <div>
      <div className="content-section">
        <h2>Interactive Demo</h2>
        <p>
          Click the buttons below to see manual loader triggering in action. This is useful for
          showing progress during API calls, form submissions, or any async operation.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Manual Triggers</h3>
          
          <div className="button-group" style={{ justifyContent: 'flex-start' }}>
            <button 
              className="button" 
              onClick={simulateApiCall}
              disabled={isLoading}
            >
              Simulate API Call (2s)
            </button>
            
            <button 
              className="button" 
              onClick={simulateProgressiveLoad}
              disabled={isLoading}
            >
              Progressive Loading
            </button>
            
            <button 
              className="button" 
              onClick={customProgress}
              disabled={isLoading}
            >
              Custom Progress Steps
            </button>
          </div>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Code Example</h3>
          <pre><code>{`'use client';

import { useLoader } from '@next-top-loader/core';

function MyComponent() {
  const { startLoader, stopLoader } = useLoader();

  const handleClick = async () => {
    startLoader();
    
    try {
      await fetch('/api/data');
    } finally {
      stopLoader();
    }
  };

  return (
    <button onClick={handleClick}>
      Load Data
    </button>
  );
}`}</code></pre>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>With Progress Control</h3>
          <pre><code>{`'use client';

import { useLoader } from '@next-top-loader/core';

function UploadComponent() {
  const { startLoader, stopLoader, setProgress } = useLoader();

  const handleUpload = async (file) => {
    startLoader();
    
    // Simulate upload progress
    for (let i = 0; i <= 100; i += 10) {
      setProgress(i);
      await uploadChunk(file, i);
    }
    
    stopLoader();
  };

  return <input type="file" onChange={handleUpload} />;
}`}</code></pre>
        </div>

        <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>💡 Tip</h4>
          <p style={{ opacity: 0.9 }}>
            The loader automatically detects route changes, but you can also trigger it manually
            for any async operation. This gives you full control over when and how to show loading
            states to your users.
          </p>
        </div>
      </div>
    </div>
  );
}
