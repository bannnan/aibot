import Link from 'next/link';
import { Linkedin, Youtube, Twitter as X } from 'lucide-react';

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
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/company/your-company"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="relative group"
          >
            <span
              className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"
              style={{
                background:
                  'radial-gradient(circle at 50% 50%, #8b5cf6 0%, #ec4899 60%, #3b82f6 100%)',
                zIndex: 0,
              }}
            />
            <Linkedin className="relative z-10 h-6 w-6 transition-transform duration-200 group-hover:scale-110 hover:text-primary" />
          </a>
          {/* YouTube */}
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="relative group"
          >
            <span
              className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"
              style={{
                background:
                  'radial-gradient(circle at 50% 50%, #ec4899 0%, #8b5cf6 60%, #3b82f6 100%)',
                zIndex: 0,
              }}
            />
            <Youtube className="relative z-10 h-6 w-6 transition-transform duration-200 group-hover:scale-110 hover:text-primary" />
          </a>
          {/* Twitter/X */}
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="relative group"
          >
            <span
              className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"
              style={{
                background:
                  'radial-gradient(circle at 50% 50%, #3b82f6 0%, #8b5cf6 60%, #ec4899 100%)',
                zIndex: 0,
              }}
            />
            <X className="relative z-10 h-6 w-6 transition-transform duration-200 group-hover:scale-110 hover:text-primary" />
          </a>
        </div>
      </div>
    </footer>
  );
}