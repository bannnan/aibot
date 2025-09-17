import app from '@/lib/app';
import Image from 'next/image';
import useTheme from 'hooks/useTheme';

const Brand = () => {
  const { theme } = useTheme();
  return (
    <div className="flex pt-6 shrink-0 items-center gap-3 dark:text-gray-100">
      <Image
        src={app.logoUrl}
        alt={app.name}
        width={40}   // increase size
        height={40}  // increase size
        className="object-contain"
      />
      <span className="text-2xl font-bold">{app.name}</span>
    </div>
  );
};

export default Brand;
