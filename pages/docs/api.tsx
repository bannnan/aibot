        import Head from 'next/head';

        export default function API() {
          return (
            <div className="container mx-auto py-12 px-6">
              <Head><title>API Reference | Termynal Docs</title></Head>
              <h1 className="text-4xl font-bold mb-6">API Reference</h1>
              <p className="text-lg mb-4">
                Use the Termynal API to integrate automation into your existing workflows.
              </p>
              <pre className="bg-gray-100 p-4 rounded-lg">
                {`POST /api/v1/workflows
    {
      "name": "Deploy Kubernetes",
      "cloud": "aws",
      "region": "us-east-1"
    }`}
              </pre>
            </div>
          );
        }
    