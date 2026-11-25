type BrandMarkProps = {
  size?: number
  className?: string
}

export function BrandMark({ size = 34, className }: BrandMarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="64" height="64" rx="15" fill="currentColor" />
      <path
        d="M19 17.5h18.5a7.5 7.5 0 0 1 7.5 7.5v27H26a7 7 0 0 1-7-7V17.5Z"
        fill="#F8F7F2"
      />
      <path
        d="M26 27h13M26 34h13M26 41h8"
        stroke="#9FB9B3"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="m37.8 44.8 4.1 4.1 8.4-9.2"
        stroke="#2C8976"
        strokeWidth="4.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className={`wordmark${light ? ' wordmark--light' : ''}`}>
      <BrandMark size={34} className="wordmark__mark" />
      <span className="wordmark__text">CleanProof</span>
    </span>
  )
}
