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

### Build Scripts

```bash
# Clean dist directory
nx clean themes

# Build the library (includes clean)
nx build themes

# Publish to npm (includes clean + build)
nx publish themes
```

### Testing & Quality

```bash
# Run tests
nx test themes

# Lint code
nx lint themes
```

### Script Dependencies

```
clean → build → publish
```

All scripts automatically handle their dependencies, so running `nx build themes` will clean first, and `nx publish themes` will clean + build + publish.

## 📂 Project Structure

```
packages/libs/themes/
├── src/
│   ├── common/           # Shared utilities and types
│   ├── daisyui/          # DaisyUI theme generators
│   ├── mui/              # Material-UI theme generators
│   └── shadcn/           # Shadcn/UI theme generators
├── dist/                 # Built output
└── package.json          # Package configuration
```

## 🔗 Related Packages

- [`@codigo-obsidiana/design-tokens`](../design-tokens) - Design tokens source

## 📄 License

MIT
