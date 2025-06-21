/**
 * DaisyUI Theme Generator for Ixiptla Brand
 */

import { generateDaisyUITheme } from '../../common/utils.js';

export interface IxiptlaDaisyUITheme {
  light: string;
  dark: string;
}

/**
 * Generates DaisyUI CSS theme for Ixiptla brand
 */
export async function generateIxiptlaDaisyUITheme(): Promise<IxiptlaDaisyUITheme> {
  return await generateDaisyUITheme('ixiptla');
}

 