const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig(
    {
        extends: [
            "eslint:recommended",
            "plugin:@typescript-eslint/recommended",
            "plugin:prettier/recommended",
            "plugin:unicorn/recommended"
        ],
        parser: "@typescript-eslint/parser",
        parserOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
        },
        plugins: ["@typescript-eslint", "unused-imports", "simple-import-sort"],
        rules: {
            'prettier/prettier': [
                'error',
                {
                    'endOfLine': 'auto',
                }
            ],

            // Temporary disables
            "unicorn/prefer-logical-operator-over-ternary": "warn",
            "unicorn/no-array-reduce": "warn",
            "unicorn/no-nested-ternary": "warn",
            "@typescript-eslint/ban-ts-comment": "warn",
            "react/no-unescaped-entities": "off",

            // simple-import-sort
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",

            // unused-imports
            "@typescript-eslint/no-unused-vars": "off",
            "unused-imports/no-unused-imports": "error",
            "unused-imports/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
        },
    });
