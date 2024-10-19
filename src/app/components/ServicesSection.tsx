import Image from 'next/image';
import Banner from "./Banner";
const services = 
  [
    {
      title: "Commercial Space Rentals",
      description: "We offer a diverse portfolio of commercial properties in prime locations throughout Northwest Ohio. Whether you're a small business owner or a large corporation, we have the perfect space to accommodate your needs.",
      image: "/images/DOMPROP/1825-1853-Eastgate-Rd-Toledo-OH-Primary-Photo-1-Large.jpg"
    },
    {
      title: "Flexible Leasing Options",
      description: "Our flexible leasing terms are designed to meet the unique needs of businesses at any stage of growth. Whether you need short-term or long-term agreements, we provide the flexibility to help your business thrive.",
      image: "/images/DOMPROP/2857-AIRPORTHWY.jpg"
    },
    {
      title: "Property Management Services",
      description: "We take the hassle out of managing your commercial space. From maintenance and repairs to tenant services, our dedicated property management team ensures your space operates smoothly so you can focus on your business.",
      image: "/images/DOMPROP/135AIRPORTHWYSWANTONOHIO.jpg"
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
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
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
