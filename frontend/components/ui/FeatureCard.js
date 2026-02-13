export default function FeatureCard({ icon: Icon, title, description, gradient = "from-atmos-forest-500 to-atmos-ocean-500" }) {
  return (
    <div className="group relative card-hover">
      {/* Gradient border effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`}></div>
      
      {/* Card content */}
      <div className="relative p-8 bg-white rounded-2xl shadow-lg h-full">
        {/* Icon container with gradient background */}
        <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${gradient} mb-4 shadow-md`}>
          <Icon className="w-8 h-8 text-white" color="white" />
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-atmos-forest-700 transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-600 leading-relaxed">
          {description}
        </p>
        
        {/* Hover indicator */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <svg className="w-5 h-5 text-atmos-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
