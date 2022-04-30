"use strict";

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 8,
    sourceType: "module",
  },
  plugins: ["import", "react", "react-hooks", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  settings: {
    react: {
      version: "detect",
      fragment: "Fragment",
    },
    "import/parser": {
      "@typescript-eslint/parser": ["ts", "tsx"],
    },
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    "no-console": ["warn", { allow: ["warn", "error"] }],
  },
};
