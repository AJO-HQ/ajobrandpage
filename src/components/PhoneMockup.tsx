import React from 'react';
import { CheckCircle2, Clock, Users, ArrowUpRight, ShieldCheck, Bell, ChevronRight, Calendar, CheckCheck } from 'lucide-react';
import brandLogo from '../assets/ajo-ng-app-icon.png';

interface PhoneMockupProps {
  activeTab?: 'overview' | 'rotation' | 'tracker';
  className?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  activeTab = 'overview',
  className = '',
}) => {
  return (
    <div className={`relative mx-auto w-full max-w-[320px] sm:max-w-[340px] select-none ${className}`}>
      {/* Outer Phone Shell */}
      <div className="relative rounded-[44px] bg-slate-900 p-3 shadow-phone ring-1 ring-slate-800">
        {/* Phone Speaker & Dynamic Island */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 z-30 h-5 w-24 bg-black rounded-full flex items-center justify-between px-2.5">
          <div className="h-2.5 w-2.5 rounded-full bg-slate-900 ring-1 ring-slate-800" />
          <div className="h-2 w-2 rounded-full bg-brand-900/60" />
        </div>

        {/* Screen Bezel & Container */}
        <div className="relative overflow-hidden rounded-[36px] bg-slate-50 text-slate-900 min-h-[620px] flex flex-col font-sans border border-slate-200/80 shadow-inner">
          {/* Status Bar */}
          <div className="pt-3 px-6 pb-2 flex justify-between items-center text-[11px] font-semibold text-slate-700 bg-white/80 backdrop-blur-sm z-20">
            <span>9:41</span>
            <div className="flex items-center gap-1.5 text-[10px]">
              <span>5G</span>
              <div className="w-4 h-2.5 border border-slate-700 rounded-sm p-0.5 flex items-center">
                <div className="h-full w-3/4 bg-slate-700 rounded-2xs" />
              </div>
            </div>
          </div>

          {/* App In-Header */}
          <div className="bg-white px-4 pt-2 pb-3 border-b border-slate-100 flex items-center justify-between z-10 shadow-xs">
            <div className="flex items-center gap-2.5">
              <img
                src={brandLogo}
                alt="AJO.ng icon"
                className="w-8 h-8 rounded-lg shadow-xs object-cover"
              />
              <div>
                <div className="text-[10px] text-slate-400 font-medium leading-none">AJO.ng Circle</div>
                <div className="text-xs font-bold text-slate-900">Lekki Co-op Circle</div>
              </div>
            </div>
            <div className="relative p-1.5 rounded-full bg-slate-100 text-slate-600">
              <Bell className="w-3.5 h-3.5" />
              <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-brand-500 rounded-full ring-2 ring-white" />
            </div>
          </div>

          {/* App Body Content based on activeTab */}
          <div className="p-3.5 space-y-3 flex-1 overflow-hidden bg-slate-50/60 transition-all duration-300">
            {activeTab === 'overview' && (
              <>
                {/* Main Highlight Card */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 via-brand-500 to-cyanBrand-600 p-4 text-white shadow-brand-glow">
                  <div className="flex justify-between items-start mb-2.5">
                    <div>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-medium backdrop-blur-xs text-white">
                        <Users className="w-2.5 h-2.5" /> Monthly Savings Pool
                      </span>
                      <div className="text-[11px] text-blue-100 mt-1.5 font-medium">Total Group Pool</div>
                      <div className="text-xl font-extrabold tracking-tight mt-0.5">₦2,400,000</div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] bg-white/25 px-2 py-0.5 rounded-full font-semibold">
                        Turn 3 of 8
                      </span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-3 pt-2.5 border-t border-white/20">
                    <div className="flex justify-between text-[10px] text-blue-100 mb-1">
                      <span>Cycle Progress (6/8 paid)</span>
                      <span className="font-semibold text-white">75%</span>
                    </div>
                    <div className="h-1.5 w-full bg-black/20 rounded-full overflow-hidden">
                      <div className="h-full bg-cyanBrand-300 rounded-full w-3/4" />
                    </div>
                  </div>
                </div>

                {/* Turn Announcement Banner */}
                <div className="rounded-xl bg-white p-3 border border-slate-200/80 shadow-xs flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0">
                      #3
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-800">Your Turn is Active</div>
                      <div className="text-[10px] text-slate-500">Payout Date: 28th October</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] font-extrabold text-brand-600">₦300,000</div>
                    <span className="text-[9px] text-emerald-600 font-semibold flex items-center justify-end gap-0.5">
                      <CheckCircle2 className="w-2.5 h-2.5" /> Next Receiver
                    </span>
                  </div>
                </div>

                {/* Group Members Section */}
                <div className="rounded-xl bg-white p-3 border border-slate-200/80 shadow-xs">
                  <div className="flex justify-between items-center mb-2.5">
                    <div className="text-[11px] font-bold text-slate-800 flex items-center gap-1.5">
                      <span>Member Contributions</span>
                      <span className="text-[9px] px-1.5 py-0.2 bg-slate-100 text-slate-600 rounded-full font-medium">8 Members</span>
                    </div>
                    <span className="text-[10px] font-semibold text-brand-600 flex items-center">
                      Live Status <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>

                  <div className="space-y-2">
                    {[
                      { name: 'Tunde Adebayo (You)', role: 'Turn #3 • Paid', status: 'paid', amount: '₦30,000' },
                      { name: 'Amina Bello', role: 'Turn #1 • Completed', status: 'paid', amount: '₦30,000' },
                      { name: 'Chidi Okonkwo', role: 'Turn #2 • Completed', status: 'paid', amount: '₦30,000' },
                      { name: 'Folake Davies', role: 'Turn #4 • Next', status: 'pending', amount: '₦30,000' },
                    ].map((member, i) => (
                      <div key={i} className="flex items-center justify-between py-1 border-b border-slate-50 last:border-0">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold flex items-center justify-center ring-1 ring-slate-200">
                            {member.name.charAt(0)}
                          </div>
                          <div>
                            <div className="text-[10px] font-semibold text-slate-800 leading-tight">
                              {member.name}
                            </div>
                            <div className="text-[9px] text-slate-400">{member.role}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] font-bold text-slate-800">{member.amount}</div>
                          {member.status === 'paid' ? (
                            <span className="inline-flex items-center gap-0.5 text-[8.5px] text-emerald-600 font-semibold">
                              <CheckCircle2 className="w-2.5 h-2.5" /> Received
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-0.5 text-[8.5px] text-amber-600 font-medium">
                              <Clock className="w-2.5 h-2.5" /> Due soon
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeTab === 'rotation' && (
              <>
                {/* Rotation Schedule View */}
                <div className="rounded-2xl bg-brand-600 p-4 text-white shadow-brand-glow">
                  <div className="flex items-center gap-2 text-xs font-semibold text-cyanBrand-200 mb-1">
                    <Calendar className="w-3.5 h-3.5" /> Full Rotation Queue
                  </div>
                  <div className="text-base font-bold">Agreed Payout Order</div>
                  <p className="text-[11px] text-blue-100 mt-1">
                    8 members • ₦300,000 lump sum per cycle turn
                  </p>
                </div>

                <div className="rounded-xl bg-white p-3 border border-slate-200/80 shadow-xs space-y-2.5">
                  <div className="text-[11px] font-bold text-slate-800 mb-2">Schedule Timeline</div>
                  {[
                    { turn: 'Turn #1', name: 'Amina Bello', date: '28 Aug (Completed)', payout: '₦300,000', done: true },
                    { turn: 'Turn #2', name: 'Chidi Okonkwo', date: '28 Sept (Completed)', payout: '₦300,000', done: true },
                    { turn: 'Turn #3', name: 'Tunde Adebayo (You)', date: '28 Oct (Current)', payout: '₦300,000', current: true },
                    { turn: 'Turn #4', name: 'Folake Davies', date: '28 Nov (Upcoming)', payout: '₦300,000', done: false },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-lg border flex items-center justify-between ${
                        item.current
                          ? 'bg-brand-50/70 border-brand-300 ring-1 ring-brand-300/40'
                          : 'bg-slate-50/50 border-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                          item.current ? 'bg-brand-600 text-white' : item.done ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-600'
                        }`}>
                          {item.turn}
                        </span>
                        <div>
                          <div className="text-[10.5px] font-bold text-slate-800">{item.name}</div>
                          <div className="text-[9px] text-slate-500">{item.date}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] font-bold text-slate-800">{item.payout}</div>
                        {item.done ? (
                          <span className="text-[8.5px] text-emerald-600 font-semibold flex items-center justify-end gap-0.5">
                            <CheckCheck className="w-2.5 h-2.5" /> Disbursed
                          </span>
                        ) : item.current ? (
                          <span className="text-[8.5px] text-brand-600 font-bold">Active Turn</span>
                        ) : (
                          <span className="text-[8.5px] text-slate-400">Scheduled</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeTab === 'tracker' && (
              <>
                {/* Contribution Tracker View */}
                <div className="rounded-2xl bg-slate-900 p-4 text-white shadow-card">
                  <div className="text-[11px] text-slate-400 font-medium">Current Round Collection</div>
                  <div className="text-lg font-extrabold text-white mt-0.5">₦240,000 of ₦240,000</div>
                  <div className="mt-2 flex items-center gap-1 text-[10px] text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-3 h-3" /> All 8 members confirmed paid
                  </div>
                </div>

                <div className="rounded-xl bg-white p-3 border border-slate-200/80 shadow-xs space-y-2">
                  <div className="text-[11px] font-bold text-slate-800 mb-1">Recent Activity Log</div>
                  {[
                    { name: 'Folake Davies', amount: '₦30,000', time: '10 mins ago', status: 'Confirmed' },
                    { name: 'Emeka Kalu', amount: '₦30,000', time: '1 hour ago', status: 'Confirmed' },
                    { name: 'Ibrahim Sani', amount: '₦30,000', time: '3 hours ago', status: 'Confirmed' },
                    { name: 'Tunde Adebayo (You)', amount: '₦30,000', time: 'Today, 8:12 AM', status: 'Confirmed' },
                  ].map((log, idx) => (
                    <div key={idx} className="flex items-center justify-between py-1.5 border-b border-slate-50 last:border-0">
                      <div>
                        <div className="text-[10px] font-semibold text-slate-800">{log.name}</div>
                        <div className="text-[9px] text-slate-400">{log.time}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] font-bold text-slate-800">{log.amount}</div>
                        <span className="text-[8.5px] text-emerald-600 font-semibold flex items-center justify-end gap-0.5">
                          <CheckCircle2 className="w-2.5 h-2.5" /> {log.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Micro disclaimer inside phone */}
            <div className="text-center pt-1">
              <span className="text-[9px] text-slate-400 italic">
                Illustrative interface data for demonstration
              </span>
            </div>
          </div>

          {/* Bottom Mobile Tab Bar */}
          <div className="mt-auto bg-white border-t border-slate-200 px-6 py-2 flex justify-between items-center text-slate-400 text-[9px] font-medium z-10">
            <div className="flex flex-col items-center text-brand-600 font-semibold gap-0.5">
              <div className="w-4 h-4 rounded bg-brand-50 flex items-center justify-center">
                <Users className="w-3 h-3 text-brand-600" />
              </div>
              <span>My Ajo</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Schedule</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span>Activity</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Group</span>
            </div>
          </div>

          {/* Home indicator bar */}
          <div className="h-3 w-full flex justify-center items-center pb-1 bg-white">
            <div className="w-24 h-1 bg-slate-300 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
