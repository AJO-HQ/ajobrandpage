import React, { useEffect } from 'react';
import { FileText, ArrowLeft } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface TermsOfServicePageProps {
  onNavigate: (path: string) => void;
}

export const TermsOfServicePage: React.FC<TermsOfServicePageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Terms of Service — AJO.ng';
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
            <FileText className="w-3.5 h-3.5" />
            <span>Legal Documentation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            Last Updated: October 2026
          </p>
        </div>

        {/* Terms Content Body */}
        <div className="space-y-10 text-slate-700 text-sm sm:text-base leading-relaxed mt-10">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              1. Acceptance & Scope of Terms
            </h2>
            <p>
              By accessing or browsing the {APP_CONFIG.brand.name} website (<a href="https://ajo.ng" className="text-brand-600 hover:underline">ajo.ng</a>), you agree to be bound by these Terms of Service and our <button onClick={() => onNavigate('/privacy-policy')} className="text-brand-600 font-semibold hover:underline inline">Privacy Policy</button>. If you do not agree with any part of these terms, you should discontinue use of the website.
            </p>
            <p className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600">
              <strong>Scope:</strong> These terms specifically govern visitors to our marketing website. The upcoming AJO.ng mobile application will incorporate separate, comprehensive End User License Agreements (EULA) and group participation terms upon rollout.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              2. Website Use & Permitted Conduct
            </h2>
            <p>
              The website is made available for informational purposes regarding AJO.ng and rotating savings group coordination. You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
              <li>Use the website in any manner that violates applicable Nigerian federal or state laws.</li>
              <li>Attempt to interfere with or compromise the system integrity, performance, or security of the website.</li>
              <li>Scrape, duplicate, or reverse-engineer any proprietary elements, designs, or code from the website.</li>
              <li>Submit false, misleading, or deceptive contact information through any online form.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              3. Nature of the Brand & Platform
            </h2>
            <p>
              AJO.ng provides digital coordination, record-keeping, and schedule-management tools for rotating savings circles (Ajo/Esusu).
            </p>
            <p>
              Unless explicitly confirmed in formal public disclosures upon launch, marketing content on this website does not constitute financial advice, deposit insurance promises, or an endorsement of individual peer participants in a user-created group.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              4. Intellectual Property Rights
            </h2>
            <p>
              All trademarks, trade names, brand logos, graphic assets, interface illustrations, text copy, and software code displayed on this website are the intellectual property of {APP_CONFIG.brand.name} or its licensors, protected under Nigerian and international copyright and trademark laws.
            </p>
            <p>
              Unauthorized copying, modification, or redistribution of the official AJO.ng brand icon, design assets, or distinctive marks without prior written consent is strictly prohibited.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              5. Third-Party Links & Banking Services
            </h2>
            <p>
              Our website may reference external platforms (such as the Apple App Store and Google Play Store) or authorized institutional partners (such as {APP_CONFIG.partnership.partnerName}).
            </p>
            <p>
              We do not control and are not responsible for the independent terms, privacy policies, or content of third-party websites or services. Your interaction with external platforms is governed by their respective terms.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              6. Disclaimers of Warranties
            </h2>
            <p>
              This website is provided on an "as is" and "as available" basis without representations or warranties of any kind, whether express or implied.
            </p>
            <p>
              We make reasonable efforts to maintain accurate information on this website, but we do not guarantee that all interface illustrations, launch timelines, or descriptions will remain free from errors, omissions, or uninterrupted availability.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              7. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law, {APP_CONFIG.brand.name}, its founders, directors, employees, and affiliates shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your access to or inability to use this website.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              8. Modifications to Terms
            </h2>
            <p>
              We reserve the right to revise or update these Terms of Service at any time. Material changes will be indicated by updating the "Last Updated" date at the top of this page. Your continued use of the website following any changes constitutes acceptance of the revised terms.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3 pt-6 border-t border-slate-200">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              9. Contact & Legal Enquiries
            </h2>
            <p>
              For legal notices, terms questions, or institutional enquiries, please contact:
            </p>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-sm">
              <div className="font-bold text-slate-900">{APP_CONFIG.brand.name} Legal Desk</div>
              <div>Email: <a href={`mailto:${APP_CONFIG.contact.legalEmail}`} className="text-brand-600 font-medium hover:underline">{APP_CONFIG.contact.legalEmail}</a></div>
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
            onClick={() => onNavigate('/privacy-policy')}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-700 font-semibold text-sm transition-colors text-center"
          >
            View Privacy Policy &rarr;
          </button>
        </div>

      </div>
    </div>
  );
};
