// Fixed, GPU-friendly aurora backdrop — drifting blurred gradient blobs over a
// faint grid, with a vignette that fades them into the page background.
export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-[0.35]" />
      <div className="aurora aurora-1" />
      <div className="aurora aurora-2" />
      <div className="aurora aurora-3" />
      <div className="absolute inset-0 [background:radial-gradient(circle_at_50%_-5%,transparent,var(--color-bg)_72%)]" />
    </div>
  )
}
