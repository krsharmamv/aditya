import { useState, useEffect } from 'react';
import { Package } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-2.5 rounded-xl shadow-lg">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-900">Aditya International</h1>
              <p className="text-xs text-gray-600">Courier & Cargo Services</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('track')}
              className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
            >
              Track
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
            >
              Contact
            </button>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
              Book Free Pickup
            </button>
          </div>

          <button className="md:hidden bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2 rounded-full font-semibold text-sm">
            Book Pickup
          </button>
        </div>
      </div>
    </nav>
  );
}
