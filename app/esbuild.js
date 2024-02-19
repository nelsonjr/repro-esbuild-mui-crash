const { build } = require("esbuild");
const { copy } = require("esbuild-plugin-copy");

const start = Date.now();

build({
  entryPoints: ["./src/index.tsx"],
  bundle: true,
  format: "esm",
  plugins: [
    copy({
      assets: {
        from: ["./index.html"],
        to: ["./index.html"],
      },
      verbose: true,
    }),
  ],
  outdir: "./build",
}).then(({ errors, warnings }) => {
  console.log(
    `⚡ Build complete in ${(Date.now() - start) / 1000}ms: ${
      errors.length
    } errors, ${warnings.length} warning.`
  );
});
