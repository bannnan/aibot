import { useTranslation } from 'next-i18next';
import { Card } from 'react-daisyui';

const FAQSection = () => {
  useTranslation('common');
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-center text-2xl sm:text-4xl font-bold normal-case">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-base sm:text-xl">
            Answers to the most common questions about Termynal.
          </p>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
              <Card className="border-none">
                <Card.Body className="items-left border border-gray-300 dark:border-gray-600 p-4 sm:p-6">
                  <Card.Title tag="h2">Q. What is Termynal?</Card.Title>
                  <p>
                    A. Termynal is an AI-powered platform that automates DevOps and cloud tasks so your team can deploy and manage infrastructure faster.
                  </p>
                </Card.Body>
              </Card>
              <Card className="border-none">
                <Card.Body className="items-left border border-gray-300 dark:border-gray-600 p-4 sm:p-6">
                  <Card.Title tag="h2">Q. Which clouds are supported?</Card.Title>
                  <p>
                    A. Termynal works with AWS, Azure, and Google Cloud, with more coming soon.
                  </p>
                </Card.Body>
              </Card>
              <Card className="border-none">
                <Card.Body className="items-left border border-gray-300 dark:border-gray-600 p-4 sm:p-6">
                  <Card.Title tag="h2">Q. Is there a free plan?</Card.Title>
                  <p>
                    A. Yes — our Starter plan is free forever for individuals and small projects.
                  </p>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;