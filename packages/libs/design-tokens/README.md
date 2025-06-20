# @codigo-obsidiana/design-tokens

A complete design tokens package for the Código Obsidiana Toolkit, built with [Style Dictionary](https://amzn.github.io/style-dictionary/) and optimized for modern web applications.

## ✨ Features

- **🎨 Modern colors**: OKLCH-based palette for better visual perception
- **🌓 Native dark mode**: Complete support for light and dark themes
- **📐 Design tokens**: Radius, spacing, effects and more
- **🔧 Multi-format**: CSS, JavaScript, TypeScript and JSON
- **🏢 Multi-brand**: Support for multiple brands (Obsidiana, Ixiptla)
- **⚡ Optimized**: Automatic generation and tree-shaking

## 📦 Installation

```bash
npm install @codigo-obsidiana/design-tokens
```

```bash
yarn add @codigo-obsidiana/design-tokens
```

```bash
pnpm add @codigo-obsidiana/design-tokens
```

## 🚀 Quick usage

### CSS Variables

Import CSS variables globally:

```css
@import '@codigo-obsidiana/design-tokens/css';

.my-button {
  background-color: var(--color-primary-light-default);
  color: var(--color-primary-light-content);
  border-radius: var(--design-radius-field);
  padding: var(--design-space-sm) var(--design-space-md);
  border: var(--design-border-width-thin) solid var(--color-primary-light-border);
}

.my-button:hover {
  background-color: var(--color-primary-light-hover);
}

.my-button:disabled {
  background-color: var(--color-primary-light-disabled);
  color: var(--color-primary-light-disabled-content);
}
```

### JavaScript/TypeScript

```typescript
import {
  ColorPrimaryLightDefault,
  ColorPrimaryLightContent,
  DesignRadiusField,
  DesignSpaceSm,
  DesignSpaceMd
} from '@codigo-obsidiana/design-tokens';

const buttonStyles = {
  backgroundColor: ColorPrimaryLightDefault,
  color: ColorPrimaryLightContent,
  borderRadius: DesignRadiusField,
  padding: `${DesignSpaceSm} ${DesignSpaceMd}`,
};
```

### Multi-brand usage

#### Ixiptla Brand

```typescript
import {
  ColorPrimaryLightDefault,
  ColorSecondaryLightDefault
} from '@codigo-obsidiana/design-tokens/brands/ixiptla';
```

```css
@import '@codigo-obsidiana/design-tokens/brands/ixiptla/css';
```

#### Dynamic brand loading

```typescript
const loadBrandTokens = async (brand: 'obsidiana' | 'ixiptla') => {
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

## 🏗️ Token structure

### Colors

Color tokens follow a semantic structure and are optimized for accessibility:

#### Base colors
- `color.base.light.*` - Backgrounds and surfaces in light mode
- `color.base.dark.*` - Backgrounds and surfaces in dark mode

#### Semantic colors
- `color.primary.*` - Primary brand color
- `color.secondary.*` - Secondary color
- `color.accent.*` - Accent color
- `color.neutral.*` - Grays and neutrals

#### Status colors
- `color.info.*` - Information
- `color.success.*` - Success
- `color.warning.*` - Warning
- `color.error.*` - Error

### Design tokens

- `design.radius.*` - Border radius (selector, field, box)
- `design.space.*` - Spacing and padding
- `design.border.width.*` - Border widths
- `design.effects.*` - Shadows and effects

## 🎨 Usage examples

### React Component

```tsx
import React from 'react';
import '@codigo-obsidiana/design-tokens/css';

const Button: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <button
      style={{
        backgroundColor: 'var(--color-primary-light-default)',
        color: 'var(--color-primary-light-content)',
        border: 'var(--design-border-width-thin) solid var(--color-primary-light-border)',
        borderRadius: 'var(--design-radius-field)',
        padding: 'var(--design-space-sm) var(--design-space-md)',
        fontSize: 'var(--typography-body-size)',
        fontWeight: 'var(--typography-body-weight)',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-primary-light-hover)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-primary-light-default)';
      }}
    >
      {children}
    </button>
  );
};
```

### CSS-in-JS (Styled Components)

```typescript
import styled from 'styled-components';
import { ColorPrimaryLightDefault, DesignRadiusField } from '@codigo-obsidiana/design-tokens';

const StyledButton = styled.button`
  background-color: ${ColorPrimaryLightDefault};
  border-radius: ${DesignRadiusField};
  /* ... more styles */
`;
```

### Tailwind CSS Integration

```typescript
// tailwind.config.js
import { ColorPrimaryLightDefault, DesignRadiusField } from '@codigo-obsidiana/design-tokens';

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: ColorPrimaryLightDefault,
        // ... more colors
      },
      borderRadius: {
        field: DesignRadiusField,
        // ... more radius
      }
    }
  }
};
```

### Sass/SCSS

```scss
@import '@codigo-obsidiana/design-tokens/css';

.my-card {
  background: var(--color-base-light-default);
  border-radius: var(--design-radius-box);
  box-shadow: var(--design-effects-depth-sm);
  
  &--primary {
    border-left: 4px solid var(--color-primary-light-default);
  }
}
```

## 🔧 Advanced configuration

### Tree Shaking

To optimize bundle size, import only the tokens you need:

```typescript
// ❌ Imports all tokens
import * as tokens from '@codigo-obsidiana/design-tokens';

// ✅ Import only needed tokens
import { ColorPrimaryLightDefault, DesignRadiusField } from '@codigo-obsidiana/design-tokens';
```

### Dynamic CSS loading

```typescript
// Dynamic loading based on theme or brand
const loadThemeCSS = async (brand: string) => {
  await import(`@codigo-obsidiana/design-tokens/brands/${brand}/css`);
};
```

## 📚 Available tokens

<details>
<summary>🎨 Color Tokens</summary>

### Base Colors
- `ColorBaseLightDefault` - `#ffffff`
- `ColorBaseLightContent` - `#1a1a1a`
- `ColorBaseDarkDefault` - `#1a1a1a`
- `ColorBaseDarkContent` - `#ffffff`

### Primary Colors
- `ColorPrimaryLightDefault` - Primary color light mode
- `ColorPrimaryLightHover` - Hover state light mode
- `ColorPrimaryLightActive` - Active state light mode
- `ColorPrimaryLightDisabled` - Disabled state light mode
- `ColorPrimaryLightContent` - Text on primary light mode
- `ColorPrimaryLightBorder` - Primary border light mode

### Secondary Colors
- `ColorSecondaryLightDefault`
- `ColorSecondaryLightHover`
- `ColorSecondaryLightActive`
- [... similar structure to primary]

### Status Colors
- `ColorInfoLightDefault`
- `ColorSuccessLightDefault`
- `ColorWarningLightDefault`
- `ColorErrorLightDefault`
[... each with hover, active, disabled, content, border variants]

</details>

<details>
<summary>📐 Design Tokens</summary>

### Border Radius
- `DesignRadiusSelector` - `4px`
- `DesignRadiusField` - `6px`
- `DesignRadiusBox` - `8px`

### Spacing
- `DesignSpaceXs` - `4px`
- `DesignSpaceSm` - `8px`
- `DesignSpaceMd` - `16px`
- `DesignSpaceLg` - `24px`
- `DesignSpaceXl` - `32px`

### Border Width
- `DesignBorderWidthThin` - `1px`
- `DesignBorderWidthMedium` - `2px`
- `DesignBorderWidthThick` - `4px`

### Effects
- `DesignEffectsDepthSm` - Small shadow
- `DesignEffectsDepthMd` - Medium shadow
- `DesignEffectsDepthLg` - Large shadow
- `DesignEffectsNoise` - Noise effect

</details>

## 🔄 Versioning

This package follows [Semantic Versioning](https://semver.org/):

- **MAJOR**: Breaking compatibility changes
- **MINOR**: New compatible features
- **PATCH**: Bug fixes and minor improvements

## 🤝 Contributing

Contributions are welcome. Please:

1. Fork the repository
2. Create a branch: `git checkout -b feat(tokens): new feature`
3. Commit your changes following [Conventional Commits](https://www.conventionalcommits.org/)
4. Push and create a Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🔗 Useful links

- [Código Obsidiana Toolkit](https://github.com/codigo-obsidiana/toolkit)
- [Style Dictionary Documentation](https://amzn.github.io/style-dictionary/)
- [OKLCH Color Space](https://oklch.com/)
- [Design Token Specification](https://design-tokens.github.io/community-group/)
