/**
 * DaisyUI Theme Generator for Obsidiana Brand
 */

import { generateDaisyUITheme } from '../../common/utils.js';

export interface ObsidianaDaisyUITheme {
  light: string;
  dark: string;
}

/**
 * Generates DaisyUI CSS theme for Obsidiana brand
 */
export async function generateObsidianaDaisyUITheme(): Promise<ObsidianaDaisyUITheme> {
  return await generateDaisyUITheme('obsidiana');
} 