import React, { useEffect, useRef, useState, useCallback } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import { profile, stats, tickerItems } from '../data.js'

// ── Enhanced Starfield with floating/moving stars ─────────────────────────────
function Starfield() {
  return (
    <div className="starfield" aria-hidden="true">
      {/* Static twinkling stars */}
      {Array.from({ length: 60 }).map((_, i) => {
        const size = Math.random() * 2.5 + 0.5
        const x = Math.random() * 100
        const y = Math.random() * 100
        const dur = Math.random() * 5 + 3
        const del = Math.random() * 6
        const maxOp = Math.random() * 0.5 + 0.1
        return (
          <div
            key={`static-${i}`}
            className="star"
            style={{
              width: size,
              height: size,
              left: `${x}%`,
              top: `${y}%`,
              '--dur': `${dur}s`,
              '--del': `${del}s`,
              '--min-op': 0.03,
              '--max-op': maxOp,
            }}
          />
        )
      })}
      {/* Floating/drifting stars */}
      {Array.from({ length: 30 }).map((_, i) => {
        const size = Math.random() * 3 + 1
        const x = Math.random() * 100
        const y = Math.random() * 100
        const floatDur = Math.random() * 20 + 15
        const twinkleDur = Math.random() * 4 + 2
        const del = Math.random() * 10
        const driftX = (Math.random() - 0.5) * 80
        const driftY = (Math.random() - 0.5) * 60
        const maxOp = Math.random() * 0.6 + 0.2
        return (
          <div
            key={`float-${i}`}
            className="star-float"
            style={{
              width: size,
              height: size,
              left: `${x}%`,
              top: `${y}%`,
              '--float-dur': `${floatDur}s`,
              '--twinkle-dur': `${twinkleDur}s`,
              '--del': `${del}s`,
              '--dx': `${driftX}px`,
              '--dy': `${driftY}px`,
              '--max-op': maxOp,
            }}
          />
        )
      })}
      {/* Shooting stars */}
      {Array.from({ length: 5 }).map((_, i) => {
        const startX = Math.random() * 60 + 10
        const startY = Math.random() * 40
        const shootDur = Math.random() * 3 + 4
        const del = Math.random() * 12 + i * 5
        return (
          <div
            key={`shoot-${i}`}
            className="star-shoot"
            style={{
              left: `${startX}%`,
              top: `${startY}%`,
              '--shoot-dur': `${shootDur}s`,
              '--del': `${del}s`,
            }}
          />
        )
      })}
    </div>
  )
}

// ── Aurora blobs ──────────────────────────────────────────────────────────────
function Aurora() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="aurora-1 absolute w-[700px] h-[700px] rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #7C5CFF 0%, transparent 70%)', top: '-15%', left: '-10%' }} />
      <div className="aurora-2 absolute w-[600px] h-[600px] rounded-full opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, #2DD4BF 0%, transparent 70%)', bottom: '-10%', right: '-10%' }} />
      <div className="aurora-3 absolute w-[400px] h-[400px] rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #A48CFF 0%, transparent 70%)', top: '40%', left: '50%' }} />
    </div>
  )
}

// ── Ticker ────────────────────────────────────────────────────────────────────
function Ticker() {
  const doubled = [...tickerItems, ...tickerItems]
  return (
    <div className="border-y border-line overflow-hidden relative"
      style={{ background: 'rgba(13,17,32,0.8)' }}>
      <div className="flex whitespace-nowrap py-3 ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="font-mono text-xs text-slate-dim px-4 flex items-center gap-4">
            <span className="text-violet">◆</span>
            <span className="hover:text-teal transition-colors cursor-default">{item}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

// ── Floating badges ───────────────────────────────────────────────────────────
const badges = [
  { label: '⚛ React Dev', pos: 'top-[6%] left-[-8%] sm:left-[-4%]', delay: 0, float: 'float-slow' },
  { label: '🔥 Firebase', pos: 'top-[2%] right-[-10%] sm:right-[-6%]', delay: 0.15, float: 'float-slower' },
  { label: '🤖 AI Dev', pos: 'bottom-[26%] left-[-12%] sm:left-[-8%]', delay: 0.3, float: 'float-slower' },
  { label: '🌐 Full Stack', pos: 'bottom-[18%] right-[-12%] sm:right-[-8%]', delay: 0.45, float: 'float-slow' },
]

// ── Animated stat counter ─────────────────────────────────────────────────────
function AnimatedStat({ value, label }) {
  const match = value.match(/^([\d.]+)(.*)$/)
  const numeric = match ? parseFloat(match[1]) : null
  const suffix = match ? match[2] : ''
  const [display, setDisplay] = useState('0' + suffix)
  const [popped, setPopped] = useState(false)
  const ref = useRef(null)
  const observed = useRef(false)

  useEffect(() => {
    if (!ref.current || numeric === null) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !observed.current) {
        observed.current = true
        obs.disconnect()
        const dur = 1800
        const start = performance.now()
        const tick = (now) => {
          const p = Math.min((now - start) / dur, 1)
          const eased = 1 - Math.pow(1 - p, 4)
          const cur = numeric * eased
          const isInt = Number.isInteger(numeric)
          setDisplay((isInt ? Math.round(cur) : cur.toFixed(1)) + suffix)
          if (p < 1) requestAnimationFrame(tick)
          else setPopped(true)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.5 })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="group">
      <div
        className={`font-display text-2xl md:text-3xl font-bold text-paper transition-colors group-hover:text-violet-soft ${popped ? 'counter-pop' : ''}`}
        onAnimationEnd={() => setPopped(false)}
      >
        {display}
      </div>
      <div className="mt-1 font-mono text-[11px] uppercase tracking-wide text-slate-dim group-hover:text-teal transition-colors">{label}</div>
    </div>
  )
}

// ── Magnetic button ───────────────────────────────────────────────────────────
function MagneticBtn({ children, className, onClick, href }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 20 })
  const springY = useSpring(y, { stiffness: 200, damping: 20 })
  const ref = useRef(null)

  const handleMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * 0.25)
    y.set((e.clientY - cy) * 0.25)
  }
  const handleLeave = () => { x.set(0); y.set(0) }

  const Tag = href ? motion.a : motion.button
  return (
    <Tag
      ref={ref}
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      className={className}
    >
      {children}
    </Tag>
  )
}

// ── Scroll indicator ──────────────────────────────────────────────────────────
function ScrollHint() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
    >
      <span className="font-mono text-[10px] text-slate-dim tracking-widest uppercase">scroll</span>
      <div className="flex flex-col gap-0.5">
        {[0, 0.15, 0.3].map((d) => (
          <motion.div
            key={d}
            className="w-px h-2 bg-violet mx-auto"
            animate={{ opacity: [0.2, 1, 0.2], scaleY: [0.5, 1.2, 0.5] }}
            transition={{ duration: 1.4, delay: d, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>
    </motion.div>
  )
}

// ── Character-by-character animated title ────────────────────────────────────
const ROLES = [
  { text: 'Full Stack Developer', firstLetter: 'F' },
  { text: 'Software Developer',   firstLetter: 'S' },
  { text: 'Web Developer',        firstLetter: 'W' },
]

// Color palette for the first letter highlight per role
const ACCENT_COLORS = ['#7C5CFF', '#2DD4BF', '#A48CFF']

function AnimatedTitle() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [phase, setPhase] = useState('in') // 'in' | 'display' | 'out'
  const [chars, setChars] = useState([])
  const timerRef = useRef(null)

  const currentRole = ROLES[roleIdx]
  const accentColor = ACCENT_COLORS[roleIdx]

  // Build char array for current role
  const buildChars = useCallback((role) => {
    return role.text.split('').map((ch, i) => ({ ch, i, key: `${roleIdx}-${i}` }))
  }, [roleIdx])

  useEffect(() => {
    setChars(buildChars(ROLES[roleIdx]))
    setPhase('in')
  }, [roleIdx])

  useEffect(() => {
    clearTimeout(timerRef.current)

    if (phase === 'in') {
      // After chars slide in (last char delay + anim duration ~1.2s), show display
      const totalInTime = chars.length * 55 + 600
      timerRef.current = setTimeout(() => setPhase('display'), totalInTime)
    } else if (phase === 'display') {
      timerRef.current = setTimeout(() => setPhase('out'), 2200)
    } else if (phase === 'out') {
      timerRef.current = setTimeout(() => {
        setRoleIdx((i) => (i + 1) % ROLES.length)
        setPhase('in')
      }, 700)
    }

    return () => clearTimeout(timerRef.current)
  }, [phase, chars.length])

  return (
    <div className="animated-title-wrapper" aria-live="polite" aria-label={currentRole.text}>
      <div className="animated-title-inner">
        {chars.map(({ ch, i, key }) => {
          const isFirst = i === 0
          const isSpace = ch === ' '
          const charDelay = i * 0.045

          return (
            <span
              key={key}
              className={`title-char ${phase === 'in' ? 'title-char-in' : ''} ${phase === 'out' ? 'title-char-out' : ''}`}
              style={{
                '--char-delay': `${charDelay}s`,
                '--exit-delay': `${i * 0.02}s`,
                color: isFirst ? accentColor : undefined,
                textShadow: isFirst ? `0 0 20px ${accentColor}80, 0 0 40px ${accentColor}40` : undefined,
                display: isSpace ? 'inline' : 'inline-block',
                marginRight: isSpace ? '0.25em' : undefined,
                fontWeight: isFirst ? 800 : 700,
              }}
            >
              {isSpace ? '\u00A0' : ch}
            </span>
          )
        })}
      </div>
      {/* Role indicator dots */}
      <div className="title-dots">
        {ROLES.map((_, i) => (
          <span
            key={i}
            className="title-dot"
            style={{
              background: i === roleIdx ? ACCENT_COLORS[i] : 'rgba(255,255,255,0.15)',
              boxShadow: i === roleIdx ? `0 0 8px ${ACCENT_COLORS[i]}` : 'none',
            }}
          />
        ))}
      </div>
    </div>
  )
}

function scrollToContact(e) {
  e.preventDefault()
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
}

// ── Hero ──────────────────────────────────────────────────────────────────────
export function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-16 px-6 md:px-10 grid-texture overflow-hidden min-h-screen min-h-[100svh] flex flex-col">
      <Starfield />
      <Aurora />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/80 to-ink pointer-events-none" />

      <div className="relative mx-auto max-w-6xl flex-1">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-teal mb-6 flex items-center gap-2 glass-violet px-3 py-2 rounded-full w-fit"
        >
          <span className="relative flex">
            <span className="ping-ring absolute inline-flex w-2 h-2 rounded-full bg-teal opacity-75" />
            <span className="relative w-2 h-2 rounded-full bg-teal pulse-dot" />
          </span>
          ~/saurav-neupane — building from Nepal
          <span className="cursor-blink text-teal">_</span>
        </motion.div>

        <div className="grid md:grid-cols-[1.3fr_1fr] gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-mono text-sm text-slate mb-3"
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-[2.8rem] sm:text-6xl md:text-7xl leading-[1.02] font-bold tracking-tight text-paper"
            >
              <span className="gradient-text-animated">{profile.firstName}</span>{' '}
              <motion.span
                whileHover={{ textShadow: '0 0 30px rgba(124,92,255,0.5)' }}
                transition={{ duration: 0.3 }}
              >
                {profile.lastName}
              </motion.span>
            </motion.h1>

            {/* Animated character-by-character title */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5"
            >
              <AnimatedTitle />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="mt-6 text-base md:text-lg text-slate leading-relaxed max-w-xl"
            >
              {profile.bio}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.36 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <MagneticBtn
                href="#contact"
                onClick={scrollToContact}
                className="btn-glow rotating-border group px-7 py-3.5 bg-gradient-to-r from-violet to-violet-soft text-ink font-bold rounded-xl inline-flex items-center gap-2 hover:shadow-lg hover:shadow-violet/30 transition-shadow text-sm"
              >
                Hire Me
                <motion.span
                  animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  ↗
                </motion.span>
              </MagneticBtn>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-lg"
            >
              {stats.map((s) => (
                <AnimatedStat key={s.label} value={s.value} label={s.label} />
              ))}
            </motion.div>
          </div>

          {/* Profile photo side */}
          <div className="relative hidden md:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative aspect-[4/5] w-full max-w-sm mx-auto"
            >
              {/* Orbiting rings */}
              <div className="orbit-ring absolute -inset-8 rounded-full border border-violet/15 pointer-events-none" />
              <div className="orbit-ring-reverse absolute -inset-16 rounded-full border border-teal/10 pointer-events-none" />
              <div className="absolute -inset-24 rounded-full border border-violet/05 pointer-events-none" style={{ animation: 'orbit 40s linear infinite' }} />

              {/* Photo */}
              <motion.div
                className="absolute inset-0 rounded-2xl overflow-hidden border border-line shadow-2xl photo-glow scan-effect"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-full h-full object-cover contrast-[1.05]"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
              </motion.div>

              {/* Floating badges */}
              {badges.map((b) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + b.delay, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.1, zIndex: 20 }}
                  className={`absolute ${b.pos} ${b.float} glass-violet rounded-xl px-3 py-2 font-mono text-[11px] text-paper shadow-lg whitespace-nowrap z-10 cursor-default select-none`}
                >
                  {b.label}
                </motion.div>
              ))}

              {/* Available badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 glass rounded-full px-4 py-1.5 font-mono text-[11px] text-teal flex items-center gap-2 whitespace-nowrap neon-pulse"
              >
                <span className="relative flex">
                  <span className="ping-ring absolute inline-flex w-1.5 h-1.5 rounded-full bg-teal" />
                  <span className="relative w-1.5 h-1.5 rounded-full bg-teal" />
                </span>
                Available for work
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <ScrollHint />

      <div className="relative mt-16">
        <Ticker />
      </div>
    </section>
  )
}
