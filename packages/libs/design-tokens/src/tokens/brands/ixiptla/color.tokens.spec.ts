/* eslint-disable @typescript-eslint/no-explicit-any */
import colorTokens from './color.tokens.json' assert { type: 'json' };

type ColorToken = {
  value: string;
  type: string;
};

type ColorTheme = {
  [key: string]: ColorToken;
};

type ColorCategory = {
  light: ColorTheme;
  dark: ColorTheme;
};

type ColorTokens = {
  color: {
    [key: string]: ColorCategory;
  };
};

const tokens = colorTokens as unknown as ColorTokens;

describe('Ixiptla Color Tokens', () => {
  describe('Structure', () => {
    it('should have a valid color object structure', () => {
      expect(tokens).toHaveProperty('color');
      expect(typeof tokens.color).toBe('object');
    });

    it('should have all required color categories', () => {
      const requiredCategories = ['base', 'primary', 'secondary', 'accent', 'neutral', 'info', 'success', 'warning', 'error'];
      requiredCategories.forEach(category => {
        expect(tokens.color).toHaveProperty(category);
      });
    });

    it('should have light and dark variants for each category', () => {
      Object.keys(tokens.color).forEach(category => {
        expect(tokens.color[category]).toHaveProperty('light');
        expect(tokens.color[category]).toHaveProperty('dark');
      });
    });
  });

  describe('Color Values', () => {
    const validateOKLCHColor = (value: string) => {
      const oklchRegex = /^oklch\(\d+\.?\d*% \d+\.?\d* \d+\.?\d*\)$/;
      expect(value).toMatch(oklchRegex);

      const matches = value.match(/oklch\((\d+\.?\d*)% (\d+\.?\d*) (\d+\.?\d*)\)/);
      if (!matches) throw new Error('Invalid OKLCH format');

      const [, lightness, chroma, hue] = matches.map(Number);

      expect(lightness).toBeGreaterThanOrEqual(0);
      expect(lightness).toBeLessThanOrEqual(100);
      expect(chroma).toBeGreaterThanOrEqual(0);
      expect(hue).toBeGreaterThanOrEqual(0);
      expect(hue).toBeLessThanOrEqual(360);
    };

    it('should have valid OKLCH color values', () => {
      const validateColorObject = (obj: any) => {
        if (obj.value && obj.type === 'color') {
          validateOKLCHColor(obj.value);
        }
        Object.values(obj).forEach(value => {
          if (typeof value === 'object' && value !== null) {
            validateColorObject(value);
          }
        });
      };

      validateColorObject(tokens.color);
    });
  });

  describe('Token Properties', () => {
    const validateTokenProperties = (token: ColorToken) => {
      expect(token).toHaveProperty('value');
      expect(token).toHaveProperty('type');
      expect(token.type).toBe('color');
    };

    it('should have required properties for each token', () => {
      const validateObject = (obj: any) => {
        if (obj.value && obj.type) {
          validateTokenProperties(obj);
        }
        Object.values(obj).forEach(value => {
          if (typeof value === 'object' && value !== null) {
            validateObject(value);
          }
        });
      };

      validateObject(tokens.color);
    });
  });

  describe('Theme Consistency', () => {
    it('should have matching properties in light and dark themes', () => {
      Object.keys(tokens.color).forEach(category => {
        const lightKeys = Object.keys(tokens.color[category].light);
        const darkKeys = Object.keys(tokens.color[category].dark);
        expect(lightKeys).toEqual(darkKeys);
      });
    });

    it('should have consistent token structure across themes', () => {
      Object.keys(tokens.color).forEach(category => {
        const lightTokens = tokens.color[category].light;
        const darkTokens = tokens.color[category].dark;

        Object.keys(lightTokens).forEach(tokenKey => {
          expect(lightTokens[tokenKey].type).toBe(darkTokens[tokenKey].type);
        });
      });
    });
  });

  describe('Color Token Naming', () => {
    it('should follow consistent naming patterns', () => {
      const validateNaming = (obj: any, path: string[] = []) => {
        Object.entries(obj).forEach(([key, value]) => {
          if (typeof value === 'object' && value !== null) {
            if ('value' in value && 'type' in value) {
              expect(key).toMatch(/^(default|content|\d+)$/);
            }
            validateNaming(value, [...path, key]);
          }
        });
      };

      validateNaming(tokens.color);
    });
  });

  describe('Color Token Completeness', () => {
    it('should have all required color variants', () => {
      const requiredVariants = ['default', 'content'];
      const baseVariants = ['100', '200', '300', 'content'];

      Object.entries(tokens.color).forEach(([category, themes]) => {
        if (category === 'base') {
          expect(Object.keys(themes.light)).toEqual(expect.arrayContaining(baseVariants));
          expect(Object.keys(themes.dark)).toEqual(expect.arrayContaining(baseVariants));
        } else {
          expect(Object.keys(themes.light)).toEqual(expect.arrayContaining(requiredVariants));
          expect(Object.keys(themes.dark)).toEqual(expect.arrayContaining(requiredVariants));
        }
      });
    });
  });

  describe('Ixiptla Brand Specific Validations', () => {
    it('should match the Ixiptla brand color scheme', () => {
      // Validate primary color hue (around 40.24 degrees - warm orange/red)
      expect(tokens.color.primary.light.default.value).toContain('40.24');
      expect(tokens.color.primary.dark.default.value).toContain('40.24');
      
      // Validate base colors use consistent hue (83.24 degrees)
      expect(tokens.color.base.light['100'].value).toContain('83.24');
      expect(tokens.color.base.dark['100'].value).toContain('83.24');
    });

    it('should have proper contrast between light and dark themes', () => {
      // Light theme should have dark content colors
      const lightContentLightness = parseFloat(tokens.color.base.light.content.value.match(/oklch\((\d+\.?\d*)%/)?.[1] || '0');
      expect(lightContentLightness).toBeLessThan(50);

      // Dark theme should have light content colors
      const darkContentLightness = parseFloat(tokens.color.base.dark.content.value.match(/oklch\((\d+\.?\d*)%/)?.[1] || '0');
      expect(darkContentLightness).toBeGreaterThan(50);
    });

    it('should maintain brand consistency across semantic colors', () => {
      // Info color should be blue (220 degrees)
      expect(tokens.color.info.light.default.value).toContain('220');
      expect(tokens.color.info.dark.default.value).toContain('220');
      
      // Success color should be green (140 degrees)
      expect(tokens.color.success.light.default.value).toContain('140');
      expect(tokens.color.success.dark.default.value).toContain('140');
      
      // Warning color should be yellow/orange (80 degrees)
      expect(tokens.color.warning.light.default.value).toContain('80');
      expect(tokens.color.warning.dark.default.value).toContain('80');
      
      // Error color should be red (30 degrees)
      expect(tokens.color.error.light.default.value).toContain('30');
      expect(tokens.color.error.dark.default.value).toContain('30');
    });
  });
}); 