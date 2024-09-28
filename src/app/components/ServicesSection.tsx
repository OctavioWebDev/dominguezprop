import Image from 'next/image';
import Banner from "./Banner";
const services = [
  {
    title: "Commercial Space Rentals",
    description: "We offer a diverse portfolio of commercial properties in prime locations throughout the Toledo metro area. Whether you're a small business owner or a large corporation, we have the perfect space to accommodate your needs.",
    // image: "/images/commercial-rentals.jpg"
  },
  {
    title: "Residential Rentals",
    description: "We offer a wide range of residential rental properties, from cozy apartments to spacious family homes. Our properties are well-maintained and located in desirable neighborhoods, ensuring you find a comfortable and welcoming space.",
    // image: "/images/residential-rentals.jpg"
  },
  {
    title: "Property Flipping and Investment",
    description: "Our expertise in property flipping allows us to turn undervalued properties into high-quality investments. We handle every aspect of the process, from acquisition to renovation and resale.",
    // image: "/images/property-flipping.jpg"
  }
];

export default function ServicesSection() {
  return (
    <>
    <Banner
    title="Services"
    backgroundImage='/images/DOMPROP/2857-AIRPORTHWY.jpg'
    />
    <section className="mt-16 max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="shadow-2xl overflow-hidden">
            {/* <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            /> */}
            <div className="p-6">
              <h3 className="text-3xl text-white font-bold mb-2">{service.title}</h3>
              <p className="text-white text-xl">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
