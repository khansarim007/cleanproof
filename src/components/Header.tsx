import { useEffect, useState } from 'react'
import { MAILTO, NAV_LINKS } from '../config/site'
import { CloseIcon, MenuIcon } from './Icons'
import { Wordmark } from './Brand'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 981px)')
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false)
    }

    desktopQuery.addEventListener('change', closeOnDesktop)
    return () => desktopQuery.removeEventListener('change', closeOnDesktop)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="container header-inner">
          <a className="brand-link" href="#top" aria-label="CleanProof — back to top">
            <Wordmark />
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="button button--small button--outline header-cta" href="#contact">
              Contact CleanProof
            </a>
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        <div
          className={`mobile-nav-wrap${menuOpen ? ' is-open' : ''}`}
          id="mobile-navigation"
          aria-hidden={!menuOpen}
        >
          <nav className="container mobile-nav" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                <span>{link.label}</span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
            <a
              className="button button--primary mobile-nav__cta"
              href={MAILTO.consult}
              onClick={() => setMenuOpen(false)}
            >
              Discuss your reporting needs
            </a>
            <p className="mobile-nav__note">
              Independent, early-stage reporting service. Based in India, serving US cleaning companies.
            </p>
          </nav>
        </div>
      </header>
    </>
  )
}
