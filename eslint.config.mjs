import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser, // adds document, window, etc.
        ...globals.jest,    // adds describe, it, expect, etc.
        ...globals.node     // keeps Node.js globals like require
      }
    }
  }
]);
