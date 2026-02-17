export default function GlassCard({ children, className = "" }) {
  return (
    <div className={`glass rounded-2xl p-8 shadow-glass ${className}`}>
      {children}
    </div>
  );
}
