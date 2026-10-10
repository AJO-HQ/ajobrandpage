import { Smartphone, ArrowUp, ShieldCheck, FileText } from 'lucide-react';
import brandLogo from '../assets/ajo-ng-app-icon.png';
import { ProvidusBankLogo } from './ProvidusBankLogo';
import { APP_CONFIG } from '../config/appConfig';

interface FooterProps {
  onOpenStoreModal: () => void;
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenStoreModal, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      if (window.location.pathname !== '/' && onNavigate) {
        onNavigate('/');
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (onNavigate) {
      onNavigate(href);
    }
  };

  return (
    <footer className="bg-navy-950 text-slate-400 pt-16 pb-12 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('/');
                }}
                className="flex items-center gap-3 group"
              >
                <img
                  src={brandLogo}
                  alt="AJO.ng Brand Logo"
                  className="w-10 h-10 rounded-xl shadow-xs object-contain group-hover:scale-105 transition-transform"
                />
                <span className="text-2xl font-extrabold text-white tracking-tight">
                  AJO<span className="text-brand-500">.ng</span>
                </span>
              </a>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {APP_CONFIG.brand.shortDescription}
            </p>

            <div className="text-xs text-slate-500 italic pt-1">
              "{APP_CONFIG.brand.tagline}"
            </div>

            {/* Providus Bank Partnership Badge in Brand Col */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
                <span className="text-slate-400 font-medium">{APP_CONFIG.partnership.badgeLabel}:</span>
                <ProvidusBankLogo size="sm" variant="dark" />
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              {APP_CONFIG.navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Pages Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Legal & Trust
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/privacy-policy"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('/privacy-policy');
                  }}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
                  <span>Privacy Policy</span>
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('/terms-of-service');
                  }}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-500" />
                  <span>Terms of Service</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Platform & Mobile Application */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Mobile Application
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Available soon for iOS and Android. Download directly to participate in your community rotating savings circles.
            </p>

            <div>
              <button
                onClick={onOpenStoreModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold transition-colors shadow-sm"
              >
                <Smartphone className="w-4 h-4" />
                <span>Get App Availability Alerts</span>
              </button>
            </div>
          </div>

        </div>

        {/* Legal & Regulatory Disclaimer */}
        <div className="py-6 border-b border-slate-900 text-xs text-slate-500 leading-relaxed space-y-1">
          <p>{APP_CONFIG.legal.disclaimer}</p>
          <p className="text-slate-600">{APP_CONFIG.partnership.disclaimer}</p>
        </div>

        {/* Bottom Bar: Copyright, Legal Links & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-4">
            <span>&copy; {APP_CONFIG.brand.copyrightYear} {APP_CONFIG.brand.name}. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-700">&bull;</span>
            <a
              href="/privacy-policy"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('/privacy-policy');
              }}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-slate-700">&bull;</span>
            <a
              href="/terms-of-service"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('/terms-of-service');
              }}
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-slate-300 transition-colors focus:outline-none"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
