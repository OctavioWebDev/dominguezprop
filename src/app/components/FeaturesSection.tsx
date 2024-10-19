import Image from 'next/image';
import Banner from "./Banner";
const features = [
  {
    title: "High-Quality Properties",
    description: "We maintain rigorous standards for all our properties, ensuring that each space is well-maintained, modern, and ready for immediate occupancy.",
    image: "/images/DOMPROP/135AIRPORTHWYSWANTONOHIO.jpg"
  },
  {
    title: "Flexible Leasing Options",
    description: "We offer flexible leasing options that can be tailored to suit short-term or long-term requirements, giving you the freedom to choose what's best for your business or family.",
    image: "/images/DOMPROP/1825-1853-Eastgate-Rd-Toledo-OH-Primary-Photo-1-Large.jpg"
  },
  {
    title: "Expert Renovations and Upgrades",
    description: "Our experience us to offer renovated spaces that are both cost effective and functional, using high-quality.",
    image: "/images/DOMPROP/2857-AIRPORTHWY.jpg"
  }
];

export default function FeaturesSection() {
  return (
    <>
    <Banner
    title="Features That Set Us Apart"
    backgroundImage='/images/DOMPROP/1825-1853-Eastgate-Rd-Toledo-OH-Primary-Photo-1-Large.jpg'
    />
    <section className="mt-16 max-w-6xl mx-auto px-6">
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
              <h3 className="text-3xl text-white font-bold mb-2">{feature.title}</h3>
              <p className="text-white text-xl">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
