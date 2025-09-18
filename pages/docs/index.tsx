        import Head from 'next/head';
        import Link from 'next/link';

        export default function Docs() {
          return (
            <div className="container mx-auto py-12 px-6">
              <Head><title>Docs | Termynal</title></Head>
              <h1 className="text-4xl font-bold mb-6">Documentation</h1>
              <p className="text-lg mb-6">
                Everything you need to get started with Termynal.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/docs/getting-started">Getting Started</Link></li>
                <li><Link href="/docs/api">API Reference</Link></li>
              </ul>
            </div>
          );
        }
    