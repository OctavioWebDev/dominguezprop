import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center mt-16 max-w-6xl mx-auto">
      {/* Image Tile */}
      <div className="w-full md:w-1/2 p-6">
        <Image
          src="/logos/84e68a35-6097-4994-8cfb-e22cac306f4a (1).png"
          alt="Dominguez Properties Team"
          width={600}
          height={400}
          className="shadow-2xl"
        />
      </div>

      {/* Copy Tile */}
      <div className="w-full md:w-1/2 p-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-white mb-6">About Dominguez Properties</h2>
        <p className="text-base text-white leading-relaxed mb-4">
          Founded in 1988, Dominguez Properties has been a cornerstone in Northwest Ohio's real estate landscape for over three decades. With a deep commitment to quality and service, we specialize in offering top-tier, cost-effective commercial rentals in prime locations for new entrepreneurs.        
        </p>
        <p className="text-base text-white leading-relaxed mb-4">
          At Dominguez Properties, we believe in creating lasting value through reliable property management and innovative real estate solutions. Our focus is on providing spaces allowing businesses to thrive in the most sought-after locations.       
        </p>
        <p className="text-base text-white leading-relaxed">
          As a family-owned and operated business, we pride ourselves on our personalized approach. Our commitment to integrity, transparency, and excellence continues to drive our mission of helping companies establish themselves in the community with ease.       
        </p>
      </div>
    </section>
  );
}
