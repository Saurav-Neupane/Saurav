import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { NavBar } from './components/NavBar.jsx'
import { Hero } from './components/Hero.jsx'
import { About } from './components/About.jsx'
import { Services } from './components/Services.jsx'
import { Achievements } from './components/Achievements.jsx'
import { Contact } from './components/Contact.jsx'
import { Footer } from './components/Footer.jsx'
import { ProjectsPage } from './components/ProjectsPage.jsx'

// Scrolls to a section if the URL has a hash (e.g. after navigating from
// /projects back to /#contact via the nav bar), and resets scroll to top
// on a plain route change otherwise.
function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      // Wait a tick for the page content to mount before scrolling.
      const id = setTimeout(() => {
        const el = document.querySelector(location.hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 50)
      return () => clearTimeout(id)
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [location.pathname, location.hash])

  return null
}

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Achievements />
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-paper font-body">
      <ScrollManager />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
