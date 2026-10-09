import React, { useState } from 'react';
import { Calendar, CheckCircle2, BellRing, Sparkles, Smartphone } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';

export const ProductShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'rotation' | 'tracker'>('overview');

  const features = [
    {
      id: 'overview' as const,
      icon: Calendar,
      title: 'Automated Rotation & Turn Scheduling',
      summary: 'Never debate whose turn it is to collect next.',
      details: [
        'Predetermined, mutually agreed payout queue',
        'Visible collection dates and total lump sum expected',
        'Clear cycle timeline from start to completion',
      ],
    },
    {
      id: 'tracker' as const,
      icon: CheckCircle2,
      title: 'Shared Real-Time Contribution Ledger',
      summary: 'Total transparency for every kobo contributed.',
      details: [
        'Live contribution status for every group member',
        'Transparent confirmation records for each cycle',
        'Eliminates lost paper notebooks and confusion',
      ],
    },
    {
      id: 'rotation' as const,
      icon: BellRing,
      title: 'Coordinated Cycle Reminders',
      summary: 'Keep everyone on schedule without awkward chasing.',
      details: [
        'Timely alerts when contribution dates approach',
        'Notification when payout turns are completed',
        'Respectful, automated group communication',
      ],
    },
  ];

  return (
    <section id="showcase" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Product Highlights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Designed to Make Community Savings Effortless
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Every screen in the AJO.ng mobile app is built around clarity, community trust, and peace of mind.
          </p>
        </div>

        {/* Interactive Feature & Phone Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Feature Selector Column */}
          <div className="lg:col-span-6 space-y-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              const isActive = activeTab === feature.id;
              return (
                <div
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  className={`cursor-pointer rounded-3xl p-6 sm:p-7 transition-all duration-300 border ${
                    isActive
                      ? 'bg-white border-brand-500 shadow-card ring-1 ring-brand-500/20'
                      : 'bg-white/60 hover:bg-white border-slate-200/80 hover:border-slate-300 shadow-xs'
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveTab(feature.id);
                    }
                  }}
                  aria-pressed={isActive}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? 'bg-brand-600 text-white shadow-brand-glow'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-slate-900">
                          {feature.title}
                        </h3>
                        {isActive && (
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-50 text-brand-700">
                            Active Preview
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {feature.summary}
                      </p>

                      {isActive && (
                        <ul className="mt-4 pt-4 border-t border-slate-100 space-y-2 animate-fade-in">
                          {feature.details.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Phone Display Column */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            <div className="relative">
              <PhoneMockup activeTab={activeTab} />
              
              <div className="mt-4 text-center">
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium bg-white px-3 py-1 rounded-full shadow-2xs border border-slate-200">
                  <Smartphone className="w-3.5 h-3.5 text-brand-600" />
                  Illustrative mobile app preview
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
