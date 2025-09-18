        import Head from 'next/head';

        export default function Pricing() {
          return (
            <div className="container mx-auto py-12 px-6">
              <Head><title>Pricing | Termynal</title></Head>
              <h1 className="text-4xl font-bold mb-6">Pricing</h1>
              <p className="text-lg mb-6">
                Choose the right plan for your team. Start free and scale as you grow.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold mb-4">Starter</h2>
                  <p className="mb-4">Free forever</p>
                  <ul className="list-disc pl-4">
                    <li>1 cloud integration</li>
                    <li>3 AI workflows</li>
                    <li>Community support</li>
                  </ul>
                </div>
                <div className="border p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold mb-4">Pro</h2>
                  <p className="mb-4">$49/month</p>
                  <ul className="list-disc pl-4">
                    <li>Unlimited integrations</li>
                    <li>25 AI workflows</li>
                    <li>Role-based access</li>
                    <li>Email support</li>
                  </ul>
                </div>
                <div className="border p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold mb-4">Enterprise</h2>
                  <p className="mb-4">Custom pricing</p>
                  <ul className="list-disc pl-4">
                    <li>Unlimited everything</li>
                    <li>Private cloud deployment</li>
                    <li>Compliance (SOC2, HIPAA)</li>
                    <li>24/7 support & SLA</li>
                  </ul>
                </div>
              </div>
            </div>
          );
        }
    