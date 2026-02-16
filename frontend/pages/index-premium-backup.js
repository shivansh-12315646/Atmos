import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import PremiumBackground from '../components/ui/PremiumBackground'
import PremiumCard from '../components/ui/PremiumCard'
import PremiumButton from '../components/ui/PremiumButton'
import GlassCard from '../components/ui/GlassCard'
import CarbonIcon from '../components/icons/CarbonIcon'
import ActivityIcon from '../components/icons/ActivityIcon'
import InsightsIcon from '../components/icons/InsightsIcon'
import TrendIcon from '../components/icons/TrendIcon'
import MapIcon from '../components/icons/MapIcon'
import EnterpriseIcon from '../components/icons/EnterpriseIcon'

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Atmos - Premium Carbon Footprint Tracker | Behavior-First Climate Action</title>
        <meta name="description" content="Track your emissions, understand your impact, and get personalized recommendations for meaningful climate action with Atmos." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PremiumBackground />

      <div className="relative min-h-screen">
        {/* Premium Navigation */}
        <nav 
          className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-white/20 transition-all duration-300"
          style={{
            backdropFilter: scrollY > 50 ? 'blur(20px)' : 'blur(10px)',
            background: scrollY > 50 ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.7)',
          }}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="relative">
                  <CarbonIcon className="w-10 h-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" color="#22c55e" />
                  <div className="absolute inset-0 bg-atmos-forest-500 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                </div>
                <span className="text-2xl font-bold gradient-text-animated font-display">Atmos</span>
              </div>
              <div className="hidden md:flex items-center gap-8">
                <Link href="/features" className="text-slate-700 hover:text-atmos-forest-600 transition-all duration-300 font-medium relative group">
                  Features
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-atmos-forest-600 group-hover:w-full transition-all duration-300" />
                </Link>
                <Link href="/about" className="text-slate-700 hover:text-atmos-forest-600 transition-all duration-300 font-medium relative group">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-atmos-forest-600 group-hover:w-full transition-all duration-300" />
                </Link>
                <Link href="/docs" className="text-slate-700 hover:text-atmos-forest-600 transition-all duration-300 font-medium relative group">
                  Docs
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-atmos-forest-600 group-hover:w-full transition-all duration-300" />
                </Link>
                <Link 
                  href="/auth/login" 
                  className="px-6 py-2.5 rounded-lg bg-atmos-forest-600/10 text-atmos-forest-700 hover:bg-atmos-forest-600 hover:text-white transition-all duration-300 font-semibold shadow-premium hover:shadow-premium-lg magnetic"
                >
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-24">
          {/* Hero Section with Advanced Animations */}
          <section className="container mx-auto px-4 py-32 relative">
            <div className="text-center max-w-6xl mx-auto">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-strong mb-12 shadow-premium hover:shadow-premium-lg transition-all duration-300 cursor-pointer group">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-atmos-forest-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-atmos-forest-500"></span>
                </span>
                <span className="text-sm font-semibold text-slate-700 group-hover:gradient-text-animated transition-all duration-300">
                  Behavior-First Climate Action Platform
                </span>
              </div>

              {/* Main Heading with Text Reveal Animation */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] font-display">
                <span className="block gradient-text-animated mb-2">
                  Track. Understand.
                </span>
                <span className="block text-slate-900 relative">
                  Take <span className="relative inline-block">
                    Action
                    <svg className="absolute -bottom-4 left-0 w-full text-atmos-forest-500 opacity-50" viewBox="0 0 200 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 5 Q50 0, 100 5 T200 5" stroke="currentColor" strokeWidth="3" fill="none"/>
                    </svg>
                  </span>.
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-xl md:text-2xl text-slate-600 mb-16 max-w-4xl mx-auto leading-relaxed font-medium">
                Discover which habits have the <span className="text-atmos-forest-600 font-bold">highest climate impact</span> and get 
                personalized, explainable recommendations for <span className="text-atmos-ocean-600 font-bold">meaningful change</span>.
              </p>

              {/* Premium CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
                <PremiumButton 
                  href="/auth/signup" 
                  variant="premium"
                  size="lg"
                  icon={({ className }) => (
                    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  )}
                >
                  Start Tracking Free
                </PremiumButton>
                <PremiumButton 
                  href="/demo" 
                  variant="secondary"
                  size="lg"
                  icon={({ className }) => (
                    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                >
                  Watch Demo
                </PremiumButton>
              </div>

              {/* Premium Stats with Animations */}
              <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  { value: "98%", label: "Accurate Tracking", delay: 0 },
                  { value: "50+", label: "Emission Factors", delay: 100 },
                  { value: "24/7", label: "Real-time Insights", delay: 200 }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center p-6 rounded-2xl glass transition-all duration-500 hover:shadow-premium-lg hover:scale-105 cursor-pointer group stagger-item"
                  >
                    <div className="text-5xl font-black gradient-text-animated mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section with Premium Cards */}
          <section className="container mx-auto px-4 py-32">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 font-display">
                Everything You Need
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
                Powerful features designed to help you make <span className="gradient-text-animated font-bold">meaningful climate impact</span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <PremiumCard
                icon={CarbonIcon}
                title="Real-time Tracking"
                description="Log activities instantly with our easy MCQ-based tracking system. Get immediate feedback on your carbon emissions."
                gradient="from-atmos-forest-500 to-atmos-leaf-500"
                delay={0}
              />
              <PremiumCard
                icon={InsightsIcon}
                title="Smart Insights"
                description="Get personalized, explainable recommendations powered by machine learning that actually make sense."
                gradient="from-atmos-ocean-500 to-atmos-sky-500"
                delay={100}
              />
              <PremiumCard
                icon={ActivityIcon}
                title="Impact Ranking"
                description="Discover which habits matter most for your carbon footprint with our intelligent ranking system."
                gradient="from-atmos-leaf-500 to-atmos-forest-600"
                delay={200}
              />
              <PremiumCard
                icon={TrendIcon}
                title="Trend Analysis"
                description="Track your progress over time with beautiful visualizations and compare with your personal baselines."
                gradient="from-atmos-sky-500 to-atmos-ocean-600"
                delay={300}
              />
              <PremiumCard
                icon={MapIcon}
                title="Regional Context"
                description="See how you compare with regional averages and understand your impact in a local context."
                gradient="from-atmos-earth-400 to-atmos-earth-600"
                delay={400}
              />
              <PremiumCard
                icon={EnterpriseIcon}
                title="Enterprise Ready"
                description="ESG dashboards for organizations of all sizes with comprehensive reporting and analytics."
                gradient="from-atmos-forest-600 to-atmos-ocean-600"
                delay={500}
              />
            </div>
          </section>

          {/* How It Works - Premium Design */}
          <section className="container mx-auto px-4 py-32">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 font-display">
                How It Works
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
                Simple, transparent, and <span className="gradient-text-animated font-bold">effective</span>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Track Activities",
                  description: "Log your daily activities with simple multiple-choice questions. No complex forms or heavy typing.",
                  gradient: "from-atmos-forest-500 to-atmos-leaf-500"
                },
                {
                  step: "2",
                  title: "Get Insights",
                  description: "Our ML analyzes your patterns and identifies high-impact areas using IPCC emission factors.",
                  gradient: "from-atmos-ocean-500 to-atmos-sky-500"
                },
                {
                  step: "3",
                  title: "Take Action",
                  description: "Receive personalized recommendations ranked by impact, effort, and feasibility for your context.",
                  gradient: "from-atmos-leaf-500 to-atmos-forest-600"
                }
              ].map((item, index) => (
                <div key={index} className="text-center group stagger-item">
                  <div className={`w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-premium-lg group-hover:shadow-premium-xl transition-all duration-500 group-hover:scale-110 relative overflow-hidden`}>
                    <div className="shimmer absolute inset-0 opacity-0 group-hover:opacity-100" />
                    <span className="text-4xl font-black text-white relative z-10">{item.step}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:gradient-text-animated transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Ethics Section - Premium Glass Card */}
          <section className="container mx-auto px-4 py-32">
            <div className="max-w-5xl mx-auto">
              <div className="glass-strong rounded-3xl p-12 shadow-premium-xl relative overflow-hidden">
                <div className="shimmer absolute inset-0 opacity-30" />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-atmos-ocean-500 to-atmos-sky-600 flex items-center justify-center shadow-premium-lg">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-4xl font-black mb-4 text-slate-900 font-display">
                        Built on Ethical Principles
                      </h3>
                      <p className="text-lg text-slate-600 font-medium">
                        Transparency and honesty at the core of everything we do
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { text: "Honest about capabilities and limitations - no false promises", type: "check" },
                      { text: "User-reported data only - no surveillance or passive tracking", type: "check" },
                      { text: "Explainable recommendations - understand why we suggest changes", type: "check" },
                      { text: "Privacy-first design - your data is yours and protected", type: "check" },
                      { text: "No climate prediction or exact accuracy claims - we're transparent", type: "x" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300 group">
                        <div className={`flex-shrink-0 w-7 h-7 rounded-lg ${item.type === 'check' ? 'bg-atmos-forest-100' : 'bg-red-50'} flex items-center justify-center`}>
                          <svg className={`w-5 h-5 ${item.type === 'check' ? 'text-atmos-forest-600' : 'text-red-500'} group-hover:scale-110 transition-transform duration-300`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {item.type === 'check' ? (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            ) : (
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            )}
                          </svg>
                        </div>
                        <p className="text-slate-700 font-medium">{item.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 text-center">
                    <PremiumButton href="/ethics" variant="outline" size="md">
                      Read Full Ethical Guidelines
                    </PremiumButton>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="container mx-auto px-4 py-32">
            <div className="max-w-5xl mx-auto text-center glass-strong rounded-3xl p-16 shadow-premium-xl relative overflow-hidden">
              <div className="shimmer absolute inset-0" />
              
              <div className="relative z-10">
                <h2 className="text-5xl md:text-6xl font-black mb-6 text-slate-900 font-display">
                  Ready to Make an Impact?
                </h2>
                <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto font-medium">
                  Join thousands making <span className="gradient-text-animated font-bold">informed decisions</span> about their carbon footprint
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                  <PremiumButton href="/auth/signup" variant="premium" size="lg">
                    Get Started Free
                  </PremiumButton>
                  <PremiumButton href="/contact" variant="outline" size="lg">
                    Contact Sales
                  </PremiumButton>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Premium Footer */}
        <footer className="bg-slate-900 text-white py-16 mt-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="aurora-bg" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <CarbonIcon className="w-10 h-10" color="#22c55e" />
                  <span className="text-2xl font-black font-display">Atmos</span>
                </div>
                <p className="text-slate-400 leading-relaxed font-medium">
                  Behavior-first carbon footprint tracking for a sustainable future.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-lg">Product</h4>
                <ul className="space-y-3">
                  {['Features', 'Pricing', 'Enterprise'].map((item) => (
                    <li key={item}>
                      <Link href={`/${item.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-lg">Resources</h4>
                <ul className="space-y-3">
                  {['Documentation', 'Ethics', 'Blog'].map((item) => (
                    <li key={item}>
                      <Link href={`/${item.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-lg">Company</h4>
                <ul className="space-y-3">
                  {['About', 'Contact', 'Privacy'].map((item) => (
                    <li key={item}>
                      <Link href={`/${item.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-8 text-center">
              <p className="text-slate-400 font-medium">Built with 💚 for a sustainable future</p>
              <p className="mt-2 text-sm text-slate-500">© 2026 Atmos. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
