# Typography System Guide

## Overview
This project uses **Aeonik** as the primary and only font family across the entire website for consistency and brand cohesion.

## Font Family
- **Primary Font**: Aeonik (all weights: Light 300, Regular 400, Medium 500, Semibold 600, Bold 700)
- **Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

## CSS Variables
```css
:root {
  --font-display: 'Aeonik', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-body: 'Aeonik', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-primary: 'Aeonik', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  --tracking-tight: -0.02em;
  --tracking-normal: 0;
  --tracking-wide: 0.025em;
}
```

## Typography Utility Classes

### Base Classes
- `.font-display` - Aeonik Medium (500) for headings and display text
- `.font-body` - Aeonik Regular (400) for body text
- `.font-heading` - Aeonik Medium (500) for section headings

### Weight Classes
- `.font-light` - 300 weight
- `.font-normal` - 400 weight  
- `.font-medium` - 500 weight
- `.font-semibold` - 600 weight
- `.font-bold` - 700 weight

### Size Classes
- `.text-heading-hero` - 32px mobile, 60px desktop
- `.text-heading-section` - 24px mobile, 42px desktop
- `.text-heading-card` - 20px mobile, 26px desktop
- `.text-body-lg` - 18px mobile, 20px desktop
- `.text-body-base` - 16px mobile, 18px desktop
- `.text-body-sm` - 14px mobile, 16px desktop

### Letter Spacing Classes
- `.tracking-tighter` - -0.02em
- `.tracking-normal` - 0
- `.tracking-wider` - 0.025em

## React Components

### Heading Component
```tsx
<Heading level={1} variant="hero">Main Title</Heading>
<Heading level={2} variant="section">Section Title</Heading>
<Heading level={3} variant="card">Card Title</Heading>
```

### Text Component
```tsx
<Text variant="body-lg" weight="medium" color="white">Large body text</Text>
<Text variant="body" weight="regular" color="muted">Regular body text</Text>
<Text variant="body-sm" weight="light" color="secondary">Small text</Text>
```

### Button Component
Uses `font-display` with medium weight and tight letter spacing for all button text.

## Usage Guidelines

1. **Headings**: Always use Aeonik Medium (500) weight
2. **Body Text**: Use Aeonik Regular (400) weight as default
3. **UI Elements**: Use Aeonik Medium (500) for buttons, labels, and interactive elements
4. **Letter Spacing**: Use tight spacing (-0.02em) for large headings, normal for body text
5. **Line Height**: 1.15 for headings, 1.5 for body text

## Migration Notes

All previous font families (Poppins, Inter, Figtree, Neue Haas Grotesk) have been removed and replaced with Aeonik for consistency. The typography system now provides:

- Consistent visual hierarchy
- Better brand alignment
- Improved readability
- Simplified maintenance
- Better performance (single font family)

## File Locations

- Main typography definitions: `src/styles/globals.css`
- Font face declarations: `src/index.css`
- Component implementations: `src/components/atoms/`