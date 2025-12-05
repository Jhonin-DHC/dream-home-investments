'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import PropertyModal from '@/components/PropertyModal';
import { rentalProperties, RentalProperty } from '@/data/rental-properties';

const ITEMS_PER_PAGE = 12;

type SortOption = 'price-asc' | 'price-desc' | 'beds-desc' | 'sqft-desc';

export default function ListingsPage() {
  const [selectedProperty, setSelectedProperty] = useState<RentalProperty | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('price-desc');
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    minBeds: '',
    furnished: 'all' as 'all' | 'yes' | 'no',
  });

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

  // Filter and sort properties
  const filteredProperties = useMemo(() => {
    let result = [...rentalProperties];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.address.toLowerCase().includes(query) ||
          p.subdivision.toLowerCase().includes(query)
      );
    }

    // Price filters
    if (filters.minPrice) {
      result = result.filter((p) => p.price >= parseInt(filters.minPrice));
    }
    if (filters.maxPrice) {
      result = result.filter((p) => p.price <= parseInt(filters.maxPrice));
    }

    // Beds filter
    if (filters.minBeds) {
      result = result.filter((p) => p.beds >= parseInt(filters.minBeds));
    }

    // Furnished filter
    if (filters.furnished === 'yes') {
      result = result.filter((p) => p.furnished === true);
    } else if (filters.furnished === 'no') {
      result = result.filter((p) => p.furnished === false);
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'beds-desc':
        result.sort((a, b) => b.beds - a.beds);
        break;
      case 'sqft-desc':
        result.sort((a, b) => b.sqft - a.sqft);
        break;
    }

    return result;
  }, [searchQuery, filters, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredProperties.length / ITEMS_PER_PAGE);
  const paginatedProperties = filteredProperties.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setFilters({
      minPrice: '',
      maxPrice: '',
      minBeds: '',
      furnished: 'all',
    });
    setSortBy('price-desc');
    setCurrentPage(1);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
        {/* Page Header */}
        <section className="py-12 md:py-16 border-b border-white/10">
          <div className="container mx-auto px-4">
            <Link 
              href="/portfolio/rental-properties"
              className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors mb-6"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Rental Properties
            </Link>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              All Rental Listings
            </h1>
            <p className="text-lg text-gray-300">
              Browse our complete collection of {rentalProperties.length} premium rental properties
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-6 bg-black/20 sticky top-16 z-30 border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search by address or subdivision..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-slate-800/50 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/50 transition-colors"
                  />
                </div>
              </div>

              {/* Filter Controls */}
              <div className="flex flex-wrap gap-3">
                {/* Price Range */}
                <select
                  value={filters.minPrice}
                  onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                  className="px-4 py-3 rounded-lg bg-slate-800/50 border border-white/10 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                >
                  <option value="">Min Price</option>
                  <option value="5000">$5,000+</option>
                  <option value="7500">$7,500+</option>
                  <option value="10000">$10,000+</option>
                  <option value="15000">$15,000+</option>
                  <option value="20000">$20,000+</option>
                </select>

                <select
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                  className="px-4 py-3 rounded-lg bg-slate-800/50 border border-white/10 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                >
                  <option value="">Max Price</option>
                  <option value="10000">Up to $10,000</option>
                  <option value="15000">Up to $15,000</option>
                  <option value="20000">Up to $20,000</option>
                  <option value="30000">Up to $30,000</option>
                  <option value="50000">Up to $50,000</option>
                </select>

                {/* Beds */}
                <select
                  value={filters.minBeds}
                  onChange={(e) => handleFilterChange('minBeds', e.target.value)}
                  className="px-4 py-3 rounded-lg bg-slate-800/50 border border-white/10 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                >
                  <option value="">Beds</option>
                  <option value="2">2+ Beds</option>
                  <option value="3">3+ Beds</option>
                  <option value="4">4+ Beds</option>
                  <option value="5">5+ Beds</option>
                  <option value="6">6+ Beds</option>
                </select>

                {/* Furnished */}
                <select
                  value={filters.furnished}
                  onChange={(e) => handleFilterChange('furnished', e.target.value as 'all' | 'yes' | 'no')}
                  className="px-4 py-3 rounded-lg bg-slate-800/50 border border-white/10 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                >
                  <option value="all">Furnished</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="px-4 py-3 rounded-lg bg-slate-800/50 border border-white/10 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                >
                  <option value="price-desc">Price: High to Low</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="beds-desc">Most Bedrooms</option>
                  <option value="sqft-desc">Largest</option>
                </select>

                {/* Clear Filters */}
                <button
                  onClick={clearFilters}
                  className="px-4 py-3 rounded-lg bg-slate-700/50 border border-white/10 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  Clear
                </button>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-gray-400">
              Showing {paginatedProperties.length} of {filteredProperties.length} properties
              {filteredProperties.length !== rentalProperties.length && (
                <span className="ml-1">(filtered from {rentalProperties.length} total)</span>
              )}
            </div>
          </div>
        </section>

        {/* Property Grid */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            {paginatedProperties.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {paginatedProperties.map((property) => (
                    <article
                      key={property.id}
                      className="glass-card overflow-hidden group hover:border-amber-500/50 transition-all duration-300"
                      itemScope
                      itemType="https://schema.org/RealEstateListing"
                    >
                      <Link 
                        href={`/listings/${property.slug}`}
                        className="block relative h-48 overflow-hidden"
                        title={property.seoTitle}
                      >
                        <Image
                          src={property.image}
                          alt={property.imageAlt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          itemProp="image"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        
                        {/* Price Badge */}
                        <div className="absolute bottom-3 left-3">
                          <span 
                            className="px-2 py-1 rounded-md bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-bold text-sm"
                            itemProp="price"
                          >
                            {formatPrice(property.price)}/mo
                          </span>
                        </div>

                        {/* Furnished Badge */}
                        {property.furnished && (
                          <div className="absolute top-3 right-3">
                            <span className="px-2 py-1 rounded-full bg-emerald-500/90 text-white text-xs font-semibold">
                              Furnished
                            </span>
                          </div>
                        )}
                      </Link>

                      <div className="p-4">
                        <Link href={`/listings/${property.slug}`}>
                          <h3 
                            className="text-sm font-semibold text-white mb-1 group-hover:text-amber-400 transition-colors line-clamp-1"
                            itemProp="name"
                          >
                            {property.address}
                          </h3>
                        </Link>
                        <p className="text-amber-400/80 text-xs mb-3 line-clamp-1" itemProp="address">
                          {property.subdivision}
                        </p>

                        <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                          <span>{property.beds} bd</span>
                          <span className="text-gray-600">|</span>
                          <span>{property.baths} ba</span>
                          <span className="text-gray-600">|</span>
                          <span>{property.sqft.toLocaleString()} sqft</span>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <button
                            onClick={() => openModal(property)}
                            className="flex-1 px-3 py-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 text-xs font-medium transition-colors"
                          >
                            Quick View
                          </button>
                          <Link
                            href={`/listings/${property.slug}`}
                            className="flex-1 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors text-center"
                          >
                            Details
                          </Link>
                        </div>
                      </div>

                      {/* Hidden SEO meta */}
                      <meta itemProp="description" content={property.seoDescription} />
                    </article>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-12">
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 rounded-lg bg-slate-800/50 border border-white/10 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-700/50 transition-colors"
                    >
                      Previous
                    </button>
                    
                    <div className="flex items-center gap-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1)
                        .filter((page) => {
                          if (totalPages <= 7) return true;
                          if (page === 1 || page === totalPages) return true;
                          if (Math.abs(page - currentPage) <= 1) return true;
                          return false;
                        })
                        .map((page, index, array) => {
                          const showEllipsis = index > 0 && page - array[index - 1] > 1;
                          return (
                            <span key={page} className="flex items-center">
                              {showEllipsis && (
                                <span className="px-2 text-gray-500">...</span>
                              )}
                              <button
                                onClick={() => setCurrentPage(page)}
                                className={`w-10 h-10 rounded-lg transition-colors ${
                                  currentPage === page
                                    ? 'bg-amber-500 text-slate-900 font-bold'
                                    : 'bg-slate-800/50 border border-white/10 text-white hover:bg-slate-700/50'
                                }`}
                              >
                                {page}
                              </button>
                            </span>
                          );
                        })}
                    </div>
                    
                    <button
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 rounded-lg bg-slate-800/50 border border-white/10 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-700/50 transition-colors"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <svg className="w-16 h-16 mx-auto text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <h3 className="text-xl font-semibold text-white mb-2">No properties found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-primary"
                >
                  Clear All Filters
                </button>
              </div>
            )}
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

