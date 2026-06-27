import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { achievements } from '../data.js'
import { Icons } from '../Icons.jsx'
import { Reveal, SectionHeading } from './ui.jsx'

const iconMap = {
  playstore: Icons.playstore,
  experience: Icons.briefcase,
  projects: Icons.star,
  clients: Icons.users,
}

const accentColors = [
  { ring: 'rgba(124,92,255,0.3)', glow: 'rgba(124,92,255,0.15)', text: 'text-violet-soft', border: 'rgba(124,92,255,0.4)' },
  { ring: 'rgba(45,212,191,0.3)', glow: 'rgba(45,212,191,0.12)', text: 'text-teal', border: 'rgba(45,212,191,0.4)' },
  { ring: 'rgba(164,140,255,0.3)', glow: 'rgba(164,140,255,0.15)', text: 'text-violet-soft', border: 'rgba(164,140,255,0.4)' },
  { ring: 'rgba(45,212,191,0.3)', glow: 'rgba(45,212,191,0.12)', text: 'text-teal', border: 'rgba(45,212,191,0.4)' },
]

function Counter({ value, accent }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState('0')
  const [done, setDone] = useState(false)

  const match = value.match(/^([\d.]+)(.*)$/)
  const numeric = match ? parseFloat(match[1]) : null
  const suffix = match ? match[2] : ''

  useEffect(() => {
    if (!inView || numeric === null) {
      if (inView) setDisplay(value)
      return
    }
    let start = 0
    const duration = 2000
    const startTime = performance.now()
    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      const current = numeric * eased
      const isInt = Number.isInteger(numeric)
      setDisplay((isInt ? Math.round(current) : current.toFixed(1)) + suffix)
      if (progress < 1) requestAnimationFrame(tick)
      else setDone(true)
    }
    requestAnimationFrame(tick)
  }, [inView])

  return (
    <span ref={ref} className={`font-display text-4xl md:text-5xl font-bold text-paper ${done ? 'counter-pop' : ''}`}
      onAnimationEnd={() => setDone(false)}>
      {display}
    </span>
  )
}

function AchievementCard({ a, i }) {
  const [hovered, setHovered] = useState(false)
  const Icon = iconMap[a.icon]
  const accent = accentColors[i % accentColors.length]

  return (
    <Reveal delay={i * 0.1}>
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ y: -6, scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
        className="relative border border-line rounded-2xl p-7 overflow-hidden h-full cursor-default"
        style={{
          background: hovered ? `rgba(13,17,32,0.9)` : 'rgba(13,17,32,0.5)',
          borderColor: hovered ? accent.border : undefined,
          boxShadow: hovered ? `0 0 40px ${accent.glow}, 0 15px 50px rgba(0,0,0,0.4)` : undefined,
          transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        {/* Glow blob */}
        <motion.div
          className="absolute -top-6 -right-6 w-24 h-24 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${accent.ring}, transparent 70%)` }}
          animate={{ scale: hovered ? 1.5 : 1, opacity: hovered ? 1 : 0.3 }}
          transition={{ duration: 0.4 }}
        />

        {/* Animated icon */}
        <motion.div
          className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${accent.text} relative z-10`}
          animate={{
            borderColor: hovered ? accent.border : 'rgba(30,35,48,1)',
            background: hovered ? `rgba(${accent.ring},0.05)` : 'transparent',
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            animate={{ rotate: hovered ? 360 : 0, scale: hovered ? 1.2 : 1 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <Icon className="w-5 h-5" />
          </motion.div>
        </motion.div>

        {/* Number */}
        <div className="relative z-10 mb-1">
          <Counter value={a.value} accent={accent} />
        </div>

        <div className={`text-sm font-semibold text-paper/90 mb-0.5 relative z-10 transition-colors duration-300 ${hovered ? accent.text : ''}`}>
          {a.label}
        </div>
        <div className="text-xs text-slate-dim relative z-10">{a.sub}</div>

        {/* Bottom line */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 rounded-b-2xl"
          style={{ background: `linear-gradient(90deg, transparent, ${accent.border}, transparent)` }}
          animate={{ width: hovered ? '100%' : '0%', opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </Reveal>
  )
}

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 md:px-10 border-t border-line relative overflow-hidden">
      {/* Bg glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(ellipse, var(--color-violet) 0%, transparent 70%)' }} />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading eyebrow="Achievements" title="Numbers that back it up" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {achievements.map((a, i) => (
            <AchievementCard key={a.label} a={a} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
