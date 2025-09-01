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
      "consistent-return": "error",
      "no-undef": "error",

      // **TypeScript-specific unused vars**
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",    // ignore unused args starting with _
          varsIgnorePattern: "^_",    // ignore unused vars starting with _
          caughtErrorsIgnorePattern: "^_", // ignore unused catch errors starting with _
        },
      ],
    },
  },

  tseslint.configs.recommended,
]);
