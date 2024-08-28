import Image from 'next/image';

const benefits = [
  {
    title: "Local Expertise with Decades of Experience",
    description: "With over 30 years of experience in the Toledo metro area, we have an in-depth understanding of the local real estate market. Our expertise ensures that you receive the best advice and opportunities tailored to your specific needs.",
    image: "/images/local-expertise.jpg"
  },
  {
    title: "Comprehensive Property Solutions",
    description: "We specialize in both commercial and residential real estate, offering a wide range of options to suit businesses and individuals alike. From commercial spaces to residential rentals and property flips, we have the perfect solution for you.",
    image: "/images/comprehensive-solutions.jpg"
  },
  {
    title: "Personalized Service",
    description: "As a family-owned and operated business, we pride ourselves on delivering personalized service with a focus on building long-term relationships. We treat each client with the attention and care they deserve, ensuring a smooth and successful real estate experience.",
    image: "/images/personalized-service.jpg"
  },
  {
    title: "Commitment to Quality and Integrity",
    description: "We are dedicated to maintaining the highest standards in property management and client service. Our commitment to quality and integrity means you can trust us to handle your real estate needs with the utmost professionalism and transparency.",
    image: "/images/quality-integrity.jpg"
  },
  {
    title: "Community-Focused Approach",
    description: "Dominguez Properties is more than just a business; we are a part of the community. We strive to contribute positively to the Toledo area by providing quality spaces that support local growth and development.",
    image: "/images/community-focused.jpg"
  }
];

export default function BenefitsSection() {
  return (
    <section className="mt-16 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-semibold text-white mb-6 text-center">Why Choose Dominguez Properties?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="shadow-2xl overflow-hidden">
            <Image
              src={benefit.image}
              alt={benefit.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
