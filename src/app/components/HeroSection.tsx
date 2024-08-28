import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Image
        src="/logos/Untitled design (4).png"
        alt="Dominguez Properties Logo"
        width={500}
        height={200}
        className="mb-8"
      />
      <h1 className="text-4xl font-bold text-white">
        Your Trusted Partner in Toledo Metro Real Estate
      </h1>
      <p className="text-lg text-white mt-4">
        Discover Premier Commercial and Residential Spaces with Dominguez Properties
      </p>
      <div className="mt-8">
        <button className="bg-white text-black px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
          Explore Listings
        </button>
      </div>
    </div>
  );
}
