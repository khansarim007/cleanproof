import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const baseProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
} as const

export function ArrowRight(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}

export function ArrowDown(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 4v15" />
      <path d="m6 13 6 6 6-6" />
    </svg>
  )
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
      <path d="M7.5 3v4M16.5 3v4M3.5 9.5h17" />
      <path d="M8 13h2M14 13h2M8 16.5h2M14 16.5h2" />
    </svg>
  )
}

export function ClipboardCheckIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M9 4.5H7.5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-13a2 2 0 0 0-2-2H15" />
      <rect x="9" y="3" width="6" height="3" rx="1" />
      <path d="m8.5 13 2.2 2.2 4.8-5" />
    </svg>
  )
}

export function RequestIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M20 11.5a8 8 0 0 1-8.5 8 9 9 0 0 1-3.2-.7L4 20l1.2-3.8a8 8 0 1 1 14.8-4.7Z" />
      <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" strokeWidth="2.2" />
    </svg>
  )
}

export function PhotoIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
      <circle cx="8.8" cy="9.5" r="1.6" />
      <path d="m4.5 17 4.7-4.3 3.3 3 2.5-2.2 4.5 4" />
    </svg>
  )
}

export function DocumentIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M6 3.5h7l5 5v12H6a1.5 1.5 0 0 1-1.5-1.5V5A1.5 1.5 0 0 1 6 3.5Z" />
      <path d="M13 3.5v5h5M8.5 12h7M8.5 15.5h7M8.5 19h4" />
    </svg>
  )
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m5 12.5 4.5 4.5L19 6.5" />
    </svg>
  )
}

export function MinusIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M5 12h14" />
    </svg>
  )
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M4 8h16M4 16h16" />
    </svg>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  )
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 3.2 19 6v5.2c0 4.3-2.8 7.7-7 9.6-4.2-1.9-7-5.3-7-9.6V6l7-2.8Z" />
      <path d="m8.7 12 2.1 2.1 4.5-4.5" />
    </svg>
  )
}

export function IndiaUsIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.2 3.7 5.1 3.7 8.5S14.4 18.3 12 20.5C9.6 18.3 8.3 15.4 8.3 12S9.6 5.7 12 3.5Z" />
    </svg>
  )
}
