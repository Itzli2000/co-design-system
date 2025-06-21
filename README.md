# Código Obsidiana Toolkit

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

A modern and scalable toolkit built with [Nx](https://nx.dev) that provides development tools, design tokens, framework-agnostic themes, custom hooks, deployment utilities and much more.

## 🎯 Features

- **Design Tokens**: Complete design token system using [Style Dictionary](https://amzn.github.io/style-dictionary/)
- **Framework Themes**: Framework-agnostic theme generators for DaisyUI, MUI, and Shadcn/UI
- **Dev Tools**: Development and deployment tools
- **Custom Hooks**: Reusable React hooks
- **Nx Utilities**: Specific utilities for Nx projects
- **Production Tools**: Tools for production deployment management
- **Modern Colors**: Color palette based on OKLCH for better visual perception
- **Dark Mode**: Native support for light and dark themes
- **TypeScript**: Fully typed for better development experience
- **Monorepo**: Efficient package management with Nx
- **CI/CD**: Automated setup with Husky and Git hooks
- **Testing**: Complete testing setup with Jest and Vitest

## 📦 Packages

### @codigo-obsidiana/design-tokens

Fundamental design tokens including:

- **Colors**: Complete palette with light/dark mode variants
  - Base colors (light/dark backgrounds)
  - Semantic colors (primary, secondary, accent, neutral)
  - Status colors (info, success, warning, error)
- **Design**: Tokens for visual elements
  - Border radius (selector, field, box)
  - Sizes and spacing  
  - Border widths
  - Effects (depth, noise)

### @codigo-obsidiana/themes

Framework-agnostic theme generators that convert design tokens into framework-specific themes:

- **DaisyUI**: CSS themes with `@plugin "daisyui/theme"` syntax
- **Material-UI**: Theme objects compatible with `createTheme()`
- **Shadcn/UI**: CSS custom properties for component styling
- **Brand Support**: Ixiptla and Obsidiana brand variants
- **Tree-shakable**: Import only what you need
- **Dynamic Loading**: Runtime brand switching capabilities

## 🚀 Installation

### Prerequisites

- Node.js 18.16.9 or higher
- pnpm 10.10.0 or higher

### Workspace Setup

```bash
# Clone the repository
git clone https://github.com/codigo-obsidiana/toolkit.git
cd toolkit

# Install dependencies
pnpm install

# Prepare Git hooks
pnpm prepare
```

## 💻 Usage

### Build all packages

```bash
npx nx build design-tokens
npx nx build themes
```

### Using design tokens

#### CSS Variables

```css
@import '@codigo-obsidiana/design-tokens/dist/css/_variables.css';

.my-component {
  background-color: var(--color-primary-light-default);
  color: var(--color-primary-light-content);
  border-radius: var(--design-radius-box);
}
```

#### JavaScript/TypeScript

```typescript
import { tokens } from '@codigo-obsidiana/design-tokens';

const primaryColor = tokens.color.primary.light.default;
const borderRadius = tokens.design.radius.box;
```

### Using themes

#### DaisyUI

```typescript
import { generateIxiptlaDaisyUITheme } from '@codigo-obsidiana/themes/daisyui/generators/ixiptla';

const theme = await generateIxiptlaDaisyUITheme();
// Apply theme.light and theme.dark to your CSS
```

#### Material-UI

```typescript
import { generateIxiptlaMUITheme } from '@codigo-obsidiana/themes/mui/generators/ixiptla';
import { createTheme } from '@mui/material/styles';

const themeConfig = await generateIxiptlaMUITheme();
const theme = createTheme(themeConfig.light);
```

#### Shadcn/UI

```typescript
import { generateIxiptlaShadcnTheme } from '@codigo-obsidiana/themes/shadcn/generators/ixiptla';

const theme = await generateIxiptlaShadcnTheme();
// Apply theme CSS custom properties to your stylesheet
```

## 🛠️ Development

### Available commands

```bash
# Build packages
npx nx build design-tokens
npx nx build themes

# Run tests
npx nx test design-tokens
npx nx test themes

# Lint code
npx nx lint design-tokens
npx nx lint themes

# Clean dist directories
npx nx clean design-tokens
npx nx clean themes

# Publish packages
npx nx publish design-tokens
npx nx publish themes

# View dependency graph
npx nx graph

# Run commands on affected projects
npx nx affected --targets=lint,test,build

# Check TypeScript sync
npx nx sync:check
```

### Project structure

```
toolkit/
├── packages/
│   └── libs/
│       ├── design-tokens/          # Design tokens
│       │   ├── src/tokens/         # JSON token definitions
│       │   ├── config.json         # Style Dictionary config
│       │   └── dist/               # Compiled tokens
│       └── themes/                 # Framework themes
│           ├── src/
│           │   ├── common/         # Shared utilities
│           │   ├── daisyui/        # DaisyUI generators
│           │   ├── mui/            # MUI generators
│           │   └── shadcn/         # Shadcn generators
│           └── dist/               # Compiled themes
├── .husky/                         # Git hooks
├── nx.json                         # Nx configuration
└── pnpm-workspace.yaml            # Workspace configuration
```

### Adding new packages

The toolkit is designed to grow. Upcoming packages will include:
- **@codigo-obsidiana/dev-tools**: Development and deployment tools
- **@codigo-obsidiana/custom-hooks**: Reusable React hooks
- **@codigo-obsidiana/nx-utils**: Nx-specific utilities
- **@codigo-obsidiana/prod-tools**: Production deployment tools

### Adding new tokens

1. Edit JSON files in `packages/libs/design-tokens/src/tokens/`
2. Run build: `npx nx build design-tokens`
3. Tokens will be automatically generated in CSS, JS, and TypeScript

### Adding new themes

1. Create generators in `packages/libs/themes/src/{framework}/generators/`
2. Import design tokens using `loadDesignTokens(brand)`
3. Run build: `npx nx build themes`
4. Test with: `npx nx test themes`

### Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat(scope): description`
3. Make your changes following project conventions
4. Ensure all tests pass: `npx nx test design-tokens themes`
5. Commit using [Conventional Commits](https://www.conventionalcommits.org/)
6. Push and create a Pull Request

### Commit conventions

This project uses [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Examples:**
- `feat(tokens): add new color palette`
- `fix(tokens): correct primary color contrast ratio`
- `feat(themes): add Shadcn/UI theme generator`
- `docs(readme): update installation instructions`
- `feat(dev-tools): add production deployment utility`
- `feat(hooks): add useLocalStorage custom hook`

## 🔧 Configuration

### Nx

The project uses Nx for:
- Build optimization and caching
- Dependency graph analysis
- Affected project detection
- Task parallelization

### Style Dictionary

Tokens are processed using Style Dictionary to generate:
- CSS custom properties
- JavaScript/TypeScript exports
- Automatic documentation

### Vitest

Theme library testing with:
- Unit tests for generators
- Integration tests for token loading
- TypeScript compilation tests

### Husky

Configured Git hooks:
- **pre-commit**: Run lint, test, and build on affected projects

## 📝 Versioning and releases

To version and publish packages:

```bash
# Version (dry-run)
npx nx release --dry-run

# Publish new version
npx nx release
```

## 🤝 Community

- [GitHub Issues](https://github.com/codigo-obsidiana/toolkit/issues)
- [Discussions](https://github.com/codigo-obsidiana/toolkit/discussions)

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🔗 Useful links

- [Nx Documentation](https://nx.dev)
- [Style Dictionary](https://amzn.github.io/style-dictionary/)
- [OKLCH Color Space](https://oklch.com/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [DaisyUI Theming](https://daisyui.com/docs/themes/)
- [Material-UI Theming](https://mui.com/material-ui/customization/theming/)
- [Shadcn/UI Theming](https://ui.shadcn.com/docs/theming)
