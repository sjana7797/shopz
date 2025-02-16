import globals from "globals";
import pluginJs from "@eslint/js";
// eslint-disable-next-line import/no-unresolved
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  importPlugin.flatConfigs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ["node_modules", "dist", "./eslint.config.mjs"],
    rules: {
      "import/no-absolute-path": "error",
      "no-console": "error",
      "no-unused-vars": "error",
      "import/no-duplicates": "error",
      "import/no-unresolved": "off",
      "import/no-unused-modules": "error",
      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
      "import/order": [
        "error",
        {
          groups: [
            // Imports of builtins are first
            "builtin",
            // Then sibling and parent imports. They can be mingled together
            ["sibling", "parent"],
            // Then index file imports
            "index",
            // Then any arcane TypeScript imports
            "object",
            // Then the omitted imports: internal, external, type, unknown
          ],
        },
      ],
    },
  },
];
