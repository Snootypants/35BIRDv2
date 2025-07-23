# Variables Map

Complete reference for all CSS custom properties defined in `styles/base/variables.css`.

## Root Variables (Base Values)

These variables provide default values available to all themes.

### 🎨 Colors

#### Brand Colors
| Variable | Default Value | Description | Usage Example |
|----------|---------------|-------------|---------------|
| `--color-primary` | `#007bff` | Primary brand color for actions and accents | `color: var(--color-primary)` |
| `--color-secondary` | `#6c757d` | Secondary color for muted elements | `color: var(--color-secondary)` |
| `--color-accent` | `#28a745` | Accent color for success and highlights | `background: var(--color-accent)` |

#### State Colors
| Variable | Default Value | Description | Usage Example |
|----------|---------------|-------------|---------------|
| `--color-danger` | `#dc3545` | Error and danger states | `background: var(--color-danger)` |
| `--color-warning` | `#ffc107` | Warning and caution states | `background: var(--color-warning)` |
| `--color-muted` | `#6c757d` | Disabled or muted content | `color: var(--color-muted)` |

#### Utility Colors
| Variable | Default Value | Description | Usage Example |
|----------|---------------|-------------|---------------|
| `--color-white` | `#ffffff` | Pure white color | `background: var(--color-white)` |
| `--color-black` | `#000000` | Pure black color | `color: var(--color-black)` |

#### Button Colors
| Variable | Default Value | Description | Usage Example |
|----------|---------------|-------------|---------------|
| `--color-button-primary-start` | `#0af` | Primary button gradient start | `background: linear-gradient(var(--color-button-primary-start), ...)` |
| `--color-button-primary-end` | `#3f9fff` | Primary button gradient end | `background: linear-gradient(..., var(--color-button-primary-end))` |

### 📝 Typography

#### Font Family
| Variable | Default Value | Description | Usage Example |
|----------|---------------|-------------|---------------|
| `--font-family-primary` | `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif` | Primary font stack with fallbacks | `font-family: var(--font-family-primary)` |

#### Font Sizes
| Variable | Default Value | Pixel Equivalent | Description | Usage Example |
|----------|---------------|------------------|-------------|---------------|
| `--font-size-xs` | `0.75rem` | 12px | Extra small text, labels | `font-size: var(--font-size-xs)` |
| `--font-size-sm` | `0.875rem` | 14px | Small text, secondary content | `font-size: var(--font-size-sm)` |
| `--font-size-base` | `1rem` | 16px | Base body text size | `font-size: var(--font-size-base)` |
| `--font-size-lg` | `1.125rem` | 18px | Large body text | `font-size: var(--font-size-lg)` |
| `--font-size-xl` | `1.25rem` | 20px | Subheadings | `font-size: var(--font-size-xl)` |
| `--font-size-2xl` | `1.5rem` | 24px | Section titles | `font-size: var(--font-size-2xl)` |
| `--font-size-3xl` | `1.875rem` | 30px | Page titles | `font-size: var(--font-size-3xl)` |
| `--font-size-4xl` | `2.5rem` | 40px | Large headings | `font-size: var(--font-size-4xl)` |
| `--font-size-5xl` | `3.5rem` | 56px | Hero titles | `font-size: var(--font-size-5xl)` |

#### Font Weights
| Variable | Default Value | Description | Usage Example |
|----------|---------------|-------------|---------------|
| `--font-weight-normal` | `400` | Regular text weight | `font-weight: var(--font-weight-normal)` |
| `--font-weight-medium` | `500` | Medium emphasis | `font-weight: var(--font-weight-medium)` |
| `--font-weight-semibold` | `600` | Strong emphasis | `font-weight: var(--font-weight-semibold)` |
| `--font-weight-bold` | `700` | Bold headings and important text | `font-weight: var(--font-weight-bold)` |

#### Line Heights
| Variable | Default Value | Description | Usage Example |
|----------|---------------|-------------|---------------|
| `--line-height-tight` | `1.2` | Tight spacing for headings | `line-height: var(--line-height-tight)` |
| `--line-height-snug` | `1.3` | Slightly relaxed spacing | `line-height: var(--line-height-snug)` |
| `--line-height-normal` | `1.5` | Standard body text spacing | `line-height: var(--line-height-normal)` |
| `--line-height-relaxed` | `1.65` | Relaxed spacing for readability | `line-height: var(--line-height-relaxed)` |

### 📏 Spacing

| Variable | Default Value | Pixel Equivalent | Description | Usage Example |
|----------|---------------|------------------|-------------|---------------|
| `--space-1` | `0.25rem` | 4px | Minimal spacing | `margin: var(--space-1)` |
| `--space-2` | `0.5rem` | 8px | Small spacing | `padding: var(--space-2)` |
| `--space-3` | `0.75rem` | 12px | Medium-small spacing | `gap: var(--space-3)` |
| `--space-4` | `1rem` | 16px | Base spacing unit | `margin: var(--space-4)` |
| `--space-5` | `1.25rem` | 20px | Medium spacing | `padding: var(--space-5)` |
| `--space-6` | `1.5rem` | 24px | Medium-large spacing | `margin: var(--space-6)` |
| `--space-8` | `2rem` | 32px | Large spacing | `padding: var(--space-8)` |
| `--space-10` | `2.5rem` | 40px | Extra large spacing | `margin: var(--space-10)` |
| `--space-12` | `3rem` | 48px | Section spacing | `padding: var(--space-12)` |
| `--space-16` | `4rem` | 64px | Major section spacing | `margin: var(--space-16)` |
| `--space-20` | `5rem` | 80px | Large section spacing | `padding: var(--space-20)` |
| `--space-24` | `6rem` | 96px | Maximum spacing | `margin: var(--space-24)` |

### 📐 Layout Dimensions

#### Utility Class Dimensions
| Variable | Default Value | Description | Usage Example |
|----------|---------------|-------------|---------------|
| `--max-width-sm` | `384px` | Small utility max-width | `max-width: var(--max-width-sm)` |
| `--max-width-md` | `448px` | Medium utility max-width | `max-width: var(--max-width-md)` |
| `--max-width-lg` | `512px` | Large utility max-width | `max-width: var(--max-width-lg)` |
| `--max-width-xl` | `576px` | Extra large utility max-width | `max-width: var(--max-width-xl)` |
| `--max-width-2xl` | `672px` | 2X large utility max-width | `max-width: var(--max-width-2xl)` |
| `--max-width-4xl` | `896px` | 4X large utility max-width | `max-width: var(--max-width-4xl)` |

#### Container Dimensions
| Variable | Default Value | Description | Usage Example |
|----------|---------------|-------------|---------------|
| `--max-width-container-sm` | `600px` | Small container width | `max-width: var(--max-width-container-sm)` |
| `--max-width-container-md` | `800px` | Medium container width | `max-width: var(--max-width-container-md)` |
| `--max-width-container-lg` | `1200px` | Large container width | `max-width: var(--max-width-container-lg)` |
| `--max-width-container-xl` | `1440px` | Extra large container width | `max-width: var(--max-width-container-xl)` |

### 🔘 Border Radius

| Variable | Default Value | Pixel Equivalent | Description | Usage Example |
|----------|---------------|------------------|-------------|---------------|
| `--radius-sm` | `0.25rem` | 4px | Small radius for subtle rounding | `border-radius: var(--radius-sm)` |
| `--radius-base` | `0.375rem` | 6px | Default radius for most elements | `border-radius: var(--radius-base)` |
| `--radius-md` | `0.5rem` | 8px | Medium radius | `border-radius: var(--radius-md)` |
| `--radius-lg` | `0.75rem` | 12px | Large radius for cards | `border-radius: var(--radius-lg)` |
| `--radius-xl` | `1rem` | 16px | Extra large radius | `border-radius: var(--radius-xl)` |
| `--radius-2xl` | `1.5rem` | 24px | Maximum radius | `border-radius: var(--radius-2xl)` |
| `--radius-full` | `9999px` | Fully rounded | `border-radius: var(--radius-full)` |

### 🌑 Shadows

#### Base Shadows
| Variable | Default Value | Description | Usage Example |
|----------|---------------|-------------|---------------|
| `--shadow-sm` | `0 1px 3px rgba(0, 0, 0, 0.06)` | Subtle depth | `box-shadow: var(--shadow-sm)` |
| `--shadow-base` | `0 4px 6px rgba(0, 0, 0, 0.1)` | Default elevation | `box-shadow: var(--shadow-base)` |
| `--shadow-md` | `0 8px 15px rgba(0, 0, 0, 0.12)` | Medium elevation | `box-shadow: var(--shadow-md)` |
| `--shadow-lg` | `0 12px 25px rgba(0, 0, 0, 0.15)` | High elevation | `box-shadow: var(--shadow-lg)` |
| `--shadow-xl` | `0 20px 40px rgba(0, 0, 0, 0.2)` | Maximum elevation | `box-shadow: var(--shadow-xl)` |

#### Text Shadows
| Variable | Default Value | Description | Usage Example |
|----------|---------------|-------------|---------------|
| `--shadow-text-light` | `0 2px 4px rgba(0, 0, 0, 0.15)` | Light theme text shadows | `text-shadow: var(--shadow-text-light)` |
| `--shadow-text-dark` | `0 2px 6px rgba(0, 0, 0, 0.5)` | Dark theme text shadows | `text-shadow: var(--shadow-text-dark)` |
| `--shadow-text-glow` | `0 0 20px rgba(0, 170, 255, 0.3)` | Glow effects for special elements | `box-shadow: var(--shadow-text-glow)` |

#### Component Shadows
| Variable | Default Value | Description | Usage Example |
|----------|---------------|-------------|---------------|
| `--shadow-card` | `0 8px 30px rgba(0, 0, 0, 0.6)` | Card component elevation | `box-shadow: var(--shadow-card)` |
| `--shadow-card-hover` | `0 20px 40px rgba(0, 170, 255, 0.5)` | Card hover state elevation | `box-shadow: var(--shadow-card-hover)` |
| `--shadow-card-glow` | `0 0 40px rgba(0, 170, 255, 0.6)` | Card glow effects | `box-shadow: var(--shadow-card-glow)` |
| `--shadow-drawer` | `0 8px 40px rgba(0, 0, 0, 0.6)` | Drawer/modal elevation | `box-shadow: var(--shadow-drawer)` |

### 📚 Z-Index Scale

| Variable | Default Value | Description | Usage Example |
|----------|---------------|-------------|---------------|
| `--z-dropdown` | `1000` | Dropdown menus | `z-index: var(--z-dropdown)` |
| `--z-sticky` | `1020` | Sticky headers | `z-index: var(--z-sticky)` |
| `--z-fixed` | `1030` | Fixed positioned elements | `z-index: var(--z-fixed)` |
| `--z-modal-backdrop` | `1040` | Modal backdrops | `z-index: var(--z-modal-backdrop)` |
| `--z-modal` | `1050` | Modal content | `z-index: var(--z-modal)` |
| `--z-popover` | `1060` | Popovers | `z-index: var(--z-popover)` |
| `--z-tooltip` | `1070` | Tooltips (highest) | `z-index: var(--z-tooltip)` |

### 📱 Breakpoints

| Variable | Default Value | Description | Usage Example |
|----------|---------------|-------------|---------------|
| `--breakpoint-sm` | `640px` | Small devices | `@media (min-width: var(--breakpoint-sm))` |
| `--breakpoint-md` | `768px` | Medium devices | `@media (min-width: var(--breakpoint-md))` |
| `--breakpoint-lg` | `1024px` | Large devices | `@media (min-width: var(--breakpoint-lg))` |
| `--breakpoint-xl` | `1280px` | Extra large devices | `@media (min-width: var(--breakpoint-xl))` |
| `--breakpoint-2xl` | `1536px` | 2X large devices | `@media (min-width: var(--breakpoint-2xl))` |

### ⚡ Animation

#### Base Transitions
| Variable | Default Value | Description | Usage Example |
|----------|---------------|-------------|---------------|
| `--transition-fast` | `150ms ease-out` | Fast transitions | `transition: color var(--transition-fast)` |
| `--transition-base` | `250ms ease-out` | Standard transitions | `transition: all var(--transition-base)` |
| `--transition-slow` | `400ms ease-out` | Slow transitions | `transition: opacity var(--transition-slow)` |

#### Component-Specific Transitions
| Variable | Default Value | Description | Usage Example |
|----------|---------------|-------------|---------------|
| `--transition-transform` | `transform 0.3s ease` | Transform animations | `transition: var(--transition-transform)` |
| `--transition-glow` | `box-shadow 0.3s ease` | Glow effect transitions | `transition: var(--transition-glow)` |
| `--transition-button` | `transform 0.2s, box-shadow 0.2s` | Button interaction animations | `transition: var(--transition-button)` |
| `--transition-card` | `transform 0.3s, box-shadow 0.3s` | Card hover effects | `transition: var(--transition-card)` |
| `--transition-drawer` | `transform 0.3s ease, opacity 0.3s ease` | Drawer/modal animations | `transition: var(--transition-drawer)` |

### 📐 Component Dimensions

| Variable | Default Value | Description | Usage Example |
|----------|---------------|-------------|---------------|
| `--card-image-size` | `200px` | Standard card image dimensions | `width: var(--card-image-size); height: var(--card-image-size)` |
| `--drawer-padding` | `2rem` | Standard drawer content padding | `padding: var(--drawer-padding)` |
| `--icon-size-sm` | `16px` | Small icon size | `width: var(--icon-size-sm)` |
| `--icon-size-base` | `20px` | Standard icon size | `width: var(--icon-size-base)` |
| `--icon-size-lg` | `24px` | Large icon size | `width: var(--icon-size-lg)` |
| `--logo-size-hero` | `300px` | Hero section logo size | `width: var(--logo-size-hero)` |

### 🏗️ Grid

| Variable | Default Value | Description | Usage Example |
|----------|---------------|-------------|---------------|
| `--grid-max-width` | `1280px` | Maximum grid container width | `max-width: var(--grid-max-width)` |
| `--grid-gutter` | `var(--space-6)` | Grid gutter spacing | `gap: var(--grid-gutter)` |

---

## Theme-Specific Variables

These variables are overridden in specific theme blocks and have different values per theme.

### 🎨 Background Colors

#### `--color-bg-primary`
**Purpose**: Primary background color for main content areas
**Theme Overrides**:
- **Dark**: `linear-gradient(to bottom, #020202, #101316)`
- **Light**: `linear-gradient(to bottom, #fdfdfd, #f2f6fb)`
- **Classic**: `linear-gradient(to bottom, #fdfdfd, #f2f6fb)`
- **Ghibli**: `#f0f4f7`

**Usage**: `background: var(--color-bg-primary)`

#### `--color-bg-secondary`
**Purpose**: Secondary background for cards, components
**Theme Overrides**:
- **Dark**: `#2a2a4a`
- **Light**: `#ffffff`
- **Classic**: `#ffffff`
- **Ghibli**: `#ffffff`

**Usage**: `background: var(--color-bg-secondary)`

#### `--color-bg-accent`
**Purpose**: Accent background for overlays
**Theme Overrides**:
- **Dark**: `rgba(42, 42, 74, 0.9)`
- **Light**: `rgba(255, 255, 255, 0.9)`
- **Classic**: `rgba(255, 255, 255, 0.9)`
- **Ghibli**: *Not defined (uses root)*

**Usage**: `background: var(--color-bg-accent)`

#### `--color-bg-header`
**Purpose**: Header background color
**Theme Overrides**:
- **Dark**: `rgba(0, 0, 0, 0.6)`
- **Light**: `rgba(255, 255, 255, 0.8)`
- **Classic**: `rgba(255, 255, 255, 0.75)`
- **Ghibli**: *Not defined (uses root)*

**Usage**: `background: var(--color-bg-header)`

### 📝 Text Colors

#### `--color-text-primary`
**Purpose**: Primary text color for headings and important content
**Theme Overrides**:
- **Dark**: `#e0e0e0`
- **Light**: `#111111`
- **Classic**: `#111111`
- **Ghibli**: `#3a4a4d`

**Usage**: `color: var(--color-text-primary)`

#### `--color-text-secondary`
**Purpose**: Secondary text color for body text
**Theme Overrides**:
- **Dark**: `#b0b0b0`
- **Light**: `#333333`
- **Classic**: `#333333`
- **Ghibli**: `#6a7a7d`

**Usage**: `color: var(--color-text-secondary)`

#### `--color-text-muted`
**Purpose**: Muted text color for less important content
**Theme Overrides**:
- **Dark**: `#808080`
- **Light**: `#666666`
- **Classic**: `#666666`
- **Ghibli**: `#9aa7a9`

**Usage**: `color: var(--color-text-muted)`

### 🔲 Border Colors

#### `--color-border`
**Purpose**: Default border color for components
**Theme Overrides**:
- **Dark**: `#3a3a5a`
- **Light**: `#d0d4d9`
- **Classic**: `#d0d4d9`
- **Ghibli**: `#c0d0d3`

**Usage**: `border-color: var(--color-border)`

#### `--color-border-header`
**Purpose**: Header-specific border color
**Theme Overrides**:
- **Dark**: `rgba(255, 255, 255, 0.1)`
- **Light**: `rgba(200, 200, 200, 0.3)`
- **Classic**: `rgba(0, 0, 0, 0.05)`
- **Ghibli**: *Not defined (uses root)*

**Usage**: `border-bottom: 1px solid var(--color-border-header)`

### 🌑 Shadow Colors

#### `--color-shadow`
**Purpose**: Standard shadow color
**Theme Overrides**:
- **Dark**: `rgba(0, 0, 0, 0.4)`
- **Light**: `rgba(0, 0, 0, 0.08)`
- **Classic**: `rgba(0, 0, 0, 0.08)`
- **Ghibli**: `rgba(0, 0, 0, 0.05)`

**Usage**: Custom shadows with theme-appropriate opacity

#### `--color-shadow-heavy`
**Purpose**: Strong shadow color for high elevation
**Theme Overrides**:
- **Dark**: `rgba(0, 0, 0, 0.6)`
- **Light**: `rgba(0, 0, 0, 0.15)`
- **Classic**: `rgba(0, 0, 0, 0.15)`
- **Ghibli**: `rgba(0, 0, 0, 0.1)`

**Usage**: Custom heavy shadows with theme-appropriate opacity

### 🌈 Gradient Colors

#### `--color-gradient-start`
**Purpose**: Starting color for hero title gradients
**Theme Overrides**:
- **Dark**: `var(--color-text-primary)` (dynamic reference)
- **Light**: `#1e40af`
- **Classic**: `#1e40af`
- **Ghibli**: *Not defined (uses root)*

**Usage**: `background: linear-gradient(135deg, var(--color-gradient-start) 0%, ...)`

#### `--color-gradient-end`
**Purpose**: Ending color for hero title gradients
**Theme Overrides**:
- **Dark**: `var(--color-primary)` (dynamic reference)
- **Light**: `#3b82f6`
- **Classic**: `#3b82f6`
- **Ghibli**: *Not defined (uses root)*

**Usage**: `background: linear-gradient(135deg, ..., var(--color-gradient-end) 100%)`

### 🎨 Brand Colors (Theme-Specific Overrides)

#### `--color-primary`
**Purpose**: Primary brand color
**Root Default**: `#007bff`
**Theme Overrides**:
- **Ghibli**: `#5a8d7a` (muted green)
- *Other themes use root value*

#### `--color-accent`
**Purpose**: Accent color for highlights
**Root Default**: `#28a745`
**Theme Overrides**:
- **Ghibli**: `#d4af37` (gold)
- *Other themes use root value*

---

## Usage Guidelines

### Variable Priority
1. **Theme-specific variables** (highest priority)
2. **Root variables** (fallback)
3. **CSS fallback values** (last resort)

### Best Practices
- Always provide fallback values: `color: var(--color-text-primary, #000)`
- Use semantic variables, not hard-coded values
- Test in all themes when modifying components
- Prefer existing variables over creating new ones

### Adding New Variables
1. Add to `:root` block for global variables
2. Add to theme blocks for theme-specific overrides
3. Update this documentation
4. Follow naming convention: `--{category}-{element}-{variant}`

### Variable Naming Convention
- `--color-*`: Color-related variables
- `--font-*`: Typography-related variables
- `--space-*`: Spacing and layout variables
- `--radius-*`: Border radius variables
- `--shadow-*`: Shadow-related variables
- `--transition-*`: Animation and transition variables