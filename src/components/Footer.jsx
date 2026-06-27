import React from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data.js'

export function Footer() {
  return (
    <footer className="border-t border-line py-10 px-6 md:px-10 relative overflow-hidden">
      {/* Subtle bg gradient */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(124,92,255,0.02))' }} />

      <div className="relative mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="w-6 h-6 rounded-md bg-gradient-to-br from-violet to-teal flex items-center justify-center text-ink text-[10px] font-bold"
          >
            SN
          </motion.div>
          <span className="font-mono text-xs text-slate-dim">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-slate-dim">
          <motion.span
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-teal inline-block"
          />
          Built with ❤️ from {profile.location}
        </div>
      </div>
    </footer>
  )
}
