import React from 'react';

interface BannerProps {
  title: string;
  backgroundImage: string;
}

const Banner: React.FC<BannerProps> = ({ title, backgroundImage }) => {
  return (
    <div className="relative h-screen flex items-center justify-center mb-6">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10" />
      <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-semibold text-white z-20 text-center">
        {title}
      </h2>
    </div>
  );
};

export default Banner;
