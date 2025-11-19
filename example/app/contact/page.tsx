import Link from 'next/link';

export default function Contact() {
  return (
    <div>
      <div className="content-section">
        <h2>Contact & Support</h2>
        
        <p>
          Thank you for using Next Top Loader! If you have questions, issues, or suggestions,
          we'd love to hear from you.
        </p>

        <div className="card-grid" style={{ marginTop: '2rem' }}>
          <div className="card">
            <h3>📝 Documentation</h3>
            <p>
              Check out the comprehensive README.md file in the repository for detailed
              documentation, API reference, and examples.
            </p>
          </div>

          <div className="card">
            <h3>🐛 Report Issues</h3>
            <p>
              Found a bug? Please open an issue on GitHub with a detailed description and
              steps to reproduce.
            </p>
          </div>

          <div className="card">
            <h3>💡 Feature Requests</h3>
            <p>
              Have an idea for a new feature? Open a GitHub issue with the "enhancement" label
              and describe your use case.
            </p>
          </div>

          <div className="card">
            <h3>🤝 Contributing</h3>
            <p>
              Contributions are welcome! Fork the repository, make your changes, and submit a
              pull request.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Quick Links</h3>
          <ul style={{ marginLeft: '2rem', lineHeight: '2' }}>
            <li>GitHub Repository: <code>https://github.com/yourusername/next-top-loader</code></li>
            <li>NPM Package: <code>@next-top-loader/core</code></li>
            <li>License: MIT</li>
          </ul>
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <Link href="/" className="button">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
