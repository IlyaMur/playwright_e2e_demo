import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import playwright from 'eslint-plugin-playwright'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"], ...playwright.configs['flat/recommended'],
    rules: {
      "playwright/no-focused-test": "error",
      "playwright/no-useless-await": "error",
      "playwright/missing-playwright-await": "error",
      "playwright/no-nested-step": "off",
      "playwright/expect-expect": "off"
    },
  },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];