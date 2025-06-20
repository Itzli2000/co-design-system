# Código Obsidiana Toolkit

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

A modern and scalable toolkit built with [Nx](https://nx.dev) that provides development tools, design tokens, custom hooks, deployment utilities and much more.

## 🎯 Features

- **Design Tokens**: Complete design token system using [Style Dictionary](https://amzn.github.io/style-dictionary/)
- **Dev Tools**: Development and deployment tools
- **Custom Hooks**: Reusable React hooks
- **Nx Utilities**: Specific utilities for Nx projects
- **Production Tools**: Tools for production deployment management
- **Modern Colors**: Color palette based on OKLCH for better visual perception
- **Dark Mode**: Native support for light and dark themes
- **TypeScript**: Fully typed for better development experience
- **Monorepo**: Efficient package management with Nx
- **CI/CD**: Automated setup with Husky and Git hooks
- **Testing**: Complete testing setup with Jest

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

## 🛠️ Development

### Available commands

```bash
# Run tests
npx nx test design-tokens

# Lint code
npx nx lint design-tokens

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
│       └── design-tokens/          # Design tokens
│           ├── src/tokens/         # JSON token definitions
│           ├── config.json         # Style Dictionary config
│           └── dist/               # Compiled tokens
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

### Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat(scope): description`
3. Make your changes following project conventions
4. Ensure all tests pass: `npx nx test design-tokens`
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
