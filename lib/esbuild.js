const { build } = require("esbuild");

const start = Date.now();

build({
  entryPoints: { "./button1/index": "./src/button1/index.ts" },
  bundle: true,
  format: "esm",
  outdir: "./dist",
  external: ["react", "react-dom"],
}).then(({ errors, warnings }) => {
  console.log(
    `⚡ Build complete in ${(Date.now() - start) / 1000}ms: ${
      errors.length
    } errors, ${warnings.length} warning.`
  );
});
