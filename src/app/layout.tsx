import type { Metadata } from 'next'
import { Inter, Manrope, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['300', '400', '500', '600', '700', '800']
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: {
    default: 'StoXify - India\'s #1 Trading Community | Stock Market Learning Platform',
    template: '%s | StoXify - India\'s Trading Community'
  },
  description: 'Join India\'s largest educational trading community with 20,000+ active traders. Learn swing trading, stock market analysis, and crypto trading from SEBI-registered experts. Start your trading journey today!',
  keywords: [
    'trading education india', 
    'stock market learning', 
    'swing trading community',
    'NIFTY trading', 
    'NSE BSE trading',
    'crypto trading india',
    'trading signals',
    'stock market course',
    'trading mentorship',
    'financial education',
    'investment learning',
    'trading academy india',
    'stock trading tips',
    'market analysis',
    'trading strategies'
  ].join(', '),
  authors: [{ name: 'StoXify Team', url: 'https://stoxify.in' }],
  creator: 'StoXify',
  publisher: 'StoXify',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://stoxify.in'),
  alternates: {
    canonical: '/',
  },
  category: 'Education, Finance, Trading',
  classification: 'Trading Education Platform',
  openGraph: {
    title: 'StoXify - India\'s #1 Trading Community | 20,000+ Active Traders',
    description: 'Join India\'s largest educational trading community with 95% success rate. Learn swing trading, stock market analysis, and crypto trading from SEBI-registered experts. Free trial available!',
    url: 'https://stoxify.in',
    siteName: 'StoXify',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'StoXify - India\'s Leading Trading Education Platform with Live Market Data',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_IN',
    type: 'website',
    countryName: 'India',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@StoXify',
    creator: '@StoXify',
    title: 'StoXify - India\'s #1 Trading Community | Stock Market Learning',
    description: 'Learn trading from India\'s top experts. Join 20,000+ successful traders. NIFTY, NSE, BSE & Crypto trading education. Start your trading journey today! 🚀📈',
    images: [
      {
        url: '/images/og-image.jpg',
        alt: 'StoXify Trading Community - Learn Stock Market Trading in India',
        width: 1200,
        height: 630,
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth scroll-smooth-enhanced">
      <head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/images/StoXifyLogo.PNG" as="image" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/images/StoXifyLogo.PNG" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Enhanced Schema.org structured data for rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "StoXify",
              "alternateName": "StoXify Trading Community",
              "description": "India's largest educational trading community with 20,000+ active members. Learn swing trading, stock market analysis, crypto trading from SEBI-registered experts.",
              "url": "https://stoxify.in",
              "logo": {
                "@type": "ImageObject",
                "url": "https://stoxify.in/images/StoXifyLogo.PNG",
                "width": 512,
                "height": 512
              },
              "sameAs": [
                "https://twitter.com/StoXify",
                "https://instagram.com/stoxify_official",
                "https://linkedin.com/company/stoxify",
                "https://youtube.com/@stoxify"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7011957726",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi"],
                "areaServed": "India",
                "serviceArea": {
                  "@type": "Country",
                  "name": "India"
                }
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressRegion": "Maharashtra",
                "addressLocality": "Mumbai"
              },
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "serviceType": "Trading Education",
              "educationalCredentialAwarded": "Trading Certification",
              "audience": {
                "@type": "Audience",
                "audienceType": "Retail Traders and Investors",
                "geographicArea": "India"
              },
              "memberOf": {
                "@type": "Organization",
                "name": "SEBI Registered Investment Advisors"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "2500",
                "bestRating": "5",
                "worstRating": "1"
              },
              "offers": {
                "@type": "Offer",
                "price": "2999",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "validFrom": "2024-01-01"
              }
            })
          }}
        />
        
        {/* Website schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "StoXify - India's Largest Trading Community",
              "url": "https://stoxify.in",
              "description": "Join India's largest educational trading community focused on swing trading. Learn from experts with purely educational content.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://stoxify.in/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        {/* Optimized viewport and performance meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        
        {/* Performance optimizations */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#03001f" />
        
        {/* Preload critical CSS for smooth loading */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for immediate render */
            html { scroll-behavior: smooth; }
            body { 
              margin: 0; 
              background: linear-gradient(135deg, #03001f 0%, #0c1656 50%, #05328d 100%);
              min-height: 100vh;
              transform: translateZ(0);
            }
            * { box-sizing: border-box; }
          `
        }} />
      </head>
      <body 
        className={`
          ${inter.variable} 
          ${manrope.variable} 
          ${plusJakarta.variable} 
          ${jetbrains.variable} 
          font-sans 
          antialiased 
          bg-black-300
        `}
        suppressHydrationWarning
      >
        <div id="smooth-wrapper" className="scroll-smooth-enhanced">
          {children}
        </div>
        
        {/* Initialize smooth scrolling */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Initialize butter-smooth scrolling immediately
              if (typeof window !== 'undefined') {
                // Smooth scrolling for anchor links
                document.addEventListener('click', function(e) {
                  const target = e.target.closest('a[href^="#"]');
                  if (!target) return;
                  
                  const href = target.getAttribute('href');
                  if (!href || href === '#') return;
                  
                  e.preventDefault();
                  const element = document.querySelector(href);
                  if (element) {
                    element.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start',
                      inline: 'nearest'
                    });
                  }
                });
                
                // Optimize scroll performance
                let ticking = false;
                function updateScroll() {
                  // Apply any scroll-based animations here
                  ticking = false;
                }
                
                window.addEventListener('scroll', function() {
                  if (!ticking) {
                    requestAnimationFrame(updateScroll);
                    ticking = true;
                  }
                }, { passive: true });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}