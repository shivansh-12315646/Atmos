import { useState, useEffect, useRef } from 'react';

export default function NeomorphicCard({ 
  children, 
  className = '',
  icon: Icon,
  iconColor = '#22c55e',
  title,
  description,
  hoverable = true,
  breathing = false
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!hoverable || !cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = ((y - centerY) / centerY) * -10; // Inverted for natural feel
    const tiltY = ((x - centerX) / centerX) * 10;
    
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`neomorphic-card ${breathing ? 'breathing' : ''} ${className} transition-all duration-500`}
      style={{
        transform: hoverable && isHovered 
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(20px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Soft shadow layer (embossed state) */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white to-slate-100 shadow-neo transition-shadow duration-500" 
        style={{
          boxShadow: isHovered 
            ? 'inset 4px 4px 8px rgba(163, 177, 198, 0.4), inset -4px -4px 8px rgba(255, 255, 255, 0.8)'
            : '12px 12px 24px rgba(163, 177, 198, 0.6), -12px -12px 24px rgba(255, 255, 255, 0.5)'
        }}
      />
      
      {/* Content layer */}
      <div className="relative z-10 p-8" style={{ transform: 'translateZ(30px)' }}>
        {/* Icon with glow */}
        {Icon && (
          <div className="mb-6 relative inline-block">
            <div 
              className="absolute inset-0 blur-2xl opacity-30 transition-opacity duration-500"
              style={{ 
                background: `radial-gradient(circle, ${iconColor} 0%, transparent 70%)`,
                opacity: isHovered ? 0.5 : 0.3
              }}
            />
            <div className={`relative p-4 rounded-2xl ${isHovered ? 'breathing-pulse' : ''}`}
              style={{
                background: `linear-gradient(135deg, ${iconColor}20 0%, ${iconColor}10 100%)`,
                boxShadow: isHovered 
                  ? `0 8px 16px ${iconColor}40`
                  : `0 4px 8px ${iconColor}20`
              }}
            >
              <Icon className="w-10 h-10 transition-transform duration-300" 
                style={{ 
                  color: iconColor,
                  transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1)'
                }} 
              />
            </div>
          </div>
        )}
        
        {/* Title */}
        {title && (
          <h3 className="text-2xl font-bold text-slate-800 mb-3 font-display">
            {title}
          </h3>
        )}
        
        {/* Description */}
        {description && (
          <p className="text-slate-600 leading-relaxed mb-4">
            {description}
          </p>
        )}
        
        {/* Custom children */}
        {children}
        
        {/* Subtle shimmer on hover */}
        {hoverable && (
          <div className={`absolute inset-0 shimmer rounded-3xl transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        )}
      </div>
      
      {/* Ambient light effect */}
      {isHovered && (
        <div 
          className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${tilt.y * 5 + 50}% ${tilt.x * 5 + 50}%, rgba(255,255,255,0.3) 0%, transparent 70%)`,
            opacity: 0.5
          }}
        />
      )}
    </div>
  );
}
