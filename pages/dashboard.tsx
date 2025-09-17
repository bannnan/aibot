import { Loading, EmptyState } from '@/components/shared';
import useTeams from 'hooks/useTeams';
import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import type { NextPageWithLayout } from 'types';
import Link from 'next/link';
import { Button } from 'react-daisyui';

const Dashboard: NextPageWithLayout = () => {
  const router = useRouter();
  const { teams, isLoading } = useTeams();

  useEffect(() => {
    if (isLoading || !teams) {
      return;
    }

    if (teams.length > 0) {
      router.push(`/teams/${teams[0].slug}/settings`);
    }
  }, [isLoading, router, teams]);

  if (isLoading || !teams) {
    return <Loading />;
  }

  if (teams.length === 0) {
    return (
      <div className="space-y-4">
        <EmptyState
          title="No teams yet"
          description="Create your first team to get started."
        />
        <div className="flex justify-center">
          <Link href="/teams?newTeam=true">
            <Button color="primary">Create Team</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Brief fallback UI while redirecting to first team
  return <Loading />;
};

export async function getStaticProps({ locale }: GetServerSidePropsContext) {
  return {
    props: {
      ...(locale ? await serverSideTranslations(locale, ['common']) : {}),
    },
  };
}

export default Dashboard;
