import { useRef } from 'react'
import { projects } from '../data/content'
import { ExternalIcon, GithubIcon } from './Icons'
import Section from './Section'
import Reveal from './Reveal'

function ProjectCard({ p, delay }) {
  const cardRef = useRef(null)

  // Cursor-tracked 3D tilt + glow position (CSS vars consumed in index.css).
  const onMove = (e) => {
    const el = cardRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    el.style.setProperty('--rx', `${(0.5 - py) * 6}deg`)
    el.style.setProperty('--ry', `${(px - 0.5) * 6}deg`)
    el.style.setProperty('--mx', `${px * 100}%`)
    el.style.setProperty('--my', `${py * 100}%`)
  }
  const onLeave = () => {
    const el = cardRef.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return (
    <Reveal
      delay={delay}
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="tilt-card group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] transition-colors hover:border-[var(--color-accent)]/60"
    >
      <span className="card-glow" />
      <a href={p.live} target="_blank" rel="noreferrer" className="relative block aspect-[16/10] overflow-hidden bg-[var(--color-bg-soft)]">
        <img
          src={p.image}
          alt={`${p.title} screenshot`}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
            e.currentTarget.nextSibling.style.display = 'flex'
          }}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 hidden items-center justify-center font-mono text-lg text-[var(--color-border)]">
          {p.title}
        </div>
        {p.domain && (
          <span className="absolute left-3 top-3 rounded-full bg-[var(--color-bg)]/80 px-2.5 py-0.5 font-mono text-[10px] text-[var(--color-accent-2)] backdrop-blur-sm">
            {p.domain}
          </span>
        )}
      </a>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-bold leading-snug">{p.title}</h3>
        {p.role && <p className="mt-0.5 font-mono text-[10px] text-[var(--color-accent)]">{p.role}</p>}
        <p className="mt-1.5 line-clamp-3 flex-1 text-xs leading-relaxed text-[var(--color-muted)]">{p.blurb}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded bg-[var(--color-bg-soft)] px-2 py-0.5 font-mono text-[10px] text-[var(--color-accent-2)]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-3.5 flex gap-3">
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-ink)] hover:text-[var(--color-accent)]"
          >
            <ExternalIcon width={14} height={14} /> Visit site
          </a>
          {p.code && (
            <a
              href={p.code}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-muted)] hover:text-[var(--color-ink)]"
            >
              <GithubIcon width={14} height={14} /> Code
            </a>
          )}
        </div>
      </div>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <Section id="projects" index="03 · Projects" title="Things I’ve shipped" kicker="Real products with users — built end to end.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} delay={i * 60} />
        ))}
      </div>
    </Section>
  )
}
