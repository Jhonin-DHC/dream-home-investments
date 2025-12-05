'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import PropertyModal from '@/components/PropertyModal';
import { rentalProperties, RentalProperty } from '@/data/rental-properties';

export default function RentalPropertiesPage() {
  const [selectedProperty, setSelectedProperty] = useState<RentalProperty | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredProperties = rentalProperties.slice(0, 6);

  const openModal = (property: RentalProperty) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
        {/* Page Header */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Link 
              href="/#portfolio"
              className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors mb-8"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Portfolio
            </Link>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Rental Properties
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Discover our curated selection of premium rental properties in the Dallas-Fort Worth area. 
              From luxury estates to comfortable family homes, we have the perfect property for your lifestyle.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-8">
              <div className="glass-card px-6 py-4">
                <span className="text-3xl font-bold text-amber-400">{rentalProperties.length}</span>
                <span className="text-gray-400 ml-2">Properties</span>
              </div>
              <div className="glass-card px-6 py-4">
                <span className="text-3xl font-bold text-amber-400">
                  {formatPrice(Math.min(...rentalProperties.map(p => p.price)))}
                </span>
                <span className="text-gray-400 ml-2">Starting From</span>
              </div>
              <div className="glass-card px-6 py-4">
                <span className="text-3xl font-bold text-amber-400">DFW</span>
                <span className="text-gray-400 ml-2">Metro Area</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Featured Properties
              </h2>
              <Link 
                href="/listings"
                className="btn-primary"
              >
                View All {rentalProperties.length} Listings
              </Link>
            </div>

            {/* Property Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProperties.map((property) => (
                <div
                  key={property.id}
                  onClick={() => openModal(property)}
                  className="glass-card overflow-hidden cursor-pointer group hover:border-amber-500/50 transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={property.image}
                      alt={property.address}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Price Badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-bold text-lg">
                        {formatPrice(property.price)}/mo
                      </span>
                    </div>

                    {/* Furnished Badge */}
                    {property.furnished && (
                      <div className="absolute top-4 right-4">
                        <span className="px-2 py-1 rounded-full bg-emerald-500/90 text-white text-xs font-semibold">
                          Furnished
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-amber-400 transition-colors">
                      {property.address}
                    </h3>
                    <p className="text-amber-400/80 text-sm mb-4">
                      {property.subdivision}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                          </svg>
                          {property.beds} bd
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zm-2.5 4a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" clipRule="evenodd" />
                          </svg>
                          {property.baths} ba
                        </span>
                        <span>{property.sqft.toLocaleString()} sqft</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All CTA */}
            <div className="text-center mt-12">
              <Link 
                href="/listings"
                className="inline-flex items-center gap-2 text-lg text-amber-400 hover:text-amber-300 transition-colors"
              >
                Browse all {rentalProperties.length} available properties
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Rent With Us */}
        <section className="py-16 md:py-24 bg-black/20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              Why Rent With Dream Home Investments?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Verified Properties</h3>
                <p className="text-gray-400">
                  Every property in our portfolio is thoroughly vetted and verified for quality and authenticity.
                </p>
              </div>
              <div className="glass-card p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Transparent Pricing</h3>
                <p className="text-gray-400">
                  No hidden fees or surprises. What you see is what you get with our straightforward pricing.
                </p>
              </div>
              <div className="glass-card p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
                <p className="text-gray-400">
                  Our dedicated team is always available to assist you with any questions or concerns.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Property Modal */}
      <PropertyModal
        property={selectedProperty}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}
