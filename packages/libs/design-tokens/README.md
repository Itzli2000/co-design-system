# @codigo-obsidiana/design-tokens

Design token system for the **Código Obsidiana Design System**. This package provides consistent and scalable design tokens for colors, spacing, typography, and other visual elements of the user interface.

## 🎯 Features

- **🎨 Modern color palette**: Based on OKLCH color space for better visual perception
- **🌓 Theme support**: Tokens optimized for light and dark modes
- **📱 Responsive**: Tokens for different devices and screen sizes
- **🔧 TypeScript**: Fully typed for better development experience
- **🎯 Style Dictionary**: Automated processing to multiple formats
- **🚀 Tree-shakeable**: Selective imports to optimize bundle size

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

### CSS Variables

```css
/* Import all CSS variables */
@import '@codigo-obsidiana/design-tokens/dist/css/_variables.css';

/* Use tokens in your styles */
.button {
  background-color: var(--color-primary-light-default);
  color: var(--color-primary-light-content);
  border-radius: var(--design-radius-field);
  border: var(--design-border-width) solid transparent;
}

/* Dark theme using media queries */
@media (prefers-color-scheme: dark) {
  .button {
    background-color: var(--color-primary-dark-default);
    color: var(--color-primary-dark-content);
  }
}
```

### JavaScript/TypeScript

```typescript
// Import specific tokens
import { 
  ColorPrimaryLightDefault,
  ColorPrimaryLightContent,
  DesignRadiusField,
  DesignBorderWidth 
} from '@codigo-obsidiana/design-tokens';

// Use with styled-components
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${ColorPrimaryLightDefault};
  color: ${ColorPrimaryLightContent};
  border-radius: ${DesignRadiusField};
  border: ${DesignBorderWidth} solid transparent;
`;

// Use in CSS-in-JS styles
const buttonStyles = {
  backgroundColor: ColorPrimaryLightDefault,
  color: ColorPrimaryLightContent,
  borderRadius: DesignRadiusField,
  border: `${DesignBorderWidth} solid transparent`,
};
```

### React/CSS Modules

```tsx
// styles.module.css
.button {
  background-color: var(--color-primary-light-default);
  color: var(--color-primary-light-content);
  border-radius: var(--design-radius-field);
}

// Button.tsx
import styles from './styles.module.css';
import '@codigo-obsidiana/design-tokens/dist/css/_variables.css';

export const Button = ({ children }) => (
  <button className={styles.button}>
    {children}
  </button>
);
```

## 🎨 Available Tokens

### Colors

#### Base Colors
- `color-base-light-*` / `color-base-dark-*`: Base backgrounds and surfaces
  - `100`, `200`, `300`: Different intensity levels
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
- `design-radius-selector`: For selectable elements (1rem)
- `design-radius-field`: For form fields (0.5rem)
- `design-radius-box`: For containers and boxes (1rem)

#### Sizes
- `design-size-selector`: Size for selectable elements (0.25rem)
- `design-size-field`: Size for fields (0.25rem)

#### Borders
- `design-border-width`: Standard border width (1px)

#### Effects
- `design-effect-depth`: Shadow depth (1)
- `design-effect-noise`: Effect noise (0)

## 🎨 OKLCH Color Palette

This design system uses the OKLCH color space which offers:

- **Better perceptual uniformity**: Colors appear more consistent to the human eye
- **Wider gamut**: Access to more vibrant and precise colors
- **Better interpolation**: Smoother color transitions
- **Future support**: Ready for displays with wider color gamuts

### Example OKLCH values:
```css
/* Format: oklch(lightness chroma hue) */
--color-primary-light-default: oklch(72.6% 0.21 245);
--color-success-light-default: oklch(68% 0.18 150);
--color-warning-light-default: oklch(82% 0.16 85);
```

## 🛠️ Development

### Build tokens

```bash
# From monorepo root
npx nx build design-tokens

# Or from package directory
npm run build:tokens
```

### File structure

```
packages/libs/design-tokens/
├── src/tokens/
│   ├── color.tokens.json      # Color definitions
│   ├── design.tokens.json     # Design tokens
│   └── *.tokens.spec.ts       # Token tests
├── config.json                # Style Dictionary config
├── dist/
│   ├── css/_variables.css     # CSS variables
│   ├── index.js              # ES6 exports
│   └── index.d.ts            # TypeScript definitions
└── README.md
```

### Adding new tokens

1. **Edit JSON files**: Modify files in `src/tokens/`
2. **Follow structure**: Maintain existing hierarchy
3. **Run build**: `npx nx build design-tokens`
4. **Verify output**: Check generated files in `dist/`

#### Example new token:

```json
// src/tokens/design.tokens.json
{
  "design": {
    "shadow": {
      "small": {
        "value": "0 1px 2px rgba(0, 0, 0, 0.1)",
        "type": "boxShadow"
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
```

## 📦 Outputs

This package generates multiple formats for maximum compatibility:

### CSS Variables (`dist/css/_variables.css`)
```css
:root {
  --color-primary-light-default: oklch(72.6% 0.21 245);
  --design-radius-field: 0.5rem;
}
```

### JavaScript ES6 (`dist/index.js`)
```javascript
export const ColorPrimaryLightDefault = "oklch(72.6% 0.21 245)";
export const DesignRadiusField = "0.5rem";
```

### TypeScript Declarations (`dist/index.d.ts`)
```typescript
export declare const ColorPrimaryLightDefault: "oklch(72.6% 0.21 245)";
export declare const DesignRadiusField: "0.5rem";
```

## 🤝 Contributing

1. Fork the main repository
2. Create a branch: `git checkout -b feat(tokens): description`
3. Make changes to JSON token files
4. Run tests: `npx nx test design-tokens`
5. Build tokens: `npx nx build design-tokens`
6. Commit using [Conventional Commits](https://www.conventionalcommits.org/)
7. Create a Pull Request

### Conventions

- **Token names**: Use kebab-case for CSS and PascalCase for JS/TS
- **Hierarchical structure**: Maintain organization by categories
- **OKLCH values**: Use `oklch(L% C H)` format for colors
- **Units**: Use `rem` for sizes, `px` for borders

## 📄 License

MIT - see [LICENSE](../../../LICENSE) for details.

## 🔗 Links

- [Style Dictionary Documentation](https://amzn.github.io/style-dictionary/)
- [OKLCH Color Space](https://oklch.com/)
- [Design Tokens W3C Specification](https://design-tokens.github.io/community-group/format/)
- [Código Obsidiana Design System](../../../README.md)
