import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { profile } from '../data/content'
import { sections } from '../data/sections'
import { useActiveSection } from '../hooks/useActiveSection'

// Top nav links (skip the hero "Intro").
const navItems = sections.filter((s) => s.id !== 'top')

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection()

  const wrapRef = useRef(null)
  const linkRefs = useRef({})
  const [indicator, setIndicator] = useState({ left: 0, width: 0, on: false })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Slide the underline indicator under the active link.
  useLayoutEffect(() => {
    const el = linkRefs.current[active]
    const wrap = wrapRef.current
    if (el && wrap) {
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth, on: true })
    } else {
      setIndicator((i) => ({ ...i, on: false }))
    }
  }, [active])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[var(--color-border)] bg-[var(--color-bg)]/70 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-lg font-bold tracking-tight">
          <span className="gradient-text">{profile.initials}</span>
          <span className="text-[var(--color-muted)]">.dev</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          <div ref={wrapRef} className="relative flex items-center">
            {navItems.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                ref={(n) => (linkRefs.current[s.id] = n)}
                className={`relative px-3.5 py-2 text-sm transition-colors ${
                  active === s.id ? 'text-[var(--color-ink)]' : 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'
                }`}
              >
                {s.label}
              </a>
            ))}
            <span
              className="pointer-events-none absolute -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] transition-all duration-300 ease-out"
              style={{ left: indicator.left, width: indicator.width, opacity: indicator.on ? 1 : 0 }}
            />
          </div>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-3 rounded-full border border-[var(--color-accent)]/50 bg-[var(--color-accent)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-ink)] transition-all hover:bg-[var(--color-accent)]/20"
          >
            Resume
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] md:hidden"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-[var(--color-ink)] transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 bg-[var(--color-ink)] transition ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-[var(--color-ink)] transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className={`text-sm ${active === s.id ? 'gradient-text font-semibold' : 'text-[var(--color-muted)]'}`}
              >
                {s.label}
              </a>
            ))}
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="text-sm font-medium gradient-text">
              Resume →
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
