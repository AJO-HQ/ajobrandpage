import React, { useState, useEffect } from 'react';
import { Menu, X, Smartphone, ArrowRight } from 'lucide-react';
import brandLogo from '../assets/ajo-ng-app-icon.png';
import { APP_CONFIG } from '../config/appConfig';

interface NavbarProps {
  onOpenStoreModal: () => void;
  onNavigate?: (path: string) => void;
  currentPath?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenStoreModal, onNavigate, currentPath = '/' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);

    if (href.startsWith('#')) {
      if (currentPath !== '/' && onNavigate) {
        onNavigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (onNavigate) {
      onNavigate(href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || currentPath !== '/'
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Brand Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/');
            }}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-xl"
          >
            <img
              src={brandLogo}
              alt="AJO.ng Official Logo"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl shadow-xs transition-transform duration-200 group-hover:scale-105 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 leading-none">
                AJO<span className="text-brand-600">.ng</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest leading-tight hidden sm:block">
                Rotating Savings
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {APP_CONFIG.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-brand-600 hover:bg-slate-50/80 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenStoreModal}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-sm hover:shadow-brand-glow transition-all duration-200 active:scale-98 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              <Smartphone className="w-4 h-4" />
              <span>Download App</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-50 md:hidden animate-fade-in">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-navy-950/40 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Drawer Content */}
          <div className="relative bg-white border-b border-slate-200 shadow-xl px-6 py-6 space-y-4 max-h-[calc(100vh-60px)] overflow-y-auto">
            <nav className="flex flex-col space-y-1">
              {APP_CONFIG.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="px-4 py-3 text-base font-semibold text-slate-700 hover:text-brand-600 hover:bg-brand-50/50 rounded-xl transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStoreModal();
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-base shadow-brand-glow flex items-center justify-center gap-2"
              >
                <Smartphone className="w-5 h-5" />
                <span>Download the Mobile App</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
