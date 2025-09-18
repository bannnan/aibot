        import Head from 'next/head';

        export default function Features() {
          return (
            <div className="container mx-auto py-12 px-6">
              <Head><title>Features | Termynal</title></Head>
              <h1 className="text-4xl font-bold mb-6">Features</h1>
              <p className="text-lg mb-4">
                Explore all the powerful capabilities of Termynal that make DevOps and cloud automation effortless.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>AI-powered infrastructure deployment</li>
                <li>Self-healing workflows</li>
                <li>Multi-cloud support (AWS, Azure, GCP)</li>
                <li>Enterprise-grade security & compliance</li>
                <li>Seamless integrations with your stack</li>
              </ul>
            </div>
          );
        }
    