import type { CSSProperties } from 'react'

const weeks = [
  { label: 'Oct 1–7', completed: 8, scheduled: 8 },
  { label: 'Oct 8–14', completed: 10, scheduled: 10 },
  { label: 'Oct 15–21', completed: 10, scheduled: 10 },
  { label: 'Oct 22–28', completed: 7, scheduled: 8 },
  { label: 'Oct 29–31', completed: 3, scheduled: 4 },
]

const sampleRequests = [
  { id: 'SR-014', description: 'Spot clean — east conference room', status: 'Resolved' },
  { id: 'SR-018', description: 'Dispenser replacement — kitchen', status: 'Resolved' },
  { id: 'SR-021', description: 'Lobby glass marks — follow-up', status: 'Open' },
]

function VisitChart({ large = false }: { large?: boolean }) {
  return (
    <div className={`visit-chart${large ? ' visit-chart--large' : ''}`}>
      <div className="visit-chart__heading">
        <span>Visit completion</span>
        <span>38 of 40</span>
      </div>
      <div
        className="visit-chart__plot"
        role="img"
        aria-label="Illustrative weekly visit completion: October 1–7, 8 of 8; October 8–14, 10 of 10; October 15–21, 10 of 10; October 22–28, 7 of 8; October 29–31, 3 of 4."
      >
        {weeks.map((week) => {
          const percentage = Math.round((week.completed / week.scheduled) * 100)
          return (
            <div className="visit-chart__column" key={week.label}>
              <div className="visit-chart__track">
                <span
                  className="visit-chart__bar"
                  style={{ height: `${percentage}%` } as CSSProperties}
                />
              </div>
              <span className="visit-chart__label">{week.label}</span>
              <span className="visit-chart__value">
                {week.completed}/{week.scheduled}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function ReportBrand() {
  return (
    <div className="report-brand">
      <div className="report-brand__mark" aria-hidden="true">
        BPC
      </div>
      <div>
        <strong>BluePeak Commercial Cleaning</strong>
        <span>Facility services · Monthly report</span>
      </div>
    </div>
  )
}

export function HeroReportPreview() {
  return (
    <figure className="hero-report" data-reveal>
      <div className="sample-flag">
        <span className="sample-flag__dot" aria-hidden="true" />
        Illustrative sample · Fictional data
      </div>

      <div className="report-window">
        <div className="report-window__bar">
          <span className="pdf-label">PDF</span>
          <span>Monthly service report</span>
          <span className="report-window__page">Sample</span>
        </div>

        <div className="report-paper report-paper--hero">
          <header className="report-topline">
            <ReportBrand />
            <div className="report-type">
              <span>Monthly report</span>
              <strong>October 2026</strong>
            </div>
          </header>

          <div className="report-meta">
            <div>
              <span>Prepared for</span>
              <strong>Redwood Office Partners</strong>
            </div>
            <div>
              <span>Reporting period</span>
              <strong>October 1–31, 2026</strong>
            </div>
          </div>

          <div className="report-stats">
            <div>
              <strong>40</strong>
              <span>Scheduled visits</span>
            </div>
            <div>
              <strong>38</strong>
              <span>Marked completed</span>
            </div>
            <div>
              <strong>94%</strong>
              <span>Avg. inspection score</span>
            </div>
          </div>

          <div className="report-lower">
            <VisitChart />
            <div className="report-request-card">
              <span className="report-request-card__label">Service requests</span>
              <strong>3</strong>
              <div className="request-split">
                <span>
                  <i className="status-dot status-dot--resolved" aria-hidden="true" />2 resolved
                </span>
                <span>
                  <i className="status-dot status-dot--open" aria-hidden="true" />1 open
                </span>
              </div>
            </div>
          </div>

          <footer className="report-footer">
            <span>Prepared under the BluePeak brand</span>
            <span>Fictional demonstration data</span>
          </footer>
        </div>
      </div>

      <figcaption>
        A report preview using fictional company and performance data.
      </figcaption>
    </figure>
  )
}

export function SampleReportPreview() {
  return (
    <div className="sample-report-wrap" data-reveal>
      <div className="sample-report-topbar">
        <span className="sample-outline-label">Illustrative Sample – Fictional Data</span>
        <span className="sample-report-caption">Report layout preview</span>
      </div>

      <article className="sample-report" aria-label="Illustrative monthly service report for BluePeak Commercial Cleaning and Redwood Office Partners">
        <div className="sample-report__stripe" aria-hidden="true" />
        <header className="sample-report__header">
          <ReportBrand />
          <div className="sample-report__title">
            <span>Monthly Service Report</span>
            <strong>October 2026</strong>
          </div>
        </header>

        <div className="sample-report__client">
          <div>
            <span>Prepared for</span>
            <strong>Redwood Office Partners</strong>
          </div>
          <div>
            <span>Reporting period</span>
            <strong>October 1–31, 2026</strong>
          </div>
          <div>
            <span>Reference</span>
            <strong>BPC–ROP–1026</strong>
          </div>
        </div>

        <div className="sample-metrics">
          <div className="sample-metric">
            <span>Scheduled visits</span>
            <strong>40</strong>
            <small>Recorded on the monthly schedule</small>
          </div>
          <div className="sample-metric">
            <span>Marked completed</span>
            <strong>38</strong>
            <small>Completed visits in supplied records</small>
          </div>
          <div className="sample-metric">
            <span>Avg. inspection score</span>
            <strong>94%</strong>
            <small>Average of recorded inspection scores</small>
          </div>
          <div className="sample-metric">
            <span>Service requests</span>
            <strong>3</strong>
            <small>Recorded during the reporting period</small>
          </div>
        </div>

        <div className="sample-report__body">
          <section className="sample-report__chart" aria-labelledby="sample-visits-heading">
            <div className="sample-block-heading">
              <h3 id="sample-visits-heading">Visit activity</h3>
              <span>By reporting week</span>
            </div>
            <VisitChart large />
            <p className="sample-report__reading-note">
              <span aria-hidden="true" />
              Completion reflects only the visit records supplied for this illustrative period.
            </p>
          </section>

          <section className="sample-report__requests" aria-labelledby="sample-requests-heading">
            <div className="sample-block-heading">
              <h3 id="sample-requests-heading">Service requests</h3>
              <span>2 resolved · 1 open</span>
            </div>
            <ul className="request-list">
              {sampleRequests.map((request) => (
                <li key={request.id}>
                  <div>
                    <span>{request.id}</span>
                    <p>{request.description}</p>
                  </div>
                  <span className={`request-status request-status--${request.status.toLowerCase()}`}>
                    {request.status}
                  </span>
                </li>
              ))}
            </ul>
            <p className="open-month-end">
              <span aria-hidden="true" />
              1 request open at month-end
            </p>
          </section>
        </div>

        <footer className="sample-report__footer">
          <p>Prepared from records supplied by BluePeak Commercial Cleaning.</p>
          <span>Illustrative sample · Fictional data</span>
        </footer>
      </article>
    </div>
  )
}
