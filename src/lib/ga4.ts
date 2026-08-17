// Google Analytics 4 Service
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// GA4 Configuration
const GA4_MEASUREMENT_ID = 'G-C9DK1WNFD1';

// Initialize GA4
export const initializeGA4 = () => {
  // Add gtag script to head
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA4_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Track page view
export const trackPageView = (page_title: string, page_location: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA4_MEASUREMENT_ID, {
      page_title,
      page_location,
    });
  }
};

// Track custom events
export const trackEvent = (
  event_name: string,
  parameters?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event_name, parameters);
  }
};

// Track button clicks
export const trackButtonClick = (button_name: string, page_location?: string) => {
  trackEvent('button_click', {
    button_name,
    page_location: page_location || window.location.href,
  });
};

// Track form submissions
export const trackFormSubmission = (form_name: string, page_location?: string) => {
  trackEvent('form_submit', {
    form_name,
    page_location: page_location || window.location.href,
  });
};

// Track navigation
export const trackNavigation = (link_text: string, destination: string) => {
  trackEvent('navigation', {
    link_text,
    destination,
    page_location: window.location.href,
  });
};

// Track scroll depth
export const trackScrollDepth = (depth_percentage: number) => {
  trackEvent('scroll_depth', {
    depth_percentage,
    page_location: window.location.href,
  });
};

// Track time on page
export const trackTimeOnPage = (time_spent_seconds: number) => {
  trackEvent('time_on_page', {
    time_spent_seconds,
    page_location: window.location.href,
  });
};

// Track user engagement
export const trackUserEngagement = (engagement_type: string, details?: Record<string, any>) => {
  trackEvent('user_engagement', {
    engagement_type,
    ...details,
    page_location: window.location.href,
  });
}; 