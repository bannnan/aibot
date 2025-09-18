import { CheckIcon } from '@heroicons/react/20/solid';
import { useTranslation } from 'next-i18next';
import { Button, Card } from 'react-daisyui';

const PricingSection = () => {
  const { t } = useTranslation('common');
  return (
    <section className="py-6">
      <div className="flex flex-col justify-center space-y-6">
        <h2 className="text-center text-4xl font-bold normal-case">
          Simple, Transparent Pricing
        </h2>
        <p className="text-center text-xl">
          Choose a plan that fits your team and scale when you’re ready.
        </p>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {/* Starter Plan */}
            <Card className="rounded-md border border-gray-300 dark:border-gray-200">
              <Card.Body>
                <Card.Title tag="h2">Starter – Free</Card.Title>
                <p>For individuals & hobby projects</p>
                <ul className="flex flex-col space-y-2 mt-5">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5" /> <span className="ml-1">1 Cloud integration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5" /> <span className="ml-1">Up to 3 AI workflows</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5" /> <span className="ml-1">Community support</span>
                  </li>
                </ul>
              </Card.Body>
              <Card.Actions className="justify-center m-2">
                <Button color="primary" className="w-3/4 rounded-md">
                  Get Started
                </Button>
              </Card.Actions>
            </Card>

            {/* Pro Plan */}
            <Card className="rounded-md border border-gray-300 dark:border-gray-200">
              <Card.Body>
                <Card.Title tag="h2">Pro – $49/mo</Card.Title>
                <p>For growing teams</p>
                <ul className="flex flex-col space-y-2 mt-5">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5" /> <span className="ml-1">Unlimited cloud integrations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5" /> <span className="ml-1">25 AI workflows</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5" /> <span className="ml-1">Role-based access control</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5" /> <span className="ml-1">Email support</span>
                  </li>
                </ul>
              </Card.Body>
              <Card.Actions className="justify-center m-2">
                <Button color="primary" className="w-3/4 rounded-md">
                  Upgrade
                </Button>
              </Card.Actions>
            </Card>

            {/* Enterprise Plan */}
            <Card className="rounded-md border border-gray-300 dark:border-gray-200">
              <Card.Body>
                <Card.Title tag="h2">Enterprise – Custom</Card.Title>
                <p>For large organizations</p>
                <ul className="flex flex-col space-y-2 mt-5">
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5" /> <span className="ml-1">Unlimited everything</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5" /> <span className="ml-1">Private cloud deployment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5" /> <span className="ml-1">SOC2 / HIPAA compliance</span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="h-5 w-5" /> <span className="ml-1">24/7 support & SLAs</span>
                  </li>
                </ul>
              </Card.Body>
              <Card.Actions className="justify-center m-2">
                <Button color="primary" className="w-3/4 rounded-md">
                  Contact Sales
                </Button>
              </Card.Actions>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
