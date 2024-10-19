import Image from 'next/image';
import Banner from "./Banner";

const benefits = [
  {
    title: "Local Expertise with Decades of Experience",
    description: "With over 30 years of experience in the North West Ohio, we have an in-depth understanding of the local real estate market. Our expertise ensures that you receive the best advice and opportunities tailored to your specific needs.",
    image: "/images/DOMPROP/2857-AIRPORTHWY.jpg"
  },
  {
    title: "Comprehensive Property Solutions",
    description: "We specialize in cost effective commercial spaces in prime locations, offering a wide range of options to suit your business. If your looking for a commercial space for your new business, we have the perfect solution for you.",
    image: "/images/DOMPROP/149-151-E-Airport-Hwy-Swanton-OH-Building-Photo-4-LargeHighDefinition.jpg"
  },
  {
    title: "Commitment to Quality and Integrity",
    description: "We are dedicated to maintaining the highest standards in property management and client service. Our commitment to quality and integrity means you can trust us to handle your real estate needs with the utmost professionalism and transparency.",
    image: "/images/DOMPROP/5255-Hill-Ave-Toledo-OH-Primary-Photo-1-HighDefinition.jpg"
  },
];

export default function BenefitsSection() {
  return (
    <>
    <Banner 
          title="Why Choose Dominguez Properties?" 
          backgroundImage="/images/DOMPROP/5255-Hill-Ave-Toledo-OH-Primary-Photo-1-HighDefinition.jpg"
        />
    <section className="mt-16 mb-16 max-w-6xl mx-auto px-6">
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
              <h3 className="text-3xl text-white font-bold mb-2">{benefit.title}</h3>
              <p className="text-white text-xl">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
