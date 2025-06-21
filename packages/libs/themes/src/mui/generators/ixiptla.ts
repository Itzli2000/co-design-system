/**
 * Material-UI Theme Generator for Ixiptla Brand
 */

import type { ThemeMode } from '../../common/types.js';
import { loadDesignTokens } from '../../common/utils.js';

/**
 * MUI Theme configuration for Ixiptla brand
 */
export interface IxiptlaMUITheme {
  light: Record<string, unknown>; // MUI theme object
  dark: Record<string, unknown>;  // MUI theme object
}

/**
 * Generates Material-UI theme object for Ixiptla brand
 */
export async function generateIxiptlaMUITheme(): Promise<IxiptlaMUITheme> {
  const tokens = await loadDesignTokens('ixiptla');
  
  const baseTheme = {
    typography: {
      fontFamily: tokens.FontFamilyBase.join(','),
      h1: { fontFamily: tokens.FontFamilyHeaders.join(',') },
      h2: { fontFamily: tokens.FontFamilyHeaders.join(',') },
      h3: { fontFamily: tokens.FontFamilyHeaders.join(',') },
      h4: { fontFamily: tokens.FontFamilyHeaders.join(',') },
      h5: { fontFamily: tokens.FontFamilyHeaders.join(',') },
      h6: { fontFamily: tokens.FontFamilyHeaders.join(',') },
    },
    shape: {
      borderRadius: parseInt(tokens.DesignRadiusField) || 8,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: tokens.DesignRadiusBox,
            textTransform: 'none' as const,
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: tokens.DesignRadiusField,
            },
          },
        },
      },
    },
  };

  const lightTheme = {
    ...baseTheme,
    palette: {
      mode: 'light' as const,
      primary: {
        main: tokens.ColorPrimaryLightDefault,
      },
      secondary: {
        main: tokens.ColorSecondaryLightDefault,
      },
      error: {
        main: tokens.ColorErrorLightDefault,
      },
      warning: {
        main: tokens.ColorWarningLightDefault,
      },
      info: {
        main: tokens.ColorInfoLightDefault,
      },
      success: {
        main: tokens.ColorSuccessLightDefault,
      },
    },
  };

  const darkTheme = {
    ...baseTheme,
    palette: {
      mode: 'dark' as const,
      primary: {
        main: tokens.ColorPrimaryDarkDefault,
      },
      secondary: {
        main: tokens.ColorSecondaryDarkDefault,
      },
      error: {
        main: tokens.ColorErrorDarkDefault,
      },
      warning: {
        main: tokens.ColorWarningDarkDefault,
      },
      info: {
        main: tokens.ColorInfoDarkDefault,
      },
      success: {
        main: tokens.ColorSuccessDarkDefault,
      },
    },
  };

  return {
    light: lightTheme,
    dark: darkTheme
  };
}

/**
 * Get specific theme by mode
 */
export async function getIxiptlaMUITheme(mode: ThemeMode = 'light'): Promise<Record<string, unknown>> {
  const themes = await generateIxiptlaMUITheme();
  return themes[mode];
} 