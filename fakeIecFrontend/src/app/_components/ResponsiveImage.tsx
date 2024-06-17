import React from 'react'
import Image from 'next/image';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ src, alt, width, height }) => {
  return (
    <div style={{ position: 'relative', width: '100%', paddingBottom: `${(height / width) * 100}%` }}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default ResponsiveImage;
