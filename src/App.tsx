import { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { PartnershipSection } from './components/PartnershipSection';
import { HowItWorks } from './components/HowItWorks';
import { WhoIsItFor } from './components/WhoIsItFor';
import { ProductShowcase } from './components/ProductShowcase';
import { DownloadSection } from './components/DownloadSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { StoreModal } from './components/StoreModal';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsOfServicePage } from './components/TermsOfServicePage';

type RoutePath = '/' | '/privacy-policy' | '/terms-of-service';

function normalizePath(pathname: string): RoutePath {
  const clean = pathname.toLowerCase().replace(/\/$/, '') || '/';
  if (clean === '/privacy-policy' || clean === '/privacy') {
    return '/privacy-policy';
  }
  if (clean === '/terms-of-service' || clean === '/terms') {
    return '/terms-of-service';
  }
  return '/';
}

export function App() {
  const [currentPath, setCurrentPath] = useState<RoutePath>(() =>
    normalizePath(window.location.pathname)
  );

  const [storeModalState, setStoreModalState] = useState<{
    isOpen: boolean;
    platform: 'ios' | 'android' | 'all';
  }>({
    isOpen: false,
    platform: 'all',
  });

  const navigateTo = useCallback((path: string) => {
    const targetRoute = normalizePath(path);
    if (window.location.pathname !== targetRoute) {
      window.history.pushState({}, '', targetRoute);
    }
    setCurrentPath(targetRoute);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Listen for browser Back/Forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleOpenStoreModal = (platform: 'ios' | 'android' | 'all' = 'all') => {
    setStoreModalState({
      isOpen: true,
      platform,
    });
  };

  const handleCloseStoreModal = () => {
    setStoreModalState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-brand-500 selection:text-white">
      {/* Navigation */}
      <Navbar
        onOpenStoreModal={() => handleOpenStoreModal('all')}
        onNavigate={navigateTo}
        currentPath={currentPath}
      />

      {/* Main Content View based on currentPath */}
      <main id="main-content" className="flex-1">
        {currentPath === '/privacy-policy' ? (
          <PrivacyPolicyPage onNavigate={navigateTo} />
        ) : currentPath === '/terms-of-service' ? (
          <TermsOfServicePage onNavigate={navigateTo} />
        ) : (
          <>
            <Hero onOpenStoreModal={() => handleOpenStoreModal('all')} />
            <ValueProposition />
            <PartnershipSection />
            <HowItWorks />
            <WhoIsItFor />
            <ProductShowcase />
            <DownloadSection onOpenStoreModal={handleOpenStoreModal} />
            <FAQSection />
            <FinalCTA onOpenStoreModal={() => handleOpenStoreModal('all')} />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenStoreModal={() => handleOpenStoreModal('all')}
        onNavigate={navigateTo}
      />

      {/* Store Download / Availability Modal */}
      <StoreModal
        isOpen={storeModalState.isOpen}
        onClose={handleCloseStoreModal}
        platform={storeModalState.platform}
      />
    </div>
  );
}

export default App;
