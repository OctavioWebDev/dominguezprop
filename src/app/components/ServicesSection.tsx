import Image from 'next/image';

const services = [
  {
    title: "Commercial Space Rentals",
    description: "We offer a diverse portfolio of commercial properties in prime locations throughout the Toledo metro area. Whether you're a small business owner or a large corporation, we have the perfect space to accommodate your needs.",
    image: "/images/commercial-rentals.jpg"
  },
  {
    title: "Residential Rentals",
    description: "We offer a wide range of residential rental properties, from cozy apartments to spacious family homes. Our properties are well-maintained and located in desirable neighborhoods, ensuring you find a comfortable and welcoming space.",
    image: "/images/residential-rentals.jpg"
  },
  {
    title: "Property Flipping and Investment",
    description: "Our expertise in property flipping allows us to turn undervalued properties into high-quality investments. We handle every aspect of the process, from acquisition to renovation and resale.",
    image: "/images/property-flipping.jpg"
  },
  {
    title: "Property Management",
    description: "We take the hassle out of property ownership with our comprehensive property management services. From tenant screening and lease management to maintenance and rent collection, our team handles it all.",
    image: "/images/property-management.jpg"
  },
  {
    title: "Custom Real Estate Solutions",
    description: "Every client has unique needs, and we're here to meet them. Whether you're looking to buy, sell, lease, or invest, we offer customized real estate solutions tailored to your goals.",
    image: "/images/custom-solutions.jpg"
  }
];

export default function ServicesSection() {
  return (
    <section className="mt-16 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-semibold text-white mb-6 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="shadow-2xl overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
