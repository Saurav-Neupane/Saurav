import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { profile, skillGroups } from '../data.js'
import { Icons } from '../Icons.jsx'
import { Reveal, SectionHeading } from './ui.jsx'

// Skill level map for progress bars
const skillLevels = {
  "React & React Native": 96,
  "Next.js": 85,
  "HTML / CSS / JavaScript": 97,
  "UI/UX Design": 92,
  "Firebase (Auth, Firestore, Storage, Functions)": 94,
  "Node.js / Express": 82,
  "REST API Integration": 90,
  "Git / GitHub": 88,
  "AI Feature Integration": 85,
  "Android App Development": 91,
  "Deployment & Hosting": 87,
  "Bug Fixing & Debugging": 93,
}

const categoryColors = {
  "Frontend": "from-violet to-violet-soft",
  "Backend & Infra": "from-teal to-cyan-400",
  "Specialized": "from-pink-400 to-violet",
}

function SkillBar({ skill, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const level = skillLevels[skill] || 80

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -12 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="skill-item flex items-center gap-3 border border-line rounded-xl px-4 py-3 group cursor-default"
    >
      <span className="text-violet text-[10px] flex-shrink-0">▸</span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-sm text-slate group-hover:text-paper transition-colors leading-snug truncate pr-2">{skill}</span>
          <span className="font-mono text-[10px] text-violet-soft flex-shrink-0">{level}%</span>
        </div>
        <div className="h-0.5 bg-line rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, var(--color-violet), var(--color-teal))' }}
            initial={{ width: 0 }}
            animate={inView ? { width: `${level}%` } : {}}
            transition={{ duration: 1.2, delay: delay + 0.2, ease: [0.4, 0, 0.2, 1] }}
          />
        </div>
      </div>
    </motion.div>
  )
}

// Floating particle background for about section
function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 rounded-full"
          style={{
            background: i % 2 === 0 ? 'var(--color-violet)' : 'var(--color-teal)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.15,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.05, 0.25, 0.05],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 6 + 5,
            delay: Math.random() * 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-10 border-t border-line relative overflow-hidden">
      <Particles />

      {/* Section glow */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--color-violet) 0%, transparent 70%)' }} />

      <div className="relative mx-auto max-w-6xl grid md:grid-cols-2 gap-14 items-start">
        <div>
          <SectionHeading eyebrow="About me" title={profile.tagline} />

          <Reveal delay={0.1} className="space-y-4 text-slate leading-relaxed">
            <p className="text-base">{profile.aboutExtended}</p>
          </Reveal>

          {/* Highlight chips */}
          <Reveal delay={0.18} className="mt-7 flex flex-wrap gap-2">
            {['Any App', 'Pro UI/UX', 'AI Integration', 'Client-First', 'Animated Sites', 'Full Stack'].map((chip, i) => (
              <motion.span
                key={chip}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.06, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.08, borderColor: 'var(--color-violet)' }}
                className="px-3 py-1.5 rounded-full border border-line font-mono text-xs text-slate-dim hover:text-violet cursor-default transition-colors"
              >
                {chip}
              </motion.span>
            ))}
          </Reveal>

          <Reveal delay={0.24} className="mt-7">
            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={{ x: 4, borderColor: 'var(--color-violet)' }}
              className="neon-underline inline-flex items-center gap-2 px-5 py-2.5 border border-line rounded-lg text-sm text-paper hover:text-violet transition-colors"
            >
              More about me <Icons.arrowUpRight className="w-3.5 h-3.5" />
            </motion.a>
          </Reveal>
        </div>

        {/* Skills section — now with id="skills" for nav fix */}
        <div id="skills">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-teal uppercase tracking-wider mb-6 flex items-center gap-3"
          >
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-teal"
            />
            My skills
          </motion.div>

          <div className="space-y-7">
            {skillGroups.map((group, gi) => (
              <Reveal key={group.category} delay={0.08 * gi}>
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-display text-sm font-semibold text-paper">{group.category}</h3>
                  <div className={`h-px flex-1 bg-gradient-to-r ${categoryColors[group.category] || 'from-violet to-teal'} opacity-30`} />
                </div>
                <div className="grid gap-2.5">
                  {group.skills.map((skill, si) => (
                    <SkillBar key={skill} skill={skill} delay={0.06 * si + 0.1 * gi} />
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
