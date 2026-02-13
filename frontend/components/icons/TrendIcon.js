export default function TrendIcon({ className = "w-12 h-12", color = "currentColor" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 48 L18 38 L28 42 L38 28 L48 32 L56 16"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M8 48 L18 38 L28 42 L38 28 L48 32 L56 16 L56 48 L8 48 Z"
        fill={color}
        opacity="0.2"
      />
      <circle cx="18" cy="38" r="3" fill={color}/>
      <circle cx="28" cy="42" r="3" fill={color}/>
      <circle cx="38" cy="28" r="3" fill={color}/>
      <circle cx="48" cy="32" r="3" fill={color}/>
      <circle cx="56" cy="16" r="3" fill={color}/>
      <path
        d="M48 16 L56 16 L56 24"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
