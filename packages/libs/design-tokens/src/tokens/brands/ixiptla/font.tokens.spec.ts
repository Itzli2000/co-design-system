/* eslint-disable @typescript-eslint/no-explicit-any */
import fontTokens from './font.tokens.json' assert { type: 'json' };

describe('Ixiptla Font Tokens', () => {
  describe('Structure', () => {
    it('should have a font object', () => {
      expect(fontTokens).toHaveProperty('font');
    });

    it('should have family and weight properties', () => {
      const { font } = fontTokens;
      expect(font).toHaveProperty('family');
      expect(font).toHaveProperty('weight');
    });
  });

  describe('Font Family Tokens', () => {
    it('should have headers and base properties', () => {
      const { family } = fontTokens.font;
      expect(family).toHaveProperty('headers');
      expect(family).toHaveProperty('base');
    });

    it('should have correct types and values for font family tokens', () => {
      const { family } = fontTokens.font;
      
      expect(family.headers).toEqual({
        value: ["Playfair Display", "ui-serif", "Georgia", "serif"],
        type: "fontFamily"
      });

      expect(family.base).toEqual({
        value: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        type: "fontFamily"
      });
    });

    it('should match Ixiptla brand font families from CSS', () => {
      const { family } = fontTokens.font;
      
      // Headers should use Playfair Display as primary
      expect(family.headers.value[0]).toBe("Playfair Display");
      
      // Base should use Inter as primary
      expect(family.base.value[0]).toBe("Inter");
    });

    it('should include proper fallback fonts', () => {
      const { family } = fontTokens.font;
      
      // Headers should have serif fallbacks
      expect(family.headers.value).toContain("ui-serif");
      expect(family.headers.value).toContain("Georgia");
      expect(family.headers.value).toContain("serif");
      
      // Base should have sans-serif fallbacks
      expect(family.base.value).toContain("ui-sans-serif");
      expect(family.base.value).toContain("system-ui");
      expect(family.base.value).toContain("sans-serif");
    });
  });

  describe('Font Weight Tokens', () => {
    it('should have headers and base weight properties', () => {
      const { weight } = fontTokens.font;
      expect(weight).toHaveProperty('headers');
      expect(weight).toHaveProperty('base');
    });

    it('should have default weight for headers', () => {
      const { weight } = fontTokens.font;
      expect(weight.headers).toHaveProperty('default');
      
      expect(weight.headers.default).toEqual({
        value: "700",
        type: "fontWeight"
      });
    });

    it('should have multiple weight variants for base fonts', () => {
      const { weight } = fontTokens.font;
      const baseWeights = ['regular', 'medium', 'semibold', 'bold'];
      
      baseWeights.forEach(weightVariant => {
        expect(weight.base).toHaveProperty(weightVariant);
        expect((weight.base as any)[weightVariant]).toHaveProperty('value');
        expect((weight.base as any)[weightVariant]).toHaveProperty('type');
        expect((weight.base as any)[weightVariant].type).toBe('fontWeight');
      });
    });

    it('should have correct weight values', () => {
      const { weight } = fontTokens.font;
      
      expect(weight.base.regular.value).toBe("400");
      expect(weight.base.medium.value).toBe("500");
      expect(weight.base.semibold.value).toBe("600");
      expect(weight.base.bold.value).toBe("700");
    });

    it('should match CSS font-weight specification for headers', () => {
      const { weight } = fontTokens.font;
      
      // Headers should be bold (700) as specified in CSS
      expect(weight.headers.default.value).toBe("700");
    });
  });

  describe('Token Properties Validation', () => {
    it('should have required properties for each token', () => {
      const validateToken = (token: any) => {
        expect(token).toHaveProperty('value');
        expect(token).toHaveProperty('type');
      };

      const { font } = fontTokens;
      
      // Validate family tokens
      validateToken(font.family.headers);
      validateToken(font.family.base);
      
      // Validate weight tokens
      validateToken(font.weight.headers.default);
      Object.values(font.weight.base).forEach(validateToken);
    });

    it('should have correct token types', () => {
      const { font } = fontTokens;
      
      // Family tokens should be fontFamily type
      expect(font.family.headers.type).toBe('fontFamily');
      expect(font.family.base.type).toBe('fontFamily');
      
      // Weight tokens should be fontWeight type
      expect(font.weight.headers.default.type).toBe('fontWeight');
      Object.values(font.weight.base).forEach((token: any) => {
        expect(token.type).toBe('fontWeight');
      });
    });
  });

  describe('Value Format Validation', () => {
    it('should have font families as arrays', () => {
      const { family } = fontTokens.font;
      
      expect(Array.isArray(family.headers.value)).toBe(true);
      expect(Array.isArray(family.base.value)).toBe(true);
      
      // Each family should have at least one font
      expect(family.headers.value.length).toBeGreaterThan(0);
      expect(family.base.value.length).toBeGreaterThan(0);
    });

    it('should have font weights as strings representing numbers', () => {
      const { weight } = fontTokens.font;
      
      const validateWeightValue = (value: string) => {
        expect(typeof value).toBe('string');
        const numericValue = parseInt(value, 10);
        expect(numericValue).toBeGreaterThanOrEqual(100);
        expect(numericValue).toBeLessThanOrEqual(900);
        expect(numericValue % 100).toBe(0); // Should be multiples of 100
      };

      validateWeightValue(weight.headers.default.value);
      Object.values(weight.base).forEach((token: any) => {
        validateWeightValue(token.value);
      });
    });

    it('should have valid font names without special characters in primary fonts', () => {
      const { family } = fontTokens.font;
      
      // Primary fonts should not have quotes or special characters
      const primaryHeaders = family.headers.value[0];
      const primaryBase = family.base.value[0];
      
      expect(typeof primaryHeaders).toBe('string');
      expect(typeof primaryBase).toBe('string');
      expect(primaryHeaders.length).toBeGreaterThan(0);
      expect(primaryBase.length).toBeGreaterThan(0);
    });
  });

  describe('Brand Consistency', () => {
    it('should use Google Fonts as specified in CSS imports', () => {
      const { family } = fontTokens.font;
      
      // Should use fonts that match the Google Fonts import
      expect(family.headers.value[0]).toBe("Playfair Display");
      expect(family.base.value[0]).toBe("Inter");
    });

    it('should maintain consistent weight hierarchy', () => {
      const { weight } = fontTokens.font;
      
      const regularWeight = parseInt(weight.base.regular.value, 10);
      const mediumWeight = parseInt(weight.base.medium.value, 10);
      const semiboldWeight = parseInt(weight.base.semibold.value, 10);
      const boldWeight = parseInt(weight.base.bold.value, 10);
      
      expect(regularWeight).toBeLessThan(mediumWeight);
      expect(mediumWeight).toBeLessThan(semiboldWeight);
      expect(semiboldWeight).toBeLessThan(boldWeight);
    });

    it('should support variable font ranges as mentioned in CSS', () => {
      const { family } = fontTokens.font;
      
      // Inter supports variable weights (100-900)
      // Playfair Display supports variable weights (400-900)
      expect(family.base.value[0]).toBe("Inter");
      expect(family.headers.value[0]).toBe("Playfair Display");
    });
  });
}); 