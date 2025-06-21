import baseConfig from '../../../eslint.config.mjs';

export default [
  ...baseConfig,
  {
    files: ['**/*.json'],
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          ignoredFiles: [
            '{projectRoot}/eslint.config.{js,cjs,mjs}',
            '{projectRoot}/vite.config.{js,ts,mjs,mts}',
          ],
          ignoredDependencies: [
            '@codigo-obsidiana/design-tokens', // Used dynamically via import()
            'tslib',                            // TypeScript runtime helpers
            '@mui/material',                    // Optional peer dependency
            'vitest'                            // Testing framework (devDependency)
          ]
        },
      ],
    },
    languageOptions: {
      parser: await import('jsonc-eslint-parser'),
    },
  },
];
