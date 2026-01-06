import { useState } from 'react';
import { Search, Plane, Globe2, Package } from 'lucide-react';

export default function Hero() {
  const [trackingId, setTrackingId] = useState('');

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      alert(`Tracking shipment: ${trackingId}`);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <Globe2 className="absolute top-20 right-10 w-96 h-96 text-blue-900 animate-spin-slow" style={{ animationDuration: '60s' }} />
        <Plane className="absolute bottom-40 left-20 w-64 h-64 text-orange-500 animate-pulse" />
        <Package className="absolute top-1/2 left-1/4 w-32 h-32 text-blue-700" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold text-blue-900 mb-6 leading-tight">
              Delivering Your World,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Door to Door
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
              Premium Domestic & International Courier Services with Free Packing & Pickup
            </p>
          </div>

          <div className="max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Track Your Shipment</h3>
              <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    placeholder="Enter your tracking number"
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all text-lg"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  Track Now
                </button>
              </form>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            {[
              { label: 'Free Packing', icon: Package },
              { label: '200+ Countries', icon: Globe2 },
              { label: 'Fast Delivery', icon: Plane },
              { label: 'Live Tracking', icon: Search },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <item.icon className="w-10 h-10 text-orange-500 mx-auto mb-3" />
                <p className="font-semibold text-gray-800">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
