const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error'
}

module.exports = {
  env: {
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/react-in-jsx-scope': RULES.OFF,
    'react/prop-types': RULES.OFF,
    'space-before-function-paren': RULES.OFF,
    'padded-blocks': RULES.OFF,
    'no-unused-vars': RULES.WARN,
    'eol-last': RULES.OFF,
    'no-trailing-spaces': RULES.OFF,
    'object-curly-spacing': RULES.OFF,
    camelcase: RULES.OFF
  }
}
