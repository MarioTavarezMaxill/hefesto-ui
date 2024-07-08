import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import tailwind, { tailwindHMR } from 'stencil-tailwind-plugin';
import nodePolyfills from 'rollup-plugin-node-polyfills';

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
		},

		{
			type: 'dist-custom-elements',
			customElementsExportBehavior: 'auto-define-custom-elements',
			externalRuntime: false,
		},
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
    },
		{
			type: 'docs-readme',
		},
		{
			type: 'www',
			serviceWorker: null,
		},
	],
  rollupPlugins: {
    after: [
      nodePolyfills(),
    ]
  },
	testing: {
		browserHeadless: 'new',
	},
};

