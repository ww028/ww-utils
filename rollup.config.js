// rollup.config.js
export default {
  input: "index.js", // 入口文件
  output: [
    // 输出 ESM 版本（供 tree-shaking 使用）
    {
      file: "dist/index.esm.js",
      format: "es",
      sourcemap: true, // 生成 sourcemap，方便调试
    },
    // 输出 CommonJS 版本（兼容老项目）
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
  ],
  plugins: [],
};
