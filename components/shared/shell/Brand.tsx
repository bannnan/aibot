import app from '@/lib/app';
import Image from 'next/image';
import useTheme from 'hooks/useTheme';

const Brand = () => {
  const { theme } = useTheme();
  return (
    <div className="flex pt-6 shrink-0 items-center">
      <Image
        src={app.logoUrl}
        alt={app.name}
        width={40}
        height={40}
        className="object-contain"
      />
    </div>
  );
};

export default Brand;
