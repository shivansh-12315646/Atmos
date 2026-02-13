import Head from 'next/head'
import Link from 'next/link'
import AnimatedBackground from '../components/ui/AnimatedBackground'
import FeatureCard from '../components/ui/FeatureCard'
import Button from '../components/ui/Button'
import GlassCard from '../components/ui/GlassCard'
import CarbonIcon from '../components/icons/CarbonIcon'
import ActivityIcon from '../components/icons/ActivityIcon'
import InsightsIcon from '../components/icons/InsightsIcon'
import TrendIcon from '../components/icons/TrendIcon'
import MapIcon from '../components/icons/MapIcon'
import EnterpriseIcon from '../components/icons/EnterpriseIcon'

export default function Home() {
  return (
    <>
      <Head>
        <title>Atmos - Carbon Footprint Tracker | Behavior-First Climate Action</title>
        <meta name="description" content="Track your emissions, understand your impact, and get personalized recommendations for meaningful climate action with Atmos." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatedBackground />

      <div className="relative min-h-screen">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-white/20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CarbonIcon className="w-8 h-8" color="#22c55e" />
                <span className="text-2xl font-bold gradient-text">Atmos</span>
              </div>
              <div className="hidden md:flex items-center gap-6">
                <Link href="/features" className="text-slate-700 hover:text-atmos-forest-600 transition-colors font-medium">Features</Link>
                <Link href="/about" className="text-slate-700 hover:text-atmos-forest-600 transition-colors font-medium">About</Link>
                <Link href="/docs" className="text-slate-700 hover:text-atmos-forest-600 transition-colors font-medium">Docs</Link>
                <Link href="/auth/login" className="text-atmos-forest-700 hover:text-atmos-forest-800 transition-colors font-semibold">
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-20">
            <div className="text-center max-w-5xl mx-auto animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-atmos-forest-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-atmos-forest-500"></span>
                </span>
                <span className="text-sm font-medium text-slate-700">Behavior-First Climate Action</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="gradient-text">Track. Understand.</span>
                <br />
                <span className="text-slate-800">Take Action.</span>
              </h1>

              {/* Subheading */}
              <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Discover which habits have the highest climate impact and get personalized, 
                explainable recommendations for meaningful change.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <Button href="/auth/signup" variant="primary">
                  Start Tracking Free
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
                <Button href="/demo" variant="secondary">
                  Watch Demo
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">98%</div>
                  <div className="text-sm text-slate-600">Accurate Tracking</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-sm text-slate-600">Emission Factors</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                  <div className="text-sm text-slate-600">Real-time Insights</div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="container mx-auto px-4 py-20">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                Everything You Need
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Powerful features designed to help you make meaningful climate impact
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={CarbonIcon}
                title="Real-time Tracking"
                description="Log activities instantly with our easy MCQ-based tracking system. Get immediate feedback on your carbon emissions."
                gradient="from-atmos-forest-500 to-atmos-leaf-500"
              />
              <FeatureCard
                icon={InsightsIcon}
                title="Smart Insights"
                description="Get personalized, explainable recommendations powered by machine learning that actually make sense."
                gradient="from-atmos-ocean-500 to-atmos-sky-500"
              />
              <FeatureCard
                icon={ActivityIcon}
                title="Impact Ranking"
                description="Discover which habits matter most for your carbon footprint with our intelligent ranking system."
                gradient="from-atmos-leaf-500 to-atmos-forest-600"
              />
              <FeatureCard
                icon={TrendIcon}
                title="Trend Analysis"
                description="Track your progress over time with beautiful visualizations and compare with your personal baselines."
                gradient="from-atmos-sky-500 to-atmos-ocean-600"
              />
              <FeatureCard
                icon={MapIcon}
                title="Regional Context"
                description="See how you compare with regional averages and understand your impact in a local context."
                gradient="from-atmos-earth-400 to-atmos-earth-600"
              />
              <FeatureCard
                icon={EnterpriseIcon}
                title="Enterprise Ready"
                description="ESG dashboards for organizations of all sizes with comprehensive reporting and analytics."
                gradient="from-atmos-forest-600 to-atmos-ocean-600"
              />
            </div>
          </section>

          {/* How It Works Section */}
          <section className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Simple, transparent, and effective
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-atmos-forest-500 to-atmos-leaf-500 flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">Track Activities</h3>
                <p className="text-slate-600">
                  Log your daily activities with simple multiple-choice questions. No complex forms or heavy typing.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-atmos-ocean-500 to-atmos-sky-500 flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">Get Insights</h3>
                <p className="text-slate-600">
                  Our ML analyzes your patterns and identifies high-impact areas using IPCC emission factors.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-atmos-leaf-500 to-atmos-forest-600 flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">Take Action</h3>
                <p className="text-slate-600">
                  Receive personalized recommendations ranked by impact, effort, and feasibility for your context.
                </p>
              </div>
            </div>
          </section>

          {/* Ethics Section */}
          <section className="container mx-auto px-4 py-20">
            <GlassCard className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-12 h-12 text-atmos-ocean-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">
                    Built on Ethical Principles
                  </h3>
                  <div className="space-y-3 text-slate-700">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-atmos-forest-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p>Honest about capabilities and limitations - no false promises</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-atmos-forest-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p>User-reported data only - no surveillance or passive tracking</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-atmos-forest-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p>Explainable recommendations - understand why we suggest changes</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-atmos-forest-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p>Privacy-first design - your data is yours and protected</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <p>No climate prediction or exact accuracy claims - we're transparent</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link href="/ethics" className="text-atmos-ocean-600 hover:text-atmos-ocean-700 font-semibold inline-flex items-center gap-2 transition-colors">
                      Read our full ethical guidelines
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </GlassCard>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center glass-strong rounded-3xl p-12 shadow-glass-lg">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
                Ready to Make an Impact?
              </h2>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Join thousands making informed decisions about their carbon footprint
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/auth/signup" variant="primary">
                  Get Started Free
                </Button>
                <Button href="/contact" variant="outline">
                  Contact Sales
                </Button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12 mt-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <CarbonIcon className="w-8 h-8" color="#22c55e" />
                  <span className="text-2xl font-bold">Atmos</span>
                </div>
                <p className="text-slate-400 text-sm">
                  Behavior-first carbon footprint tracking for a sustainable future.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Product</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
                  <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                  <li><Link href="/enterprise" className="hover:text-white transition-colors">Enterprise</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
                  <li><Link href="/ethics" className="hover:text-white transition-colors">Ethics</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                  <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
              <p>Built with 💚 for a sustainable future</p>
              <p className="mt-2">© 2026 Atmos. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

