import React, { useState } from 'react';
import { X, Smartphone, Check, BellRing, Apple } from 'lucide-react';
import brandLogo from '../assets/ajo-ng-app-icon.png';
import { APP_CONFIG } from '../config/appConfig';

interface StoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  platform?: 'ios' | 'android' | 'all';
}

export const StoreModal: React.FC<StoreModalProps> = ({
  isOpen,
  onClose,
  platform = 'all',
}) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  const platformTitle =
    platform === 'ios'
      ? 'iOS App (Apple App Store)'
      : platform === 'android'
      ? 'Android App (Google Play Store)'
      : 'AJO.ng Mobile App';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 z-10 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-5">
          <img
            src={brandLogo}
            alt="AJO.ng Brand Icon"
            className="w-12 h-12 rounded-2xl shadow-md"
          />
          <div>
            <div className="text-xs font-semibold text-brand-600 uppercase tracking-wider">
              Official Store Rollout
            </div>
            <h3 id="modal-title" className="text-lg font-bold text-slate-900">
              {platformTitle}
            </h3>
          </div>
        </div>

        {/* Modal Content */}
        {!submitted ? (
          <div>
            <p className="text-sm text-slate-600 leading-relaxed mb-5">
              The official AJO.ng mobile app is currently finalizing public store deployment.
              Enter your email to receive an instant alert the moment the official app goes live on the{' '}
              {platform === 'ios' ? 'Apple App Store' : platform === 'android' ? 'Google Play Store' : 'App Stores'}.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label htmlFor="launch-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Email Address
                </label>
                <input
                  id="launch-email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-md shadow-brand-500/20 transition-all flex items-center justify-center gap-2"
              >
                <BellRing className="w-4 h-4" />
                Notify Me at Launch
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Apple className="w-3.5 h-3.5 text-slate-600" /> {APP_CONFIG.stores.iosVersionRequired}
              </span>
              <span className="flex items-center gap-1">
                <Smartphone className="w-3.5 h-3.5 text-emerald-600" /> {APP_CONFIG.stores.androidVersionRequired}
              </span>
            </div>
          </div>
        ) : (
          <div className="text-center py-4 space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-slate-900">You're on the priority list!</h4>
            <p className="text-sm text-slate-600">
              We will notify <strong className="text-slate-800">{email}</strong> as soon as the official download link is live.
            </p>
            <button
              onClick={onClose}
              className="mt-3 px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
