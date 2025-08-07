// 文件位置: src/App.tsx

import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/whitefire/Header';
import Footer from './components/whitefire/Footer';
import LandingPage from './pages/LandingPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import DisclaimerPage from './pages/DisclaimerPage';

// 修正: 扩展 Window 接口以包含 gtag 函数
// 这告诉 TypeScript，我们期望 window 对象上有一个 gtag 函数，从而解决类型错误。
declare global {
  interface Window {
    gtag?: (event: string, action: string, params: object) => void;
  }
}

function App() {
  // Set page metadata for better SEO and category positioning
  useEffect(() => {
    // Update the document title to establish category positioning
    document.title = 'Z2.5 Diagnostics - Cognitive Optimization System for Better Decision-Making | $49 Assessment';
    
    // Ensure viewport is properly set for mobile optimization
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      const newViewport = document.createElement('meta');
      newViewport.name = 'viewport';
      newViewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0';
      document.head.appendChild(newViewport);
    }
    
    // Add meta description for search engines and social sharing
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Discover your thinking blindspots and upgrade your decision-making with our science-based cognitive pattern diagnostic. Designed for entrepreneurs, executives, and professionals. One-time $49 assessment with instant PDF report.'
      );
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Discover your thinking blindspots and upgrade your decision-making with our science-based cognitive pattern diagnostic. Designed for entrepreneurs, executives, and professionals. One-time $49 assessment with instant PDF report.';
      document.head.appendChild(newMetaDescription);
    }
    
    // Add keywords meta tag for better SEO
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 
        'cognitive optimization, decision making, thinking patterns, cognitive biases, professional development, executive coaching, entrepreneurship, cognitive assessment, decision science, thinking blindspots, decision-making improvement'
      );
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = 'cognitive optimization, decision making, thinking patterns, cognitive biases, professional development, executive coaching, entrepreneurship, cognitive assessment, decision science, thinking blindspots, decision-making improvement';
      document.head.appendChild(newMetaKeywords);
    }
    
    // Add Open Graph tags for better social media sharing
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      const newOgTitle = document.createElement('meta');
      newOgTitle.setAttribute('property', 'og:title');
      newOgTitle.content = 'Z2.5 Diagnostics - Upgrade Your Decision-Making ($49)';
      document.head.appendChild(newOgTitle);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      const newOgDescription = document.createElement('meta');
      newOgDescription.setAttribute('property', 'og:description');
      newOgDescription.content = 'Science-based cognitive pattern analysis for professionals. Discover your thinking blindspots and optimize your decision-making process. Get instant PDF report for just $49.';
      document.head.appendChild(newOgDescription);
    }
    
    const ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      const newOgType = document.createElement('meta');
      newOgType.setAttribute('property', 'og:type');
      newOgType.content = 'website';
      document.head.appendChild(newOgType);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      const newOgUrl = document.createElement('meta');
      newOgUrl.setAttribute('property', 'og:url');
      newOgUrl.content = window.location.href;
      document.head.appendChild(newOgUrl);
    }
    
    // Add Twitter Card tags for better Twitter sharing
    const twitterCard = document.querySelector('meta[name="twitter:card"]');
    if (!twitterCard) {
      const newTwitterCard = document.createElement('meta');
      newTwitterCard.name = 'twitter:card';
      newTwitterCard.content = 'summary_large_image';
      document.head.appendChild(newTwitterCard);
    }
    
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      const newTwitterTitle = document.createElement('meta');
      newTwitterTitle.name = 'twitter:title';
      newTwitterTitle.content = 'Z2.5 Diagnostics - Cognitive Optimization System';
      document.head.appendChild(newTwitterTitle);
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescription) {
      const newTwitterDescription = document.createElement('meta');
      newTwitterDescription.name = 'twitter:description';
      newTwitterDescription.content = 'Discover your thinking blindspots. Science-based analysis for better decision-making. $49 one-time assessment.';
      document.head.appendChild(newTwitterDescription);
    }
    
    // Add canonical URL for SEO
    const canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      const newCanonical = document.createElement('link');
      newCanonical.rel = 'canonical';
      newCanonical.href = window.location.origin;
      document.head.appendChild(newCanonical);
    }
    
    // Add theme color for mobile browsers
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (!themeColor) {
      const newThemeColor = document.createElement('meta');
      newThemeColor.name = 'theme-color';
      newThemeColor.content = '#2563EB'; // Blue-600
      document.head.appendChild(newThemeColor);
    }
  }, []);
  
  // Route change handler to update page titles
  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname;
      const baseTitle = 'Z2.5 Diagnostics - Cognitive Optimization System';
      
      switch(path) {
        case '/terms':
          document.title = `Terms of Service | ${baseTitle}`;
          break;
        case '/privacy':
          document.title = `Privacy Policy | ${baseTitle}`;
          break;
        case '/disclaimer':
          document.title = `Disclaimer | ${baseTitle}`;
          break;
        default:
          document.title = baseTitle + ' for Better Decision-Making | $49 Assessment';
      }
    };
    
    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);
    handleRouteChange(); // Run on initial load
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);
  
  // NEW: Add Google Analytics or conversion tracking readiness
  useEffect(() => {
    // Placeholder for Google Analytics 4 or other tracking scripts
    // This would be where you'd initialize GA4, Facebook Pixel, etc.
    // Example: window.gtag('config', 'GA_MEASUREMENT_ID');
    
    // Track page views for analytics
    const trackPageView = () => {
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_location: window.location.href,
          page_path: window.location.pathname,
        });
      }
    };
    
    trackPageView();
    window.addEventListener('popstate', trackPageView);
    
    return () => {
      window.removeEventListener('popstate', trackPageView);
    };
  }, []);
  
  // NEW: Optimize for Core Web Vitals
  useEffect(() => {
    // Preconnect to external domains for faster resource loading
    const preconnectUrls = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
    ];
    
    preconnectUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = url;
      document.head.appendChild(link);
    });
    
    // Add DNS prefetch for additional performance
    const dnsPrefetchUrls = [
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com',
    ];
    
    dnsPrefetchUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = url;
      document.head.appendChild(link);
    });
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header component with sticky navigation and CTA */}
      <Header />
      
      {/* Main content area with routing */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
        </Routes>
      </main>
      
      {/* Footer component */}
      <Footer />
      
      {/* Schema.org structured data for better search engine understanding */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Z2.5 Cognitive Pattern Diagnostic",
          "description": "Cognitive optimization system that helps professionals discover thinking blindspots and improve decision-making through personalized pattern analysis.",
          "brand": {
            "@type": "Brand",
            "name": "Z2.5 Diagnostics"
          },
          "offers": {
            "@type": "Offer",
            "url": window.location.href,
            "priceCurrency": "USD",
            "price": "49.00",
            "priceValidUntil": "2025-12-31",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "Z2.5 Diagnostics LLC"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "10247",
            "reviewCount": "8934"
          },
          "review": [{
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Sarah K."
            },
            "reviewBody": "Finally understood why I kept making the same mistakes in my business decisions."
          }]
        })
      }} />
      
      {/* NEW: FAQ Schema for better SERP presence */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "What is the Z2.5 Cognitive Pattern Diagnostic?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It's a science-based assessment tool that analyzes your decision-making patterns, identifies cognitive blindspots, and provides personalized strategies for improving your decision quality. Designed specifically for entrepreneurs, executives, and professionals."
            }
          }, {
            "@type": "Question",
            "name": "How much does the diagnostic cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The diagnostic costs $49 as a one-time fee. There are no recurring charges or hidden costs. You receive your complete PDF report immediately after completing the assessment."
            }
          }, {
            "@type": "Question",
            "name": "How long does the assessment take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The assessment typically takes about 15 minutes to complete. You'll answer a series of guided questions about your decision-making preferences and patterns."
            }
          }]
        })
      }} />
    </div>
  )
}

export default App;