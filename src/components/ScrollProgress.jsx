import { useEffect, useState } from 'react'

// Thin gradient bar pinned to the very top, tracking page scroll progress.
export default function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    let raf = 0
    const compute = () => {
      raf = 0
      const h = document.documentElement.scrollHeight - window.innerHeight
      setPct(h > 0 ? (window.scrollY / h) * 100 : 0)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute)
    }
    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
      <div
        className="h-full origin-left bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] transition-[width] duration-150 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}
