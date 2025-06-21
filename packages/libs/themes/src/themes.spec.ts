/**
 * Basic integration tests for theme generators
 */

import { describe, it, expect } from 'vitest';
import { generateDaisyUITheme } from './common/utils.js';
import { generateIxiptlaDaisyUITheme } from './daisyui/generators/ixiptla.js';
import { generateObsidianaDaisyUITheme } from './daisyui/generators/obsidiana.js';

describe('Theme Generators', () => {
  describe('DaisyUI', () => {
    it('should generate Ixiptla theme successfully', async () => {
      const theme = await generateIxiptlaDaisyUITheme();
      
      expect(theme).toBeDefined();
      expect(theme.light).toContain('@plugin "daisyui/theme"');
      expect(theme.light).toContain('name: "ixiptla"');
      expect(theme.light).toContain('color-scheme: light');
      expect(theme.dark).toContain('name: "ixiptla-dark"');
      expect(theme.dark).toContain('color-scheme: dark');
    });

    it('should generate Obsidiana theme successfully', async () => {
      const theme = await generateObsidianaDaisyUITheme();
      
      expect(theme).toBeDefined();
      expect(theme.light).toContain('@plugin "daisyui/theme"');
      expect(theme.light).toContain('name: "obsidiana"');
      expect(theme.light).toContain('color-scheme: light');
      expect(theme.dark).toContain('name: "obsidiana-dark"');
      expect(theme.dark).toContain('color-scheme: dark');
    });

    it('should generate theme using generic function', async () => {
      const ixiptlaTheme = await generateDaisyUITheme('ixiptla');
      const obsidianaTheme = await generateDaisyUITheme('obsidiana');
      
      expect(ixiptlaTheme).toBeDefined();
      expect(obsidianaTheme).toBeDefined();
      expect(ixiptlaTheme.light).toContain('name: "ixiptla"');
      expect(obsidianaTheme.light).toContain('name: "obsidiana"');
    });
  });

  describe('Design Tokens Loading', () => {
    it('should load design tokens for both brands', async () => {
      // This tests that the dynamic import works correctly
      const { loadDesignTokens } = await import('./common/utils.js');
      
      const ixiptlaTokens = await loadDesignTokens('ixiptla');
      const obsidianaTokens = await loadDesignTokens('obsidiana');
      
      expect(ixiptlaTokens).toBeDefined();
      expect(obsidianaTokens).toBeDefined();
      
      // Basic token structure verification
      expect(ixiptlaTokens).toHaveProperty('ColorPrimaryLightDefault');
      expect(obsidianaTokens).toHaveProperty('ColorPrimaryLightDefault');
    });
  });
}); 