import designTokens from './design.tokens.json' assert { type: 'json' };

describe('Design Tokens', () => {
  describe('Structure', () => {
    it('should have a design object', () => {
      expect(designTokens).toHaveProperty('design');
    });

    it('should have radius, size, border, and effect properties', () => {
      const { design } = designTokens;
      expect(design).toHaveProperty('radius');
      expect(design).toHaveProperty('size');
      expect(design).toHaveProperty('border');
      expect(design).toHaveProperty('effect');
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
        value: '1rem',
        type: 'borderRadius'
      });

      expect(radius.field).toEqual({
        value: '0.5rem',
        type: 'borderRadius'
      });

      expect(radius.box).toEqual({
        value: '1rem',
        type: 'borderRadius'
      });
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
    });
  });
}); 