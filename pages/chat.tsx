import { type ReactElement } from 'react';
import type { NextPageWithLayout } from 'types';
import ChatInterface from '@/components/chat/ChatInterface';
import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Chat: NextPageWithLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="bg-base-100 border-b border-gray-200 dark:border-gray-700 p-4">
        <h1 className="text-2xl font-bold">Termynal</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
        Chat your way into automation
        </p>
      </div>
      <div className="flex-1 overflow-hidden">
        <ChatInterface />
      </div>
    </div>
  );
};

export async function getStaticProps({ locale }: GetServerSidePropsContext) {
  return {
    props: {
      ...(locale ? await serverSideTranslations(locale, ['common']) : {}),
    },
  };
}

export default Chat;
