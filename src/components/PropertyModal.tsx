'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { RentalProperty } from '@/data/rental-properties';

interface PropertyModalProps {
  property: RentalProperty | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PropertyModal({ property, isOpen, onClose }: PropertyModalProps) {
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

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

  if (!isOpen || !property) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
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

        {/* Property Image */}
        <div className="relative h-64 md:h-80 w-full">
          <Image
            src={property.image}
            alt={property.address}
            fill
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
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
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              onClick={onClose}
              className="flex-1 btn-primary text-center py-4 text-lg font-semibold"
            >
              Schedule a Viewing
            </a>
            <a
              href={`tel:+14698378891`}
              className="flex-1 glass-card text-center py-4 text-lg font-semibold text-white hover:bg-white/10 transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

