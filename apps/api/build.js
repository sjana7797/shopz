// eslint-disable-next-line no-undef
await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",
  minify: true,
  target: "bun",
  sourcemap: true,
});
