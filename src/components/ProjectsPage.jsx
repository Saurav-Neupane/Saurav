import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projects } from '../data.js'
import { Icons } from '../Icons.jsx'
import { Reveal } from './ui.jsx'

export function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Link to="/" className="inline-flex items-center gap-2 font-mono text-xs text-slate hover:text-paper transition-colors mb-8">
            ← Back home
          </Link>
          <div className="font-mono text-xs text-teal uppercase tracking-wider mb-3">Projects</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-paper tracking-tight mb-4">
            What I've built
          </h1>
          <p className="text-slate max-w-2xl mb-14">
            A look at the products I've shipped — real apps, real users, real problems solved.
          </p>
        </Reveal>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -3 }}
                className="group border border-line rounded-2xl p-8 md:p-10 hover:border-violet/50 transition-colors bg-ink-soft/40"
              >
                <div className="grid md:grid-cols-[1fr_1.4fr] gap-8">
                  <div className="aspect-video md:aspect-auto md:h-full rounded-xl border border-dashed border-line bg-ink flex flex-col items-center justify-center gap-2 text-slate-dim">
                    <div className="w-12 h-12 rounded-full bg-ink-soft flex items-center justify-center">
                      📁
                    </div>
                    <span className="font-mono text-xs">{p.placeholder ? 'Screenshot coming soon' : p.name}</span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-violet/10 text-violet-soft">
                        {p.tag}
                      </span>
                      <span className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-line text-slate">
                        {p.type}
                      </span>
                    </div>

                    <h2 className="font-display text-2xl md:text-3xl font-bold text-paper mb-3">{p.name}</h2>
                    <p className="text-slate leading-relaxed mb-5">{p.description}</p>

                    {p.features?.length > 0 && (
                      <ul className="grid sm:grid-cols-2 gap-2 mb-5">
                        {p.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-paper/90">
                            <Icons.checkCircle className="w-4 h-4 text-teal flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.stack.map((s) => (
                        <span key={s} className="font-mono text-[11px] px-3 py-1 rounded-full border border-line text-slate-dim">
                          {s}
                        </span>
                      ))}
                    </div>

                    {p.link ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs text-paper border border-line rounded-full px-4 py-2 hover:border-teal hover:text-teal transition-colors"
                      >
                        View project <Icons.arrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 font-mono text-xs text-slate-dim border border-line/60 rounded-full px-4 py-2">
                        Link coming soon
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}

          <Reveal delay={projects.length * 0.08}>
            <div className="border border-dashed border-line rounded-2xl p-10 text-center">
              <p className="font-mono text-xs text-slate-dim uppercase tracking-wider">More shipping soon</p>
              <p className="mt-2 text-slate text-sm">This page grows as new projects ship.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
