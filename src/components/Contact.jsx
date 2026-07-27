import { useState } from 'react'
import { profile, socials } from '../data/content'
import { icons, ArrowIcon } from './Icons'
import Section from './Section'
import Reveal from './Reveal'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | ok | error

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    data.append('access_key', profile.web3formsKey)
    data.append('subject', 'New message from your portfolio')
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      const json = await res.json()
      if (json.success) {
        setStatus('ok')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section id="contact" index="06 · Contact" title="It’s time to talk" kicker="Hiring, collaborating, or just curious? Drop a line.">
      <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <p className="text-lg leading-relaxed text-[var(--color-muted)]">
            The fastest way to reach me is email — I usually reply within a day.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-4 block font-mono text-lg text-[var(--color-accent-2)] hover:text-[var(--color-accent)]"
          >
            {profile.email}
          </a>
          {profile.phone && (
            <a
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              className="mt-1 block font-mono text-sm text-[var(--color-muted)] hover:text-[var(--color-ink)]"
            >
              {profile.phone}
            </a>
          )}
          {profile.availability && (
            <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#28c840]/30 bg-[#28c840]/10 px-3 py-1 text-xs font-medium text-[#28c840]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" /> {profile.availability}
            </p>
          )}
          <div className="mt-8 flex gap-3">
            {socials.map((s) => {
              const Icon = icons[s.icon]
              return (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-ink)]"
                >
                  {Icon && <Icon width={20} height={20} />}
                </a>
              )
            })}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="name"
                required
                placeholder="Your name"
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--color-accent)]"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Your email"
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--color-accent)]"
              />
            </div>
            <select
              name="interest"
              className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-3 text-sm text-[var(--color-muted)] outline-none transition-colors focus:border-[var(--color-accent)]"
            >
              <option>I'm interested in hiring</option>
              <option>I'd like to collaborate</option>
              <option>Just saying hello</option>
            </select>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your message…"
              className="w-full resize-none rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--color-accent)]"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-all hover:gap-3 disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
              <ArrowIcon width={18} height={18} className="transition-transform group-hover:translate-x-0.5" />
            </button>
            {status === 'ok' && <p className="text-sm text-[#28c840]">Thanks! Your message is on its way. ✅</p>}
            {status === 'error' && <p className="text-sm text-[#ff5f57]">Something went wrong — try emailing directly.</p>}
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
