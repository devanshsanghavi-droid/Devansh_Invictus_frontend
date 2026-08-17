import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initializeGA4, trackPageView } from '@/lib/ga4';

interface GA4ProviderProps {
  children: ReactNode;
}

export const GA4Provider = ({ children }: GA4ProviderProps) => {
  const location = useLocation();

  // Initialize GA4 on mount
  useEffect(() => {
    initializeGA4();
  }, []);

  // Track page views on route changes
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      trackPageView(document.title, window.location.href);
    }
  }, [location]);

  return <>{children}</>;
}; 