import Link from 'next/link';
import { useRef, useState } from 'react';

export default function PremiumButton({ 
  children, 
  variant = "primary", 
  href, 
  onClick, 
  className = "",
  icon: Icon,
  size = "lg"
}) {
  const buttonRef = useRef(null);
  const [ripples, setRipples] = useState([]);

  const sizeClasses = {
    sm: "px-6 py-2.5 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variants = {
    primary: "bg-gradient-to-r from-atmos-forest-600 to-atmos-forest-700 text-white shadow-premium-lg hover:shadow-premium-xl hover:from-atmos-forest-700 hover:to-atmos-forest-800",
    secondary: "bg-white text-atmos-forest-700 border-2 border-atmos-forest-200 shadow-premium hover:shadow-premium-lg hover:border-atmos-forest-400 hover:bg-atmos-forest-50",
    outline: "bg-transparent text-atmos-forest-700 border-2 border-atmos-forest-600 hover:bg-atmos-forest-600 hover:text-white shadow-premium",
    ghost: "bg-transparent text-atmos-forest-700 hover:bg-atmos-forest-100",
    premium: "bg-gradient-to-r from-atmos-leaf-500 via-atmos-forest-600 to-atmos-ocean-600 text-white shadow-premium-xl hover:shadow-premium-xl bg-size-200 hover:bg-right transition-all duration-700",
  };

  const baseStyles = `inline-flex items-center justify-center gap-3 font-bold rounded-xl transition-all duration-300 relative overflow-hidden group btn-premium ${sizeClasses[size]}`;
  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  const handleClick = (e) => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      x,
      y,
      id: Date.now(),
    };

    setRipples([...ripples, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    if (onClick) onClick(e);
  };

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    
    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    buttonRef.current.style.transform = 'translate(0, 0) scale(1)';
  };

  const content = (
    <>
      {/* Ripple Effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute w-1 h-1 bg-white/30 rounded-full animate-ping"
          style={{
            left: ripple.x,
            top: ripple.y,
            animationDuration: '0.6s',
          }}
        />
      ))}

      {/* Shimmer Effect */}
      <div className="shimmer absolute inset-0 opacity-0 group-hover:opacity-100" />
      
      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-3">
        {children}
        {Icon && <Icon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />}
      </span>

      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </>
  );

  if (href) {
    return (
      <Link 
        href={href} 
        ref={buttonRef}
        className={styles}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transition: 'transform 0.1s cubic-bezier(0.23, 1, 0.32, 1)' }}
      >
        {content}
      </Link>
    );
  }

  return (
    <button 
      ref={buttonRef}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={styles}
      style={{ transition: 'transform 0.1s cubic-bezier(0.23, 1, 0.32, 1)' }}
    >
      {content}
    </button>
  );
}
