module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    semi: ['off'],
    'comma-dangle': ['off'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    'react-native/no-inline-styles': ['off'],
    'prettier/prettier': ['off'],
    'eol-last': ['off']
  }
}
