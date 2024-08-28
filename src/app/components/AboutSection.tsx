import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center mt-16 max-w-6xl mx-auto">
      {/* Image Tile */}
      <div className="w-full md:w-1/2 p-6">
        <Image
          src="/logos/Untitled design (4).png"
          alt="Dominguez Properties Team"
          width={600}
          height={400}
          className="shadow-2xl"
        />
      </div>

      {/* Copy Tile */}
      <div className="w-full md:w-1/2 p-6">
        <h2 className="text-3xl font-semibold text-white mb-6">About Dominguez Properties</h2>
        <p className="text-base text-white leading-relaxed mb-4">
          Founded in 1988 by Mario Dominguez, Dominguez Properties has been a cornerstone in the Toledo metro area's real estate landscape for over three decades. With a deep commitment to quality and service, we specialize in offering top-tier commercial space rentals, residential rental properties, and property flipping.
        </p>
        <p className="text-base text-white leading-relaxed mb-4">
          At Dominguez Properties, we believe in creating lasting value through meticulous property management and innovative real estate solutions. Whether you're looking to establish your business in a prime commercial location or seeking a new place to call home, we are dedicated to helping you find the perfect fit.
        </p>
        <p className="text-base text-white leading-relaxed">
          As a family-owned and operated business, we pride ourselves on our personalized approach. Mario Dominguez's vision was to build a company that not only meets the needs of its clients but also contributes to the community. Today, we continue to uphold this legacy, offering integrity, transparency, and a relentless commitment to excellence in everything we do.
        </p>
      </div>
    </section>
  );
}
