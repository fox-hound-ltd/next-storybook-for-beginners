import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../app/**/*.stories.@(js|jsx|mjs|ts|tsx)', '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-a11y', '@storybook/addon-themes', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  features: {
    experimentalRSC: true,
  },
  docs: {},
  staticDirs: ['../public'],
  refs: {
    'design-system': {
      title: 'Mui Design System',
      url: 'https://fox-hound-ltd.github.io/design-system/mui/',
    },
  },
};

export default config;
