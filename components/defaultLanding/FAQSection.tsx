import { useTranslation } from 'next-i18next';
import { Card } from 'react-daisyui';

const FAQSection = () => {
  const { t } = useTranslation('common');
  return (
    <section className="py-6">
      <div className="flex flex-col justify-center space-y-6">
        <h2 className="text-center text-4xl font-bold normal-case">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-xl">
          Answers to the most common questions about Termynal.
        </p>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-2 max-w-3xl">
            <Card className="border-none">
              <Card.Body className="items-left border border-gray-300 dark:border-gray-200">
                <Card.Title tag="h2">Q. What is Termynal?</Card.Title>
                <p>
                  A. Termynal is an AI-powered platform that automates DevOps and cloud tasks so your team can deploy and manage infrastructure faster.
                </p>
              </Card.Body>
            </Card>
            <Card className="border-none">
              <Card.Body className="items-left border border-gray-300 dark:border-gray-200">
                <Card.Title tag="h2">Q. Which clouds are supported?</Card.Title>
                <p>
                  A. Termynal works with AWS, Azure, and Google Cloud, with more coming soon.
                </p>
              </Card.Body>
            </Card>
            <Card className="border-none">
              <Card.Body className="items-left border border-gray-300 dark:border-gray-200">
                <Card.Title tag="h2">Q. Is there a free plan?</Card.Title>
                <p>
                  A. Yes — our Starter plan is free forever for individuals and small projects.
                </p>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;