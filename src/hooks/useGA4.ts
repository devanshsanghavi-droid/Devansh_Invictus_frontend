import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  initializeGA4, 
  trackPageView, 
  trackEvent, 
  trackButtonClick, 
  trackFormSubmission, 
  trackNavigation,
  trackScrollDepth,
  trackTimeOnPage,
  trackUserEngagement
} from '@/lib/ga4';

export const useGA4 = () => {
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

  // Track scroll depth
  const trackScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);
    
    // Track at 25%, 50%, 75%, and 100% scroll depth
    if (scrollPercent >= 25 && scrollPercent < 50) {
      trackScrollDepth(25);
    } else if (scrollPercent >= 50 && scrollPercent < 75) {
      trackScrollDepth(50);
    } else if (scrollPercent >= 75 && scrollPercent < 100) {
      trackScrollDepth(75);
    } else if (scrollPercent >= 100) {
      trackScrollDepth(100);
    }
  }, []);

  // Add scroll listener
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(trackScroll, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [trackScroll]);

  // Track time on page
  useEffect(() => {
    const startTime = Date.now();
    
    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent > 5) { // Only track if user spent more than 5 seconds
        trackTimeOnPage(timeSpent);
      }
    };
  }, [location]);

  return {
    trackEvent,
    trackButtonClick,
    trackFormSubmission,
    trackNavigation,
    trackUserEngagement,
  };
}; 