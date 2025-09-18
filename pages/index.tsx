import Link from 'next/link';
import { type ReactElement, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import type { NextPageWithLayout } from 'types';
import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import FAQSection from '@/components/defaultLanding/FAQSection';
import HeroSection from '@/components/defaultLanding/HeroSection';
import FeatureSection from '@/components/defaultLanding/FeatureSection';
import PricingSection from '@/components/defaultLanding/PricingSection';
import env from '@/lib/env';
import Head from 'next/head';
import Image from 'next/image';
import app from '@/lib/app';
import ThemeToggle from '@/components/shared/ThemeToggle';

const Home: NextPageWithLayout = () => {
  const { t } = useTranslation('common');

  // Keep DaisyUI in sync with next-themes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('theme');
      if (theme) {
        document.documentElement.setAttribute(
          'data-theme',
          theme === 'dark' ? 'black' : 'corporate'
        );
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>{t('homepage-title')}</title>
        <link rel="shortcut icon" href="/favicon.ico?v=1" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=1" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png?v=1" />
        <link rel="icon" href="/favicon.ico?v=1" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=1" />
      </Head>

      <div className="container mx-auto">
        <div className="navbar bg-base-100 px-0 sm:px-1">
          <div className="flex-1">
            <Link href="/" className="inline-flex items-center p-0 leading-none">
              <Image
                src={app.logoUrl}
                alt={app.name}
                width={120}
                height={28}
                className="block"
                unoptimized
                priority
              />
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal flex items-center gap-6 sm:gap-8">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/features">Features</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li tabIndex={0}>
                <details>
                  <summary>Docs</summary>
                  <ul className="p-2 bg-base-100">
                    <li><Link href="/docs/getting-started">Getting Started</Link></li>
                    <li><Link href="/docs/api">API</Link></li>
                  </ul>
                </details>
              </li>
              <li><ThemeToggle /></li>
              <li>
                <Link href="/auth/join" className="btn btn-primary text-white">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link href="/auth/login" className="btn btn-outline">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <HeroSection />
        <div className="divider"></div>
        <FeatureSection />
        <div className="divider"></div>
        <PricingSection />
        <div className="divider"></div>
        <FAQSection />
      </div>
    </>
  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  if (env.hideLandingPage) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: true,
      },
    };
  }

  const { locale } = context;

  return {
    props: {
      ...(locale ? await serverSideTranslations(locale, ['common']) : {}),
    },
  };
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default Home;
