import Image from 'next/image';
import useTheme from 'hooks/useTheme';
import { useRouter } from 'next/router';
import logoDark from '/logo-dark.png';
import logoLight from '/logo-light.png';

interface BrandProps {
  size?: number; // size in pixels
}

const Brand = ({ size }: BrandProps) => {
  const { theme } = useTheme();
  const router = useRouter();
  const isDashboard = router.pathname.startsWith('/dashboard');
  const finalSize = size !== undefined ? size : isDashboard ? 128 : 64;

  return (
    <div className="flex pt-6 shrink-0 items-center">
      <div
        className="relative mx-auto"
        style={{ height: `${finalSize}px`, width: `${finalSize}px` }}
      >
        <Image
          src={theme === 'dark' ? logoDark : logoLight}
          alt="Logo"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Brand;
