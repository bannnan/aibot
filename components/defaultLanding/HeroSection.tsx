import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const HeroSection = () => {
  const { t } = useTranslation('common');
  return (
    <div className="hero py-52">
      <div className="hero-content text-center">
        <div className="max-w-7xl">
          <h1 className="text-5xl font-bold">
            Automate DevOps & Cloud Tasks with AI
          </h1>
          <p className="py-6 text-2xl font-normal">
            Termynal saves engineers hours every week by turning natural
            language into secure, production-ready deployments.
          </p>
          <div className="flex items-center justify-center gap-2">
            <Link
              href="/auth/join"
              className="btn btn-primary px-8 no-underline"
            >
              Get Started
            </Link>
            <Link
              href="/features"
              className="btn btn-outline px-8"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;