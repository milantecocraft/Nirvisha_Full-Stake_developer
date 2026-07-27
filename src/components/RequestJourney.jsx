import { useEffect, useRef, useState } from 'react'

// A packet's round trip through the stack, on a loop:
// Browser → Edge → API → Database, then the response travels back up and the
// UI "renders" with a 200 OK. Purely ambient — no interaction required.
const stations = [
  {
    id: 'browser',
    label: 'Browser',
    sub: 'React · Next.js',
    ms: '8ms',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 9h18" />
      </>
    ),
  },
  {
    id: 'edge',
    label: 'Edge / CDN',
    sub: 'cache · SSR',
    ms: '12ms',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.6 2.7 3.9 5.9 3.9 9s-1.3 6.3-3.9 9c-2.6-2.7-3.9-5.9-3.9-9S9.4 5.7 12 3z" />
      </>
    ),
  },
  {
    id: 'api',
    label: 'API',
    sub: 'Node · REST',
    ms: '24ms',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="7" rx="1.6" />
        <rect x="3" y="13" width="18" height="7" rx="1.6" />
        <path d="M7 7.5h.01M7 16.5h.01" />
      </>
    ),
  },
  {
    id: 'db',
    label: 'Database',
    sub: 'PostgreSQL',
    ms: '11ms',
    icon: (
      <>
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
        <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
      </>
    ),
  },
]

const STEP = 720 // ms between stations

export default function RequestJourney() {
  const [active, setActive] = useState(0)
  const [reached, setReached] = useState([0])
  const [phase, setPhase] = useState('down')
  const [ok, setOk] = useState(false)
  const [tops, setTops] = useState([])

  const rowRefs = useRef([])

  // Measure each station's vertical centre so the packet lands exactly on it.
  useEffect(() => {
    const measure = () =>
      setTops(rowRefs.current.map((el) => (el ? el.offsetTop + el.offsetHeight / 2 : 0)))
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // The loop.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActive(stations.length - 1)
      setReached(stations.map((_, i) => i))
      setOk(true)
      return
    }

    let timers = []
    let cancelled = false

    const run = () => {
      if (cancelled) return
      timers.forEach(clearTimeout)
      timers = []

      setPhase('down')
      setActive(0)
      setReached([0])
      setOk(false)

      // request travels down
      for (let i = 1; i < stations.length; i += 1) {
        timers.push(
          setTimeout(() => {
            setActive(i)
            setReached((r) => (r.includes(i) ? r : [...r, i]))
          }, STEP * i),
        )
      }

      const downEnd = STEP * stations.length
      timers.push(setTimeout(() => setPhase('up'), downEnd))

      // response travels back up
      for (let i = stations.length - 2; i >= 0; i -= 1) {
        timers.push(setTimeout(() => setActive(i), downEnd + STEP * (stations.length - 1 - i)))
      }

      const upEnd = downEnd + STEP * (stations.length - 1)
      timers.push(setTimeout(() => setOk(true), upEnd))
      timers.push(setTimeout(run, upEnd + 1500))
    }

    run()
    return () => {
      cancelled = true
      timers.forEach(clearTimeout)
    }
  }, [])

  return (
    <div className="rj" aria-hidden="true">
      <div className="rj-head">
        <span className="rj-dots">
          <i /><i /><i />
        </span>
        <span className="rj-title">request journey</span>
        <span className={`rj-status ${ok ? 'is-ok' : ''}`}>{ok ? '200 OK' : 'pending…'}</span>
      </div>

      <div className="rj-body">
        <div className="rj-rail">
          <span
            className="rj-packet"
            data-phase={phase}
            style={{ top: tops[active] ? `${tops[active]}px` : '26px' }}
          />
        </div>

        <div className="rj-stations">
          {stations.map((s, i) => (
            <div
              key={s.id}
              ref={(el) => (rowRefs.current[i] = el)}
              className="rj-station"
              data-active={active === i ? 'true' : undefined}
              data-reached={reached.includes(i) ? 'true' : undefined}
            >
              <span className="rj-ic">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {s.icon}
                </svg>
              </span>
              <span className="rj-meta">
                <b>{s.label}</b>
                <i>{s.sub}</i>
              </span>
              <span className="rj-ms">{s.ms}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
