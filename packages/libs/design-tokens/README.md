# @codigo-obsidiana/design-tokens

Un paquete completo de design tokens para el Código Obsidiana Toolkit, construido con [Style Dictionary](https://amzn.github.io/style-dictionary/) y optimizado para aplicaciones web modernas.

## ✨ Características

- **🎨 Colores modernos**: Paleta basada en OKLCH para mejor percepción visual
- **🌓 Dark mode nativo**: Soporte completo para temas claros y oscuros
- **📐 Tokens de diseño**: Radius, spacing, efectos y más
- **🔧 Multi-formato**: CSS, JavaScript, TypeScript y JSON
- **🏢 Multi-brand**: Soporte para múltiples marcas (Obsidiana, Ixiptla)
- **⚡ Optimizado**: Generación automática y tree-shaking

## 📦 Instalación

```bash
npm install @codigo-obsidiana/design-tokens
```

```bash
yarn add @codigo-obsidiana/design-tokens
```

```bash
pnpm add @codigo-obsidiana/design-tokens
```

## 🚀 Uso rápido

### CSS Variables

Importa las variables CSS globalmente:

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

### Uso con múltiples marcas

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

#### Carga dinámica de marcas

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

## 🏗️ Estructura de tokens

### Colores

Los tokens de color siguen una estructura semántica y están optimizados para accesibilidad:

#### Colores base
- `color.base.light.*` - Fondos y superficies en modo claro
- `color.base.dark.*` - Fondos y superficies en modo oscuro

#### Colores semánticos
- `color.primary.*` - Color principal de la marca
- `color.secondary.*` - Color secundario
- `color.accent.*` - Color de acento
- `color.neutral.*` - Grises y neutros

#### Colores de estado
- `color.info.*` - Información
- `color.success.*` - Éxito
- `color.warning.*` - Advertencia
- `color.error.*` - Error

### Tokens de diseño

- `design.radius.*` - Border radius (selector, field, box)
- `design.space.*` - Espaciado y padding
- `design.border.width.*` - Anchos de borde
- `design.effects.*` - Sombras y efectos

## 🎨 Ejemplos de uso

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
  /* ... más estilos */
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
        // ... más colores
      },
      borderRadius: {
        field: DesignRadiusField,
        // ... más radius
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

## 🔧 Configuración avanzada

### Tree Shaking

Para optimizar el bundle size, importa solo los tokens que necesites:

```typescript
// ❌ Importa todos los tokens
import * as tokens from '@codigo-obsidiana/design-tokens';

// ✅ Importa solo los tokens necesarios
import { ColorPrimaryLightDefault, DesignRadiusField } from '@codigo-obsidiana/design-tokens';
```

### Carga dinámica de CSS

```typescript
// Carga dinámica basada en el tema o marca
const loadThemeCSS = async (brand: string) => {
  await import(`@codigo-obsidiana/design-tokens/brands/${brand}/css`);
};
```

## 📚 Tokens disponibles

<details>
<summary>🎨 Color Tokens</summary>

### Base Colors
- `ColorBaseLightDefault` - `#ffffff`
- `ColorBaseLightContent` - `#1a1a1a`
- `ColorBaseDarkDefault` - `#1a1a1a`
- `ColorBaseDarkContent` - `#ffffff`

### Primary Colors
- `ColorPrimaryLightDefault` - Color principal modo claro
- `ColorPrimaryLightHover` - Hover estado modo claro
- `ColorPrimaryLightActive` - Active estado modo claro
- `ColorPrimaryLightDisabled` - Disabled estado modo claro
- `ColorPrimaryLightContent` - Texto sobre primary modo claro
- `ColorPrimaryLightBorder` - Borde primary modo claro

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
- `DesignEffectsDepthSm` - Sombra pequeña
- `DesignEffectsDepthMd` - Sombra media
- `DesignEffectsDepthLg` - Sombra grande
- `DesignEffectsNoise` - Efecto de ruido

</details>

## 🔄 Versionado

Este paquete sigue [Semantic Versioning](https://semver.org/):

- **MAJOR**: Cambios que rompen compatibilidad
- **MINOR**: Nuevas características compatibles
- **PATCH**: Bug fixes y mejoras menores

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el repositorio
2. Crea una rama: `git checkout -b feat(tokens): nueva característica`
3. Commit tus cambios siguiendo [Conventional Commits](https://www.conventionalcommits.org/)
4. Push y crea un Pull Request

## 📄 Licencia

MIT License - ver [LICENSE](LICENSE) para detalles.

## 🔗 Enlaces útiles

- [Código Obsidiana Toolkit](https://github.com/codigo-obsidiana/toolkit)
- [Style Dictionary Documentation](https://amzn.github.io/style-dictionary/)
- [OKLCH Color Space](https://oklch.com/)
- [Design Token Specification](https://design-tokens.github.io/community-group/)
