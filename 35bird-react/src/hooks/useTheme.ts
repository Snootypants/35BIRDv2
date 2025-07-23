import { useState, useEffect } from 'react'
import type { Theme } from '../types'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Get initial theme from localStorage or default to dark
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('35bird-theme') as Theme
      return stored || 'dark'
    }
    return 'dark'
  })

  useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem('35bird-theme', theme)
    
    // Update document class for Tailwind dark mode
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return { theme, toggleTheme }
}