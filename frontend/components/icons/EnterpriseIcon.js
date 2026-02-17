export default function EnterpriseIcon({ className = "w-12 h-12", color = "currentColor" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 24 L32 12 L48 24 L48 56 L16 56 Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M16 24 L32 12 L48 24 L48 56 L16 56 Z"
        fill={color}
        opacity="0.1"
      />
      <rect x="24" y="32" width="6" height="8" fill={color} opacity="0.5"/>
      <rect x="34" y="32" width="6" height="8" fill={color} opacity="0.5"/>
      <rect x="24" y="44" width="6" height="8" fill={color} opacity="0.5"/>
      <rect x="34" y="44" width="6" height="8" fill={color} opacity="0.5"/>
      <rect x="28" y="48" width="8" height="8" fill={color}/>
      <path
        d="M22 24 L32 16 L42 24"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
