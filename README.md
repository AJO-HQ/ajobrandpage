# AJO.ng Landing Page

Official brand and informational landing page for **AJO.ng** — the modern home for rotating community savings (Ajo) in Nigeria.

## Banking Partner Integration (Providus Bank)

The banking partnership with **Providus Bank** is integrated throughout the landing page in adherence with brand protection and compliance standards:

1. **Dedicated Partnership Section (`src/components/PartnershipSection.tsx`)**:
   - Prominently situated between "Why AJO.ng" (`ValueProposition`) and "How It Works" (`HowItWorks`).
   - Clean, institutional presentation highlighting the collaboration between AJO.ng and Providus Bank.
   - Authorized copy:
     - **Eyebrow**: `OUR BANKING PARTNER`
     - **Headline**: `Built on a Banking Partnership`
     - **Supporting Text**: `AJO.ng works with Providus Bank as part of its banking partnership.`

2. **Secondary Partnership Indicator Near Hero (`src/components/Hero.tsx`)**:
   - High-visibility restrained indicator in the hero trust area so visitors immediately notice the partnership above the fold without cluttering the first screen.

3. **Footer Partnership Badge & Disclosures (`src/components/Footer.tsx`)**:
   - Synchronized with centralized configuration in `src/config/appConfig.ts`.

### Official Logo Asset Placement

To add the official Providus Bank vector or high-resolution logo asset:
- Place the file at: `public/providus-bank-logo.png` (or `.svg`) or `src/assets/providus-bank-logo.png`.
- The `ProvidusBankLogo` component automatically renders the official image with preserved aspect ratios and crisp rendering across mobile and desktop, while maintaining a dignified institutional fallback if no image file is loaded.

## Development & Build Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run TypeScript check & production build
npm run build

# Preview production build
npm run preview
```
