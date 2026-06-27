import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { profile } from '../data.js'
import { Icons } from '../Icons.jsx'
import { Reveal } from './ui.jsx'

const socialMeta = {
  github: { icon: 'github', label: 'GitHub' },
  instagram: { icon: 'instagram', label: 'Instagram' },
  facebook: { icon: 'facebook', label: 'Facebook' },
  reddit: { icon: 'reddit', label: 'Reddit' },
  twitter: { icon: 'twitter', label: 'Twitter / X' },
  linkedin: { icon: 'linkedin', label: 'LinkedIn' },
  playstore: { icon: 'playstore', label: 'Play Store' },
}

const socialAccents = {
  github: 'hover:border-white/30 hover:text-white',
  instagram: 'hover:border-pink-400/50 hover:text-pink-400',
  facebook: 'hover:border-blue-400/50 hover:text-blue-400',
  reddit: 'hover:border-orange-400/50 hover:text-orange-400',
  twitter: 'hover:border-sky-400/50 hover:text-sky-400',
  linkedin: 'hover:border-blue-500/50 hover:text-blue-400',
  playstore: 'hover:border-teal/50 hover:text-teal',
}

export function Contact() {
  const allSocials = Object.entries(profile.social)
  const waLink = `https://wa.me/${profile.whatsapp}`

  return (
    <section id="contact" className="py-24 px-6 md:px-10 border-t border-line relative overflow-hidden">
      {/* Bg aurora */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, var(--color-violet) 0%, transparent 70%)' }} />
        <div className="absolute top-0 right-0 w-60 h-60 rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, var(--color-teal) 0%, transparent 70%)' }} />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12">
          <Reveal>
            <div className="font-mono text-xs text-teal uppercase tracking-wider mb-3 flex items-center gap-2">
              <motion.span
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-teal inline-block"
              />
              Let's work together
            </div>

            <h2 className="font-display text-3xl md:text-5xl font-bold text-paper tracking-tight leading-tight">
              Have a project<br />
              <span className="gradient-text-animated">in mind?</span>
              <br />Let's build it.
            </h2>

            <p className="mt-5 text-slate max-w-md leading-relaxed">
              Reach out by email or WhatsApp — I respond fast and I'm ready to start.
            </p>

            <div className="mt-8 space-y-3 max-w-md">
              {/* Email */}
              <motion.a
                href={`mailto:${profile.email}`}
                whileHover={{ x: 4, borderColor: 'rgba(124,92,255,0.5)', boxShadow: '0 0 20px rgba(124,92,255,0.1)' }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-5 py-4 rounded-xl border border-line group transition-all duration-300"
              >
                <motion.span
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-10 h-10 rounded-lg bg-violet/10 text-violet flex items-center justify-center flex-shrink-0 group-hover:bg-violet/20 transition-colors"
                >
                  <Icons.mail className="w-5 h-5" />
                </motion.span>
                <span>
                  <span className="block text-xs text-slate-dim font-mono">Email</span>
                  <span className="block text-paper font-medium group-hover:text-violet transition-colors">{profile.email}</span>
                </span>
                <Icons.arrowUpRight className="w-4 h-4 text-slate-dim ml-auto opacity-0 group-hover:opacity-100 group-hover:text-violet transition-all" />
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4, borderColor: 'rgba(45,212,191,0.5)', boxShadow: '0 0 20px rgba(45,212,191,0.1)' }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-5 py-4 rounded-xl border border-line group transition-all duration-300"
              >
                <motion.span
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-10 h-10 rounded-lg bg-teal/10 text-teal flex items-center justify-center flex-shrink-0 group-hover:bg-teal/20 transition-colors"
                >
                  <Icons.whatsapp className="w-5 h-5" />
                </motion.span>
                <span>
                  <span className="block text-xs text-slate-dim font-mono">WhatsApp</span>
                  <span className="block text-paper font-medium group-hover:text-teal transition-colors">{profile.whatsappDisplay}</span>
                </span>
                <Icons.arrowUpRight className="w-4 h-4 text-slate-dim ml-auto opacity-0 group-hover:opacity-100 group-hover:text-teal transition-all" />
              </motion.a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="font-mono text-xs uppercase tracking-wider text-slate mb-5">Find me elsewhere</div>
            <div className="grid grid-cols-2 gap-3">
              {allSocials.map(([key, url], i) => {
                const meta = socialMeta[key]
                const Icon = Icons[meta.icon]
                const hasLink = !!url
                const accentClass = socialAccents[key] || 'hover:border-violet/40 hover:text-violet'
                const Tag = hasLink ? motion.a : motion.div
                return (
                  <Tag
                    key={key}
                    {...(hasLink ? { href: url, target: '_blank', rel: 'noopener noreferrer' } : {})}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={hasLink ? { y: -3, scale: 1.04 } : {}}
                    whileTap={hasLink ? { scale: 0.96 } : {}}
                    className={`flex items-center gap-2.5 px-4 py-3 rounded-lg border border-line font-mono text-xs transition-all duration-250 ${
                      hasLink
                        ? `text-paper ${accentClass} cursor-pointer`
                        : 'text-slate-dim/40 cursor-default'
                    }`}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    {meta.label}
                    {hasLink && (
                      <span className="ml-auto text-[10px] opacity-0 group-hover:opacity-100">↗</span>
                    )}
                  </Tag>
                )
              })}
            </div>
            <p className="mt-4 text-xs text-slate-dim font-mono">
              // Add your links in src/data.js to activate these
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
