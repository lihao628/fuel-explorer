import graphqlLoaderPlugin from '@luckycatfactory/esbuild-graphql-loader';
import { defineConfig } from 'tsup';

export default defineConfig({
  dts: true,
  format: ['cjs'],
  esbuildPlugins: [graphqlLoaderPlugin.default()],
  sourcemap: true,
  noExternal: [/.*/],
  entry: {
    index: 'src/bin.ts',
  },
  minify: false,
  clean: true,
  splitting: false,
});
