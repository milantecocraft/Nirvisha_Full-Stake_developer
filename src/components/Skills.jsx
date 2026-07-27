import { useState } from 'react'
import { skillGroups } from '../data/content'
import Section from './Section'
import Reveal from './Reveal'

export default function Skills() {
  const [active, setActive] = useState(0)
  const group = skillGroups[active]

  return (
    <Section id="skills" index="02 · Skills" title="Tools I build with" kicker="The full stack — front to back, dev to deploy.">
      <div className="mb-8 flex flex-wrap gap-2">
        {skillGroups.map((g, i) => (
          <button
            key={g.name}
            onClick={() => setActive(i)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              i === active
                ? 'bg-[var(--color-accent)] text-white'
                : 'border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-muted)] hover:text-[var(--color-ink)]'
            }`}
          >
            {g.name}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {group.skills.map((s, i) => (
          <Reveal
            key={s}
            delay={i * 40}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-3 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)]"
          >
            {s}
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
