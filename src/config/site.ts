/**
 * CleanProof business configuration
 * --------------------------------
 * Update the contact email here if it ever changes. Every mail link,
 * the contact section and the footer read from this single constant.
 *
 * Do not add a phone number or physical address unless one is genuinely
 * in use. CleanProof is an independent, early-stage service based in India.
 */
export const CONTACT_EMAIL = 'cleanproof.reports@gmail.com'

export const BUSINESS = {
  name: 'CleanProof',
  tagline: 'Your cleaning work. Professionally reported.',
  description:
    'Independent monthly reporting for commercial cleaning companies. Your records, organized into a polished PDF report under your brand.',
  location: 'India',
  market: 'United States',
  stage: 'Independent, early-stage service',
} as const

export const MAILTO = {
  general: `mailto:${CONTACT_EMAIL}`,
  consult: `mailto:${CONTACT_EMAIL}?subject=Reporting%20needs%20%E2%80%94%20CleanProof`,
  sample: `mailto:${CONTACT_EMAIL}?subject=Sample%20report%20question%20%E2%80%94%20CleanProof`,
} as const

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Sample Report', href: '#sample-report' },
  { label: 'Contact', href: '#contact' },
] as const
