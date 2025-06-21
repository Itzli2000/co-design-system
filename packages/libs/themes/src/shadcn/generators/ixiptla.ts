/**
 * Shadcn/UI Theme Generator for Ixiptla Brand
 */

import { loadDesignTokens } from '../../common/utils.js';

export interface IxiptlaShadcnTheme {
  light: string;
  dark: string;
}

/**
 * Generates Shadcn/UI CSS custom properties for Ixiptla brand
 */
export async function generateIxiptlaShadcnTheme(): Promise<IxiptlaShadcnTheme> {
  const tokens = await loadDesignTokens('ixiptla');
  
  const lightTheme = `
  :root {
    --background: ${tokens.ColorBackgroundLightDefault};
    --foreground: ${tokens.ColorForegroundLightDefault};
    --card: ${tokens.ColorBackgroundLightDefault};
    --card-foreground: ${tokens.ColorForegroundLightDefault};
    --popover: ${tokens.ColorBackgroundLightDefault};
    --popover-foreground: ${tokens.ColorForegroundLightDefault};
    --primary: ${tokens.ColorPrimaryLightDefault};
    --primary-foreground: ${tokens.ColorPrimaryLightContrast};
    --secondary: ${tokens.ColorSecondaryLightDefault};
    --secondary-foreground: ${tokens.ColorSecondaryLightContrast};
    --muted: ${tokens.ColorMutedLightDefault};
    --muted-foreground: ${tokens.ColorMutedLightContrast};
    --accent: ${tokens.ColorAccentLightDefault};
    --accent-foreground: ${tokens.ColorAccentLightContrast};
    --destructive: ${tokens.ColorErrorLightDefault};
    --destructive-foreground: ${tokens.ColorErrorLightContrast};
    --border: ${tokens.ColorBorderLightDefault};
    --input: ${tokens.ColorBorderLightDefault};
    --ring: ${tokens.ColorPrimaryLightDefault};
    --radius: ${tokens.DesignRadiusField};
  }`;

  const darkTheme = `
  .dark {
    --background: ${tokens.ColorBackgroundDarkDefault};
    --foreground: ${tokens.ColorForegroundDarkDefault};
    --card: ${tokens.ColorBackgroundDarkDefault};
    --card-foreground: ${tokens.ColorForegroundDarkDefault};
    --popover: ${tokens.ColorBackgroundDarkDefault};
    --popover-foreground: ${tokens.ColorForegroundDarkDefault};
    --primary: ${tokens.ColorPrimaryDarkDefault};
    --primary-foreground: ${tokens.ColorPrimaryDarkContrast};
    --secondary: ${tokens.ColorSecondaryDarkDefault};
    --secondary-foreground: ${tokens.ColorSecondaryDarkContrast};
    --muted: ${tokens.ColorMutedDarkDefault};
    --muted-foreground: ${tokens.ColorMutedDarkContrast};
    --accent: ${tokens.ColorAccentDarkDefault};
    --accent-foreground: ${tokens.ColorAccentDarkContrast};
    --destructive: ${tokens.ColorErrorDarkDefault};
    --destructive-foreground: ${tokens.ColorErrorDarkContrast};
    --border: ${tokens.ColorBorderDarkDefault};
    --input: ${tokens.ColorBorderDarkDefault};
    --ring: ${tokens.ColorPrimaryDarkDefault};
  }`;

  return {
    light: lightTheme,
    dark: darkTheme
  };
}

 