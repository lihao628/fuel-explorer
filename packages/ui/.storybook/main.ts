import tsconfigpath from 'vite-tsconfig-paths';
import { UserConfig, mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-storysource',
    'storybook-addon-theme/register',
  ],
  staticDirs: ['../public'],
  core: {},
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config: UserConfig) {
    return mergeConfig(config, {
      plugins: [tsconfigpath()],
      define: {
        __STORYBOOK_FUEL_UI__: '"true"',
      },
    });
  },
};
export default config;