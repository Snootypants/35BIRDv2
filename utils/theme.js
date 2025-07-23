/**
 * Theme Management Utility
 */

export const themeManager = {
  themes: ['classic', 'dark', 'ghibli', 'light'],
  storageKey: '35bird-theme',
  
  /**
   * Get current theme from localStorage or default
   * @returns {string}
   */
  getCurrentTheme() {
    return localStorage.getItem(this.storageKey) || 'dark';
  },

  /**
   * Set theme and persist to localStorage
   * @param {string} theme 
   */
  setTheme(theme) {
    if (!this.themes.includes(theme)) {
      console.warn(`Unknown theme: ${theme}. Using classic instead.`);
      theme = 'classic';
    }

    // Remove all theme classes
    this.themes.forEach(t => {
      document.body.classList.remove(`theme-${t}`);
      document.documentElement.removeAttribute(`data-theme`);
    });

    // Set new theme
    document.body.classList.add(`theme-${theme}`);
    document.documentElement.setAttribute('data-theme', theme);

    // Persist to localStorage
    localStorage.setItem(this.storageKey, theme);

    // Update version history icon based on theme
    const versionIcon = document.getElementById('versionIcon');
    if (versionIcon) {
      if (theme === 'dark' || theme === 'ghibli') {
        versionIcon.src = './assets/icons/vH-white.png';
      } else {
        versionIcon.src = './assets/icons/vH-black.png';
      }
    }

    // Refresh fluid background for new theme
    if (window.fluidBackground && typeof window.fluidBackground.refreshForTheme === 'function') {
      window.fluidBackground.refreshForTheme();
    }

    // Update theme indicator
    const themeIndicator = document.getElementById('theme-indicator');
    if (themeIndicator) {
      const displayName = (theme === 'classic' || theme === 'light') ? 'LIGHT' : 'DARK';
      themeIndicator.textContent = displayName;
    }

    // Dispatch theme change event
    window.dispatchEvent(new CustomEvent('themeChanged', {
      detail: { theme }
    }));
  },

  /**
   * Initialize theme system
   */
  init() {
    // Set initial theme
    const currentTheme = this.getCurrentTheme();
    this.setTheme(currentTheme);

    // Set up theme switcher buttons
    this.setupThemeSwitcher();

    // Set initial version history icon
    const versionIcon = document.getElementById('versionIcon');
    if (versionIcon) {
      if (currentTheme === 'dark') {
        versionIcon.src = './assets/icons/vH-white.png';
      } else {
        versionIcon.src = './assets/icons/vH-black.png';
      }
    }

    // Set initial theme indicator
    const themeIndicator = document.getElementById('theme-indicator');
    if (themeIndicator) {
      const displayName = currentTheme === 'classic' ? 'LIGHT' : 'DARK';
      themeIndicator.textContent = displayName;
    }
  },

  /**
   * Set up theme switcher buttons
   */
  setupThemeSwitcher() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    // Add click handler for theme toggle
    themeToggle.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Theme toggle clicked');
      const currentTheme = this.getCurrentTheme();
      const newTheme = currentTheme === 'classic' ? 'dark' : 'classic';
      console.log('Switching from', currentTheme, 'to', newTheme);
      this.setTheme(newTheme);
      this.updateToggleButton(newTheme);
    });

    // Set initial button state
    this.updateToggleButton(this.getCurrentTheme());
  },

  /**
   * Update toggle button state
   * @param {string} theme 
   */
  updateToggleButton(theme) {
    const themeIcon = document.getElementById('themeIcon');
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeIcon || !themeToggle) return;
    
    // Update icon source and button attributes based on current theme
    if (theme === 'classic' || theme === 'light') {
      themeIcon.src = './assets/icons/lD-black.png';
      themeToggle.setAttribute('title', 'Switch to dark theme');
      themeToggle.setAttribute('aria-label', 'Switch to dark theme');
    } else {
      themeIcon.src = './assets/icons/lD-white.png';
      themeToggle.setAttribute('title', 'Switch to light theme');
      themeToggle.setAttribute('aria-label', 'Switch to light theme');
    }
  },

  /**
   * Get next theme in cycle
   * @returns {string}
   */
  getNextTheme() {
    const currentTheme = this.getCurrentTheme();
    const currentIndex = this.themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % this.themes.length;
    return this.themes[nextIndex];
  },

  /**
   * Cycle to next theme
   */
  cycleTheme() {
    const nextTheme = this.getNextTheme();
    this.setTheme(nextTheme);
  },

  /**
   * Get theme-specific asset URL
   * @param {string} assetPath 
   * @param {string} theme 
   * @returns {string}
   */
  getThemedAsset(assetPath, theme = null) {
    const currentTheme = theme || this.getCurrentTheme();
    
    // Map theme-specific assets
    const themedAssets = {
      'paper-texture.png': {
        classic: 'paper-texture.png',
        dark: 'paper-texture-dark.png',
        ghibli: 'paper-texture-ghibli.png'
      }
    };

    const fileName = assetPath.split('/').pop();
    if (themedAssets[fileName] && themedAssets[fileName][currentTheme]) {
      return assetPath.replace(fileName, themedAssets[fileName][currentTheme]);
    }

    return assetPath;
  }
};

