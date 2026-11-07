import React from 'react';
import providusLogo from '../assets/providus_logo.png';
import { APP_CONFIG } from '../config/appConfig';

interface ProvidusBankLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const ProvidusBankLogo: React.FC<ProvidusBankLogoProps> = ({
  className = '',
  size = 'lg',
}) => {
  const sizeStyles = {
    sm: 'h-7 sm:h-8',
    md: 'h-9 sm:h-10',
    lg: 'h-10 sm:h-12 lg:h-14',
  };

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <img
        src={providusLogo}
        alt={`${APP_CONFIG.partnership.partnerName} - Official Logo`}
        className={`${sizeStyles[size]} w-auto object-contain`}
        loading="lazy"
      />
    </div>
  );
};
