export default function InsightsIcon({ className = "w-12 h-12", color = "currentColor" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="32" r="24" stroke={color} strokeWidth="2" fill="none" opacity="0.2"/>
      <path
        d="M32 14 L32 20 M32 44 L32 50 M14 32 L20 32 M44 32 L50 32"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="32" cy="32" r="10" fill={color} opacity="0.3"/>
      <path
        d="M32 22 L40 32 L32 42 L24 32 Z"
        fill={color}
      />
      <circle cx="32" cy="32" r="3" fill="white"/>
    </svg>
  );
}
