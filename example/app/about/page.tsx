import Link from 'next/link';

export default function About() {
  return (
    <div>
      <div className="content-section">
        <h2>About Next Top Loader</h2>
        
        <p>
          Next Top Loader is a modern, production-ready solution for adding a top loading progress
          bar to your Next.js applications using the App Router.
        </p>

        <p>
          Unlike other solutions that may not work correctly with Next.js 13+ and the App Router,
          this package is specifically designed to work seamlessly with the latest Next.js features.
        </p>

        <h3 style={{ marginTop: '2rem', fontSize: '1.8rem' }}>Why Next Top Loader?</h3>
        
        <ul style={{ marginLeft: '2rem', marginTop: '1rem', lineHeight: '2' }}>
          <li><strong>App Router Compatible:</strong> Works perfectly with Next.js 13, 14, and 15</li>
          <li><strong>Automatic Detection:</strong> Detects route changes using usePathname and useSearchParams</li>
          <li><strong>Manual Control:</strong> Programmatically control the loader for custom scenarios</li>
          <li><strong>TypeScript First:</strong> Written in TypeScript with full type safety</li>
          <li><strong>Zero Dependencies:</strong> Only requires React as a peer dependency</li>
          <li><strong>Highly Customizable:</strong> 10+ customization options</li>
        </ul>

        <h3 style={{ marginTop: '2rem', fontSize: '1.8rem' }}>Features</h3>
        
        <div className="card-grid" style={{ marginTop: '1.5rem' }}>
          <div className="card">
            <h4>Smooth Animations</h4>
            <p>CSS-based animations with customizable easing functions</p>
          </div>
          
          <div className="card">
            <h4>Auto Crawl</h4>
            <p>Progress bar automatically crawls forward while loading</p>
          </div>
          
          <div className="card">
            <h4>Optional Spinner</h4>
            <p>Show or hide a spinning indicator on the right</p>
          </div>
          
          <div className="card">
            <h4>Shadow Effects</h4>
            <p>Optional glow shadow effect for better visibility</p>
          </div>
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <Link href="/demo" className="button">
            Try the Demo →
          </Link>
        </div>
      </div>
    </div>
  );
}
