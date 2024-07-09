import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import tailwind, { tailwindHMR } from 'stencil-tailwind-plugin';
import { visualizer } from 'rollup-plugin-visualizer';

export const config: Config = {
  namespace: 'hefesto-ui',
  plugins: [
    tailwind(),
    tailwindHMR(),
    postcss({
      plugins: [
        require('postcss-import'),
        require('tailwindcss')('./tailwind.config.js'),
        autoprefixer(),
      ],
    }),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: 'dist',
      buildDir: 'build',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
      generateTypeDeclarations: true,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null,
      copy: [
        { src: '**/*.html' },
        { src: '**/*.js' },
        { src: '**/*.css' },
        { src: '**/*.json' },
        { src: '**/*.d.ts' },
        { src: '**/*.map', dest: 'ignore', warn: false },
        { src: '**/*.stories.*', dest: 'ignore', warn: false },
        { src: '**/stats.html', dest: 'ignore', warn: false },
        { src: '**/collection/**', dest: 'ignore', warn: false },
      ]
    },
  ],
  rollupPlugins: {
    after: [
      visualizer({ filename: './dist/stats.html' }),
    ],
  },
  minifyJs: true,
  minifyCss: true,
  hashFileNames: true,
  testing: {
    browserHeadless: 'new',
  },
};
