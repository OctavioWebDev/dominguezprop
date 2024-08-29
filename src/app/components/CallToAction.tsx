'use client';

import React from 'react';
import Image from 'next/image';
import backgroundImage from '/Users/octaviosanchez/dominguezprop/public/images/joakim-nadell-K67sBVqLLuw-unsplash.jpg';
import Link from 'next/link';

export default function CallToActionSection() {
    return (
        <section className="relative mt-16 w-screen py-20">
            <Image
                src={backgroundImage}
                alt="Background"
                layout="fill"
                objectFit="cover"
                quality={100}
            />
            <div className="absolute inset-0 bg-gray-500 opacity-70 z-10"></div>
            <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <div className="container mx-auto flex flex-col items-center justify-center space-y-6">
                    <h2 className="tracking-tighter text-5xl font-bold text-sky-50 text-center">Ready to Find Your Perfect Space?</h2>
                    <p className="text-2xl text-sky-100 text-center max-w-2xl">
                        Whether you're searching for the ideal commercial location to grow your business or a new place to call home, Dominguez Properties is here to help. With decades of experience and a commitment to excellence, we have the perfect solution for you.
                    </p>
                </div>
                <div className="mt-8">
                    <Link href="/Contact" className="bg-white text-black px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
                        Contct Us
                    </Link>
                </div>
            </div>
        </section>
    );
}