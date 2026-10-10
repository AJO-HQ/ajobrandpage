import React, { useState } from 'react';
import { Building2 } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

/**
 * Official Providus Bank Logo Component
 * 
 * Asset location:
 * Place the official Providus Bank logo file at `/public/providus-bank-logo.png` (or `.svg`)
 * or inside `src/assets/providus-bank-logo.png`.
 * 
 * This component handles loading gracefully with zero layout shift,
 * preserving natural aspect ratio without distortion, and falling back
 * to a clean institutional emblem and wordmark if the asset is not yet added.
 */

interface ProvidusBankLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark' | 'neutral';
}

export const ProvidusBankLogo: React.FC<ProvidusBankLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'neutral',
}) => {
  const [imageError, setImageError] = useState(false);
  const logoPath = '/providus-bank-logo.png';

  const sizeStyles = {
    sm: 'h-6 sm:h-7',
    md: 'h-8 sm:h-10',
    lg: 'h-10 sm:h-12',
  };

  const textStyles = {
    sm: 'text-xs',
    md: 'text-sm sm:text-base',
    lg: 'text-base sm:text-lg',
  };

  const iconStyles = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  // If official logo image exists and loads successfully
  if (!imageError) {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <img
          src={logoPath}
          alt={`${APP_CONFIG.partnership.partnerName} - Official Logo`}
          onError={() => setImageError(true)}
          className={`${sizeStyles[size]} w-auto object-contain transition-opacity duration-200`}
          loading="lazy"
        />
      </div>
    );
  }

  // Institutional verified typography fallback
  return (
    <div
      className={`inline-flex items-center gap-2 font-bold tracking-tight select-none ${
        variant === 'dark'
          ? 'text-white'
          : variant === 'light'
          ? 'text-slate-900'
          : 'text-slate-800'
      } ${className}`}
      aria-label={`${APP_CONFIG.partnership.partnerName} Institutional Mark`}
    >
      <div
        className={`rounded-lg flex items-center justify-center ${
          variant === 'dark'
            ? 'bg-slate-800 text-cyanBrand-400'
            : 'bg-brand-50 text-brand-700 border border-brand-200/80'
        } ${size === 'sm' ? 'p-1' : size === 'lg' ? 'p-2' : 'p-1.5'}`}
      >
        <Building2 className={iconStyles[size]} />
      </div>
      <div className="flex flex-col leading-tight">
        <span className={`font-black uppercase tracking-wider ${textStyles[size]}`}>
          {APP_CONFIG.partnership.partnerName}
        </span>
        {size !== 'sm' && (
          <span className="text-[10px] tracking-widest text-slate-500 font-semibold uppercase">
            Institutional Partner
          </span>
        )}
      </div>
    </div>
  );
};
