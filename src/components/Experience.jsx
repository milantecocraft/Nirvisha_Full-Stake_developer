import { experience, education } from '../data/content'
import Section from './Section'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <Section id="experience" index="04 · Experience" title="Where I’ve worked">
      <div className="relative border-l border-[var(--color-border)] pl-8">
        {experience.map((job, i) => (
          <Reveal key={i} delay={i * 100} className="relative mb-12 last:mb-0">
            <span className="absolute -left-[2.6rem] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)]" />
            <p className="font-mono text-sm text-[var(--color-accent-2)]">{job.period}</p>
            <h3 className="mt-1 text-xl font-bold">{job.role}</h3>
            <p className="text-[var(--color-muted)]">{job.company}</p>
            <ul className="mt-4 space-y-2">
              {job.points.map((pt, j) => (
                <li key={j} className="flex gap-3 text-sm leading-relaxed text-[var(--color-muted)]">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-accent)]" />
                  {pt}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} className="mt-12 flex flex-col gap-1 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent-2)]">Education</p>
          <h3 className="mt-1 text-lg font-bold">{education.degree}</h3>
          <p className="text-[var(--color-muted)]">{education.school}</p>
        </div>
        <p className="font-mono text-sm text-[var(--color-muted)]">{education.period}</p>
      </Reveal>
    </Section>
  )
}
