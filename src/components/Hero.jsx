import { useEffect, useState } from 'react'
import { profile, workStack } from '../data/content'
import { ArrowIcon } from './Icons'
import Magnetic from './Magnetic'
import RequestJourney from './RequestJourney'

// Build-sequence timings: blank → wireframe → greybox → text resolves →
// chips + CTAs → settled.
const MARKS = [
  [1, 350],
  [2, 1100],
  [3, 1700],
  [4, 2300],
  [5, 2900],
]

export default function Hero() {
  const [step, setStep] = useState(0)
  const [runId, setRunId] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStep(5)
      return
    }
    const timers = MARKS.map(([s, t]) => setTimeout(() => setStep(s), t))
    return () => timers.forEach(clearTimeout)
  }, [runId])

  const replay = () => {
    setStep(0)
    setRunId((n) => n + 1)
  }

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="glow absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-36 md:min-h-screen md:pt-40 lg:grid-cols-[1.05fr_.95fr]">
        {/* ---------- left: the hero that builds itself ---------- */}
        <div className="hero-build relative" data-step={step}>
          <span className="bs-guides" aria-hidden="true">
            <i className="bs-guide-label">hero · auto</i>
          </span>

          <p className="bs-el mb-5 font-mono text-sm text-[var(--color-accent-2)]" style={{ '--d': 0 }}>
            {'> '}
            {profile.role} · {profile.location}
          </p>

          <h1 className="bs-el font-mono text-5xl font-bold leading-tight sm:text-6xl md:text-7xl" style={{ '--d': 1 }}>
            <span className="gradient-text">{profile.heroGreeting}</span>
            <span className="cursor text-[var(--color-accent)]">_</span>
          </h1>

          <p className="bs-el mt-6 max-w-2xl text-xl text-[var(--color-ink)] md:text-2xl" style={{ '--d': 2 }}>
            {profile.heroTagline}
          </p>
          <p className="bs-el mt-4 max-w-xl text-base leading-relaxed text-[var(--color-muted)]" style={{ '--d': 3 }}>
            {profile.heroBlurb}
          </p>

          <div className="bs-el mt-9 flex flex-wrap items-center gap-4" style={{ '--d': 4 }}>
            <Magnetic>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-all hover:gap-3 hover:bg-[var(--color-accent)]/90"
              >
                View my work
                <ArrowIcon width={18} height={18} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)]"
              >
                Download résumé
              </a>
            </Magnetic>
          </div>

          <div className="bs-late mt-14">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[var(--color-muted)]">Work stack</p>
            <div className="flex flex-wrap gap-2">
              {workStack.map((t, i) => (
                <span
                  key={t}
                  className="bs-chip rounded-md border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-1.5 font-mono text-xs text-[var(--color-muted)]"
                  style={{ '--i': i }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <button type="button" onClick={replay} className="bs-replay" aria-label="Replay build sequence">
            ↻ rebuild
          </button>
        </div>

        {/* ---------- right: the packet's round trip ---------- */}
        <div className="hero-visual" data-step={step}>
          <RequestJourney />
        </div>
      </div>
    </section>
  )
}
