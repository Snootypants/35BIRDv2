import { motion } from 'framer-motion'
import { useTheme } from './hooks/useTheme'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import ProjectGrid from './components/sections/ProjectGrid'
import './App.css'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.div 
      className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
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
  )
}

export default App
