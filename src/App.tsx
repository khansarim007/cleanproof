import { useEffect } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { SectionHeading } from './components/SectionHeading'
import { HeroReportPreview, SampleReportPreview } from './components/ReportPreview'
import {
  ArrowDown,
  ArrowRight,
  CalendarIcon,
  CheckIcon,
  ClipboardCheckIcon,
  DocumentIcon,
  IndiaUsIcon,
  MailIcon,
  MinusIcon,
  PhotoIcon,
  RequestIcon,
  ShieldCheckIcon,
} from './components/Icons'
import { BUSINESS, CONTACT_EMAIL, MAILTO } from './config/site'

const services = [
  {
    number: '01',
    title: 'Monthly Service Reports',
    copy: 'Summaries of recorded cleaning activity and scheduled visits, structured for a quick monthly read.',
    icon: CalendarIcon,
    tags: 'Scheduled visits · cleaning activity',
    feature: true,
  },
  {
    number: '02',
    title: 'Inspection Summaries',
    copy: 'Organized inspection results and recorded quality scores, presented in a consistent format.',
    icon: ClipboardCheckIcon,
    tags: 'Results · recorded scores',
  },
  {
    number: '03',
    title: 'Service Request Tracking',
    copy: 'Documentation of recorded issues and their resolution status at the time of reporting.',
    icon: RequestIcon,
    tags: 'Issues · resolution status',
  },
  {
    number: '04',
    title: 'Photo Documentation',
    copy: 'Selected photos organized by location and area, with clear labels for your client.',
    icon: PhotoIcon,
    tags: 'Locations · areas · captions',
  },
  {
    number: '05',
    title: 'Branded PDF Reports',
    copy: 'Professionally formatted reports prepared using the cleaning company’s branding.',
    icon: DocumentIcon,
    tags: 'Your name · logo · colors',
    feature: true,
  },
]

const steps = [
  {
    number: '01',
    title: 'Share Your Records',
    copy: 'The cleaning company provides its existing visit logs, inspection records, service requests and selected photographs.',
    detail: 'Use the records you already keep. There is no new system to adopt.',
  },
  {
    number: '02',
    title: 'We Prepare Your Report',
    copy: 'CleanProof organizes the supplied information into a professional monthly report.',
    detail: 'Your records are shaped into a clear, consistent structure and prepared under your branding.',
  },
  {
    number: '03',
    title: 'Review and Deliver',
    copy: 'The cleaning company receives a PDF to review and share with its own clients.',
    detail: 'You keep control of the final client relationship and every report you send.',
  },
]

const fitPoints = [
  'You are an independent commercial cleaning contractor.',
  'You manage recurring office or commercial cleaning contracts.',
  'You already keep visit logs, inspection records, service requests or job photos.',
  'You want consistent, client-ready reporting without changing how your team works.',
]

const fitDetails = [
  { label: 'Engagement', value: 'Monthly reporting support' },
  { label: 'Working from', value: 'Records supplied by your team' },
  { label: 'Delivered as', value: 'A branded PDF for your review' },
  { label: 'Based in', value: 'India, serving US companies' },
]

const recordTypes = [
  { icon: CalendarIcon, label: 'Visit logs' },
  { icon: ClipboardCheckIcon, label: 'Inspection records' },
  { icon: RequestIcon, label: 'Service requests' },
  { icon: PhotoIcon, label: 'Selected photos' },
]

function App() {
  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-revealed'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    revealItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-heading">
          <div className="hero-orbit" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy" data-reveal>
              <p className="hero-kicker">
                <span className="kicker-mark" aria-hidden="true" />
                Independent reporting for commercial cleaning companies
              </p>
              <h1 id="hero-heading">
                Your cleaning work.
                <br />
                {' '}
                <span>Professionally reported.</span>
              </h1>
              <p className="hero-description">
                We turn your existing cleaning records, inspection results and service photos into
                polished monthly reports your commercial clients can understand.
              </p>
              <div className="hero-actions">
                <a className="button button--primary" href={MAILTO.consult}>
                  Discuss Your Reporting Needs
                  <ArrowRight />
                </a>
                <a className="text-link" href="#sample-report">
                  View sample report
                  <ArrowDown />
                </a>
              </div>
              <ul className="hero-assurances" aria-label="Service principles">
                <li>
                  <CheckIcon />
                  Prepared under your brand
                </li>
                <li>
                  <CheckIcon />
                  You review before sharing
                </li>
              </ul>
            </div>

            <div className="hero-visual">
              <HeroReportPreview />
              <div className="hero-note hero-note--top" aria-hidden="true">
                <span>Client-ready</span>
                <strong>Monthly PDF</strong>
              </div>
              <div className="hero-note hero-note--bottom" aria-hidden="true">
                <span className="hero-note__avatar">BPC</span>
                <span>
                  Prepared under
                  <strong>your branding</strong>
                </span>
              </div>
            </div>
          </div>

          <div className="container hero-record-strip" data-reveal>
            <p>Built from the records you already keep</p>
            <div className="record-list">
              {recordTypes.map(({ icon: Icon, label }) => (
                <span className="record-chip" key={label}>
                  <Icon />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="services section" id="services" aria-labelledby="services-heading">
          <div className="container">
            <div className="section-intro">
              <SectionHeading
                eyebrow="What we prepare"
                id="services-heading"
                title="A polished report, built from the records you already keep."
                description="CleanProof is a reporting layer, not a cleaning platform. We work from the information your team supplies and present it clearly under your company’s branding."
              />
              <div className="intro-aside" data-reveal>
                <p>Five ways we shape the month:</p>
                <span>From raw records to a document your client can actually read.</span>
              </div>
            </div>

            <div className="services-grid">
              {services.map(({ number, title, copy, icon: Icon, tags, feature }) => (
                <article className={`service-card${feature ? ' service-card--feature' : ''}`} key={title} data-reveal>
                  <div className="service-card__top">
                    <span className="service-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <span className="service-number">{number}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <span className="service-tags">{tags}</span>
                </article>
              ))}
            </div>

            <div className="scope-note" data-reveal>
              <ShieldCheckIcon />
              <div>
                <h3>A note on scope</h3>
                <p>
                  Only information supported by the records supplied by the customer is included.
                  CleanProof does not add, infer or independently verify inspection findings.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="process section" id="how-it-works" aria-labelledby="process-heading">
          <div className="container process-grid">
            <div className="process-intro">
              <SectionHeading
                eyebrow="How it works"
                id="process-heading"
                title="Three steps from records to a report you can share."
                description="A straightforward reporting process designed around the way your cleaning company already works."
              />
              <div className="process-aside" data-reveal>
                <IndiaUsIcon />
                <p>
                  Designed to work across time zones for US-based cleaning teams, from our base in{' '}
                  {BUSINESS.location}.
                </p>
              </div>
            </div>

            <ol className="process-steps">
              {steps.map((step) => (
                <li className="process-step" key={step.number} data-reveal>
                  <span className="process-step__number">{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                    <span className="process-step__detail">{step.detail}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="sample-section section" id="sample-report" aria-labelledby="sample-heading">
          <div className="container">
            <div className="sample-heading-row">
              <SectionHeading
                eyebrow="Sample report"
                id="sample-heading"
                title="This is what a clearer month looks like."
                description="An illustrative preview of the CleanProof report format. Your report would contain only the records your company supplies, organized under your branding."
                tone="dark"
              />
              <div className="sample-disclaimer" data-reveal>
                <span className="sample-disclaimer__icon" aria-hidden="true">
                  i
                </span>
                <p>
                  The names and figures shown here are fictional. This is not a real customer report
                  or a record of real business performance.
                </p>
              </div>
            </div>

            <SampleReportPreview />
            <div className="sample-footnotes" data-reveal>
              <span>
                <span className="footnote-dot footnote-dot--accent" aria-hidden="true" /> Sample
                company: BluePeak Commercial Cleaning
              </span>
              <span>
                <span className="footnote-dot" aria-hidden="true" /> Sample client: Redwood Office
                Partners
              </span>
              <span>All figures are illustrative</span>
            </div>
          </div>
        </section>

        <section className="audience section" id="who-we-serve" aria-labelledby="audience-heading">
          <div className="container audience-grid">
            <div className="audience-copy">
              <SectionHeading
                eyebrow="Who we serve"
                id="audience-heading"
                title="For independent cleaning teams with recurring commercial contracts."
                description="CleanProof is intended for independent commercial cleaning contractors—particularly businesses managing recurring office and commercial cleaning contracts."
              />
              <p data-reveal>
                If your team is already recording visits, inspections and service requests, reporting
                can become another weekly task. CleanProof gives that information a consistent,
                professional shape, without asking you to change the way the work itself is done.
              </p>

              <div className="boundary-card" data-reveal>
                <h3>The boundary is simple</h3>
                <ul>
                  <li>
                    <CheckIcon />
                    We format the records you provide.
                  </li>
                  <li>
                    <CheckIcon />
                    We prepare reports under your company’s branding.
                  </li>
                  <li>
                    <MinusIcon />
                    We do not manage cleaning staff or operations.
                  </li>
                  <li>
                    <MinusIcon />
                    We do not perform independent inspections or certify service quality.
                  </li>
                </ul>
              </div>
            </div>

            <div className="audience-panel" data-reveal>
              <div className="audience-panel__header">
                <span>Good fit</span>
                <span className="audience-panel__status">
                  <span aria-hidden="true" /> For independent contractors
                </span>
              </div>
              <ul className="fit-list">
                {fitPoints.map((point) => (
                  <li key={point}>
                    <span className="fit-check" aria-hidden="true">
                      <CheckIcon />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="fit-details">
                {fitDetails.map((detail) => (
                  <div key={detail.label}>
                    <span>{detail.label}</span>
                    <strong>{detail.value}</strong>
                  </div>
                ))}
              </div>
              <p className="audience-panel__note">
                CleanProof is an independent, early-stage service. We keep the scope clear, the
                process simple and the terms straightforward.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-section section" id="contact" aria-labelledby="contact-heading">
          <div className="container">
            <div className="contact-card" data-reveal>
              <div className="contact-card__main">
                <p className="eyebrow">
                  <span className="eyebrow__line" aria-hidden="true" />
                  Start a conversation
                </p>
                <h2 id="contact-heading">Let’s simplify your monthly reporting.</h2>
                <p className="contact-lead">
                  Tell us a little about your cleaning company, your reporting cycle and the records
                  you already keep. We’ll reply by email to discuss whether CleanProof is a good fit.
                </p>
                <a className="contact-email" href={MAILTO.consult}>
                  <span className="contact-email__icon">
                    <MailIcon />
                  </span>
                  <span>
                    <small>Email CleanProof</small>
                    <strong>{CONTACT_EMAIL}</strong>
                  </span>
                  <ArrowRight />
                </a>
                <p className="contact-meta">
                  Independent, early-stage service · Based in {BUSINESS.location} · Serving{' '}
                  {BUSINESS.market}-based cleaning companies
                </p>
              </div>

              <aside className="contact-guide" aria-labelledby="contact-guide-heading">
                <span className="contact-guide__label">A useful first email</span>
                <h3 id="contact-guide-heading">Include a few basics:</h3>
                <ul>
                  <li>
                    <span>01</span>
                    Roughly how many commercial clients you report for
                  </li>
                  <li>
                    <span>02</span>
                    How often you need reports prepared
                  </li>
                  <li>
                    <span>03</span>
                    The records your team already keeps
                  </li>
                </ul>
                <div className="contact-guide__footer">
                  <ShieldCheckIcon />
                  <p>No account or software setup is required to start the conversation.</p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App
