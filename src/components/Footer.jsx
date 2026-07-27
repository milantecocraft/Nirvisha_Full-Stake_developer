import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="font-mono text-sm text-[var(--color-muted)]">
          <span className="gradient-text font-bold">{profile.initials}</span> · Built with React + Vite + Tailwind
        </p>
        <p className="text-sm text-[var(--color-muted)]">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
