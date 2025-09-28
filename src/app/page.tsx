import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/hero/Hero'
import NewsTicker from '@/components/ui/NewsTicker'
import LoadingAnimation from '@/components/ui/LoadingAnimation'
import JoinNotifications from '@/components/ui/JoinNotifications'

// Lazy load heavy components below the fold
const Features = dynamic(() => import('@/components/features/Features'), {
  loading: () => <div className="h-96 flex items-center justify-center"><LoadingAnimation /></div>
})

const About = dynamic(() => import('@/components/about/About'), {
  loading: () => <div className="h-96 flex items-center justify-center"><LoadingAnimation /></div>
})

const Community = dynamic(() => import('@/components/community/Community'), {
  loading: () => <div className="h-96 flex items-center justify-center"><LoadingAnimation /></div>
})

const Pricing = dynamic(() => import('@/components/pricing/Pricing'), {
  loading: () => <div className="h-96 flex items-center justify-center"><LoadingAnimation /></div>
})

const Testimonials = dynamic(() => import('@/components/testimonials/Testimonials'), {
  loading: () => <div className="h-96 flex items-center justify-center"><LoadingAnimation /></div>
})

const FAQ = dynamic(() => import('@/components/faq/FAQ'), {
  loading: () => <div className="h-96 flex items-center justify-center"><LoadingAnimation /></div>
})

const CTA = dynamic(() => import('@/components/cta/CTA'), {
  loading: () => <div className="h-96 flex items-center justify-center"><LoadingAnimation /></div>
})


const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-32 flex items-center justify-center"><LoadingAnimation /></div>
})

export default function Home() {
  return (
    <>
      <Navbar />
      <JoinNotifications />
      <main className="min-h-screen">
        {/* Hero Section - Premium Dark Blue Gradient */}
        <section className="bg-premium-gradient">
          <Hero />
        </section>
        
        {/* News Ticker Section */}
        <NewsTicker />
        
        {/* Features Section - Clean White with Blue Accents */}
        <section className="bg-white-100">
          <Suspense fallback={<div className="h-96 flex items-center justify-center"><LoadingAnimation /></div>}>
            <Features />
          </Suspense>
        </section>
        
        {/* About Section - Dark Midnight Blue */}
        <section className="bg-gradient-to-br from-midnightblue-400 via-midnightblue-200 to-slateblue-300">
          <Suspense fallback={<div className="h-96 flex items-center justify-center"><LoadingAnimation /></div>}>
            <About />
          </Suspense>
        </section>
        
        {/* Community Section - Light Blue Background */}
        <section className="bg-gradient-to-br from-aliceblue-100 to-white-100">
          <Suspense fallback={<div className="h-96 flex items-center justify-center"><LoadingAnimation /></div>}>
            <Community />
          </Suspense>
        </section>
        
        {/* Testimonials Section - Premium Blue Gradient */}
        <section className="bg-gradient-to-br from-midnightblue-950 via-black to-midnightblue-900">
          <Suspense fallback={<div className="h-96 flex items-center justify-center"><LoadingAnimation /></div>}>
            <Testimonials />
          </Suspense>
        </section>
        
        {/* CTA Section - Light Blue Background */}
        <section className="bg-gradient-to-br from-aliceblue-100 to-white-100">
          <Suspense fallback={<div className="h-96 flex items-center justify-center"><LoadingAnimation /></div>}>
            <CTA />
          </Suspense>
        </section>
        
        {/* Pricing Section - Light Blue Background */}
        <section className="bg-gradient-to-br from-aliceblue-100 to-white-100">
          <Suspense fallback={<div className="h-96 flex items-center justify-center"><LoadingAnimation /></div>}>
            <Pricing />
          </Suspense>
        </section>
        
        {/* FAQ Section - Premium Blue Gradient */}
        <section className="bg-gradient-to-br from-midnightblue-950 via-black to-midnightblue-900">
          <Suspense fallback={<div className="h-96 flex items-center justify-center"><LoadingAnimation /></div>}>
            <FAQ />
          </Suspense>
        </section>
        
        
        {/* Footer Section - Deep Midnight */}
        <section className="bg-gradient-to-br from-black-1000 via-midnightblue-500 to-midnightblue-100">
          <Suspense fallback={<div className="h-32 flex items-center justify-center"><LoadingAnimation /></div>}>
            <Footer />
          </Suspense>
        </section>
      </main>
    </>
  )
}