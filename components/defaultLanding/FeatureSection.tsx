import { useTranslation } from 'next-i18next';

const FeatureSection = () => {
  const { t } = useTranslation('common');
  return (
    <section className="py-6 px-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-center text-2xl sm:text-4xl font-bold normal-case">
            Powerful Features
          </h2>
          <p className="text-center text-base sm:text-xl">
            Stop writing endless scripts. Termynal gives your team reusable,
            AI-powered workflows for every stage of cloud operations.
          </p>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="card-compact card border border-gray-300 dark:border-gray-600">
                <div className="card-body p-4 sm:p-6">
                  <h2 className="card-title">Deploy with a Prompt</h2>
                  <p>
                    “Launch a production-ready Kubernetes cluster on AWS.” Termynal does the rest.
                  </p>
                </div>
              </div>
              <div className="card-compact card border border-gray-300 dark:border-gray-600">
                <div className="card-body p-4 sm:p-6">
                  <h2 className="card-title">Self-Healing Workflows</h2>
                  <p>
                    Automatically detect drift, failed pipelines, and configuration mismatches.
                  </p>
                </div>
              </div>
              <div className="card-compact card border border-gray-300 dark:border-gray-600">
                <div className="card-body p-4 sm:p-6">
                  <h2 className="card-title">Enterprise Security</h2>
                  <p>
                    End-to-end audit logs, fine-grained permissions, SAML SSO, and MFA support.
                  </p>
                </div>
              </div>
              <div className="card-compact card border border-gray-300 dark:border-gray-600">
                <div className="card-body p-4 sm:p-6">
                  <h2 className="card-title">Team Collaboration</h2>
                  <p>
                    Share playbooks, assign approvals, and track changes across teams.
                  </p>
                </div>
              </div>
              <div className="card-compact card border border-gray-300 dark:border-gray-600">
                <div className="card-body p-4 sm:p-6">
                  <h2 className="card-title">Multi-Cloud Ready</h2>
                  <p>
                    Works seamlessly with AWS, Azure, and GCP — no vendor lock-in.
                  </p>
                </div>
              </div>
              <div className="card-compact card border border-gray-300 dark:border-gray-600">
                <div className="card-body p-4 sm:p-6">
                  <h2 className="card-title">Integrations That Matter</h2>
                  <p>
                    Connect to your stack: Terraform, GitHub, GitLab, Slack, Jira, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;