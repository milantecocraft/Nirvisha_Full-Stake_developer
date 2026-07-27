import { sections } from '../data/sections'
import { useActiveSection } from '../hooks/useActiveSection'

// Right-side vertical rail. Each section is a dot; the active one expands into a
// gradient pill, and labels slide in on hover. Click to smooth-scroll.
export default function SectionNav() {
  const active = useActiveSection()

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-1.5 lg:flex"
    >
      {sections.map((s) => {
        const isActive = active === s.id
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-label={s.label}
            aria-current={isActive ? 'true' : undefined}
            className="group flex items-center gap-3 py-1"
          >
            <span
              className={`pointer-events-none translate-x-2 font-mono text-xs tracking-wide opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 ${
                isActive ? 'text-[var(--color-ink)]' : 'text-[var(--color-muted)]'
              }`}
            >
              <span className="text-[var(--color-accent-2)]">{s.no}</span> {s.label}
            </span>
            <span
              className={`relative flex h-2.5 items-center justify-center rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-7 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)]'
                  : 'w-2.5 bg-[var(--color-border)] group-hover:bg-[var(--color-muted)]'
              }`}
            />
          </a>
        )
      })}
    </nav>
  )
}
