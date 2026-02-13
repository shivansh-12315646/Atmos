export default function CarbonIcon({ className = "w-12 h-12", color = "currentColor" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="32" r="28" stroke={color} strokeWidth="2" fill="none" opacity="0.2"/>
      <path
        d="M32 8C18.745 8 8 18.745 8 32s10.745 24 24 24 24-10.745 24-24S45.255 8 32 8z"
        stroke={color}
        strokeWidth="2.5"
        fill="none"
      />
      <path
        d="M32 18v28M18 32h28"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="32" cy="32" r="4" fill={color}/>
      <path
        d="M24 24l16 16M40 24L24 40"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
