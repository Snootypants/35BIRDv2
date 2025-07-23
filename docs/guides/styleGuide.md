# Style Guide

## Design Philosophy

This project follows a **centralized design token system** with **zero local overrides** to ensure consistency, maintainability, and predictable theming across all components.

### Core Principles

1. **Single Source of Truth**: All design values are defined in `styles/base/variables.css`
2. **No Local Overrides**: Components must use CSS variables, never hardcode values
3. **Theme-Aware Design**: All styling respects the global theme system
4. **Semantic Naming**: Variables use descriptive, purpose-driven names
5. **Future-Proof Architecture**: Changes to design tokens propagate automatically

## Design Token Usage

### Required Usage Pattern

```css
/* ✅ CORRECT - Use CSS variables */
.component {
  color: var(--color-text-primary);
  background: var(--color-bg-secondary);
  padding: var(--space-4);
  font-size: var(--font-size-lg);
}

/* ❌ INCORRECT - Never hardcode values */
.component {
  color: #333333;
  background: #ffffff;
  padding: 1rem;
  font-size: 1.125rem;
}
```

### Fallback Values

Always provide fallbacks for critical properties:

```css
.component {
  background: var(--color-bg-primary, #ffffff);
  color: var(--color-text-primary, #000000);
}
```

## Typography System

### Font Stack
- Primary: `var(--font-family-primary)` - Inter with system font fallbacks

### Font Sizes
Use semantic size tokens that scale appropriately:

```css
/* Text sizes */
--font-size-xs: 0.75rem;     /* 12px - Small labels */
--font-size-sm: 0.875rem;    /* 14px - Secondary text */
--font-size-base: 1rem;      /* 16px - Body text */
--font-size-lg: 1.125rem;    /* 18px - Large body */
--font-size-xl: 1.25rem;     /* 20px - Subheadings */
--font-size-2xl: 1.5rem;     /* 24px - Section titles */
--font-size-3xl: 1.875rem;   /* 30px - Page titles */
--font-size-4xl: 2.5rem;     /* 40px - Large headings */
--font-size-5xl: 3.5rem;     /* 56px - Hero titles */
```

### Font Weights
```css
--font-weight-normal: 400;    /* Regular text */
--font-weight-medium: 500;    /* Emphasis */
--font-weight-semibold: 600;  /* Strong emphasis */
--font-weight-bold: 700;      /* Headings, important text */
```

### Usage Examples
```css
.hero-title {
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
}

.body-text {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-relaxed);
}
```

## Color System

### Semantic Color Tokens

```css
/* Primary brand colors */
--color-primary: #007bff;      /* Primary actions, links */
--color-secondary: #6c757d;    /* Secondary elements */
--color-accent: #28a745;       /* Success, highlights */

/* State colors */
--color-danger: #dc3545;       /* Errors, warnings */
--color-warning: #ffc107;      /* Caution states */
--color-muted: #6c757d;        /* Disabled, muted content */

/* Utility colors */
--color-white: #ffffff;        /* Pure white */
--color-black: #000000;        /* Pure black */
```

### Theme-Specific Colors

Colors that change per theme are defined in theme blocks:

```css
[data-theme="light"] {
  --color-text-primary: #111111;
  --color-text-secondary: #333333;
  --color-bg-primary: linear-gradient(to bottom, #fdfdfd, #f2f6fb);
  --color-bg-secondary: #ffffff;
}

[data-theme="dark"] {
  --color-text-primary: #e0e0e0;
  --color-text-secondary: #b0b0b0;
  --color-bg-primary: linear-gradient(to bottom, #020202, #101316);
  --color-bg-secondary: #2a2a4a;
}
```

## Spacing System

### Spacing Scale
Based on 4px base unit with consistent mathematical progression:

```css
--space-1: 0.25rem;    /* 4px */
--space-2: 0.5rem;     /* 8px */
--space-3: 0.75rem;    /* 12px */
--space-4: 1rem;       /* 16px */
--space-5: 1.25rem;    /* 20px */
--space-6: 1.5rem;     /* 24px */
--space-8: 2rem;       /* 32px */
--space-10: 2.5rem;    /* 40px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-20: 5rem;      /* 80px */
--space-24: 6rem;      /* 96px */
```

### Usage Guidelines
```css
/* Component spacing */
.card {
  padding: var(--space-6);        /* Internal spacing */
  margin-bottom: var(--space-4);  /* External spacing */
  gap: var(--space-3);            /* Flex/grid gaps */
}

/* Section spacing */
.section {
  padding-top: var(--space-16);
  padding-bottom: var(--space-16);
}
```

## Shadow System

### Shadow Tokens
Consistent elevation system using semantic shadow levels:

```css
/* Base shadows */
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.06);    /* Subtle depth */
--shadow-base: 0 4px 6px rgba(0, 0, 0, 0.1);   /* Default elevation */
--shadow-md: 0 8px 15px rgba(0, 0, 0, 0.12);   /* Medium elevation */
--shadow-lg: 0 12px 25px rgba(0, 0, 0, 0.15);  /* High elevation */
--shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.2);   /* Maximum elevation */

/* Text shadows */
--shadow-text-light: 0 2px 4px rgba(0, 0, 0, 0.15);  /* Light theme text shadows */
--shadow-text-dark: 0 2px 6px rgba(0, 0, 0, 0.5);    /* Dark theme text shadows */
--shadow-text-glow: 0 0 20px rgba(0, 170, 255, 0.3); /* Glow effects */

/* Component-specific shadows */
--shadow-card: 0 8px 30px rgba(0, 0, 0, 0.6);         /* Card components */
--shadow-card-hover: 0 20px 40px rgba(0, 170, 255, 0.5); /* Card hover states */
--shadow-card-glow: 0 0 40px rgba(0, 170, 255, 0.6);  /* Card glow effects */
--shadow-drawer: 0 8px 40px rgba(0, 0, 0, 0.6);       /* Drawer/modal shadows */
```

### Usage Examples
```css
.card {
  box-shadow: var(--shadow-base);
}

.card:hover {
  box-shadow: var(--shadow-md);
}

.modal {
  box-shadow: var(--shadow-xl);
}
```

## Animation System

### Transition Tokens
Consistent animation timing and easing for smooth interactions:

```css
/* Base transitions */
--transition-fast: 150ms ease-out;        /* Quick interactions */
--transition-base: 250ms ease-out;        /* Standard timing */
--transition-slow: 400ms ease-out;        /* Slow animations */

/* Component-specific transitions */
--transition-transform: transform 0.3s ease;           /* Transform animations */
--transition-glow: box-shadow 0.3s ease;              /* Glow effects */
--transition-button: transform 0.2s, box-shadow 0.2s; /* Button interactions */
--transition-card: transform 0.3s, box-shadow 0.3s;   /* Card hover effects */
--transition-drawer: transform 0.3s ease, opacity 0.3s ease; /* Drawer animations */
```

### Usage Examples
```css
.button {
  transition: var(--transition-button);
}

.card {
  transition: var(--transition-card);
}

.drawer {
  transition: var(--transition-drawer);
}
```

### Component Dimensions
Standardized dimensions for consistent component sizing:

```css
/* Component sizing */
--card-image-size: 200px;       /* Standard card image dimensions */
--drawer-padding: 2rem;         /* Drawer content padding */
--icon-size-sm: 16px;          /* Small icons */
--icon-size-base: 20px;        /* Standard icons */
--icon-size-lg: 24px;          /* Large icons */
--logo-size-hero: 300px;       /* Hero section logo size */
```

## Layout System

### Container Dimensions
Semantic width tokens for consistent layouts:

```css
/* Utility class dimensions */
--max-width-sm: 384px;
--max-width-md: 448px;
--max-width-lg: 512px;
--max-width-xl: 576px;
--max-width-2xl: 672px;
--max-width-4xl: 896px;

/* Container dimensions */
--max-width-container-sm: 600px;
--max-width-container-md: 800px;
--max-width-container-lg: 1200px;
--max-width-container-xl: 1440px;
```

## Gradient System

### Hero Title Gradients
Theme-specific gradient colors for consistent brand presentation:

```css
/* Base gradient using theme variables */
.hero__title {
  background: linear-gradient(135deg, var(--color-gradient-start) 0%, var(--color-gradient-end) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Button Gradients
```css
.btn--primary {
  background: linear-gradient(135deg, var(--color-button-primary-start), var(--color-button-primary-end));
}
```

## Header and Navigation Styling

### Header Variables
Theme-specific header styling ensures proper contrast:

```css
.header {
  background: var(--color-bg-header, rgba(0, 0, 0, 0.6));
  border-bottom: 1px solid var(--color-border-header, rgba(255, 255, 255, 0.1));
  color: var(--color-text-primary);
}
```

### Navigation Links
```css
.header__nav-link {
  color: var(--color-text-primary);
  transition: color var(--transition-base);
}

.header__nav-link:hover {
  color: var(--color-primary);
}
```

## Theme Implementation

### Theme Switching
Themes are applied via data attributes on the body element:

```html
<body data-theme="light">
<body data-theme="dark">
<body data-theme="classic">
<body data-theme="ghibli">
```

### Theme-Specific Overrides
Use theme selectors for theme-specific styling:

```css
[data-theme="light"] .component {
  /* Light theme specific styles */
}

[data-theme="dark"] .component {
  /* Dark theme specific styles */
}
```

## Naming Conventions

### Variable Naming Pattern
```
--{category}-{element}-{variant}
```

Examples:
- `--color-text-primary` (category: color, element: text, variant: primary)
- `--font-size-xl` (category: font, element: size, variant: xl)
- `--space-4` (category: space, variant: 4)

### CSS Class Naming
Follow BEM methodology:
```css
.component__element--modifier
```

Examples:
- `.header__nav-link--active`
- `.card__title--large`
- `.button--primary`

## Best Practices

### DO ✅
- Always use CSS variables for colors, spacing, typography
- Provide fallback values for critical properties
- Use semantic variable names that describe purpose, not appearance
- Test all themes when making changes
- Follow the established spacing scale
- Use existing shadow tokens rather than creating custom shadows

### DON'T ❌
- Never hardcode colors, spacing, or typography values
- Don't create component-specific variables outside of variables.css
- Don't use `!important` to override theme system (fix specificity instead)
- Don't create custom shadow values outside the design system
- Don't bypass the theme system with local overrides

### Component Development Checklist
- [ ] Uses only CSS variables for all styling properties
- [ ] Respects theme system and works in all themes
- [ ] Follows spacing scale for padding, margins, gaps
- [ ] Uses semantic font sizes and weights
- [ ] Implements proper hover/focus states using design tokens
- [ ] No hardcoded values anywhere in the component

## File Structure

```
styles/
├── base/
│   ├── variables.css     # Design tokens (single source of truth)
│   ├── reset.css        # CSS reset
│   └── typography.css   # Typography utilities
├── components/          # Component-specific styles
├── layouts/            # Layout-specific styles
└── main.css           # Utility classes
```

## Migration Guidelines

### Converting Existing Components
1. Identify all hardcoded values
2. Replace with appropriate CSS variables
3. Test in all themes
4. Remove any local overrides
5. Ensure proper fallback values

### Adding New Components
1. Use existing design tokens
2. Only create new tokens if absolutely necessary
3. Add new tokens to variables.css, not component files
4. Document any new patterns or exceptions

This style guide ensures consistency, maintainability, and a predictable design system that scales with the project's growth.