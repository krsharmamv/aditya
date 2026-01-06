import { Package, Home, Globe, MapPin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: Package,
    title: 'Free Professional Packing',
    description: 'We ensure your items are safe with expert packing materials and techniques.',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: Home,
    title: 'Doorstep Pickup',
    description: 'Comfort of your home, reach of the world. We pick up from your location.',
    gradient: 'from-orange-500 to-orange-600',
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Secure delivery to 200+ countries with our extensive logistics network.',
    gradient: 'from-blue-700 to-blue-800',
  },
  {
    icon: MapPin,
    title: 'Real-Time Tracking',
    description: 'Well-maintained system for live updates on your shipment status.',
    gradient: 'from-orange-600 to-orange-700',
  },
];

export default function WhyChooseUs() {
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
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our premium courier services designed for your convenience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={`bg-gradient-to-br ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
