import { Package, Users, Globe, Award } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { icon: Package, value: '10,000+', label: 'Deliveries Completed', gradient: 'from-blue-500 to-blue-600' },
  { icon: Users, value: '5,000+', label: 'Happy Customers', gradient: 'from-orange-500 to-orange-600' },
  { icon: Globe, value: '200+', label: 'Countries Covered', gradient: 'from-blue-700 to-blue-800' },
  { icon: Award, value: '99%', label: 'On-Time Delivery', gradient: 'from-orange-600 to-orange-700' },
];

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
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

  useEffect(() => {
    if (isVisible) {
      const targets = [10000, 5000, 200, 99];
      const duration = 2000;
      const steps = 50;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounts(targets.map(target => Math.floor(target * progress)));

        if (currentStep >= steps) {
          clearInterval(interval);
          setCounts(targets);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Our numbers speak for our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 hover:bg-opacity-20 transition-all duration-300 hover:scale-105">
                <div className={`bg-gradient-to-br ${stat.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {index === 3 ? `${counts[index]}%` : `${counts[index].toLocaleString()}+`}
                </h3>
                <p className="text-blue-100 text-lg">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
