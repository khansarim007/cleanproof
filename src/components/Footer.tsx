import { BUSINESS, CONTACT_EMAIL, MAILTO, NAV_LINKS } from '../config/site'
import { Wordmark } from './Brand'
import { MailIcon } from './Icons'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <a className="brand-link brand-link--footer" href="#top" aria-label="CleanProof — back to top">
            <Wordmark light />
          </a>
          <p>
            Independent monthly reporting for commercial cleaning companies. Your existing records,
            organized into a professional report under your brand.
          </p>
          <span className="footer-stage">{BUSINESS.stage}</span>
        </div>

        <nav className="footer-column" aria-label="Footer navigation">
          <h2>Explore</h2>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-column footer-contact">
          <h2>Contact</h2>
          <a className="footer-email" href={MAILTO.consult}>
            <MailIcon />
            <span>{CONTACT_EMAIL}</span>
          </a>
          <p>
            Based in {BUSINESS.location}. Built for commercial cleaning companies across the{' '}
            {BUSINESS.market}.
          </p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {year} CleanProof. All rights reserved.</p>
        <p>Independent reporting service. Not a cleaning or inspection provider.</p>
      </div>
    </footer>
  )
}
