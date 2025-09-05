import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["dist/**", "node_modules/**", "generated/**"],
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],

    plugins: { js },
    extends: ["js/recommended"],

    languageOptions: { globals: globals.browser },

    rules: {
      "no-console": "warn",
      "eqeqeq": ["error", "always"],
      "curly": "error",
      "no-var": "error",
      "prefer-const": "error",
      "no-duplicate-imports": "error",
      "no-empty": ["warn", { allowEmptyCatch: true }],
      "consistent-return": "warn",
      "no-undef": "error",

      // TypeScript rules
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],

      // Allow `any` but show warning instead of error
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },

  tseslint.configs.recommended,
]);
