import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content py-10 mt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Getting Started */}
        <div>
          <h3 className="footer-title">Getting Started</h3>
          <ul className="space-y-2">
            <li><Link href="/docs/getting-started">Quick Start</Link></li>
          </ul>
        </div>

        {/* Documentation */}
        <div>
          <h3 className="footer-title">Documentation</h3>
          <ul className="space-y-2">
            <li><Link href="/docs/what-is-termynal">What is Termynal</Link></li>
            <li><Link href="/docs/architecture">Architecture</Link></li>
            <li><Link href="/docs/core-concepts">Core Concepts</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="footer-title">Resources</h3>
          <ul className="space-y-2">
            <li><Link href="/docs">Docs</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/videos">Videos</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="footer-title">Company</h3>
          <ul className="space-y-2">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-400 mt-10 pt-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Termynal. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/your-repo" target="_blank">GitHub</a>
          <a href="https://linkedin.com/company/your-company" target="_blank">LinkedIn</a>
          <a href="https://youtube.com/" target="_blank">YouTube</a>
        </div>
      </div>
    </footer>
  );
}