# Theme Map

This document provides a comprehensive overview of all available themes and their variable overrides.

## Available Themes

- **Default (Root)**: Base variables applied when no theme is active
- **Dark**: Dark mode with deep colors and high contrast
- **Light**: Light mode with soft backgrounds and dark text
- **Classic**: Light theme variant with subtle differences
- **Ghibli**: Nature-inspired theme with teal and gold accents

## Theme Implementation

Themes are applied using the `data-theme` attribute on the body element:

```html
<body data-theme="dark">    <!-- Dark theme -->
<body data-theme="light">   <!-- Light theme -->
<body data-theme="classic"> <!-- Classic theme -->
<body data-theme="ghibli">  <!-- Ghibli theme -->
```

## Theme Variables Overview

### Quick Reference Table

| Variable | Default | Dark | Light | Classic | Ghibli |
|----------|---------|------|-------|---------|---------|
| **Background Colors** |
| `--color-bg-primary` | - | `linear-gradient(#020202, #101316)` | `linear-gradient(#fdfdfd, #f2f6fb)` | `linear-gradient(#fdfdfd, #f2f6fb)` | `#f0f4f7` |
| `--color-bg-secondary` | - | `#2a2a4a` | `#ffffff` | `#ffffff` | `#ffffff` |
| `--color-bg-accent` | - | `rgba(42, 42, 74, 0.9)` | `rgba(255, 255, 255, 0.9)` | `rgba(255, 255, 255, 0.9)` | - |
| `--color-bg-header` | - | `rgba(0, 0, 0, 0.6)` | `rgba(255, 255, 255, 0.8)` | `rgba(255, 255, 255, 0.75)` | - |
| **Text Colors** |
| `--color-text-primary` | - | `#e0e0e0` | `#111111` | `#111111` | `#3a4a4d` |
| `--color-text-secondary` | - | `#b0b0b0` | `#333333` | `#333333` | `#6a7a7d` |
| `--color-text-muted` | - | `#808080` | `#666666` | `#666666` | `#9aa7a9` |
| **Border Colors** |
| `--color-border` | - | `#3a3a5a` | `#d0d4d9` | `#d0d4d9` | `#c0d0d3` |
| `--color-border-header` | - | `rgba(255, 255, 255, 0.1)` | `rgba(200, 200, 200, 0.3)` | `rgba(0, 0, 0, 0.05)` | - |
| **Brand Colors** |
| `--color-primary` | `#007bff` | - | - | - | `#5a8d7a` |
| `--color-accent` | `#28a745` | - | - | - | `#d4af37` |
| **Shadows** |
| `--color-shadow` | - | `rgba(0, 0, 0, 0.4)` | `rgba(0, 0, 0, 0.08)` | `rgba(0, 0, 0, 0.08)` | `rgba(0, 0, 0, 0.05)` |
| `--color-shadow-heavy` | - | `rgba(0, 0, 0, 0.6)` | `rgba(0, 0, 0, 0.15)` | `rgba(0, 0, 0, 0.15)` | `rgba(0, 0, 0, 0.1)` |
| **Gradients** |
| `--color-gradient-start` | - | `var(--color-text-primary)` | `#1e40af` | `#1e40af` | - |
| `--color-gradient-end` | - | `var(--color-primary)` | `#3b82f6` | `#3b82f6` | - |
| **Component Colors** |
| `--color-card-bg` | - | `rgba(20, 20, 20, 0.6)` | `rgba(255, 255, 255, 0.9)` | `rgba(255, 255, 255, 0.9)` | - |
| `--color-card-border` | - | `rgba(255, 255, 255, 0.05)` | `rgba(0, 0, 0, 0.05)` | `rgba(0, 0, 0, 0.05)` | - |
| `--color-card-glow` | - | `rgba(0, 170, 255, 0.3)` | `rgba(30, 64, 175, 0.3)` | `rgba(30, 64, 175, 0.3)` | - |
| `--color-drawer-bg` | - | `rgba(20, 20, 20, 0.6)` | `rgba(255, 255, 255, 0.9)` | `rgba(255, 255, 255, 0.9)` | - |
| `--color-drawer-border` | - | `rgba(255, 255, 255, 0.05)` | `rgba(0, 0, 0, 0.05)` | `rgba(0, 0, 0, 0.05)` | - |
| `--color-splash-bg-start` | - | `rgba(0, 0, 0, 0.1)` | `rgba(255, 255, 255, 0.1)` | `rgba(255, 255, 255, 0.1)` | - |
| `--color-splash-bg-end` | - | `rgba(0, 0, 0, 0.3)` | `rgba(255, 255, 255, 0.3)` | `rgba(255, 255, 255, 0.3)` | - |

## Detailed Theme Specifications

### 🌑 Dark Theme

**Purpose**: High contrast dark interface for low-light environments
**Primary Colors**: Deep blue-purple with light text

```css
[data-theme="dark"] {
  --color-bg-primary: linear-gradient(to bottom, #020202, #101316);
  --color-bg-secondary: #2a2a4a;
  --color-bg-accent: rgba(42, 42, 74, 0.9);
  --color-bg-header: rgba(0, 0, 0, 0.6);
  --color-text-primary: #e0e0e0;
  --color-text-secondary: #b0b0b0;
  --color-text-muted: #808080;
  --color-border: #3a3a5a;
  --color-border-header: rgba(255, 255, 255, 0.1);
  --color-shadow: rgba(0, 0, 0, 0.4);
  --color-shadow-heavy: rgba(0, 0, 0, 0.6);
  --color-gradient-start: var(--color-text-primary);
  --color-gradient-end: var(--color-primary);
}
```

**Unique Features**:
- Gradient background from near-black to dark blue
- Light text on dark backgrounds
- Higher contrast shadows
- Dynamic gradient using existing color variables

---

### ☀️ Light Theme

**Purpose**: Clean, modern light interface for standard use
**Primary Colors**: Soft whites and grays with dark text

```css
[data-theme="light"] {
  --color-bg-primary: linear-gradient(to bottom, #fdfdfd, #f2f6fb);
  --color-bg-secondary: #ffffff;
  --color-bg-accent: rgba(255, 255, 255, 0.9);
  --color-bg-header: rgba(255, 255, 255, 0.8);
  --color-text-primary: #111111;
  --color-text-secondary: #333333;
  --color-text-muted: #666666;
  --color-border: #d0d4d9;
  --color-border-header: rgba(200, 200, 200, 0.3);
  --color-shadow: rgba(0, 0, 0, 0.08);
  --color-shadow-heavy: rgba(0, 0, 0, 0.15);
  --color-gradient-start: #1e40af;
  --color-gradient-end: #3b82f6;
}
```

**Unique Features**:
- Subtle gradient from white to pale blue
- Higher header transparency (0.8)
- Light gray border for header
- Blue gradients for hero elements

---

### 📚 Classic Theme

**Purpose**: Traditional light theme with slightly different header styling
**Primary Colors**: Nearly identical to Light theme with minor variations

```css
[data-theme="classic"] {
  --color-bg-primary: linear-gradient(to bottom, #fdfdfd, #f2f6fb);
  --color-bg-secondary: #ffffff;
  --color-bg-accent: rgba(255, 255, 255, 0.9);
  --color-bg-header: rgba(255, 255, 255, 0.75);
  --color-text-primary: #111111;
  --color-text-secondary: #333333;
  --color-text-muted: #666666;
  --color-border: #d0d4d9;
  --color-border-header: rgba(0, 0, 0, 0.05);
  --color-shadow: rgba(0, 0, 0, 0.08);
  --color-shadow-heavy: rgba(0, 0, 0, 0.15);
  --color-gradient-start: #1e40af;
  --color-gradient-end: #3b82f6;
}
```

**Differences from Light**:
- Slightly lower header transparency (0.75 vs 0.8)
- Dark header border instead of light gray
- Otherwise identical color scheme

---

### 🌿 Ghibli Theme

**Purpose**: Nature-inspired theme with earth tones and organic colors
**Primary Colors**: Muted greens and teals with gold accents

```css
[data-theme="ghibli"] {
  --color-primary: #5a8d7a;
  --color-accent: #d4af37;
  --color-bg-primary: #f0f4f7;
  --color-bg-secondary: #ffffff;
  --color-text-primary: #3a4a4d;
  --color-text-secondary: #6a7a7d;
  --color-text-muted: #9aa7a9;
  --color-border: #c0d0d3;
  --color-shadow: rgba(0, 0, 0, 0.05);
  --color-shadow-heavy: rgba(0, 0, 0, 0.1);
}
```

**Unique Features**:
- Overrides primary brand color to muted green
- Gold accent color instead of green
- Soft off-white background (no gradient)
- Teal-based text colors
- Very subtle shadows
- No header-specific variables (uses defaults)
- No gradient colors defined (uses defaults)

---

## Theme Inheritance

### Variable Resolution Order

1. **Theme-specific variables** (highest priority)
2. **Root variables** (fallback)
3. **CSS fallback values** (last resort)

Example:
```css
/* This will resolve in order: */
color: var(--color-text-primary, #000000);

/* 1. Check current theme block for --color-text-primary */
/* 2. If not found, use root --color-text-primary */
/* 3. If not found, use #000000 fallback */
```

### Partial Theme Implementation

Some themes (like Ghibli) don't override all variables. Missing variables fall back to root defaults:

- **Ghibli** doesn't define header colors → uses root defaults
- **Dark** doesn't override brand colors → uses root `--color-primary: #007bff`

## Theme Usage Guidelines

### Adding New Theme Variables

1. Add to the appropriate theme block in `styles/base/variables.css`
2. Update this documentation
3. Test across all themes to ensure no breaking changes

### Best Practices

- **Always provide fallbacks** for theme variables
- **Test in all themes** when making changes
- **Use semantic naming** that describes purpose, not appearance
- **Maintain consistency** across similar themes (light/classic)

### Theme Testing Checklist

When modifying themes:
- [ ] Test all four themes
- [ ] Verify text contrast ratios
- [ ] Check header transparency and borders
- [ ] Validate gradient appearances
- [ ] Ensure shadow visibility
- [ ] Test theme switching functionality

## Implementation Notes

### JavaScript Theme Switching

Themes should be controlled via JavaScript that updates the `data-theme` attribute:

```javascript
function setTheme(themeName) {
  document.body.setAttribute('data-theme', themeName);
}
```

### CSS Transitions

The root variables include transition tokens for smooth theme switching:
```css
transition: background var(--transition-base), color var(--transition-base);
```

This ensures smooth transitions when switching between themes without jarring color changes.