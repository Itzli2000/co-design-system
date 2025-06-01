# @codigo-obsidiana/design-tokens

Design token system for the **Código Obsidiana Design System**. This package provides consistent and scalable design tokens for colors, spacing, typography, and other visual interface elements.

## ✨ Features

- **🎨 Modern color palette**: Based on OKLCH color space for better visual perception
- **🏢 Multi-brand support**: Optimized tokens for different brands (Obsidiana, Ixiptla)
- **🌓 Theme support**: Optimized tokens for light and dark modes
- **📱 Responsive**: Tokens for different devices and screen sizes
- **🔧 TypeScript**: Fully typed for better development experience
- **🎯 Style Dictionary**: Automated processing to multiple formats
- **🚀 Tree-shakeable**: Selective imports to optimize bundle size
- **📦 Multiple formats**: CSS variables, ES6 modules, TypeScript declarations

## 📦 Installation

```bash
# npm
npm install @codigo-obsidiana/design-tokens

# yarn  
yarn add @codigo-obsidiana/design-tokens

# pnpm
pnpm add @codigo-obsidiana/design-tokens
```

## 🚀 Usage

### Main Brand (Obsidiana)

#### CSS Variables

```css
/* Import all CSS variables */
@import '@codigo-obsidiana/design-tokens/css';

/* Use tokens in your styles */
.button {
  background-color: var(--color-primary-light-default);
  color: var(--color-primary-light-content);
  border-radius: var(--design-radius-field);
  border: var(--design-border-width) solid transparent;
  padding: var(--design-size-field);
}

/* Dark theme using media queries */
@media (prefers-color-scheme: dark) {
  .button {
    background-color: var(--color-primary-dark-default);
    color: var(--color-primary-dark-content);
  }
}
```

#### JavaScript/TypeScript

```typescript
// Import specific Obsidiana tokens
import { 
  ColorPrimaryLightDefault,
  ColorPrimaryLightContent,
  DesignRadiusField,
  DesignBorderWidth,
  DesignSizeField
} from '@codigo-obsidiana/design-tokens';

// Use with styled-components
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${ColorPrimaryLightDefault};
  color: ${ColorPrimaryLightContent};
  border-radius: ${DesignRadiusField};
  border: ${DesignBorderWidth} solid transparent;
  padding: ${DesignSizeField};
`;

// Use in CSS-in-JS styles
const buttonStyles = {
  backgroundColor: ColorPrimaryLightDefault,
  color: ColorPrimaryLightContent,
  borderRadius: DesignRadiusField,
  border: `${DesignBorderWidth} solid transparent`,
  padding: DesignSizeField,
};
```

### Multi-Brand Support

#### Specific Brand (Ixiptla)

```typescript
// Import brand-specific tokens
import { 
  ColorPrimaryLightDefault as IxiptlaColorPrimary,
  ColorSecondaryLightDefault as IxiptlaColorSecondary
} from '@codigo-obsidiana/design-tokens/brands/ixiptla';

// CSS for specific brand
@import '@codigo-obsidiana/design-tokens/brands/ixiptla/css';
```

#### Brand Comparison

```typescript
// Dynamic switching between brands
const getBrandTokens = (brand: 'obsidiana' | 'ixiptla') => {
  switch (brand) {
    case 'obsidiana':
      return import('@codigo-obsidiana/design-tokens/obsidiana');
    case 'ixiptla':
      return import('@codigo-obsidiana/design-tokens/brands/ixiptla');
    default:
      return import('@codigo-obsidiana/design-tokens'); // Default to Obsidiana
  }
};
```

### React/CSS Modules

```tsx
// styles.module.css
.button {
  background-color: var(--color-primary-light-default);
  color: var(--color-primary-light-content);
  border-radius: var(--design-radius-field);
  transition: all 0.2s ease;
}

.button:hover {
  background-color: var(--color-secondary-light-default);
}

.button--success {
  background-color: var(--color-success-light-default);
  color: var(--color-success-light-content);
}

// Button.tsx
import styles from './styles.module.css';
import '@codigo-obsidiana/design-tokens/css';

interface ButtonProps {
  variant?: 'primary' | 'success' | 'warning' | 'error';
  children: React.ReactNode;
}

export const Button = ({ variant = 'primary', children }: ButtonProps) => (
  <button className={`${styles.button} ${variant !== 'primary' ? styles[`button--${variant}`] : ''}`}>
    {children}
  </button>
);
```

## 🎨 Available Tokens

### Colors

#### Base Colors
- `color-base-light-*` / `color-base-dark-*`: Base backgrounds and surfaces
  - `100`: Lightest/darkest level
  - `200`: Intermediate level
  - `300`: Most intense level
  - `content`: Text color on base backgrounds

#### Semantic Colors
- `color-primary-*`: Primary brand color
- `color-secondary-*`: Secondary brand color  
- `color-accent-*`: Accent color for highlighting elements
- `color-neutral-*`: Neutral color for secondary elements

#### Status Colors
- `color-info-*`: General information
- `color-success-*`: Successful operations
- `color-warning-*`: Warnings
- `color-error-*`: Errors and failure states

**Each color includes variants for:**
- `*-light-default` / `*-dark-default`: Main color
- `*-light-content` / `*-dark-content`: Text/content color

### Design

#### Border Radius
```css
--design-radius-selector: 1rem;    /* For selectable elements */
--design-radius-field: 0.5rem;     /* For form fields */
--design-radius-box: 1rem;         /* For containers and boxes */
```

#### Sizes
```css
--design-size-selector: 0.25rem;   /* Size for selectable elements */
--design-size-field: 0.25rem;      /* Size for fields */
```

#### Borders
```css
--design-border-width: 1px;        /* Standard border width */
```

#### Effects
```css
--design-effect-depth: 1;          /* Shadow depth */
--design-effect-noise: 0;          /* Effect noise */
```

### Typography

```css
--font-family-primary: /* Primary font family */
--font-family-secondary: /* Secondary font family */
```

## 🎨 OKLCH Color Palette

This design system uses the OKLCH color space which offers:

- **Better perceptual uniformity**: Colors appear more consistent to the human eye
- **Wider gamut**: Access to more vibrant and precise colors
- **Better interpolation**: Smoother color transitions
- **Future support**: Ready for displays with wider color gamuts

### OKLCH example values:

```css
/* Format: oklch(lightness chroma hue) */
/* Obsidiana */
--color-primary-light-default: oklch(72.6% 0.21 245);
--color-success-light-default: oklch(68% 0.18 150);
--color-warning-light-default: oklch(82% 0.16 85);
--color-error-light-default: oklch(70.3% 0.16 35);

/* Base colors */
--color-base-light-100: oklch(98% 0.014 261.3);
--color-base-light-content: oklch(20% 0.006 262);
```

### OKLCH Benefits

1. **Visual consistency**: Lightness values that are perceived uniformly
2. **Accessibility**: Better contrast control to meet WCAG standards
3. **Compatibility**: Automatic fallback to sRGB colors in older browsers
4. **Future-ready**: Prepared for Display P3 and other wide color spaces

## 🛠️ Development

### Build tokens

```bash
# From monorepo root
npx nx build:tokens design-tokens

# Or from package directory
npm run build:tokens
```

### File structure

```
packages/libs/design-tokens/
├── src/
│   └── tokens/
│       ├── base/                    # Shared base tokens
│       │   ├── design.tokens.json   # Design tokens
│       │   ├── font.tokens.json     # Typography tokens
│       │   └── *.spec.ts           # Token tests
│       └── brands/                  # Brand-specific tokens
│           ├── obsidiana/
│           │   ├── color.tokens.json
│           │   └── *.spec.ts
│           └── ixiptla/
│               ├── color.tokens.json
│               └── *.spec.ts
├── scripts/
│   └── build.js                    # Build script
├── config.json                     # Style Dictionary configuration
├── dist/
│   ├── obsidiana/                  # Obsidiana brand output
│   │   ├── css/_variables.css      # CSS variables
│   │   ├── index.js               # ES6 exports
│   │   └── index.d.ts             # TypeScript definitions
│   └── ixiptla/                    # Ixiptla brand output
│       ├── css/_variables.css
│       ├── index.js
│       └── index.d.ts
└── README.md
```

### Adding new tokens

1. **Edit JSON files**: Modify files in `src/tokens/`
2. **Maintain structure**: Keep existing hierarchy
3. **Run build**: `npx nx build:tokens design-tokens`
4. **Verify output**: Check generated files in `dist/`

#### Example of new token:

```json
// src/tokens/base/design.tokens.json
{
  "design": {
    "shadow": {
      "small": {
        "value": "0 1px 2px oklch(0% 0 0 / 0.1)",
        "type": "boxShadow"
      },
      "medium": {
        "value": "0 4px 6px oklch(0% 0 0 / 0.1)",
        "type": "boxShadow"
      },
      "large": {
        "value": "0 10px 15px oklch(0% 0 0 / 0.1)",
        "type": "boxShadow"
      }
    }
  }
}
```

#### Example of brand color:

```json
// src/tokens/brands/obsidiana/color.tokens.json
{
  "color": {
    "brand": {
      "light": {
        "primary": {
          "value": "oklch(72.6% 0.21 245)",
          "type": "color"
        }
      },
      "dark": {
        "primary": {
          "value": "oklch(72.6% 0.21 245)",
          "type": "color"
        }
      }
    }
  }
}
```

### Testing

```bash
# Run tests
npx nx test design-tokens

# Watch mode
npx nx test design-tokens --watch

# Coverage
npx nx test design-tokens --coverage
```

## 📦 Output Formats

This package generates multiple formats for maximum compatibility:

### CSS Variables (`dist/*/css/_variables.css`)
```css
:root {
  --color-primary-light-default: oklch(72.6% 0.21 245);
  --color-base-light-100: oklch(98% 0.014 261.3);
  --design-radius-field: 0.5rem;
  --design-border-width: 1px;
}
```

### JavaScript ES6 (`dist/*/index.js`)
```javascript
export const ColorPrimaryLightDefault = "oklch(72.6% 0.21 245)";
export const ColorBaseLightOne00 = "oklch(98% 0.014 261.3)";
export const DesignRadiusField = "0.5rem";
export const DesignBorderWidth = "1px";
```

### TypeScript Declarations (`dist/*/index.d.ts`)
```typescript
export declare const ColorPrimaryLightDefault: "oklch(72.6% 0.21 245)";
export declare const ColorBaseLightOne00: "oklch(98% 0.014 261.3)";
export declare const DesignRadiusField: "0.5rem";
export declare const DesignBorderWidth: "1px";
```

## 🎯 Best Practices

### Naming Convention

```css
/* Structure: [category]-[type]-[variant]-[state] */
--color-primary-light-default
--color-success-dark-content
--design-radius-field
--design-size-selector
```

### Accessibility

```css
/* Use appropriate contrast tokens */
.text-on-primary {
  background-color: var(--color-primary-light-default);
  color: var(--color-primary-light-content); /* Ensures WCAG AA contrast */
}

/* Respect user preferences */
@media (prefers-color-scheme: dark) {
  .text-on-primary {
    background-color: var(--color-primary-dark-default);
    color: var(--color-primary-dark-content);
  }
}
```

### Performance

```typescript
// Tree-shaking: import only what you need
import { ColorPrimaryLightDefault, DesignRadiusField } from '@codigo-obsidiana/design-tokens';

// Instead of:
// import * as tokens from '@codigo-obsidiana/design-tokens'; // ❌
```

### Multi-brand

```typescript
// Dynamic brand configuration
const ThemeProvider = ({ brand, children }) => {
  useEffect(() => {
    // Load brand-specific CSS
    import(`@codigo-obsidiana/design-tokens/brands/${brand}/css`);
  }, [brand]);

  return <div data-brand={brand}>{children}</div>;
};
```

## 🤝 Contributing

1. Fork the main repository
2. Create a branch: `git checkout -b feat(tokens): description`
3. Make changes to token JSON files
4. Run tests: `npx nx test design-tokens`
5. Build tokens: `npx nx build:tokens design-tokens`
6. Commit using [Conventional Commits](https://www.conventionalcommits.org/)
7. Create a Pull Request

### Conventions

- **Token names**: kebab-case for CSS and PascalCase for JS/TS
- **Hierarchical structure**: Maintain organization by categories
- **OKLCH values**: Use `oklch(L% C H)` format for colors
- **Units**: `rem` for sizes, `px` for borders
- **Commits**: Follow conventional commits with scope, e.g.: `feat(tokens): add new shadow tokens`

### Commit Example

```bash
# Add new tokens
git commit -m "feat(tokens): add shadow design tokens"

# Update existing colors  
git commit -m "fix(tokens): improve contrast ratios for accessibility"

# Update configuration
git commit -m "chore(tokens): update style dictionary config"
```

## 📄 License

MIT - see [LICENSE](../../../LICENSE) for details.

## 🔗 Links

- [Style Dictionary Documentation](https://amzn.github.io/style-dictionary/)
- [OKLCH Color Space](https://oklch.com/)
- [Design Tokens W3C Specification](https://design-tokens.github.io/community-group/format/)
- [Código Obsidiana Design System](../../../README.md)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/)

---

**Código Obsidiana Design System** - Modern and scalable design system for web applications.
