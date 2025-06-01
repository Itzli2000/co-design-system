# @codigo-obsidiana/design-tokens

Sistema de design tokens para el **Código Obsidiana Design System**. Este paquete proporciona tokens de diseño consistentes y escalables para colores, espaciado, tipografía y otros elementos visuales de la interfaz de usuario.

## ✨ Características

- **🎨 Paleta de colores moderna**: Basada en el espacio de color OKLCH para mejor percepción visual
- **🏢 Soporte multi-marca**: Tokens optimizados para diferentes marcas (Obsidiana, Ixiptla)
- **🌓 Soporte de temas**: Tokens optimizados para modos claro y oscuro
- **📱 Responsive**: Tokens para diferentes dispositivos y tamaños de pantalla
- **🔧 TypeScript**: Completamente tipado para mejor experiencia de desarrollo
- **🎯 Style Dictionary**: Procesamiento automatizado a múltiples formatos
- **🚀 Tree-shakeable**: Importaciones selectivas para optimizar el bundle
- **📦 Múltiples formatos**: CSS variables, ES6 modules, TypeScript declarations

## 📦 Instalación

```bash
# npm
npm install @codigo-obsidiana/design-tokens

# yarn  
yarn add @codigo-obsidiana/design-tokens

# pnpm
pnpm add @codigo-obsidiana/design-tokens
```

## 🚀 Uso

### Marca Principal (Obsidiana)

#### CSS Variables

```css
/* Importar todas las variables CSS */
@import '@codigo-obsidiana/design-tokens/css';

/* Usar tokens en tus estilos */
.button {
  background-color: var(--color-primary-light-default);
  color: var(--color-primary-light-content);
  border-radius: var(--design-radius-field);
  border: var(--design-border-width) solid transparent;
  padding: var(--design-size-field);
}

/* Tema oscuro usando media queries */
@media (prefers-color-scheme: dark) {
  .button {
    background-color: var(--color-primary-dark-default);
    color: var(--color-primary-dark-content);
  }
}
```

#### JavaScript/TypeScript

```typescript
// Importar tokens específicos de Obsidiana
import { 
  ColorPrimaryLightDefault,
  ColorPrimaryLightContent,
  DesignRadiusField,
  DesignBorderWidth,
  DesignSizeField
} from '@codigo-obsidiana/design-tokens';

// Usar con styled-components
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${ColorPrimaryLightDefault};
  color: ${ColorPrimaryLightContent};
  border-radius: ${DesignRadiusField};
  border: ${DesignBorderWidth} solid transparent;
  padding: ${DesignSizeField};
`;

// Usar en estilos CSS-in-JS
const buttonStyles = {
  backgroundColor: ColorPrimaryLightDefault,
  color: ColorPrimaryLightContent,
  borderRadius: DesignRadiusField,
  border: `${DesignBorderWidth} solid transparent`,
  padding: DesignSizeField,
};
```

### Soporte Multi-Marca

#### Marca Específica (Ixiptla)

```typescript
// Importar tokens de marca específica
import { 
  ColorPrimaryLightDefault as IxiptlaColorPrimary,
  ColorSecondaryLightDefault as IxiptlaColorSecondary
} from '@codigo-obsidiana/design-tokens/brands/ixiptla';

// CSS para marca específica
@import '@codigo-obsidiana/design-tokens/brands/ixiptla/css';
```

#### Comparación de Marcas

```typescript
// Cambio dinámico entre marcas
const getBrandTokens = (brand: 'obsidiana' | 'ixiptla') => {
  switch (brand) {
    case 'obsidiana':
      return import('@codigo-obsidiana/design-tokens/obsidiana');
    case 'ixiptla':
      return import('@codigo-obsidiana/design-tokens/brands/ixiptla');
    default:
      return import('@codigo-obsidiana/design-tokens'); // Por defecto Obsidiana
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

## 🎨 Tokens Disponibles

### Colores

#### Colores Base
- `color-base-light-*` / `color-base-dark-*`: Fondos base y superficies
  - `100`: Nivel más claro/oscuro
  - `200`: Nivel intermedio
  - `300`: Nivel más intenso
  - `content`: Color de texto sobre fondos base

#### Colores Semánticos
- `color-primary-*`: Color primario de marca
- `color-secondary-*`: Color secundario de marca  
- `color-accent-*`: Color de acento para resaltar elementos
- `color-neutral-*`: Color neutral para elementos secundarios

#### Colores de Estado
- `color-info-*`: Información general
- `color-success-*`: Operaciones exitosas
- `color-warning-*`: Advertencias
- `color-error-*`: Errores y estados de falla

**Cada color incluye variantes para:**
- `*-light-default` / `*-dark-default`: Color principal
- `*-light-content` / `*-dark-content`: Color de texto/contenido

### Diseño

#### Border Radius
```css
--design-radius-selector: 1rem;    /* Para elementos seleccionables */
--design-radius-field: 0.5rem;     /* Para campos de formulario */
--design-radius-box: 1rem;         /* Para contenedores y cajas */
```

#### Tamaños
```css
--design-size-selector: 0.25rem;   /* Tamaño para elementos seleccionables */
--design-size-field: 0.25rem;      /* Tamaño para campos */
```

#### Bordes
```css
--design-border-width: 1px;        /* Ancho de borde estándar */
```

#### Efectos
```css
--design-effect-depth: 1;          /* Profundidad de sombra */
--design-effect-noise: 0;          /* Ruido de efecto */
```

### Tipografía

```css
--font-family-primary: /* Familia tipográfica principal */
--font-family-secondary: /* Familia tipográfica secundaria */
```

## 🎨 Paleta de Colores OKLCH

Este sistema de diseño utiliza el espacio de color OKLCH que ofrece:

- **Mejor uniformidad perceptual**: Los colores aparecen más consistentes al ojo humano
- **Gamut más amplio**: Acceso a colores más vibrantes y precisos
- **Mejor interpolación**: Transiciones de color más suaves
- **Soporte futuro**: Listo para pantallas con gamuts de color más amplios

### Valores OKLCH de ejemplo:

```css
/* Formato: oklch(lightness chroma hue) */
/* Obsidiana */
--color-primary-light-default: oklch(72.6% 0.21 245);
--color-success-light-default: oklch(68% 0.18 150);
--color-warning-light-default: oklch(82% 0.16 85);
--color-error-light-default: oklch(70.3% 0.16 35);

/* Base colors */
--color-base-light-100: oklch(98% 0.014 261.3);
--color-base-light-content: oklch(20% 0.006 262);
```

### Beneficios del OKLCH

1. **Consistencia visual**: Valores de luminosidad que se perciben uniformes
2. **Accesibilidad**: Mejor control del contraste para cumplir WCAG
3. **Compatibilidad**: Fallback automático a colores sRGB en navegadores antiguos
4. **Futuro**: Preparado para Display P3 y otros espacios de color amplios

## 🛠️ Desarrollo

### Construir tokens

```bash
# Desde la raíz del monorepo
npx nx build:tokens design-tokens

# O desde el directorio del paquete
npm run build:tokens
```

### Estructura de archivos

```
packages/libs/design-tokens/
├── src/
│   └── tokens/
│       ├── base/                    # Tokens base compartidos
│       │   ├── design.tokens.json   # Tokens de diseño
│       │   ├── font.tokens.json     # Tokens tipográficos
│       │   └── *.spec.ts           # Tests de tokens
│       └── brands/                  # Tokens específicos por marca
│           ├── obsidiana/
│           │   ├── color.tokens.json
│           │   └── *.spec.ts
│           └── ixiptla/
│               ├── color.tokens.json
│               └── *.spec.ts
├── scripts/
│   └── build.js                    # Script de construcción
├── config.json                     # Configuración Style Dictionary
├── dist/
│   ├── obsidiana/                  # Salida marca Obsidiana
│   │   ├── css/_variables.css      # Variables CSS
│   │   ├── index.js               # Exports ES6
│   │   └── index.d.ts             # Definiciones TypeScript
│   └── ixiptla/                    # Salida marca Ixiptla
│       ├── css/_variables.css
│       ├── index.js
│       └── index.d.ts
└── README.md
```

### Agregar nuevos tokens

1. **Editar archivos JSON**: Modifica archivos en `src/tokens/`
2. **Mantener estructura**: Mantén la jerarquía existente
3. **Ejecutar build**: `npx nx build:tokens design-tokens`
4. **Verificar salida**: Revisa archivos generados en `dist/`

#### Ejemplo de nuevo token:

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

#### Ejemplo de color de marca:

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
# Ejecutar tests
npx nx test design-tokens

# Modo watch
npx nx test design-tokens --watch

# Coverage
npx nx test design-tokens --coverage
```

## 📦 Formatos de Salida

Este paquete genera múltiples formatos para máxima compatibilidad:

### Variables CSS (`dist/*/css/_variables.css`)
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

### Declaraciones TypeScript (`dist/*/index.d.ts`)
```typescript
export declare const ColorPrimaryLightDefault: "oklch(72.6% 0.21 245)";
export declare const ColorBaseLightOne00: "oklch(98% 0.014 261.3)";
export declare const DesignRadiusField: "0.5rem";
export declare const DesignBorderWidth: "1px";
```

## 🎯 Mejores Prácticas

### Naming Convention

```css
/* Estructura: [category]-[type]-[variant]-[state] */
--color-primary-light-default
--color-success-dark-content
--design-radius-field
--design-size-selector
```

### Accesibilidad

```css
/* Usar tokens de contraste apropiados */
.text-on-primary {
  background-color: var(--color-primary-light-default);
  color: var(--color-primary-light-content); /* Asegura contraste WCAG AA */
}

/* Respetar preferencias del usuario */
@media (prefers-color-scheme: dark) {
  .text-on-primary {
    background-color: var(--color-primary-dark-default);
    color: var(--color-primary-dark-content);
  }
}
```

### Performance

```typescript
// Tree-shaking: importa solo lo que necesitas
import { ColorPrimaryLightDefault, DesignRadiusField } from '@codigo-obsidiana/design-tokens';

// En lugar de:
// import * as tokens from '@codigo-obsidiana/design-tokens'; // ❌
```

### Multi-marca

```typescript
// Configuración dinámica de marca
const ThemeProvider = ({ brand, children }) => {
  useEffect(() => {
    // Cargar CSS de marca específica
    import(`@codigo-obsidiana/design-tokens/brands/${brand}/css`);
  }, [brand]);

  return <div data-brand={brand}>{children}</div>;
};
```

## 🤝 Contribución

1. Fork el repositorio principal
2. Crear una rama: `git checkout -b feat(tokens): descripción`
3. Hacer cambios en archivos JSON de tokens
4. Ejecutar tests: `npx nx test design-tokens`
5. Construir tokens: `npx nx build:tokens design-tokens`
6. Commit usando [Conventional Commits](https://www.conventionalcommits.org/)
7. Crear un Pull Request

### Convenciones

- **Nombres de tokens**: kebab-case para CSS y PascalCase para JS/TS
- **Estructura jerárquica**: Mantener organización por categorías
- **Valores OKLCH**: Usar formato `oklch(L% C H)` para colores
- **Unidades**: `rem` para tamaños, `px` para bordes
- **Commits**: Seguir conventional commits con scope, ej: `feat(tokens): add new shadow tokens`

### Ejemplo de Commit

```bash
# Agregar nuevos tokens
git commit -m "feat(tokens): add shadow design tokens"

# Actualizar colores existentes  
git commit -m "fix(tokens): improve contrast ratios for accessibility"

# Actualizar configuración
git commit -m "chore(tokens): update style dictionary config"
```

## 📄 Licencia

MIT - ver [LICENSE](../../../LICENSE) para detalles.

## 🔗 Enlaces

- [Style Dictionary Documentation](https://amzn.github.io/style-dictionary/)
- [OKLCH Color Space](https://oklch.com/)
- [Design Tokens W3C Specification](https://design-tokens.github.io/community-group/format/)
- [Código Obsidiana Design System](../../../README.md)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/)

---

**Código Obsidiana Design System** - Sistema de diseño moderno y escalable para aplicaciones web.
