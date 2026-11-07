import React from 'react';
import { Users2, Eye, CalendarClock, Target, Check } from 'lucide-react';

export const ValueProposition: React.FC = () => {
  const values = [
    {
      icon: Users2,
      title: 'Bringing Your People Together',
      description:
        'Ajo has always thrived on trust and community. AJO.ng gives your trusted circles — family, colleagues, and friends — a dedicated digital space to coordinate seamlessly.',
      badge: 'Community First',
    },
    {
      icon: Eye,
      title: 'Clear & Shared Visibility',
      description:
        'Eliminate confusion and manual record books. Every member can clearly see the cycle schedule, past contributions, and upcoming payout turns at any time.',
      badge: 'Zero Guesswork',
    },
    {
      icon: CalendarClock,
      title: 'Encouraging Consistency',
      description:
        'Help everyone stay on track with organized cycle reminders and transparent timelines that encourage accountability across the group.',
      badge: 'Habit Building',
    },
    {
      icon: Target,
      title: 'Achieving Shared Milestones',
      description:
        'Whether preparing for seasonal expenses, bulk inventory, or personal projects, rotating savings turn shared discipline into tangible lump-sum milestones.',
      badge: 'Goal Focused',
    },
  ];

  return (
    <section id="value-proposition" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            A More Organized Way to Participate in Community Savings
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Rotating savings (Ajo) have powered generations of communal growth. AJO.ng honors this trusted tradition by replacing spreadsheets, messy chats, and physical notebooks with a clean, transparent mobile experience.
          </p>
        </div>

        {/* 4 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-brand-200 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-brand-500/10 text-brand-600 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-200/60 text-slate-700 group-hover:bg-brand-50 group-hover:text-brand-700 transition-colors">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-slate-500 group-hover:text-brand-600 transition-colors">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Designed specifically for rotating savings circles</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
