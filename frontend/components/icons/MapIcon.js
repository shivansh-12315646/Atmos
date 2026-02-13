export default function MapIcon({ className = "w-12 h-12", color = "currentColor" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 8 L22 52 M42 12 L42 56"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 14 L22 8 L42 12 L56 6 L56 50 L42 56 L22 52 L8 58 Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M8 14 L22 8 L22 52 L8 58 Z"
        fill={color}
        opacity="0.2"
      />
      <path
        d="M42 12 L56 6 L56 50 L42 56 Z"
        fill={color}
        opacity="0.3"
      />
      <circle cx="32" cy="28" r="6" fill={color}/>
      <circle cx="32" cy="28" r="3" fill="white"/>
    </svg>
  );
}
