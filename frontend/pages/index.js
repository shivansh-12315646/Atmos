import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Atmos - Carbon Footprint Tracker</title>
        <meta name="description" content="Behavior-first carbon footprint tracking platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-gray-900 mb-4">
              Atmos 🌍
            </h1>
            <p className="text-2xl text-gray-600 mb-8">
              Behavior-first carbon footprint tracking platform
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Track your emissions, understand your impact, and get personalized recommendations
              for meaningful climate action.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FeatureCard
              icon="📊"
              title="Real-time Tracking"
              description="Log activities instantly with easy MCQ-based tracking"
            />
            <FeatureCard
              icon="🔍"
              title="Impact Ranking"
              description="Discover which habits matter most for your carbon footprint"
            />
            <FeatureCard
              icon="🤖"
              title="Smart Insights"
              description="Get personalized, explainable recommendations powered by ML"
            />
            <FeatureCard
              icon="📈"
              title="Trend Analysis"
              description="Track your progress over time and compare with baselines"
            />
            <FeatureCard
              icon="🗺️"
              title="Regional Context"
              description="See how you compare with regional averages"
            />
            <FeatureCard
              icon="🏢"
              title="Enterprise Ready"
              description="ESG dashboards for organizations of all sizes"
            />
          </div>

          {/* CTA Buttons */}
          <div className="text-center space-x-4">
            <Link 
              href="/auth/signup"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Get Started
            </Link>
            <Link 
              href="/auth/login"
              className="inline-block bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Log In
            </Link>
          </div>

          {/* Ethics Statement */}
          <div className="mt-16 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-blue-900">
              Built on Ethical Principles
            </h3>
            <div className="text-sm text-blue-800 space-y-1">
              <p>✅ Honest about capabilities and limitations</p>
              <p>✅ User-reported data only (no surveillance)</p>
              <p>✅ Explainable recommendations</p>
              <p>✅ Privacy-first design</p>
              <p>❌ No climate prediction or exact accuracy claims</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>Built with 💚 for a sustainable future</p>
          <p className="text-sm mt-2">
            See our{' '}
            <a href="/ethics" className="text-green-600 hover:underline">
              ethical guidelines
            </a>{' '}
            and{' '}
            <a href="/docs" className="text-green-600 hover:underline">
              documentation
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
