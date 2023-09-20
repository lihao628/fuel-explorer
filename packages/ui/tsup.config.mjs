import tsconfig from './tsconfig.json';
import path from 'path';

const defConfig = {
  outDir: 'dist',
  splitting: true,
  format: ['esm'],
  external: ['react'],
  outExtension() {
    return {
      js: `.js`,
    };
  },
  sourcemap: true,
  clean: true,
  target: tsconfig.compilerOptions.target,
  tsconfig: path.resolve(__dirname, './tsconfig.build.json'),
};

export default [
  {
    ...defConfig,
    entry: [
      './src/components/**/index.tsx',
      '!./src/components/**/*.stories.tsx',
    ],
    outDir: 'dist/components',
  },
  {
    ...defConfig,
    entry: {
      index: 'src/index.tsx',
    },
    publicDir: 'public',
  },
  {
    ...defConfig,
    entry: {
      index: 'src/theme/tw-theme.ts',
    },
    format: ['cjs'],
    outDir: 'dist/theme',
  },
  {
    entry: {
      index: 'src/theme/index.css',
    },
    loader: {
      '.css': 'css',
    },
  },
];
