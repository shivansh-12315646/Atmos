export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-atmos-forest-50 via-white to-atmos-ocean-50"></div>
      
      {/* Animated circles */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-atmos-forest-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-atmos-ocean-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-atmos-leaf-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, #22c55e 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>
    </div>
  );
}
