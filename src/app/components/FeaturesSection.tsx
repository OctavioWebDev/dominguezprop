import Image from 'next/image';

const features = [
  {
    title: "Prime Locations",
    description: "Our properties are strategically located in sought-after areas of the Toledo metro region, providing easy access to major transportation routes, shopping centers, and business districts.",
    image: "/images/prime-locations.jpg"
  },
  {
    title: "High-Quality Properties",
    description: "We maintain rigorous standards for all our properties, ensuring that each space is well-maintained, modern, and ready for immediate occupancy.",
    image: "/images/high-quality-properties.jpg"
  },
  {
    title: "Flexible Leasing Options",
    description: "We offer flexible leasing options that can be tailored to suit short-term or long-term requirements, giving you the freedom to choose what's best for your business or family.",
    image: "/images/flexible-leasing.jpg"
  },
  {
    title: "Expert Renovations and Upgrades",
    description: "Our experience in property flipping allows us to offer beautifully renovated spaces that are both functional and stylish, using high-quality materials and modern design principles.",
    image: "/images/expert-renovations.jpg"
  },
  {
    title: "Dedicated Support Team",
    description: "Our knowledgeable and friendly team is always available to assist you with any questions or concerns, providing exceptional service every step of the way.",
    image: "/images/dedicated-support.jpg"
  },
  {
    title: "Sustainable Practices",
    description: "We are committed to sustainability and incorporate eco-friendly practices into our property management and renovation processes, minimizing our environmental impact.",
    image: "/images/sustainable-practices.jpg"
  }
];

export default function FeaturesSection() {
  return (
    <section className="mt-16 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-semibold text-white mb-6 text-center">Features That Set Us Apart</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="shadow-2xl overflow-hidden">
            <Image
              src={feature.image}
              alt={feature.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
