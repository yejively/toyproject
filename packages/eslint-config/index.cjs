module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "airbnb",
    "airbnb/hooks",
    "plugin:import/recommended",
    "plugin:storybook/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: { version: "detect" },
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  plugins: ["react-refresh", "react", "prettier"],
  rules: {
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "react/jsx-wrap-multilines": "off",
    "no-confusing-arrow": "off",
    "react/jsx-curly-newline": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "max-len": "off",
    "import/no-cycle": "off",
    "func-names": "off",
    "operator-linebreak": "off",
    quotes: "off",
    "wrap-iife": "off",
    "implicit-arrow-linebreak": "off",
    "nonblock-statement-body-position": "off",
    curly: "off",
    "react-hooks/exhaustive-deps": "off",
    // 'max-len': ['error', { code: 140 }],
    "function-paren-newline": "off",
    "arrow-body-style": "off",
    "react/jsx-no-constructed-context-values": "off",
    indent: ["error", 4, { SwitchCase: 1 }],
    "react/jsx-indent": ["error", 4],
    "react/jsx-indent-props": ["error", 4],
    "no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: false,
        varsIgnorePattern: "^_",
        argsIgnorePattern: "^_",
        caughtErrors: "none",
      },
    ],
    "import/no-unresolved": "error",
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": "off",
    // 'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "": "never",
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
        css: "always",
      },
    ],
    "react/jsx-filename-extension": [
      "error",
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],

    eqeqeq: ["error", "always", { null: "ignore" }],
    "import/prefer-default-export": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "no-console": "off",
    "react/react-in-jsx-scope": "off",
    "no-underscore-dangle": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "object-curly-newline": "off",
    "linebreak-style": "off",
    "no-param-reassign": "off",
    "no-multiple-empty-lines": "off",
    // 'react/jsx-indent': 'off',
    "arrow-parens": "off",
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-no-useless-fragment": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react/function-component-definition": "off",
    "react/button-has-type": "off",
    "operator-assignment": "off",
    "no-plusplus": "off",
    "react/require-default-props": "off",
    "react/prop-types": "off",
    "react/no-this-in-sfc": "off",
    "react/destructuring-assignment": [0, "always"],
    "consistent-return": "off",
  },
};