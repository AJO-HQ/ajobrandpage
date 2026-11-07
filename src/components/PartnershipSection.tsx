import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import brandLogo from '../assets/ajo-ng-app-icon.png';
import { ProvidusBankLogo } from './ProvidusBankLogo';
import { APP_CONFIG } from '../config/appConfig';

export const PartnershipSection: React.FC = () => {
  const pillars = [
    {
      title: 'Institutional Collaboration',
      description:
        'AJO.ng collaborates with Providus Bank to support modern, structured community savings for Nigerians.',
    },
    {
      title: 'Digital Clarity & Trust',
      description:
        'Every cycle schedule, contribution milestone, and payout turn is transparently tracked in the mobile app.',
    },
    {
      title: 'Community-First Experience',
      description:
        'Transforming traditional rotating savings (Ajo) into an organized, stress-free digital routine for trusted circles.',
    },
  ];

  return (
    <section
      id="partnership"
      className="py-16 sm:py-24 bg-gradient-to-b from-white via-brand-50/25 to-slate-50 border-y border-slate-200/70 relative overflow-hidden"
    >
      {/* Soft Ambient Background Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-brand-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-cyanBrand-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {APP_CONFIG.partnership.headline}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {APP_CONFIG.partnership.supportingText}
          </p>
        </div>

        {/* Central Joint Brand Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-card p-6 sm:p-10 lg:p-12 transition-all">
          
          {/* Balanced Logo Composition */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 pb-8 sm:pb-10 border-b border-slate-100">
            
            {/* AJO.ng Logo Block */}
            <div className="flex items-center gap-3.5">
              <img
                src={brandLogo}
                alt="AJO.ng Brand Icon"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl shadow-xs object-contain"
              />
              <div className="text-left">
                <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  AJO<span className="text-brand-600">.ng</span>
                </span>
                <span className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Rotating Savings Platform
                </span>
              </div>
            </div>

            {/* Institutional Link Pill */}
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-600" />
              <span>In Partnership With</span>
            </div>

            {/* Providus Bank Logo Block */}
            <div className="flex items-center">
              <ProvidusBankLogo size="lg" />
            </div>

          </div>

          {/* 3 Value Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 sm:pt-10">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50/70 border border-slate-100 flex flex-col justify-start space-y-2 hover:bg-white hover:border-brand-150 hover:shadow-2xs transition-all duration-200"
              >
                <div className="flex items-center gap-2 text-brand-600 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{pillar.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Institutional Note */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2 text-center sm:text-left">
              <ShieldCheck className="w-4 h-4 text-brand-600 shrink-0" />
              <span>{APP_CONFIG.partnership.disclaimer}</span>
            </div>

            <a
              href="#how-it-works"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 transition-colors cursor-pointer shrink-0"
            >
              <span>See how Ajo works</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
