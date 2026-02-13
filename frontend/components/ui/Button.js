import Link from 'next/link';

export default function Button({ 
  children, 
  variant = "primary", 
  href, 
  onClick, 
  className = "",
  icon: Icon 
}) {
  const baseStyles = "inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl";
  
  const variants = {
    primary: "bg-gradient-to-r from-atmos-forest-600 to-atmos-forest-700 text-white hover:scale-105",
    secondary: "bg-white text-atmos-forest-700 border-2 border-atmos-forest-200 hover:border-atmos-forest-400 hover:bg-atmos-forest-50",
    outline: "bg-transparent text-atmos-forest-700 border-2 border-atmos-forest-600 hover:bg-atmos-forest-600 hover:text-white",
    ghost: "bg-transparent text-atmos-forest-700 hover:bg-atmos-forest-100"
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <>
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {content}
    </button>
  );
}
