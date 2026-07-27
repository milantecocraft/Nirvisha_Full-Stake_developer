import Reveal from './Reveal'

// Shared section shell: numbered mono label + heading, consistent spacing.
export default function Section({ id, index, title, kicker, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <Reveal className="mb-12">
        {index && <p className="mb-2 font-mono text-sm text-[var(--color-accent-2)]">{index}</p>}
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
        {kicker && <p className="mt-3 max-w-2xl text-[var(--color-muted)]">{kicker}</p>}
      </Reveal>
      {children}
    </section>
  )
}
