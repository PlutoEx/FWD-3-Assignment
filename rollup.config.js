import terser from '@rollup/plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/main.ts',
    output: {
        file: 'dist/bundle.js'
    },
    plugins: [
        terser(),
        nodeResolve({ browser: true }),
        typescript()
    ]
};