import { achievements, quote } from '../data/content'
import Section from './Section'
import Reveal from './Reveal'

export default function Achievements() {
  return (
    <Section id="achievements" index="05 · Achievements" title="Highlights">
      <div className="grid gap-6 sm:grid-cols-3">
        {achievements.map((a, i) => (
          <Reveal
            key={i}
            delay={i * 90}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 text-center"
          >
            <p className="gradient-text text-3xl font-extrabold md:text-4xl">{a.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{a.detail}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="mt-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-8 text-center">
        <p className="text-xl italic text-[var(--color-ink)] md:text-2xl">“{quote.text}”</p>
        <p className="mt-3 font-mono text-sm text-[var(--color-muted)]">— {quote.author}</p>
      </Reveal>
    </Section>
  )
}
