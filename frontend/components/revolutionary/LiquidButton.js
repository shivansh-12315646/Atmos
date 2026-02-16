import { useState, useRef, useEffect } from 'react';

export default function LiquidButton({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  className = '',
  icon: Icon 
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  // Magnetic effect - button follows cursor
  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    // Magnetic pull within 100px radius
    if (distance < 100) {
      const pull = Math.min(distance / 100, 1);
      setCursorPos({
        x: deltaX * pull * 0.2,
        y: deltaY * pull * 0.2
      });
    } else {
      setCursorPos({ x: 0, y: 0 });
    }
  };

  // Ripple effect on click
  const handleClick = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = {
      x,
      y,
      id: Date.now()
    };
    
    setRipples([...ripples, newRipple]);
    
    setTimeout(() => {
      setRipples(ripples => ripples.filter(r => r.id !== newRipple.id));
    }, 800);
    
    if (onClick) onClick(e);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const baseClasses = 'relative overflow-hidden font-semibold transition-all duration-300 cursor-pointer liquid-morph group';
  
  const variantClasses = {
    primary: 'bg-gradient-to-br from-atmos-forest-500 to-atmos-forest-600 text-white shadow-premium hover:shadow-premium-xl',
    secondary: 'bg-gradient-to-br from-atmos-ocean-500 to-atmos-ocean-600 text-white shadow-premium hover:shadow-premium-xl',
    premium: 'bg-gradient-to-br from-atmos-forest-400 via-atmos-ocean-400 to-atmos-leaf-400 text-white shadow-premium-lg hover:shadow-premium-xl',
    ghost: 'bg-white/10 backdrop-blur-md text-slate-700 border border-white/20 hover:bg-white/20'
  };

  const buttonContent = (
    <button
      ref={buttonRef}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{
        transform: `translate(${cursorPos.x}px, ${cursorPos.y}px) scale(${isHovered ? 1.05 : 1})`,
        padding: '14px 32px',
        fontSize: '16px',
        borderRadius: isHovered ? '60% 40% 30% 70% / 60% 30% 70% 40%' : '50px'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCursorPos({ x: 0, y: 0 });
      }}
      onClick={handleClick}
    >
      {/* Breathing pulse overlay */}
      <div className="absolute inset-0 breathing-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon && <Icon className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />}
      </span>
      
      {/* Ripple effects */}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0,
          }}
        />
      ))}
    </button>
  );

  return buttonContent;
}
