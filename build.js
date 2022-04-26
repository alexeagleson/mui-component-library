const esbuild = require('esbuild');
const { dependencies } = require('./package.json');

/** @type {import('esbuild').BuildOptions} */
const sharedConfig = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  sourcemap: true,
  minify: true,
  target: 'esnext',
  external: Object.keys(dependencies),
};

esbuild.build({
  ...sharedConfig,
  outdir: 'dist/esm',
  splitting: true,
  format: 'esm',
});

esbuild.build({
  ...sharedConfig,
  outdir: 'dist/cjs',
  format: 'cjs',
});
