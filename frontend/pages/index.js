import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ParticleConstellation from '../components/revolutionary/ParticleConstellation'
import LiquidButton from '../components/revolutionary/LiquidButton'
import NeomorphicCard from '../components/revolutionary/NeomorphicCard'
import CarbonIcon from '../components/icons/CarbonIcon'
import ActivityIcon from '../components/icons/ActivityIcon'
import InsightsIcon from '../components/icons/InsightsIcon'
import TrendIcon from '../components/icons/TrendIcon'
import MapIcon from '../components/icons/MapIcon'
import EnterpriseIcon from '../components/icons/EnterpriseIcon'

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [timeOfDay, setTimeOfDay] = useState('day');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Simulate day/night cycle based on time
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) setTimeOfDay('morning');
    else if (hour >= 12 && hour < 18) setTimeOfDay('day');
    else if (hour >= 18 && hour < 21) setTimeOfDay('evening');
    else setTimeOfDay('night');
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ecosystemColors = {
    morning: { primary: '#f59e0b', secondary: '#fbbf24' },
    day: '#22c55e',
    evening: { primary: '#f97316', secondary: '#fb923c' },
    night: { primary: '#3b82f6', secondary: '#60a5fa' }
  };

  const currentColor = typeof ecosystemColors[timeOfDay] === 'object' 
    ? ecosystemColors[timeOfDay].primary 
    : ecosystemColors[timeOfDay];

  return (
    <>
      <Head>
        <title>Atmos - Living Carbon Footprint Tracker | Neomorphic Liquid Ecosystem</title>
        <meta name="description" content="Experience the future of carbon tracking with our revolutionary living ecosystem design. Track, understand, and take action on climate change." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Revolutionary Particle Constellation Background */}
      <ParticleConstellation 
        particleCount={100}
        connectionDistance={120}
        particleColor={currentColor}
        lineColor={currentColor}
        speed={0.4}
      />

      {/* Aurora Background Layer */}
      <div className="aurora-bg" />

      <div className="relative min-h-screen">
        {/* Neomorphic Navigation */}
        <nav 
          className="fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-3xl"
          style={{
            background: scrollY > 50 
              ? 'linear-gradient(135deg, rgba(224, 229, 236, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)'
              : 'linear-gradient(135deg, rgba(224, 229, 236, 0.8) 0%, rgba(255, 255, 255, 0.7) 100%)',
            boxShadow: scrollY > 50
              ? '12px 12px 24px rgba(163, 177, 198, 0.6), -12px -12px 24px rgba(255, 255, 255, 0.5)'
              : '8px 8px 16px rgba(163, 177, 198, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)'
          }}
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="relative breathing-pulse">
                  <CarbonIcon className="w-12 h-12 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" color={currentColor} />
                  <div className="absolute inset-0 blur-xl opacity-30 particle-glow transition-opacity duration-300" style={{ color: currentColor }} />
                </div>
                <span className="text-3xl font-black gradient-text-animated font-display">Atmos</span>
              </div>
              <div className="hidden md:flex items-center gap-6">
                <Link href="/features" className="text-slate-700 hover:text-atmos-forest-600 transition-all duration-300 font-semibold relative group">
                  Features
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-atmos-forest-600 group-hover:w-full transition-all duration-300 liquid-morph" />
                </Link>
                <Link href="/about" className="text-slate-700 hover:text-atmos-forest-600 transition-all duration-300 font-semibold relative group">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-atmos-forest-600 group-hover:w-full transition-all duration-300 liquid-morph" />
                </Link>
                <Link href="/docs" className="text-slate-700 hover:text-atmos-forest-600 transition-all duration-300 font-semibold relative group">
                  Docs
                  <span className="absolute -bottom-1 left-0 w-0.5 bg-atmos-forest-600 group-hover:w-full transition-all duration-300 liquid-morph" />
                </Link>
                <LiquidButton variant="ghost">
                  Log In
                </LiquidButton>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-32">
          {/* Revolutionary Hero Section */}
          <section className="container mx-auto px-4 py-24 relative">
            <div className="text-center max-w-6xl mx-auto">
              {/* Living Status Badge */}
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-12 neomorphic-card breathing cursor-pointer group">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 particle-glow" style={{ backgroundColor: currentColor }}></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 heartbeat-pulse" style={{ backgroundColor: currentColor }}></span>
                </span>
                <span className="text-base font-bold text-slate-700 group-hover:gradient-text-animated transition-all duration-300">
                  Living • Breathing • Ecosystem Platform
                </span>
              </div>

              {/* Liquid Morphing Main Heading */}
              <h1 className="text-6xl md:text-7xl lg:text-9xl font-black mb-8 leading-[1.1] font-display">
                <span className="block gradient-text-animated mb-4 liquid-morph inline-block px-8 py-4">
                  Track. Feel.
                </span>
                <span className="block text-slate-900 relative organic-growth">
                  Take{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10 gradient-text-animated">Action</span>
                    <svg className="absolute -bottom-6 left-0 w-full opacity-60" viewBox="0 0 300 20" fill="none">
                      <path 
                        d="M5 15 Q 75 5, 150 15 T 295 15" 
                        stroke={currentColor}
                        strokeWidth="4" 
                        strokeLinecap="round"
                        className="liquid-morph"
                      />
                    </svg>
                  </span>
                </span>
              </h1>

              {/* Biometric Description */}
              <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed breathing">
                Experience the world's first <strong className="text-atmos-forest-700 gradient-text-animated">neomorphic liquid ecosystem</strong> for carbon tracking. 
                Not just a tool—a <strong className="text-atmos-ocean-700">living, breathing companion</strong> in your climate journey.
              </p>

              {/* Liquid Morphing CTAs */}
              <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
                <LiquidButton variant="premium">
                  Start Your Journey
                </LiquidButton>
                <LiquidButton variant="ghost">
                  Explore the Ecosystem
                </LiquidButton>
              </div>

              {/* Synesthetic Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="neomorphic-card p-6 breathing temp-cool">
                  <div className="text-5xl font-black gradient-text-animated mb-2">98%</div>
                  <div className="text-slate-700 font-semibold">User Engagement</div>
                </div>
                <div className="neomorphic-card p-6 breathing temp-warm" style={{ animationDelay: '0.5s' }}>
                  <div className="text-5xl font-black gradient-text-animated mb-2">50+</div>
                  <div className="text-slate-700 font-semibold">ML Insights</div>
                </div>
                <div className="neomorphic-card p-6 breathing temp-hot" style={{ animationDelay: '1s' }}>
                  <div className="text-5xl font-black gradient-text-animated mb-2">24/7</div>
                  <div className="text-slate-700 font-semibold">Living Data</div>
                </div>
              </div>
            </div>
          </section>

          {/* Revolutionary Features Grid */}
          <section className="container mx-auto px-4 py-24">
            <div className="text-center mb-16 organic-growth">
              <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text-animated font-display">
                Revolutionary Features
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Each feature is a living organism in our ecosystem, designed to evolve with your climate journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-items">
              <NeomorphicCard
                icon={ActivityIcon}
                iconColor="#22c55e"
                title="Real-Time Tracking"
                description="Watch your carbon footprint breathe and pulse with every action you take. It's alive."
                breathing={true}
                className="stagger-item"
              />

              <NeomorphicCard
                icon={InsightsIcon}
                iconColor="#06b6d4"
                title="Quantum Insights"
                description="AI that exists in multiple states simultaneously, giving you insights from parallel possibilities."
                breathing={true}
                className="stagger-item"
              />

              <NeomorphicCard
                icon={TrendIcon}
                iconColor="#84cc16"
                title="Biometric Trends"
                description="Trends that pulse with heartbeat rhythm, making data feel human and emotional."
                breathing={true}
                className="stagger-item"
              />

              <NeomorphicCard
                icon={MapIcon}
                iconColor="#0ea5e9"
                title="Living Maps"
                description="Maps that morph and flow like liquid, showing regional ecosystems in organic patterns."
                breathing={true}
                className="stagger-item"
              />

              <NeomorphicCard
                icon={EnterpriseIcon}
                iconColor="#f97316"
                title="Ecosystem Enterprise"
                description="Enterprise features that grow and adapt like a living organism to your company's needs."
                breathing={true}
                className="stagger-item"
              />

              <NeomorphicCard
                icon={CarbonIcon}
                iconColor="#22c55e"
                title="Particle Network"
                description="See your impact spread across a particle constellation, connecting with others' journeys."
                breathing={true}
                className="stagger-item"
              />
            </div>
          </section>

          {/* How It Works - Organic Flow */}
          <section className="container mx-auto px-4 py-24">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text-animated font-display">
                The Organic Process
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our system follows natural rhythms, growing with you through three living phases
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="neomorphic-card w-24 h-24 mx-auto mb-6 flex items-center justify-center heartbeat-pulse temp-cool">
                  <span className="text-4xl font-black gradient-text-animated">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Breathe In</h3>
                <p className="text-slate-600 leading-relaxed">
                  The system inhales your activities, understanding your carbon rhythm through MCQ-based tracking
                </p>
              </div>

              <div className="text-center">
                <div className="neomorphic-card w-24 h-24 mx-auto mb-6 flex items-center justify-center heartbeat-pulse temp-warm" style={{ animationDelay: '0.3s' }}>
                  <span className="text-4xl font-black gradient-text-animated">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Process & Pulse</h3>
                <p className="text-slate-600 leading-relaxed">
                  ML algorithms pulse through the data like neural synapses, finding patterns in your ecosystem
                </p>
              </div>

              <div className="text-center">
                <div className="neomorphic-card w-24 h-24 mx-auto mb-6 flex items-center justify-center heartbeat-pulse temp-hot" style={{ animationDelay: '0.6s' }}>
                  <span className="text-4xl font-black gradient-text-animated">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Breathe Out</h3>
                <p className="text-slate-600 leading-relaxed">
                  Exhale actionable insights that feel natural, personalized, and emotionally connected to your journey
                </p>
              </div>
            </div>
          </section>

          {/* Living Ethics Section */}
          <section className="container mx-auto px-4 py-24">
            <div className="max-w-5xl mx-auto">
              <div className="neomorphic-card p-12 breathing">
                <div className="flex items-center gap-4 mb-8">
                  <div className="neomorphic-card p-4 heartbeat-pulse">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <h2 className="text-4xl font-black gradient-text-animated font-display">Living Transparently</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-atmos-forest-700">What This System IS:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-atmos-forest-500 mt-1 heartbeat-pulse">✓</span>
                        <span>A living, breathing companion in your climate journey</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-atmos-forest-500 mt-1 heartbeat-pulse" style={{ animationDelay: '0.2s' }}>✓</span>
                        <span>Real-time activity tracking with emotional connection</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-atmos-forest-500 mt-1 heartbeat-pulse" style={{ animationDelay: '0.4s' }}>✓</span>
                        <span>ML-powered insights that feel organic and natural</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-atmos-forest-500 mt-1 heartbeat-pulse" style={{ animationDelay: '0.6s' }}>✓</span>
                        <span>An ecosystem that grows and adapts with you</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-700">What This System is NOT:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-slate-400 mt-1">✗</span>
                        <span className="text-slate-600">A surveillance tool that judges you</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-slate-400 mt-1">✗</span>
                        <span className="text-slate-600">A climate change prediction system</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-slate-400 mt-1">✗</span>
                        <span className="text-slate-600">An exact carbon accuracy calculator</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-slate-400 mt-1">✗</span>
                        <span className="text-slate-600">A static, lifeless data dashboard</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-300">
                  <Link href="/docs/ethics" className="text-atmos-forest-600 hover:text-atmos-forest-700 font-semibold inline-flex items-center gap-2 group">
                    Read Full Living Guidelines
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section with Quantum Effect */}
          <section className="container mx-auto px-4 py-24">
            <div className="max-w-4xl mx-auto text-center neomorphic-card p-16 quantum-blur hover:quantum-blur breathing">
              <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text-animated font-display">
                Ready to Experience Something Alive?
              </h2>
              <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join the revolution. Be part of a living ecosystem that breathes, pulses, and grows with you.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <LiquidButton variant="premium">
                  Start Your Living Journey
                </LiquidButton>
                <LiquidButton variant="ghost">
                  Explore Demo Ecosystem
                </LiquidButton>
              </div>
            </div>
          </section>

          {/* Footer with Ecosystem Theme */}
          <footer className="relative mt-24 py-16" style={{
            background: 'linear-gradient(135deg, #e0e5ec 0%, #f8fafc 100%)',
            boxShadow: 'inset 0 4px 8px rgba(163, 177, 198, 0.3)'
          }}>
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div>
                  <div className="flex items-center gap-3 mb-4 breathing-pulse">
                    <CarbonIcon className="w-10 h-10" color={currentColor} />
                    <span className="text-2xl font-black gradient-text-animated">Atmos</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    The world's first living, breathing carbon footprint tracking ecosystem.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-4">Ecosystem</h3>
                  <ul className="space-y-2">
                    <li><Link href="/features" className="text-slate-600 hover:text-atmos-forest-600 transition-colors">Features</Link></li>
                    <li><Link href="/pricing" className="text-slate-600 hover:text-atmos-forest-600 transition-colors">Pricing</Link></li>
                    <li><Link href="/enterprise" className="text-slate-600 hover:text-atmos-forest-600 transition-colors">Enterprise</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-4">Resources</h3>
                  <ul className="space-y-2">
                    <li><Link href="/docs" className="text-slate-600 hover:text-atmos-forest-600 transition-colors">Documentation</Link></li>
                    <li><Link href="/api" className="text-slate-600 hover:text-atmos-forest-600 transition-colors">API</Link></li>
                    <li><Link href="/guides" className="text-slate-600 hover:text-atmos-forest-600 transition-colors">Guides</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-4">Company</h3>
                  <ul className="space-y-2">
                    <li><Link href="/about" className="text-slate-600 hover:text-atmos-forest-600 transition-colors">About</Link></li>
                    <li><Link href="/blog" className="text-slate-600 hover:text-atmos-forest-600 transition-colors">Blog</Link></li>
                    <li><Link href="/contact" className="text-slate-600 hover:text-atmos-forest-600 transition-colors">Contact</Link></li>
                  </ul>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-300 text-center">
                <p className="text-slate-600">
                  © 2024 Atmos. Built with 💚 for a sustainable, living future.
                </p>
                <p className="text-sm text-slate-500 mt-2">
                  A Neomorphic Liquid Ecosystem • Always Breathing • Forever Evolving
                </p>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  )
}
