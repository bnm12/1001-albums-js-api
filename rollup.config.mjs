import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/client.umd.js',
    format: 'umd',
    name: 'AlbumsGeneratorClient', // This will be the global variable name
    sourcemap: true,
    globals: {
      // If you have external dependencies that you don't want to bundle,
      // you would list them here. For axios, we want it bundled.
    }
  },
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json', // Ensure it uses the correct tsconfig
      clean: true, // Clean the cache on each build
      tsconfigOverride: {
        compilerOptions: {
          module: "ESNext",
          moduleResolution: "node" 
        }
      }
    }),
    resolve({
      browser: true // Resolve browser-compatible modules
    }),
    commonjs(), // Convert CommonJS modules to ES6
    terser() // Minify the output
  ]
};
