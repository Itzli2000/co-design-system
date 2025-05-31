/* eslint-disable @typescript-eslint/no-explicit-any */
import designTokens from './design.tokens.json' assert { type: 'json' };

describe('Ixiptla Design Tokens', () => {
  describe('Structure', () => {
    it('should have a design object', () => {
      expect(designTokens).toHaveProperty('design');
    });

    it('should have radius, size, border, effect, and transition properties', () => {
      const { design } = designTokens;
      expect(design).toHaveProperty('radius');
      expect(design).toHaveProperty('size');
      expect(design).toHaveProperty('border');
      expect(design).toHaveProperty('effect');
      expect(design).toHaveProperty('transition');
    });
  });

  describe('Radius Tokens', () => {
    it('should have selector, field, and box properties', () => {
      const { radius } = designTokens.design;
      expect(radius).toHaveProperty('selector');
      expect(radius).toHaveProperty('field');
      expect(radius).toHaveProperty('box');
    });

    it('should have correct types and values for radius tokens', () => {
      const { radius } = designTokens.design;
      
      expect(radius.selector).toEqual({
        value: '0.25rem',
        type: 'borderRadius'
      });

      expect(radius.field).toEqual({
        value: '0.375rem',
        type: 'borderRadius'
      });

      expect(radius.box).toEqual({
        value: '0.5rem',
        type: 'borderRadius'
      });
    });

    it('should match Ixiptla brand radius values from CSS', () => {
      const { radius } = designTokens.design;
      
      // These values should match the CSS --radius-* variables
      expect(radius.box.value).toBe('0.5rem'); // --radius-box
      expect(radius.field.value).toBe('0.375rem'); // --radius-field
      expect(radius.selector.value).toBe('0.25rem'); // --radius-selector
    });
  });

  describe('Size Tokens', () => {
    it('should have selector and field properties', () => {
      const { size } = designTokens.design;
      expect(size).toHaveProperty('selector');
      expect(size).toHaveProperty('field');
    });

    it('should have correct types and values for size tokens', () => {
      const { size } = designTokens.design;
      
      expect(size.selector).toEqual({
        value: '0.25rem',
        type: 'size'
      });

      expect(size.field).toEqual({
        value: '0.25rem',
        type: 'size'
      });
    });
  });

  describe('Border Tokens', () => {
    it('should have width property', () => {
      const { border } = designTokens.design;
      expect(border).toHaveProperty('width');
    });

    it('should have correct type and value for border width', () => {
      const { border } = designTokens.design;
      
      expect(border.width).toEqual({
        value: '1px',
        type: 'borderWidth'
      });
    });

    it('should match Ixiptla brand border width from CSS', () => {
      const { border } = designTokens.design;
      
      // This should match the CSS --border variable
      expect(border.width.value).toBe('1px');
    });
  });

  describe('Effect Tokens', () => {
    it('should have depth and noise properties', () => {
      const { effect } = designTokens.design;
      expect(effect).toHaveProperty('depth');
      expect(effect).toHaveProperty('noise');
    });

    it('should have correct types and values for effect tokens', () => {
      const { effect } = designTokens.design;
      
      expect(effect.depth).toEqual({
        value: '1',
        type: 'number'
      });

      expect(effect.noise).toEqual({
        value: '0',
        type: 'number'
      });
    });

    it('should match Ixiptla brand effect values from CSS', () => {
      const { effect } = designTokens.design;
      
      // This should match the CSS --depth variable
      expect(effect.depth.value).toBe('1');
    });
  });

  describe('Transition Tokens', () => {
    it('should have duration and timing properties', () => {
      const { transition } = designTokens.design;
      expect(transition).toHaveProperty('duration');
      expect(transition).toHaveProperty('timing');
    });

    it('should have theme duration and timing properties', () => {
      const { transition } = designTokens.design;
      expect(transition.duration).toHaveProperty('theme');
      expect(transition.timing).toHaveProperty('theme');
    });

    it('should have correct types and values for transition tokens', () => {
      const { transition } = designTokens.design;
      
      expect(transition.duration.theme).toEqual({
        value: '0.3s',
        type: 'duration'
      });

      expect(transition.timing.theme).toEqual({
        value: 'ease-in-out',
        type: 'cubicBezier'
      });
    });

    it('should match Ixiptla brand transition values from CSS', () => {
      const { transition } = designTokens.design;
      
      // These should match the CSS --theme-transition-* variables
      expect(transition.duration.theme.value).toBe('0.3s');
      expect(transition.timing.theme.value).toBe('ease-in-out');
    });
  });

  describe('Value Validation', () => {
    it('should have valid rem values for radius tokens', () => {
      const { radius } = designTokens.design;
      const remRegex = /^\d+(\.\d+)?rem$/;

      expect(remRegex.test(radius.selector.value)).toBe(true);
      expect(remRegex.test(radius.field.value)).toBe(true);
      expect(remRegex.test(radius.box.value)).toBe(true);
    });

    it('should have valid rem values for size tokens', () => {
      const { size } = designTokens.design;
      const remRegex = /^\d+(\.\d+)?rem$/;

      expect(remRegex.test(size.selector.value)).toBe(true);
      expect(remRegex.test(size.field.value)).toBe(true);
    });

    it('should have valid px value for border width', () => {
      const { border } = designTokens.design;
      const pxRegex = /^\d+px$/;

      expect(pxRegex.test(border.width.value)).toBe(true);
    });

    it('should have valid number values for effect tokens', () => {
      const { effect } = designTokens.design;
      
      expect(typeof effect.depth.value).toBe('string');
      expect(typeof effect.noise.value).toBe('string');
      expect(!isNaN(Number(effect.depth.value))).toBe(true);
      expect(!isNaN(Number(effect.noise.value))).toBe(true);
    });

    it('should have valid duration value for transition', () => {
      const { transition } = designTokens.design;
      const durationRegex = /^\d+(\.\d+)?(s|ms)$/;

      expect(durationRegex.test(transition.duration.theme.value)).toBe(true);
    });

    it('should have valid timing function for transition', () => {
      const { transition } = designTokens.design;
      const validTimingFunctions = ['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'];
      const cubicBezierRegex = /^cubic-bezier\(\d+(\.\d+)?,\s*\d+(\.\d+)?,\s*\d+(\.\d+)?,\s*\d+(\.\d+)?\)$/;

      const isValidKeyword = validTimingFunctions.includes(transition.timing.theme.value);
      const isValidCubicBezier = cubicBezierRegex.test(transition.timing.theme.value);

      expect(isValidKeyword || isValidCubicBezier).toBe(true);
    });
  });

  describe('Token Completeness', () => {
    it('should have all required token categories', () => {
      const { design } = designTokens;
      const requiredCategories = ['radius', 'size', 'border', 'effect', 'transition'];
      
      requiredCategories.forEach(category => {
        expect(design).toHaveProperty(category);
      });
    });

    it('should have all required radius variants', () => {
      const { radius } = designTokens.design;
      const requiredRadiusVariants = ['selector', 'field', 'box'];
      
      requiredRadiusVariants.forEach(variant => {
        expect(radius).toHaveProperty(variant);
        expect((radius as any)[variant]).toHaveProperty('value');
        expect((radius as any)[variant]).toHaveProperty('type');
      });
    });

    it('should have all required transition variants', () => {
      const { transition } = designTokens.design;
      
      expect(transition).toHaveProperty('duration');
      expect(transition).toHaveProperty('timing');
      expect(transition.duration).toHaveProperty('theme');
      expect(transition.timing).toHaveProperty('theme');
    });
  });
}); 