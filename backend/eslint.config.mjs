// eslint.config.mjs
import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    files: ['**/*.{js,mjs,cjs}'],
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    rules: {
      // Ajoute tes règles ici :
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
  },
];
