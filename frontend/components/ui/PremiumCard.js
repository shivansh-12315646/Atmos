import { useEffect, useRef, useState } from 'react';

export default function PremiumCard({ icon: Icon, title, description, gradient = "from-atmos-forest-500 to-atmos-ocean-500", delay = 0 }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <div 
      ref={cardRef}
      className={`group relative perspective-card transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated Gradient Border */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 group-hover:blur-md`}></div>
      
      {/* Card Content */}
      <div 
        className="relative p-8 bg-white rounded-2xl shadow-premium h-full transition-all duration-500 group-hover:shadow-premium-xl"
        style={{ 
          transformStyle: 'preserve-3d',
          transition: 'transform 0.1s cubic-bezier(0.23, 1, 0.32, 1)'
        }}
      >
        {/* Shimmer Effect */}
        <div className="shimmer absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100" />
        
        {/* Icon Container with 3D Transform */}
        <div 
          className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${gradient} mb-4 shadow-lg group-hover:shadow-xl transition-all duration-500 relative overflow-hidden`}
          style={{ transform: 'translateZ(20px)' }}
        >
          {/* Icon Glow Effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
          
          <Icon className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" color="white" />
        </div>
        
        {/* Title with Gradient on Hover */}
        <h3 
          className="text-xl font-bold mb-3 text-slate-800 transition-all duration-300 group-hover:gradient-text-animated"
          style={{ transform: 'translateZ(10px)' }}
        >
          {title}
        </h3>
        
        {/* Description */}
        <p 
          className="text-slate-600 leading-relaxed"
          style={{ transform: 'translateZ(5px)' }}
        >
          {description}
        </p>
        
        {/* Hover Indicator with Animation */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
          <svg className="w-6 h-6 text-atmos-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>

        {/* Subtle Highlight Effect */}
        <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
      </div>
    </div>
  );
}
