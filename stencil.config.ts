import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import tailwind, { tailwindHMR } from 'stencil-tailwind-plugin';

const purgecss = require('@fullhuman/postcss-purgecss')({
	content: ['./src/**/*.tsx', './src/**/*.css', './src/index.html'],
	defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

export const config: Config = {
	namespace: 'hefesto-ui',
	globalStyle: 'www/tailwind.css',
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
			type: 'docs-readme',
		},
		{
			type: 'www',
			serviceWorker: null,
		},
	],
	testing: {
		browserHeadless: 'new',
	},
};
