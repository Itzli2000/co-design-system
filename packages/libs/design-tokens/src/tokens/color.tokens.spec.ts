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

const tokens = colorTokens as ColorTokens;

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
    const validateColorValue = (value: string) => {
      // Check if it's a valid hex color
      const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
      expect(value).toMatch(hexColorRegex);
    };

    it('should have valid hex color values', () => {
      const validateColorObject = (obj: any) => {
        if (obj.value && obj.type === 'color') {
          validateColorValue(obj.value);
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
  });
}); 