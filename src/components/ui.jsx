import React from 'react'
import { motion } from 'framer-motion'

export function Reveal({ children, delay = 0, className = '', y = 28 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({ eyebrow, title }) {
  return (
    <Reveal className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1.5 h-1.5 rounded-full bg-teal"
        />
        <span className="font-mono text-xs text-teal uppercase tracking-wider">{eyebrow}</span>
        <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-teal/40 to-transparent" />
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-paper tracking-tight">
        {title}
      </h2>
    </Reveal>
  )
}
