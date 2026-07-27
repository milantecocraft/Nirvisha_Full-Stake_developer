import { useEffect, useRef } from 'react'

// A soft spotlight that trails the cursor. Idles when the mouse is still, and
// disables itself on touch / reduced-motion devices for performance + comfort.
export default function Cursor() {
  const ref = useRef(null)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return

    const el = ref.current
    let raf = 0
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2

    const render = () => {
      raf = 0
      el.style.transform = `translate(${x}px, ${y}px)`
    }
    const onMove = (e) => {
      x = e.clientX
      y = e.clientY
      el.style.opacity = '1'
      if (!raf) raf = requestAnimationFrame(render)
    }
    const onLeave = () => {
      el.style.opacity = '0'
    }

    window.addEventListener('pointermove', onMove)
    document.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={ref} className="cursor-glow" />
}
