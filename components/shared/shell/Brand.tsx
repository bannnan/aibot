import app from '@/lib/app';
import Image from 'next/image';
import useTheme from 'hooks/useTheme';

const Brand = () => {
  const { theme } = useTheme();
  return (
    <div className="flex pt-6 shrink-0 items-center">
      <div className="relative h-12 w-12"> {/* 48x48 box */}
        <Image
          src={app.logoUrl}
          alt={app.name}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Brand;
