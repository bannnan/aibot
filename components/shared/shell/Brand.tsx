import app from '@/lib/app';
import Image from 'next/image';
import useTheme from 'hooks/useTheme';

interface BrandProps {
  size?: number; // size in pixels
}

const Brand = ({ size = 64 }: BrandProps) => {
  const { theme } = useTheme();
  return (
    <div className="flex pt-6 shrink-0 items-center">
      <div
        className="relative mx-auto"
        style={{ height: `${size}px`, width: `${size}px` }}
      >
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
