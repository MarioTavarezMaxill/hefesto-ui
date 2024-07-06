import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  framework: "@storybook/web-components-vite",
	addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        {
          name: "storybook-addon-stencil",
          options: {
              stencilOptions: {},
          },
      },
      {
        name: '@storybook/addon-postcss',
        options: {
          cssLoaderOptions: {
            importLoaders: 1,
          },
          postcssLoaderOptions: {
            implementation: require('postcss'),
          },
        },
      },
        "@storybook/addon-themes",

    ],
};
export default config;
