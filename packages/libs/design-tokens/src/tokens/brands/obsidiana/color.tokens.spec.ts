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

describe('Color Tokens', () => {
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
}); 