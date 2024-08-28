'use client';

import React, { useState, useEffect } from 'react';

const verses = [
  {
    text: "Whatever you do, work heartily, as for the Lord and not for men.",
    reference: "Colossians 3:23"
  },
  {
    text: "And let us not grow weary of doing good, for in due season we will reap, if we do not give up.",
    reference: "Galatians 6:9"
  },
  {
    text: "The plans of the diligent lead surely to abundance, but everyone who is hasty comes only to poverty.",
    reference: "Proverbs 21:5"
  },
  {
    text: "Commit your work to the Lord, and your plans will be established.",
    reference: "Proverbs 16:3"
  },
  {
    text: "I can do all things through him who strengthens me.",
    reference: "Philippians 4:13"
  },
  {
    text: "The hardworking farmer should be the first to receive a share of the crops.",
    reference: "2 Timothy 2:6"
  }
];

const BibleVerseSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % verses.length);
    }, 5000); // Change verse every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonial-carousel -z-50 relative w-full h-full overflow-hidden mt-16 mb-16">
      <h2 className="text-4xl font-semibold text-white text-center">The Word Of God</h2>
      <div className="text-center px-4 py-8 relative z-10">
        {verses.map((verse, index) => (
          <blockquote key={index} className={`text-xl italic font-semibold text-gray-900 dark:text-white transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0 absolute'}`}>
            <svg className="w-8 h-8 text-gray-400 dark:text-gray-300 mb-4 mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
            </svg>
            <p>{verse.text}</p>
            <footer className=" mt-2">{verse.reference}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default BibleVerseSlider;



