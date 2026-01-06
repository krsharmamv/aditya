import { Plane, Truck, CheckCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: Plane,
    title: 'International Cargo',
    description: 'Seamless import and export services across the globe',
    features: [
      'Air & Sea Freight',
      'Customs Clearance',
      'Heavy Load Handling',
      'Door-to-Door Delivery',
      'Insurance Coverage',
    ],
    gradient: 'from-blue-900 to-blue-700',
    bgGradient: 'from-blue-50 to-blue-100',
  },
  {
    icon: Truck,
    title: 'Domestic Courier',
    description: 'Fast and reliable delivery services within the country',
    features: [
      'Express Delivery',
      'Document Services',
      'Parcel Shipping',
      'Same-Day Options',
      'COD Available',
    ],
    gradient: 'from-orange-500 to-orange-600',
    bgGradient: 'from-orange-50 to-orange-100',
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive logistics solutions tailored to your shipping needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${service.bgGradient} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>

              <div className={`bg-gradient-to-br ${service.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-3xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-700 mb-6 text-lg">{service.description}</p>

              <div className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`mt-8 w-full bg-gradient-to-r ${service.gradient} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}>
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
