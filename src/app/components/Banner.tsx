'use client';

import React, { useRef, useEffect, useState } from 'react';

interface BannerProps {
  title: string;
  backgroundImage: string;
}

const Banner: React.FC<BannerProps> = ({ title, backgroundImage }) => {
  const [isTextVisible, setIsTextVisible] = useState(false); // State to track text visibility
  const textRef = useRef<HTMLHeadingElement>(null); // Ref to track the heading element

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Callback function to execute when the element enters or leaves the viewport
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsTextVisible(true); // Set state to true when the heading is visible
            observer.disconnect(); // Optional: Stop observing after the first time
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold to control when the effect triggers
    );

    if (textRef.current) {
      observer.observe(textRef.current); // Start observing the heading element
    }

    return () => {
      observer.disconnect(); // Clean up observer on component unmount
    };
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center mb-6">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10" />
      <h2
        ref={textRef}
        className={`text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-semibold text-white z-20 text-center transition-opacity duration-1000 ${
          isTextVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {title}
      </h2>
    </div>
  );
};

export default Banner;