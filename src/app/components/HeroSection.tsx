import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Image
        src="/logos/84e68a35-6097-4994-8cfb-e22cac306f4a (1).png"
        alt="Dominguez Properties Logo"
        width={500}
        height={200}
        className="mb-8"
      />
      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-bold text-white">
        Your Trusted Partner in Toledo Metro Area
      </h1>
      <p className="text-xl text-white mt-4">
        Discover Premier Commercial and Residential Spaces with Dominguez Properties
      </p>
      <div className="mt-8">
        <Link href="/Contact" className="bg-white text-black px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
          Contct Us
        </Link>
      </div>
    </div>
  );
}
