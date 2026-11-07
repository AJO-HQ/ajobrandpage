import React, { useState } from 'react';
import { Calendar, CheckCircle2, BellRing, Smartphone, Laptop, Target, TrendingUp } from 'lucide-react';
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Save Together or Towards Your Own Goals.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether you're organizing a rotating savings group or working towards a personal financial goal, AJO.ng gives you a simpler way to save.
          </p>
        </div>

        {/* Rotating Ajo Savings */}
        <div className="mb-8">
          <div className="mb-2">
            <span className="text-xs font-semibold text-slate-500">Community Thrift Circles</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Rotating Ajo Savings
          </h3>
          <p className="mt-1 text-slate-600 text-sm sm:text-base max-w-2xl">
            Coordinate with friends, family, or colleagues with automated rotation turns, transparent contribution records, and timely cycle alerts.
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

        {/* Independent Personal Goal-Based Savings */}
        <div className="mt-20 pt-16 border-t border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Copy & Benefits */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="mb-2">
                  <span className="text-xs font-semibold text-slate-500">Personal Savings</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Save Towards What Matters to You.
                </h3>
                <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  Have a personal financial goal? Set your target, save at your own pace, and track your progress with AJO.ng. No Ajo group required.
                </p>
              </div>

              {/* Core Attributes */}
              <div className="space-y-3.5 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Define Your Personal Target</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Choose what you want to achieve — a new gadget, travel fund, emergency reserve, or personal milestone — and define your exact target amount.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Save at Your Own Pace</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Add funds whenever you want without rigid group deadlines or rotation dependencies. You stay in complete control of your timeline.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">100% Independent Experience</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Completely private to you. Joining, creating, or depending on an Ajo group is never a requirement for personal goal savings.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Illustrative Goal Card Mockup */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center">
              <div className="w-full max-w-md rounded-3xl bg-white border border-slate-200/90 shadow-card p-6 sm:p-8 space-y-6">
                
                {/* Goal Header */}
                <div className="flex items-start justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center border border-brand-100 shrink-0">
                      <Laptop className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                        Personal Savings Goal
                      </span>
                      <h4 className="text-xl font-extrabold text-slate-900 leading-snug">
                        New Laptop
                      </h4>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-full">
                    64% Complete
                  </span>
                </div>

                {/* Progress Numbers */}
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Amount Saved</div>
                      <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                        ₦320,000
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-500 font-medium">Target Amount</div>
                      <div className="text-base sm:text-lg font-bold text-slate-600">
                        ₦500,000
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar with 64% fill */}
                  <div className="space-y-1.5 pt-1">
                    <div className="h-3.5 w-full bg-slate-100 rounded-full overflow-hidden p-0.5">
                      <div
                        className="h-full bg-gradient-to-r from-brand-600 to-cyanBrand-500 rounded-full transition-all duration-500"
                        style={{ width: '64%' }}
                      />
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                      <span>₦0</span>
                      <span className="text-brand-700 font-semibold">₦180,000 Remaining</span>
                      <span>₦500,000 Target</span>
                    </div>
                  </div>
                </div>

                {/* Goal Parameters Box */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Participation Type</span>
                    <span className="font-bold text-brand-700">Individual (No Ajo Group Required)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Savings Pace</span>
                    <span className="font-bold text-slate-800">Self-Paced / Flexible Deposits</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Progress Tracking</span>
                    <span className="font-bold text-emerald-700">Real-Time Milestone Updates</span>
                  </div>
                </div>

                {/* Illustrative Disclaimer */}
                <div className="pt-2 border-t border-slate-100 text-center">
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                    <Smartphone className="w-3.5 h-3.5 text-brand-600" />
                    Illustrative mobile app preview • Fictional goal values
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
