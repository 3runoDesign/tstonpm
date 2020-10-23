import typescript from 'rollup-plugin-typescript2'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import { eslint } from 'rollup-plugin-eslint'
import json from 'rollup-plugin-json'

import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    // {
    //   file: pkg.main,
    //   format: 'es',
    //   exports: 'named',
    //   sourcemap: false,
    // },
    // {
    //   file: pkg.main,
    //   format: 'cjs',
    //   exports: 'named',
    //   sourcemap: false,
    // },
    {
      file: pkg.main,
      format: 'iife',
      exports: 'default',
      name: 'Calc',
      sourcemap: false,
    }
  ],
  plugins: [
    // eslint({
    //   throwOnError: true,
    //   fix: true,
    // }),
    external(),
    resolve(),
    json(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true,
      tsconfig: './tsconfig.json',
    })
  ]
}