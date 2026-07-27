import { useEffect, useState } from 'react'
import { sectionIds } from '../data/sections'

// Scroll-spy: returns the id of the section currently in the viewport.
// Picks the last section whose top has passed 38% of the viewport height,
// and snaps to the final section once the page is scrolled to the bottom.
export function useActiveSection() {
  const [active, setActive] = useState(sectionIds[0])

  useEffect(() => {
    let raf = 0
    const compute = () => {
      raf = 0
      const line = window.scrollY + window.innerHeight * 0.38
      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= line) current = id
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = sectionIds[sectionIds.length - 1]
      }
      setActive((prev) => (prev === current ? prev : current))
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

  return active
}
