import React from 'react';
import { Apple, Play, CheckCircle2 } from 'lucide-react';
import brandLogo from '../assets/ajo-ng-app-icon.png';
import { APP_CONFIG } from '../config/appConfig';

interface DownloadSectionProps {
  onOpenStoreModal: (platform?: 'ios' | 'android' | 'all') => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({ onOpenStoreModal }) => {
  const handleStoreClick = (platform: 'ios' | 'android') => {
    const isLive = platform === 'ios' ? APP_CONFIG.stores.isIosLive : APP_CONFIG.stores.isAndroidLive;
    const url = platform === 'ios' ? APP_CONFIG.stores.iosUrl : APP_CONFIG.stores.androidUrl;

    if (isLive && url && url !== '#' && url !== '') {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      onOpenStoreModal(platform);
    }
  };

  return (
    <section id="download" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Container */}
        <div className="relative rounded-[36px] bg-gradient-to-br from-navy-900 via-navy-850 to-brand-950 p-8 sm:p-12 lg:p-16 text-white overflow-hidden shadow-2xl">
          
          {/* Ambient background glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyanBrand-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Start Organizing Your Savings Group Today
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Experience a smarter, more transparent way to participate in Ajo. Available soon on the Apple App Store and Google Play Store.
              </p>

              {/* Store Download Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                
                {/* Apple App Store Button */}
                <button
                  onClick={() => handleStoreClick('ios')}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-bold transition-all duration-200 flex items-center justify-center gap-3 shadow-md active:scale-98 group"
                >
                  <Apple className="w-7 h-7 text-slate-900 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-semibold text-slate-500 leading-none">
                      Download on the
                    </div>
                    <div className="text-sm sm:text-base font-extrabold text-slate-900 leading-tight">
                      App Store
                    </div>
                  </div>
                </button>

                {/* Google Play Store Button */}
                <button
                  onClick={() => handleStoreClick('android')}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold transition-all duration-200 flex items-center justify-center gap-3 border border-slate-700 active:scale-98 group"
                >
                  <Play className="w-6 h-6 text-emerald-400 fill-emerald-400 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-semibold text-slate-400 leading-none">
                      Get it on
                    </div>
                    <div className="text-sm sm:text-base font-extrabold text-white leading-tight">
                      Google Play
                    </div>
                  </div>
                </button>
              </div>

              {/* Platform compatibility notes */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyanBrand-400" />
                  Supports {APP_CONFIG.stores.iosVersionRequired}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyanBrand-400" />
                  Supports {APP_CONFIG.stores.androidVersionRequired}
                </span>
              </div>
            </div>

            {/* Right Column: App Card & QR Code */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-7 border border-white/15 max-w-sm w-full text-center space-y-5 shadow-xl">
                <div className="flex items-center justify-center gap-3">
                  <img
                    src={brandLogo}
                    alt="AJO.ng Brand"
                    className="w-12 h-12 rounded-2xl shadow-md object-contain"
                  />
                  <div className="text-left">
                    <div className="font-extrabold text-lg text-white">AJO.ng App</div>
                    <div className="text-xs text-cyanBrand-300">Official Mobile Platform</div>
                  </div>
                </div>

                {/* QR Code Graphic Box */}
                <div className="bg-white p-5 rounded-2xl mx-auto w-44 h-44 flex flex-col items-center justify-center shadow-inner">
                  {/* Stylized QR Code SVG */}
                  <svg className="w-32 h-32 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 0h4v2h-4v-2zm-4 0h2v4h-2v-4zm2 2h2v4h-2v-4zm2 2h2v2h-2v-2zm-6-4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-6h2v2h-2v-2zm-4 0h2v2h-2v-2zM5 5h2v2H5V5zm12 0h2v2h-2V5zM5 17h2v2H5v-2z" />
                  </svg>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-semibold text-white">Scan with your smartphone</div>
                  <div className="text-[11px] text-slate-300">
                    Get instant access directly on your mobile device
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
