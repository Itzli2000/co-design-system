# Obsidiana Brand Tokens

This directory contains the design tokens specific to the **Obsidiana** brand, organized according to Style Dictionary format.

## Color Palette

### Brand Colors

#### Primary
- **Default**: `oklch(72.6% 0.21 245)` - Main brand color for primary actions and core elements
- **Content**: Adaptive text colors for optimal contrast on primary backgrounds

#### Secondary  
- **Default**: `oklch(78.3% 0.22 246)` - Supporting brand color for secondary actions
- **Content**: Adaptive text colors for optimal contrast on secondary backgrounds

#### Tertiary
- **Default**: `oklch(70.3% 0.16 35)` - Accent color for highlights and special elements
- **Content**: Adaptive text colors for optimal contrast on tertiary backgrounds

### Neutral Colors
- **Light Theme**: `oklch(95% 0.026 261.2)`
- **Dark Theme**: `oklch(33.7% 0.026 261.2)`
- **Content**: Adaptive text colors for optimal readability

### Surface Colors
- **100**: Lightest surface level for cards and elevated content
- **200**: Medium surface level for containers and sections  
- **300**: Darkest surface level for nested content and overlays

### Semantic Colors

#### Success
- **Default**: `oklch(68% 0.18 150)` - Green tone for positive feedback and confirmations

#### Warning
- **Default**: `oklch(82% 0.16 85)` - Amber tone for cautionary messages and alerts

#### Error
- **Default**: `oklch(70.3% 0.16 35)` - Red tone for destructive actions and error messages

#### Info
- **Default**: `oklch(72.6% 0.21 245)` - Blue tone for informational messages and highlights

## Theme Support

All colors are designed to work seamlessly across light and dark themes:
- **Light theme**: High contrast with dark content colors
- **Dark theme**: Inverted contrast with light content colors

## Color Format

All colors use the **OKLCH** color space for:
- Better perceptual uniformity
- Improved accessibility and contrast ratios
- Future-proof color management
- Wide gamut display support

## Usage

These tokens are automatically processed by Style Dictionary to generate:
- CSS custom properties
- JavaScript/TypeScript constants
- Platform-specific color definitions

## Files Structure

```
obsidiana/
├── color.json      # Primary, secondary, tertiary, neutral, and surface colors
├── semantic.json   # Success, warning, error, and info semantic colors
└── README.md      # This documentation file
``` 