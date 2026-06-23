---
name: Apex Nordic Minimalism
colors:
  surface: '#f9f9ff'
  surface-dim: '#d8dae0'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3fa'
  surface-container: '#ededf4'
  surface-container-high: '#e7e8ef'
  surface-container-highest: '#e1e2e9'
  on-surface: '#191c21'
  on-surface-variant: '#424751'
  inverse-surface: '#2e3036'
  inverse-on-surface: '#eff0f7'
  outline: '#727782'
  outline-variant: '#c2c6d3'
  surface-tint: '#135faa'
  primary: '#00417a'
  on-primary: '#ffffff'
  primary-container: '#0058a3'
  on-primary-container: '#b2cfff'
  inverse-primary: '#a5c8ff'
  secondary: '#6e5e00'
  on-secondary: '#ffffff'
  secondary-container: '#f9d600'
  on-secondary-container: '#6d5c00'
  tertiary: '#6b2f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#8f4100'
  on-tertiary-container: '#ffc09d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#a5c8ff'
  on-primary-fixed: '#001c3a'
  on-primary-fixed-variant: '#004786'
  secondary-fixed: '#ffe25c'
  secondary-fixed-dim: '#e6c500'
  on-secondary-fixed: '#221b00'
  on-secondary-fixed-variant: '#534600'
  tertiary-fixed: '#ffdbc9'
  tertiary-fixed-dim: '#ffb68c'
  on-tertiary-fixed: '#321200'
  on-tertiary-fixed-variant: '#753400'
  background: '#f9f9ff'
  on-background: '#191c21'
  surface-variant: '#e1e2e9'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  price-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style
The design system is rooted in the Scandinavian design philosophy: clean lines, honesty of materials, and democratic functionality. It prioritizes clarity and utility over decorative flourish, ensuring the product is the hero.

**Design Style: IKEA-Inspired Minimalism**
- **Clarity:** Excessive white space is used to reduce cognitive load and emphasize high-quality product photography.
- **Utility:** Every element serves a specific purpose; decorative gradients, blurs, and dramatic shadows are strictly excluded.
- **Approachable Professionalism:** The interface feels reliable and established through a systematic grid and clear typographic hierarchy.
- **Democratic Design:** The UI is designed to be accessible, legible, and intuitive for a global audience.

## Colors
This design system utilizes a high-contrast, functional palette inspired by iconic Swedish retail design.

- **Primary Blue (#0058A3):** Used for primary actions, links, and brand-identifying accents. It signals reliability and utility.
- **Promotional Yellow (#FFDB00):** Reserved exclusively for high-visibility highlights, sale badges, and secondary promotional callouts.
- **Neutrals:** Pure White (#FFFFFF) is the standard surface color. Light Gray (#F5F5F5) is used for section alternating and secondary containers to provide subtle structural depth.
- **Typography:** Primary text is nearly black for maximum legibility, while secondary text uses a neutral gray to recede in the hierarchy.
- **Alerts:** Sale Red (#CC0008) is used strictly for price drops and critical status indicators.

## Typography
The system uses **Inter** throughout to maintain a functional, geometric, and modern appearance.

- **Headlines:** Set in Bold (700) with tight tracking to create a strong visual anchor. Never use condensed variants.
- **Body Text:** Set with a generous 1.6 line-height to ensure maximum readability and a feeling of "airiness."
- **Prices:** Given high visual prominence through large font sizes and bold weights.
- **Labels:** Small metadata and overlines use uppercase with increased letter-spacing to distinguish them from body content without increasing weight.

## Layout & Spacing
The layout follows a strict 8px grid system to ensure mathematical harmony and alignment.

- **Grid:** A 12-column fluid grid is used for desktop (max-width 1280px). For mobile, a 4-column grid with 16px margins is standard.
- **Vertical Rhythm:** Large vertical gaps (80px+) are encouraged between major page sections to maintain the Scandinavian "openness."
- **Alignment:** All content should align to the left to mirror natural reading patterns, emphasizing the honest, straightforward brand personality.

## Elevation & Depth
In line with the minimalist aesthetic, depth is created through color blocking and thin borders rather than complex shadows.

- **Planes:** Surfaces are primarily flat. The hierarchy is established by placing white elements on #F5F5F5 backgrounds.
- **Borders:** 1px solid borders in #DFDFDF are the primary method for defining card boundaries and input fields.
- **Shadows:** Use only "Level 1" shadows for interactive elements like cards. These must be extremely subtle: 0px 2px 8px rgba(0,0,0,0.05).
- **Interactive States:** On hover, a card may transition from a #DFDFDF border to a 1px #0058A3 border or slightly increase shadow density.

## Shapes
The shape language is a mix of geometric precision and ergonomic softness.

- **Structural Elements:** Cards and containers use a subtle 4px to 8px radius (Soft) to feel modern but structured.
- **Action Elements:** Buttons and tags use a fully rounded (pill) style to signify interactability and provide a friendly contrast to the rectangular grid.
- **Iconography:** Icons should be 20-24px, using a 1.5pt or 2pt stroke weight with rounded caps and joins.

## Components

### Buttons
- **Primary:** Fully rounded (40px radius), #0058A3 background, #FFFFFF text. No uppercase. Padding: 12px 32px.
- **Secondary:** Fully rounded, #FFFFFF background, 1px #0058A3 border, #0058A3 text.
- **Promotional:** Fully rounded, #FFDB00 background, #111111 text. Reserved for "Special Offers."

### Cards
- **Product Cards:** White background, 1px #DFDFDF border, 4px corner radius. Title in Bold, Price in Red if on sale. Use a subtle shadow on hover only.
- **Content Cards:** No border, #F5F5F5 background, 0px radius for a more architectural "full-bleed" look.

### Input Fields
- **Text Inputs:** 1px #DFDFDF border, 4px radius, 16px internal padding. Labels are placed above the input in `body-sm` bold.
- **Focus State:** Border changes to 1px #0058A3. No outer glows.

### Navigation
- **Top Bar:** Pure white background, 1px #DFDFDF bottom border.
- **Search:** Rounded 4px, #F5F5F5 background or white with #DFDFDF border.
- **Cart/Account Icons:** Thin 24px outline style in #111111.

### Lists & Selection
- **Checkboxes/Radios:** Square (4px radius) for checkboxes, circular for radios. Use #0058A3 for the "selected" state.
- **Chips/Filters:** Fully rounded (pill), #F5F5F5 background, #111111 text. Active state uses Primary Blue.