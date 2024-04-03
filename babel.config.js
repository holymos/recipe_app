module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['.'],
        alias: {
          '@components': './src/components',
          '@contexts': './src/contexts',
          '@hooks': './src/hooks',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
