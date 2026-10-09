import React, { useEffect } from 'react';
import { Shield, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface PrivacyPolicyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Privacy Policy — AJO.ng';
  }, []);

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-white min-h-screen text-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Back Navigation */}
        <div className="mb-8">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors p-1 -ml-1 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="space-y-4 pb-8 border-b border-slate-200">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5" />
            <span>Legal Documentation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            Last Updated: October 2026
          </p>
        </div>

        {/* Policy Content Body */}
        <div className="space-y-10 text-slate-700 text-sm sm:text-base leading-relaxed mt-10">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              1. Introduction & Scope
            </h2>
            <p>
              {APP_CONFIG.brand.name} ("we," "our," or "us") respects your privacy and is committed to being transparent about how personal data is handled.
            </p>
            <p>
              This Privacy Policy describes the practices applicable to visitors of our official marketing website (<a href="https://ajo.ng" className="text-brand-600 hover:underline">ajo.ng</a>) and individuals who communicate with us or register interest in our upcoming mobile applications.
            </p>
            <p className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600">
              <strong>Note on Mobile Application Services:</strong> The mobile application for rotating savings group coordination will feature dedicated, in-app end-user data collection and privacy terms upon public rollout.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              2. Information We May Collect
            </h2>
            <p>
              Depending on how you interact with our website, we may collect information in the following categories:
            </p>
            <ul className="space-y-2.5 pl-2">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-1" />
                <span>
                  <strong>Information You Provide Voluntarily:</strong> When you submit your email address for launch alerts, fill out an enquiry form, or reach out to our support channels, we collect the contact details and message contents you provide.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-1" />
                <span>
                  <strong>Technical & Device Data:</strong> When you browse our website, standard web server logs may automatically record basic technical data such as browser type, operating system, language preferences, referring URLs, and approximate geographic region.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              3. How We Use Collected Information
            </h2>
            <p>We use the information we collect solely for legitimate business purposes, including:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
              <li>Notifying you about the availability of the AJO.ng mobile application on official app stores.</li>
              <li>Responding directly to your enquiries, feedback, or support requests.</li>
              <li>Maintaining website performance, stability, and security.</li>
              <li>Ensuring compliance with applicable legal and regulatory obligations.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              4. Data Sharing & Service Providers
            </h2>
            <p>
              We do not sell, rent, or trade your personal information to third parties. We may share information with trusted third parties only in the following limited circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
              <li>
                <strong>Infrastructure & Hosting Providers:</strong> Qualified vendors that support our website hosting, email dispatch, and security operations under confidentiality agreements.
              </li>
              <li>
                <strong>Banking & Institutional Partners:</strong> In connection with operational banking infrastructure, such as our collaboration with {APP_CONFIG.partnership.partnerName}, strictly where required for service provisioning.
              </li>
              <li>
                <strong>Legal & Regulatory Authorities:</strong> Where we are required to do so by applicable law, court order, or governmental regulation.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              5. Data Retention
            </h2>
            <p>
              We retain personal data provided through our website (such as launch notification emails) only for as long as necessary to fulfill the purposes for which it was collected or to comply with statutory retention requirements. You may request deletion of your contact information at any time.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              6. Information Security Practices
            </h2>
            <p>
              We implement reasonable organizational, administrative, and technical safeguards designed to protect personal information against unauthorized access, loss, alteration, or misuse.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 italic">
              Please note that while we take responsible precautions, no method of transmission over the internet or electronic storage system is completely infallible, and absolute security cannot be guaranteed.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              7. Your Privacy Rights
            </h2>
            <p>
              In accordance with applicable Nigerian data protection regulations (including the Nigeria Data Protection Act / NDPA), you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
              <li>Request confirmation of whether we hold your personal information.</li>
              <li>Request access to or correction of inaccurate personal data.</li>
              <li>Request the erasure of your contact details from our notification lists.</li>
              <li>Object to or restrict specific processing of your information.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact our privacy desk at{' '}
              <a href={`mailto:${APP_CONFIG.contact.privacyEmail}`} className="text-brand-600 font-medium hover:underline">
                {APP_CONFIG.contact.privacyEmail}
              </a>.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              8. Cookies & Website Analytics
            </h2>
            <p>
              Our website may utilize essential technical cookies to ensure smooth navigation and core functionality. We do not deploy invasive cross-site advertising trackers on this marketing website.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              9. Children's Privacy
            </h2>
            <p>
              The AJO.ng platform and website are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe a minor has provided us with personal information, please contact us immediately for prompt deletion.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              10. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect evolving practices or regulatory requirements. Any updates will be published on this page with a revised "Last Updated" date.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3 pt-6 border-t border-slate-200">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              11. Contact Information
            </h2>
            <p>
              If you have any questions, enquiries, or requests regarding this Privacy Policy, please contact our team:
            </p>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-sm">
              <div className="font-bold text-slate-900">{APP_CONFIG.brand.name} Privacy Desk</div>
              <div>Email: <a href={`mailto:${APP_CONFIG.contact.privacyEmail}`} className="text-brand-600 font-medium hover:underline">{APP_CONFIG.contact.privacyEmail}</a></div>
              <div>General Support: <a href={`mailto:${APP_CONFIG.contact.supportEmail}`} className="text-brand-600 font-medium hover:underline">{APP_CONFIG.contact.supportEmail}</a></div>
              <div>Location: {APP_CONFIG.contact.officeLocation}</div>
            </div>
          </section>

        </div>

        {/* Bottom Navigation CTA */}
        <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => onNavigate('/')}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors text-center"
          >
            ← Return to Homepage
          </button>
          <button
            onClick={() => onNavigate('/terms-of-service')}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-700 font-semibold text-sm transition-colors text-center"
          >
            View Terms of Service &rarr;
          </button>
        </div>

      </div>
    </div>
  );
};
