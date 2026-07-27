import { forwardRef, useEffect, useRef, useState } from 'react'

// Fades children up the first time they scroll into view. Forwards a ref (merged
// with the internal IntersectionObserver ref) so callers can attach interactions.
const Reveal = forwardRef(function Reveal(
  { children, delay = 0, as: Tag = 'div', className = '', ...rest },
  forwardedRef,
) {
  const innerRef = useRef(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = innerRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const setRefs = (node) => {
    innerRef.current = node
    if (typeof forwardedRef === 'function') forwardedRef(node)
    else if (forwardedRef) forwardedRef.current = node
  }

  return (
    <Tag
      ref={setRefs}
      style={{ animationDelay: `${delay}ms` }}
      className={`reveal ${seen ? 'in' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
})

export default Reveal
