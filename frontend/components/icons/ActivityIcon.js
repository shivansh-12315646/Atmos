export default function ActivityIcon({ className = "w-12 h-12", color = "currentColor" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="12" y="20" width="10" height="32" rx="2" fill={color} opacity="0.3"/>
      <rect x="27" y="12" width="10" height="40" rx="2" fill={color} opacity="0.6"/>
      <rect x="42" y="24" width="10" height="28" rx="2" fill={color}/>
      <path
        d="M8 54h48"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
