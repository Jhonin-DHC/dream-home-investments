'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import PropertyModal from '@/components/PropertyModal';
import { rentalProperties, getPropertyBySlug, RentalProperty } from '@/data/rental-properties';

export default function PropertyPage() {
  const params = useParams();
  const router = useRouter();
  const [property, setProperty] = useState<RentalProperty | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [similarProperties, setSimilarProperties] = useState<RentalProperty[]>([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (params.slug) {
      const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
      const foundProperty = getPropertyBySlug(slug);
      
      if (foundProperty) {
        setProperty(foundProperty);
        setActiveImageIndex(0); // Reset to first image when property changes
        
        // Find similar properties (same price range, beds, or subdivision)
        const similar = rentalProperties
          .filter(p => 
            p.id !== foundProperty.id && (
              Math.abs(p.price - foundProperty.price) <= 500 ||
              p.beds === foundProperty.beds ||
              p.subdivision === foundProperty.subdivision
            )
          )
          .slice(0, 4);
        setSimilarProperties(similar);
        
        // Update document title
        document.title = foundProperty.seoTitle;
        
        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', foundProperty.seoDescription);
        }
      } else {
        router.push('/listings');
      }
    }
  }, [params.slug, router]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (!property) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  return (
    <>
      <Header />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateListing",
            name: property.seoTitle,
            description: property.seoDescription,
            image: property.image,
            url: `https://dreamhomeinvestments.com/listings/${property.slug}`,
            address: {
              "@type": "PostalAddress",
              streetAddress: property.address,
              addressLocality: "Dallas",
              addressRegion: "TX",
              addressCountry: "US",
            },
            offers: {
              "@type": "Offer",
              price: property.price,
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
            numberOfRooms: property.beds,
            numberOfBathroomsTotal: property.baths,
            floorSize: {
              "@type": "QuantitativeValue",
              value: property.sqft,
              unitCode: "FTK",
            },
          }),
        }}
      />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-amber-400 transition-colors">
              Home
            </Link>
            <span className="text-gray-600">/</span>
            <Link href="/listings" className="text-gray-400 hover:text-amber-400 transition-colors">
              Listings
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-amber-400">{property.address}</span>
          </nav>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Column */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <div className="mb-8">
                {/* Main Image */}
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={property.images[activeImageIndex]}
                    alt={`${property.imageAlt} - Photo ${activeImageIndex + 1}`}
                    fill
                    className="object-cover transition-opacity duration-300"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Price Badge */}
                  <div className="absolute bottom-6 left-6">
                    <span className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-bold text-2xl shadow-lg">
                      {formatPrice(property.price)}/mo
                    </span>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-6 left-6 flex gap-2">
                    {property.furnished && (
                      <span className="px-4 py-2 rounded-full bg-emerald-500/90 text-white text-sm font-semibold">
                        Furnished
                      </span>
                    )}
                    <span className="px-4 py-2 rounded-full bg-blue-500/90 text-white text-sm font-semibold">
                      MLS# {property.mlsNumber}
                    </span>
                  </div>

                  {/* Image Counter */}
                  <div className="absolute bottom-6 right-6">
                    <span className="px-4 py-2 rounded-lg bg-black/50 text-white text-sm font-medium backdrop-blur-sm">
                      {activeImageIndex + 1} / {property.images.length}
                    </span>
                  </div>

                  {/* Navigation Arrows */}
                  {property.images.length > 1 && (
                    <>
                      <button
                        onClick={() => setActiveImageIndex((prev) => (prev === 0 ? property.images.length - 1 : prev - 1))}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
                        aria-label="Previous image"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => setActiveImageIndex((prev) => (prev === property.images.length - 1 ? 0 : prev + 1))}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
                        aria-label="Next image"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnail Gallery */}
                {property.images.length > 1 && (
                  <div className="grid grid-cols-3 gap-3">
                    {property.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className={`relative h-24 md:h-32 rounded-xl overflow-hidden transition-all duration-300 ${
                          activeImageIndex === index
                            ? 'ring-2 ring-amber-500 ring-offset-2 ring-offset-slate-900'
                            : 'opacity-70 hover:opacity-100'
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${property.address} - Photo ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 33vw, 200px"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Property Details */}
              <div className="glass-card p-8 mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {property.address}
                </h1>
                <p className="text-xl text-amber-400 font-medium mb-6">
                  {property.subdivision}
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-white mb-1">{property.beds}</div>
                    <div className="text-sm text-gray-400">Bedrooms</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-white mb-1">{property.baths}</div>
                    <div className="text-sm text-gray-400">Bathrooms</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-white mb-1">{property.sqft.toLocaleString()}</div>
                    <div className="text-sm text-gray-400">Sq Ft</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-white mb-1">{property.parking}</div>
                    <div className="text-sm text-gray-400">Parking</div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-white mb-4">Property Description</h2>
                  <p className="text-gray-300 leading-relaxed">
                    {property.seoDescription}
                  </p>
                </div>

                {/* Property Features */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-white mb-4">Property Features</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{property.beds} Bedrooms</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{property.baths} Bathrooms</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{property.sqft.toLocaleString()} Sq Ft</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{property.parking} Parking</span>
                    </div>
                    {property.furnished && (
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">Fully Furnished</span>
                      </div>
                    )}
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">Active Listing</span>
                    </div>
                  </div>
                </div>

                {/* Keywords/Tags */}
                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">Tags</h2>
                  <div className="flex flex-wrap gap-2">
                    {property.keywords.slice(0, 8).map((keyword, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-white/10 text-gray-300 text-sm"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Card */}
              <div className="glass-card p-6 mb-8 sticky top-28">
                <h3 className="text-xl font-semibold text-white mb-6">Interested in this property?</h3>
                
                <div className="space-y-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Inquire Now
                  </button>
                  
                  <a
                    href="tel:+14698378891"
                    className="w-full glass-card py-4 font-semibold text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 border border-white/20 hover:border-amber-400"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call (469) 837-8891
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-gray-400 text-sm text-center">
                    Dream Home Investments<br />
                    508 North 2nd Street<br />
                    Honey Grove, Texas 75446
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Properties */}
          {similarProperties.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-white mb-8">Similar Properties</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {similarProperties.map((prop) => (
                  <Link
                    key={prop.id}
                    href={`/listings/${prop.slug}`}
                    className="glass-card overflow-hidden group hover:border-amber-400/50 transition-all duration-300"
                  >
                    <div className="relative h-48">
                      <Image
                        src={prop.image}
                        alt={prop.imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <span className="px-3 py-1 rounded-lg bg-amber-500 text-slate-900 text-sm font-bold">
                          {formatPrice(prop.price)}/mo
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-semibold mb-1 line-clamp-1 group-hover:text-amber-400 transition-colors">
                        {prop.address}
                      </h3>
                      <p className="text-gray-400 text-sm mb-2 line-clamp-1">{prop.subdivision}</p>
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <span>{prop.beds} bd</span>
                        <span>|</span>
                        <span>{prop.baths} ba</span>
                        <span>|</span>
                        <span>{prop.sqft.toLocaleString()} sqft</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Property Modal */}
      <PropertyModal
        property={property}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

