import globals from "globals";
import tseslint from "@typescript-eslint/eslint-plugin";
import tseslintParser from "@typescript-eslint/parser";
import playwright from "eslint-plugin-playwright";
import prettier from "eslint-config-prettier";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    ...playwright.configs["flat/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: tseslintParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "playwright/no-focused-test": "error",
      "playwright/no-useless-await": "error",
      "playwright/missing-playwright-await": "error",
      "no-unused-vars": "warn",
      "no-console": "warn",
    },
  },

  {
    files: ["**/*.ts"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },

  prettier,
];
