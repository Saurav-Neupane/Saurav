import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { services } from '../data.js'
import { Icons } from '../Icons.jsx'
import { Reveal, SectionHeading } from './ui.jsx'

const iconMap = {
  android: Icons.android,
  firebase: Icons.firebaseFlame,
  web: Icons.webGlobe,
  ai: Icons.sparkleAI,
  api: Icons.apiLink,
  design: Icons.designPen,
}

const accentMap = {
  android: { text: 'text-teal', glow: 'rgba(45,212,191,0.2)', border: 'rgba(45,212,191,0.4)', bg: 'rgba(45,212,191,0.08)' },
  firebase: { text: 'text-orange-400', glow: 'rgba(251,146,60,0.2)', border: 'rgba(251,146,60,0.4)', bg: 'rgba(251,146,60,0.08)' },
  web: { text: 'text-violet-soft', glow: 'rgba(164,140,255,0.2)', border: 'rgba(164,140,255,0.4)', bg: 'rgba(164,140,255,0.08)' },
  ai: { text: 'text-violet-soft', glow: 'rgba(124,92,255,0.2)', border: 'rgba(124,92,255,0.4)', bg: 'rgba(124,92,255,0.08)' },
  api: { text: 'text-pink-400', glow: 'rgba(244,114,182,0.2)', border: 'rgba(244,114,182,0.4)', bg: 'rgba(244,114,182,0.08)' },
  design: { text: 'text-teal', glow: 'rgba(45,212,191,0.2)', border: 'rgba(45,212,191,0.4)', bg: 'rgba(45,212,191,0.08)' },
}

function ServiceCard({ s, i }) {
  const [hovered, setHovered] = useState(false)
  const Icon = iconMap[s.icon]
  const accent = accentMap[s.icon]

  return (
    <Reveal delay={i * 0.07}>
      <motion.a
        href="#contact"
        onClick={(e) => {
          e.preventDefault()
          document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
        }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ y: -6, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.25 }}
        className="group block h-full border border-line rounded-2xl p-6 relative overflow-hidden cursor-pointer"
        style={{
          background: hovered ? accent.bg : 'rgba(13,17,32,0.5)',
          borderColor: hovered ? accent.border : undefined,
          boxShadow: hovered ? `0 0 30px ${accent.glow}, 0 10px 40px rgba(0,0,0,0.3)` : undefined,
          transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 opacity-0 pointer-events-none"
          animate={{ opacity: hovered ? 0.15 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: `radial-gradient(circle at 30% 30%, ${accent.glow.replace('0.2','0.6')}, transparent 60%)`,
          }}
        />

        {/* Corner sparkle */}
        <motion.div
          className="absolute top-3 right-3 text-[8px] pointer-events-none"
          animate={{ opacity: hovered ? 1 : 0, rotate: hovered ? 180 : 0, scale: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ✦
        </motion.div>

        <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${accent.text} service-icon transition-all duration-500`}
          style={{ borderColor: hovered ? accent.border : undefined, background: hovered ? accent.bg : undefined }}>
          <motion.div
            animate={{ rotate: hovered ? 15 : 0, scale: hovered ? 1.2 : 1 }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
          >
            <Icon className="w-5 h-5" />
          </motion.div>
        </div>

        <h3 className="font-display font-semibold text-paper mb-2 flex items-center gap-1.5 group-hover:text-white transition-colors">
          {s.title}
          <motion.span
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -4, y: hovered ? 0 : 4 }}
            transition={{ duration: 0.25 }}
          >
            <Icons.arrowUpRight className={`w-3.5 h-3.5 ${accent.text}`} />
          </motion.span>
        </h3>
        <p className="text-sm text-slate leading-relaxed group-hover:text-slate/90 transition-colors relative z-10">{s.description}</p>

        {/* Bottom shimmer line */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 rounded-b-2xl"
          style={{ background: `linear-gradient(90deg, transparent, ${accent.border}, transparent)` }}
          animate={{ width: hovered ? '100%' : '0%', opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />
      </motion.a>
    </Reveal>
  )
}

export function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-10 border-t border-line relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--color-teal) 0%, transparent 70%)' }} />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading eyebrow="My services" title="What I can build for you" />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.5} className="mt-14 text-center">
          <p className="text-slate text-sm mb-5">Have something unique in mind? Let's talk about it.</p>
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            whileHover={{ scale: 1.04, boxShadow: '0 0 25px rgba(124,92,255,0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 border border-violet/50 rounded-full font-mono text-xs text-violet hover:text-paper hover:border-violet transition-colors"
          >
            Start a project ↗
          </motion.a>
        </Reveal>
      </div>
    </section>
  )
}
