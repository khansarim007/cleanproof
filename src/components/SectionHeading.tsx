type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  id?: string
  tone?: 'light' | 'dark'
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  tone = 'light',
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div
      className={`section-heading section-heading--${tone} section-heading--${align}`}
      data-reveal
    >
      <p className="eyebrow">
        <span className="eyebrow__line" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id}>{title}</h2>
      {description ? <p className="section-heading__description">{description}</p> : null}
    </div>
  )
}
