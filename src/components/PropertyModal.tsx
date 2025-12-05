'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { RentalProperty } from '@/data/rental-properties';

interface PropertyModalProps {
  property: RentalProperty | null;
  isOpen: boolean;
  onClose: () => void;
}

type ModalView = 'details' | 'form' | 'calendar';

export default function PropertyModal({ property, isOpen, onClose }: PropertyModalProps) {
  const [currentView, setCurrentView] = useState<ModalView>('details');

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      if (currentView !== 'details') {
        setCurrentView('details');
      } else {
        onClose();
      }
    }
  }, [onClose, currentView]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleEscape]);

  // Reset view when modal closes
  useEffect(() => {
    if (!isOpen) {
      setCurrentView('details');
    }
  }, [isOpen]);

  if (!isOpen || !property) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleBackToDetails = () => {
    setCurrentView('details');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
      {/* Modal Content */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 border border-white/20 transition-all duration-300"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Form View */}
        {currentView === 'form' && (
          <div className="p-6 md:p-8">
            {/* Back Button */}
            <button
              onClick={handleBackToDetails}
              className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors mb-6"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Property Details
            </button>
            
            <h2 className="text-2xl font-bold text-white mb-2">Inquire About This Property</h2>
            <p className="text-gray-400 mb-6">{property.address} - {formatPrice(property.price)}/mo</p>
            
            <div className="w-full h-[600px] rounded-lg overflow-hidden bg-white">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/9ngrRllhtom7Z3w26NPW"
                className="w-full h-full border-0"
                title="Contact Form"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
        )}

        {/* Calendar View */}
        {currentView === 'calendar' && (
          <div className="p-6 md:p-8">
            {/* Back Button */}
            <button
              onClick={handleBackToDetails}
              className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors mb-6"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Property Details
            </button>
            
            <h2 className="text-2xl font-bold text-white mb-2">Schedule a Viewing</h2>
            <p className="text-gray-400 mb-6">{property.address} - {formatPrice(property.price)}/mo</p>
            
            <div className="w-full h-[600px] rounded-lg overflow-hidden bg-white">
              <iframe
                src="https://api.leadconnectorhq.com/widget/bookings/lighthouse-concierge-personal-calendar-axf6naoc_"
                className="w-full h-full border-0"
                title="Schedule a Meeting"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
        )}

        {/* Details View */}
        {currentView === 'details' && (
          <>
            {/* JSON-LD Structured Data for SEO */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  ...property.structuredData,
                }),
              }}
            />
            
            {/* Property Image */}
            <div className="relative h-64 md:h-80 w-full">
              <Image
                src={property.image}
                alt={property.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
                title={property.seoTitle}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              
              {/* Price Badge */}
              <div className="absolute bottom-4 left-4">
                <span className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-bold text-xl shadow-lg">
                  {formatPrice(property.price)}/mo
                </span>
              </div>

              {/* Furnished Badge */}
              {property.furnished && (
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/90 text-white text-sm font-semibold">
                    Furnished
                  </span>
                </div>
              )}
            </div>

            {/* Property Details */}
            <div className="p-6 md:p-8">
              {/* Address & Subdivision */}
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {property.address}
                </h2>
                <p className="text-amber-400 font-medium text-lg">
                  {property.subdivision}
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="glass-card p-4 text-center">
                  <div className="text-3xl font-bold text-white mb-1">{property.beds}</div>
                  <div className="text-sm text-gray-400">Bedrooms</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-3xl font-bold text-white mb-1">{property.baths}</div>
                  <div className="text-sm text-gray-400">Bathrooms</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-3xl font-bold text-white mb-1">{property.sqft.toLocaleString()}</div>
                  <div className="text-sm text-gray-400">Sq Ft</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-lg font-bold text-white mb-1">{property.parking}</div>
                  <div className="text-sm text-gray-400">Parking</div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="glass-card p-6 mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Property Details</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">MLS #</span>
                    <span className="text-white font-medium">{property.mlsNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Type</span>
                    <span className="text-white font-medium">Rental</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Furnished</span>
                    <span className="text-white font-medium">
                      {property.furnished === null ? 'Unknown' : property.furnished ? 'Yes' : 'No'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status</span>
                    <span className="text-emerald-400 font-medium">Active</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  onClick={() => setCurrentView('form')}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 inline-flex flex-row items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Inquire Now</span>
                </button>
                <button
                  onClick={() => setCurrentView('calendar')}
                  className="glass-card py-4 font-semibold text-white hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2 border border-white/20 hover:border-amber-400"
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Schedule Viewing</span>
                </button>
                <a
                  href="tel:+14698378891"
                  className="glass-card py-4 font-semibold text-white hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2 border border-white/20 hover:border-amber-400"
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

