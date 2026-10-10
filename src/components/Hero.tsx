import React from 'react';
import { Smartphone, ArrowRight, CheckCircle, Users } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';
import { ProvidusBankLogo } from './ProvidusBankLogo';
import { APP_CONFIG } from '../config/appConfig';

interface HeroProps {
  onOpenStoreModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenStoreModal }) => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-hero-gradient"
    >
      {/* Decorative ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-radial from-brand-100/60 via-cyanBrand-50/30 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-cyanBrand-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 text-brand-700 text-xs sm:text-sm font-semibold shadow-2xs">
              <span className="flex h-2 w-2 rounded-full bg-brand-600 animate-pulse" />
              <span>The Modern Home for Rotating Savings (Ajo)</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Your Ajo.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-cyanBrand-600">
                Your Story.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {APP_CONFIG.brand.subheading}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenStoreModal}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-base shadow-brand-glow hover:shadow-lg transition-all duration-200 active:scale-98 flex items-center justify-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                <Smartphone className="w-5 h-5 text-cyanBrand-200 group-hover:scale-110 transition-transform" />
                <span>Download the App</span>
              </button>

              <button
                onClick={() => scrollToSection('#how-it-works')}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-base shadow-subtle hover:border-slate-300 transition-all duration-200 active:scale-98 flex items-center justify-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                <span>Discover How It Works</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust Highlights & Restrained Providus Bank Partnership Mention */}
            <div className="pt-4 border-t border-slate-200/80 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Clear rotation schedules</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Complete group visibility</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Smart cycle reminders</span>
                </div>
              </div>

              {/* Secondary Banking Partnership Indicator */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs text-slate-500">
                <span className="font-semibold text-slate-600">{APP_CONFIG.partnership.badgeLabel}:</span>
                <div className="inline-flex items-center bg-white/95 border border-slate-200/90 px-2.5 py-1 rounded-lg shadow-2xs">
                  <ProvidusBankLogo size="sm" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Smartphone Showcase */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Background Glow Ring */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-brand-400/25 to-cyanBrand-400/25 rounded-full blur-2xl pointer-events-none" />

            {/* Floating Highlights (Desktop) */}
            <div className="hidden sm:block absolute -left-10 top-1/4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-card border border-slate-100 z-30 animate-float">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-900">100% Group Visibility</div>
                  <div className="text-[10px] text-slate-500">Every turn recorded openly</div>
                </div>
              </div>
            </div>

            <div className="hidden sm:block absolute -right-6 bottom-1/4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-card border border-slate-100 z-30 animate-float-delayed">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-900">Your Trusted Circle</div>
                  <div className="text-[10px] text-slate-500">Invite family & friends</div>
                </div>
              </div>
            </div>

            {/* Smartphone Mockup */}
            <PhoneMockup activeTab="overview" />
          </div>

        </div>
      </div>
    </section>
  );
};
