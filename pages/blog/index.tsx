        import Head from 'next/head';
        import Link from 'next/link';

        export default function Blog() {
          return (
            <div className="container mx-auto py-12 px-6">
              <Head><title>Blog | Termynal</title></Head>
              <h1 className="text-4xl font-bold mb-6">Blog</h1>
              <p className="text-lg mb-6">
                Insights, tutorials, and news from the Termynal team.
              </p>
              <ul className="space-y-4">
                <li><Link href="#">Why AI is the Future of DevOps</Link></li>
                <li><Link href="#">5 Cloud Tasks Every Team Should Automate</Link></li>
                <li><Link href="#">The Hidden Costs of Manual Infrastructure Setup</Link></li>
              </ul>
            </div>
          );
        }
    