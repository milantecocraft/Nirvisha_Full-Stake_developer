import { profile, socials } from '../data/content'
import { icons } from './Icons'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-start">
        <Reveal>
          <p className="mb-2 font-mono text-sm text-[var(--color-accent-2)]">01 · About</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{profile.name}</h2>
          <p className="mt-3 font-mono text-sm text-[var(--color-accent)]">// {profile.philosophy}</p>
          <p className="mt-6 text-lg leading-relaxed text-[var(--color-muted)]">{profile.about}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {socials.map((s) => {
              const Icon = icons[s.icon]
              return (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2 text-sm text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-ink)]"
                >
                  {Icon && <Icon width={18} height={18} />}
                  {s.label}
                </a>
              )
            })}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 font-mono text-sm">
            <div className="mb-4 flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <pre className="whitespace-pre-wrap leading-relaxed text-[var(--color-muted)]">
<span className="text-[var(--color-accent-2)]">const</span> dev = {'{'}
{'\n'}  name: <span className="text-[var(--color-accent)]">'{profile.name}'</span>,
{'\n'}  role: <span className="text-[var(--color-accent)]">'{profile.role}'</span>,
{'\n'}  based: <span className="text-[var(--color-accent)]">'{profile.location}'</span>,
{'\n'}  stack: [<span className="text-[var(--color-accent)]">'react'</span>, <span className="text-[var(--color-accent)]">'node'</span>, <span className="text-[var(--color-accent)]">'sql'</span>],
{'\n'}  open_to_work: <span className="text-[#28c840]">true</span>,
{'\n'}{'}'}
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
