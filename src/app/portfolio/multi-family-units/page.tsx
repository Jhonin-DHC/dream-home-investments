import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";

export default function MultiFamilyUnitsPage() {
  const properties = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `Multi-Family Unit ${i + 1}`,
    location: "Location TBD",
    price: "Price TBD",
    details: "Property details coming soon",
  }));

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <section className="section bg-gradient-to-b from-black to-gray-900 pt-24">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Multi-Family <span className="gradient-text">Units</span>
            </h1>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl">
              Invest in multi-family properties for diversified income streams and reduced risk. Our portfolio includes duplexes, triplexes, and apartment buildings that provide multiple rental units and enhanced cash flow potential.
            </p>

            {/* Property Gallery Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {properties.map((property) => (
                <div key={property.id} className="glass-card group cursor-pointer overflow-hidden">
                  <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={`https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&sig=${property.id}`}
                      alt={property.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{property.location}</p>
                  <p className="text-green-400 font-semibold">{property.price}</p>
                  <p className="text-gray-300 text-sm mt-2">{property.details}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/#portfolio" className="btn-hero-primary">
                Back to Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

