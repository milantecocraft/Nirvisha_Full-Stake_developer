import { useRef } from 'react'

// Wraps a control so it leans toward the cursor while hovered, then springs back.
// No-ops on coarse pointers and when the user prefers reduced motion.
export default function Magnetic({ children, strength = 0.28, className = '' }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    if (!window.matchMedia('(pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - (r.left + r.width / 2)) * strength
    const y = (e.clientY - (r.top + r.height / 2)) * strength
    el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`
  }
  const onLeave = () => {
    const el = ref.current
    if (el) el.style.transform = 'translate(0, 0)'
  }

  return (
    <span ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={`magnetic ${className}`}>
      {children}
    </span>
  )
}
