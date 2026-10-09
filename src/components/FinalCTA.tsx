import React from 'react';
import { Smartphone, Heart } from 'lucide-react';
import brandLogo from '../assets/ajo-ng-app-icon.png';

interface FinalCTAProps {
  onOpenStoreModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenStoreModal }) => {
  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Box */}
        <div className="relative rounded-[36px] bg-gradient-to-r from-brand-600 via-brand-500 to-cyanBrand-600 p-8 sm:p-14 lg:p-16 text-white shadow-2xl overflow-hidden text-center">
          
          {/* Subtle background embellishment */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            {/* Brand Icon Center */}
            <div className="inline-flex p-3 rounded-2xl bg-white shadow-md mx-auto">
              <img
                src={brandLogo}
                alt="AJO.ng icon"
                className="w-12 h-12 rounded-xl object-contain"
              />
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Ready to Save Together, Better?
            </h2>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-blue-50 max-w-2xl mx-auto leading-relaxed">
              Empower your family, colleagues, and friends with the clarity and structure of modern rotating savings.
            </p>

            {/* CTA Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenStoreModal}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-slate-50 text-brand-700 font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200 active:scale-98 flex items-center justify-center gap-3 group"
              >
                <Smartphone className="w-5 h-5 text-brand-600 group-hover:scale-110 transition-transform" />
                <span>Download the Mobile App</span>
              </button>
            </div>

            {/* Trust Microcopy */}
            <div className="pt-4 text-xs text-blue-100 flex items-center justify-center gap-2">
              <Heart className="w-3.5 h-3.5 text-cyanBrand-200" />
              <span>Designed with care for Nigerian community savings circles</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
