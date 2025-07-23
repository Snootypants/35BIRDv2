import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectGrid from './components/ProjectGrid'
import './App.css'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <AnimatePresence>
      <motion.div 
        key={theme}
        className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="page bg-background text-foreground">
        {/* Fluid Background Canvas */}
        <canvas id="fluid-canvas" className="fixed inset-0 z-0" />
        
        {/* Header */}
        <Header theme={theme} onThemeToggle={toggleTheme} />
        
        {/* Main Content */}
        <main className="main relative z-10" role="main">
          {/* Hero Section */}
          <Hero />
          
          {/* Projects Section */}
          <section className="section" id="projects">
            <div className="container">
              <ProjectGrid />
            </div>
          </section>
        </main>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default App
