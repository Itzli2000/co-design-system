# @codigo-obsidiana/themes

Framework-agnostic themes for the Código Obsidiana Design System.

## 🎨 Features

- **Framework-agnostic**: Separate imports for DaisyUI, MUI, and Shadcn/UI
- **Brand support**: Ixiptla and Obsidiana brands
- **Tree-shakable**: Only bundle what you use
- **TypeScript**: Full type safety
- **Dynamic tokens**: Based on `@codigo-obsidiana/design-tokens`

## 📦 Installation

```bash
npm install @codigo-obsidiana/themes
```

## 🚀 Usage

### DaisyUI

```typescript
import { generateIxiptlaDaisyUITheme } from '@codigo-obsidiana/themes/daisyui/generators/ixiptla';

const theme = await generateIxiptlaDaisyUITheme();

// Use in your CSS or tailwind.config.js
const css = `
${theme.light}
${theme.dark}
`;
```

### Material-UI

```typescript
import { generateIxiptlaMUITheme } from '@codigo-obsidiana/themes/mui/generators/ixiptla';
import { createTheme } from '@mui/material/styles';

const themeConfig = await generateIxiptlaMUITheme();
const theme = createTheme(themeConfig.light);
```

### Shadcn/UI

```typescript
import { generateIxiptlaShadcnTheme } from '@codigo-obsidiana/themes/shadcn/generators/ixiptla';

const theme = await generateIxiptlaShadcnTheme();

// Inject CSS custom properties
const style = document.createElement('style');
style.textContent = `${theme.light}\n${theme.dark}`;
document.head.appendChild(style);
```

## 🎯 Generic API

```typescript
import { generateDaisyUITheme } from '@codigo-obsidiana/themes/common';

// Dynamic brand selection
const theme = await generateDaisyUITheme('ixiptla');
// or
const theme = await generateDaisyUITheme('obsidiana');
```

## 🏗️ Available Generators

| Framework | Ixiptla | Obsidiana |
|-----------|---------|-----------|
| DaisyUI   | ✅      | ✅        |
| MUI       | ✅      | ✅        |
| Shadcn/UI | ✅      | ✅        |

## 🔧 Development

```bash
# Build the library
nx build themes

# Run tests
nx test themes

# Lint
nx lint themes
```

## 📄 License

MIT
