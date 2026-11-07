import React from 'react';
import { PlusCircle, UserPlus, SlidersHorizontal, RefreshCw, ArrowRight, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: PlusCircle,
      title: 'Create Your Ajo Group',
      description:
        'Set up a savings circle with your preferred target, contribution amount, and cycle frequency (weekly or monthly).',
      detail: 'Define your collective goal in seconds',
    },
    {
      number: '02',
      icon: UserPlus,
      title: 'Invite Your Community',
      description:
        'Bring together people you trust — friends, family, market associations, or work colleagues — using a simple group invite.',
      detail: 'Keep savings within your trusted network',
    },
    {
      number: '03',
      icon: SlidersHorizontal,
      title: 'Agree on Contribution & Turns',
      description:
        'Every member transparently agrees on the contribution amount, collection dates, and the designated payout order.',
      detail: 'Clear rotation order known to everyone upfront',
    },
    {
      number: '04',
      icon: RefreshCw,
      title: 'Participate & Collect Turns',
      description:
        'Contribute together according to the agreed schedule and receive your lump-sum payout when your designated turn arrives.',
      detail: 'Full cycle visibility from start to finish',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background soft pattern */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How Rotating Savings (Ajo) Works on AJO.ng
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Ajo is simple: members contribute an agreed amount on an agreed schedule, and each member takes turns receiving the total collective pool until everyone has collected.
          </p>
        </div>

        {/* 4 Steps Timeline / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-brand-200 group-hover:text-brand-400 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Sub-detail Pill */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-brand-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                  <span>{step.detail}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Conceptual summary card */}
        <div className="mt-12 max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-brand-600 to-cyanBrand-600 p-6 sm:p-8 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold">The Core Principle: Mutual Trust & Transparency</h4>
            <p className="text-sm text-blue-100 leading-relaxed">
              Every member knows the rules, the contribution amount, and the rotation schedule upfront.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="#showcase"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-brand-700 hover:bg-blue-50 font-bold text-sm shadow-xs transition-colors"
            >
              <span>Explore Features</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
