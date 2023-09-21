import { globbySync } from 'globby';
import _ from 'lodash';
import path from 'path';
import radixThemePlugin from 'radix-ui-themes-with-tailwind';
import type { Config } from 'tailwindcss';
import tailwindDefaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

import { animation, keyframes } from './animations';

function getComponents() {
  return globbySync(['**'], {
    cwd: path.resolve(__dirname, '../components'),
    onlyDirectories: true,
    deep: 1,
  });
}

function refColorVariablesAsObj(list: string[]) {
  return list.reduce(
    (acc, curr) => {
      acc[curr] = `var(--color-${curr})`;
      return acc;
    },
    {} as Record<string, string>,
  );
}

const COLORS_VARIABLES = [
  // general colors
  'accent',
  'brand',
  'border',
  'border-hover',
  // text colors
  'color',
  'secondary',
  'muted',
  'heading',
  'icon',
  'link',
  // card colors
  'card-bg',
  'card-title',
  'card-border',
];

const preset: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/**/*.stories.{js,jsx,ts,tsx}',
  ],
  theme: {
    keyframes,
    animation,
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      mobile: '300px',
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
    extend: {
      width: tailwindDefaultTheme.maxWidth,
      colors: {
        ...refColorVariablesAsObj(COLORS_VARIABLES),
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwindcss-radix')({
      variantPrefix: false,
    }),
    plugin(function ({ addVariant, matchVariant }) {
      // Add a `third` variant, ie. `third:pb-0`
      addVariant('not-first', '& ~ &');
      addVariant('not-disabled', '&:not([aria-disabled=true])');
      addVariant('not-first-last', '&:not(:first-of-type,:last-of-type)');
      addVariant('first-type', '&:first-of-type');
      addVariant('last-type', '&:last-of-type');
      addVariant('dark-theme', ['.dark &', '.dark-theme &']);
      addVariant('light-theme', ['.light &', '.light-theme &']);

      const components = getComponents();
      const componentsMap = _.fromPairs(components.map((c) => [c, c]));
      const values = { values: componentsMap };
      matchVariant('>fuel', (v) => `& > .fuel-${v}`, values);
      matchVariant('>group-fuel', (v) => `:merge(.group) > .fuel-${v}`, values);
      matchVariant('>peer-fuel', (v) => `:merge(.peer) > .fuel-${v}`, values);
      matchVariant('fuel', (v) => `& .fuel-${v}`, values);
      matchVariant('group-fuel', (v) => `:merge(.group) > .fuel-${v}`, values);
      matchVariant('peer-fuel', (v) => `:merge(.peer) > .fuel-${v}`, values);
    }),
    radixThemePlugin({
      useTailwindColorNames: false, // optional
      useTailwindRadiusNames: true, // optional
      mapMissingTailwindColors: true, // optional
    }),
  ],
};

export default preset;