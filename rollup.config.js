import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import { defineConfig } from "rollup";

export default defineConfig({
  input: "src/index.js",
  output: [
    {
      format: "cjs",
      file: "dist/index.cjs.js",
      sourcemap: true,
    },
    {
      format: "esm",
      file: "dist/index.esm.js",
      sourcemap: true,
    },
  ],
  plugins:[resolve(),commonjs(),terser()]
});
