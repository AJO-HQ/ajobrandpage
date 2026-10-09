import React from 'react';
import { Users, Home, Store, Briefcase, Building2, CheckCircle2 } from 'lucide-react';

export const WhoIsItFor: React.FC = () => {
  const audiences = [
    {
      icon: Users,
      title: 'Friends & Peer Groups',
      tag: 'Social Savings',
      description:
        'Save together for planned trips, festive celebrations, milestone gifts, or shared lifestyle goals with your closest circle.',
      useCase: 'e.g. Annual getaway funds & shared group targets',
    },
    {
      icon: Home,
      title: 'Families & Households',
      tag: 'Household Milestones',
      description:
        'Pool resources transparently for school fees, family events, home improvement projects, or emergency readiness.',
      useCase: 'e.g. School session prep & family development',
    },
    {
      icon: Store,
      title: 'Market Traders & Micro-Businesses',
      tag: 'Trade & Commerce',
      description:
        'Coordinate rotating thrift collections to finance inventory restocks, bulk raw material purchases, and working capital cycles.',
      useCase: 'e.g. Bulk market stock & trade replenishment',
    },
    {
      icon: Briefcase,
      title: 'Salary Earners & Professionals',
      tag: 'Income Discipline',
      description:
        'Turn monthly income into structured discipline by pairing with colleagues to receive periodic lump sums for capital projects.',
      useCase: 'e.g. Lump-sum asset purchases & structured planning',
    },
    {
      icon: Building2,
      title: 'Cooperatives & Community Clubs',
      tag: 'Organized Associations',
      description:
        'Upgrade paper registries to a digital platform where every committee member and contributor has immediate, tamper-evident visibility.',
      useCase: 'e.g. Club thrift rounds & departmental savings',
    },
  ];

  return (
    <section id="who-its-for" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyanBrand-50 text-cyanBrand-700 text-xs font-bold uppercase tracking-wider">
            <span>Built for Every Community</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Designed for Every Group Working Toward Shared Goals
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether you are three friends saving for a project or an association organizing monthly rounds, AJO.ng adapts to your circle’s rhythm.
          </p>
        </div>

        {/* 5 Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {audiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative rounded-3xl p-7 bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-brand-300 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-200/60 text-slate-700">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-brand-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 flex items-center gap-2 text-xs font-medium text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{item.useCase}</span>
                </div>
              </div>
            );
          })}

          {/* Value Summary Card */}
          <div className="rounded-3xl p-7 bg-gradient-to-br from-navy-900 via-navy-850 to-brand-950 text-white flex flex-col justify-between shadow-card">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/20 text-cyanBrand-400 text-xs font-semibold mb-5">
                <span>✦ Community First</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Your Group, Your Rules</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                AJO.ng does not dictate your group sizes or frequencies. You define your savings terms, agree transparently with your members, and manage your cycles with ease.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-800 text-xs text-slate-400">
              Free to start • Invite only trusted members
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
