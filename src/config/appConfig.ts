/**
 * Centralized Application & Brand Configuration for AJO.ng
 *
 * Update official store links, social handles, partnership details,
 * and company disclosures here when approved for public release.
 */

export interface StoreLinkConfig {
  iosUrl: string;
  androidUrl: string;
  isIosLive: boolean;
  isAndroidLive: boolean;
  iosVersionRequired: string;
  androidVersionRequired: string;
}

export interface PartnershipConfig {
  partnerName: string;
  badgeLabel: string;
  eyebrow: string;
  headline: string;
  statement: string;
  supportingText: string;
  disclaimer: string;
}

export const APP_CONFIG = {
  brand: {
    name: 'AJO.ng',
    tagline: 'Your Ajo. Your Story.',
    subheading:
      'Bring your people together, build a consistent savings habit, and work toward shared goals with a more organized way to participate in Ajo.',
    shortDescription:
      'AJO.ng is a modern mobile platform dedicated to organizing and simplifying community rotating savings groups across Nigeria.',
    copyrightYear: new Date().getFullYear(),
  },

  /**
   * Authorized Banking Partnership Reference.
   * Centralized and easily editable upon final wording confirmation.
   */
  partnership: {
    partnerName: 'Providus Bank',
    badgeLabel: 'Banking Partner',
    eyebrow: 'OUR BANKING PARTNER',
    headline: 'Built on a Banking Partnership',
    statement: 'In partnership with Providus Bank',
    supportingText: 'AJO.ng works with Providus Bank as part of its banking partnership.',
    disclaimer: 'Banking infrastructure and institutional support powered in collaboration with Providus Bank.',
  } satisfies PartnershipConfig,

  /**
   * Central store URLs configuration.
   * Replace with live App Store & Google Play links upon production release.
   */
  stores: {
    iosUrl: '', // Example: 'https://apps.apple.com/app/ajo-ng/id000000000'
    androidUrl: '', // Example: 'https://play.google.com/store/apps/details?id=ng.ajo.app'
    isIosLive: false,
    isAndroidLive: false,
    iosVersionRequired: 'iOS 15.0 or later',
    androidVersionRequired: 'Android 8.0 (Oreo) or later',
  } satisfies StoreLinkConfig,

  navigation: [
    { label: 'Home', href: '#hero', path: '/' },
    { label: 'How It Works', href: '#how-it-works', path: '/#how-it-works' },
    { label: 'Why AJO.ng', href: '#value-proposition', path: '/#value-proposition' },
    { label: 'Who It’s For', href: '#who-its-for', path: '/#who-its-for' },
    { label: 'Features', href: '#showcase', path: '/#showcase' },
    { label: 'FAQs', href: '#faqs', path: '/#faqs' },
  ],

  contact: {
    supportEmail: 'hello@ajo.ng',
    privacyEmail: 'privacy@ajo.ng',
    legalEmail: 'legal@ajo.ng',
    officeLocation: 'Lagos, Nigeria',
  },

  legal: {
    privacyPolicyHref: '/privacy-policy',
    termsOfServiceHref: '/terms-of-service',
    disclaimer:
      'AJO.ng provides digital coordination and record-keeping tools for rotating savings groups. Mobile applications are currently in rollout preparation for official mobile app stores.',
    legalDraftNotice:
      'This document represents a pre-deployment draft and is subject to formal review and final approval by the company’s designated legal advisers before public enforcement.',
  },
};
