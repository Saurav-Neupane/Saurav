import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { profile } from '../data.js'
import { Icons } from '../Icons.jsx'

const navItems = [
  { label: 'Home', hash: '#top' },
  { label: 'About', hash: '#about' },
  { label: 'Services', hash: '#services' },
  { label: 'Skills', hash: '#skills' },
  { label: 'Achievements', hash: '#achievements' },
  { label: 'Contact', hash: '#contact' },
]

export function NavBar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#top')
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Intersection observer for active nav item highlighting
  useEffect(() => {
    const ids = ['top', 'about', 'services', 'skills', 'achievements', 'contact']
    const observers = ids.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(`#${id}`) },
        { rootMargin: '-50% 0px -45% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [location.pathname])

  const handleNavClick = (e, hash) => {
    e.preventDefault()
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/' + hash)
    } else {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        // replaceState instead of pushState so back button doesn't step through each section
        window.history.replaceState(null, '', hash)
      }
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-paper group">
          <motion.span
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.4 }}
            className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet to-teal flex items-center justify-center text-ink text-xs font-bold shadow-lg shadow-violet/20 group-hover:shadow-violet/40 transition-shadow"
          >
            SN
          </motion.span>
          <span className="hidden sm:inline text-sm neon-underline">{profile.name}</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7 font-mono text-xs text-slate tracking-wide">
          {navItems.map((item) => {
            const isActive = activeSection === item.hash && location.pathname === '/'
            return (
              <motion.a
                key={item.label}
                href={item.hash}
                onClick={(e) => handleNavClick(e, item.hash)}
                whileHover={{ y: -1 }}
                className={`relative hover:text-paper transition-colors cursor-pointer ${isActive ? 'text-paper' : ''}`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-teal"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}
              </motion.a>
            )
          })}
          <Link
            to="/projects"
            className={`relative hover:text-paper transition-colors ${location.pathname === '/projects' ? 'text-teal' : ''}`}
          >
            Projects
          </Link>
        </div>

        {/* CTA */}
        <motion.a
          href={`mailto:${profile.email}`}
          whileHover={{ scale: 1.05, borderColor: 'var(--color-violet)', color: 'var(--color-violet)', boxShadow: '0 0 15px rgba(124,92,255,0.25)' }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:inline-flex font-mono text-xs px-4 py-2 border border-line rounded-full text-paper transition-all duration-300"
        >
          Let's talk ↗
        </motion.a>

        {/* Hamburger */}
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-paper p-2 -mr-2"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Icons.close className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Icons.menu className="w-5 h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass border-b border-line overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3 font-mono text-sm">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.hash}
                  onClick={(e) => handleNavClick(e, item.hash)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-slate hover:text-paper transition-colors flex items-center gap-2"
                >
                  <span className="text-violet text-[10px]">▸</span> {item.label}
                </motion.a>
              ))}
              <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: navItems.length * 0.05 }}>
                <Link to="/projects" onClick={() => setOpen(false)} className="text-slate hover:text-paper transition-colors flex items-center gap-2">
                  <span className="text-violet text-[10px]">▸</span> Projects
                </Link>
              </motion.div>
              <motion.a
                href={`mailto:${profile.email}`}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navItems.length + 1) * 0.05 }}
                className="text-violet mt-1"
              >
                Let's talk →
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
