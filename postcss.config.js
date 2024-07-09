const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
    purgecss({
      content: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
    require('cssnano')({
      preset: 'default',
    }),
  ],
};
