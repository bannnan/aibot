        import Head from 'next/head';

        export default function GettingStarted() {
          return (
            <div className="container mx-auto py-12 px-6">
              <Head><title>Getting Started | Termynal Docs</title></Head>
              <h1 className="text-4xl font-bold mb-6">Getting Started</h1>
              <p className="text-lg mb-4">
                Connect your first cloud account and deploy in minutes with Termynal.
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Sign up for a free Termynal account.</li>
                <li>Connect your AWS, Azure, or GCP account.</li>
                <li>Run your first AI-powered workflow.</li>
              </ol>
            </div>
          );
        }
    