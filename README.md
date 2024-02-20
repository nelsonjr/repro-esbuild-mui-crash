> See https://github.com/evanw/esbuild/issues/3655 for discussion

# Material UI 💔 esbuild

esbuild does not generate a runnable bundle if the library uses Material UI :-(

## How to repro

In [lib/src/button1/button1.tsx](lib/src/button1/button1.tsx), use one of the imports to show it works (or not) from the app:

### Working version: use a non-MUI button

Use this import:

    import { Button } from "./button";

Then run the app.

### Broken version: use a MUI button

Use this import:

    import { Button } from "@mui/material"

Then run the app

### Running the app

```
cd lib
pnpm install
pnpm run build
cd ..

cd app
pnpm install
pnpm run build
pnpm run view
```

Then open your browser at [http://localhost:8888](http://localhost:8888)

### Error

```
Warning: React instrumentation encountered an error: TypeError: e.hasOwnProperty is not a function.
printWarning @ index.js:2425
error @ index.js:2409
injectInternals @ index.js:6035
injectIntoDevTools @ index.js:22955
(anonymous) @ index.js:23429
node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.development.js @ index.js:23460
__require @ index.js:8
node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js @ index.js:23473
__require @ index.js:8
node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/client.js @ index.js:23482
__require @ index.js:8
(anonymous) @ index.js:26286

index.js:23640 Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.
printWarning @ index.js:23640
error @ index.js:23624
resolveDispatcher @ index.js:24549
useContext6 @ index.js:24555
Button2 @ index.js:33174
renderWithHooks @ index.js:14075
updateForwardRef @ index.js:16231
beginWork @ index.js:17838
beginWork$1 @ index.js:21653
performUnitOfWork @ index.js:21098
workLoopSync @ index.js:21037
renderRootSync @ index.js:21016
performConcurrentWorkOnRoot @ index.js:20578
workLoop @ index.js:2101
flushWork @ index.js:2080
performWorkUntilDeadline @ index.js:2288

index.js:23640 Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.
printWarning @ index.js:23640
error @ index.js:23624
resolveDispatcher @ index.js:24549
useContext6 @ index.js:24555
Button2 @ index.js:33174
renderWithHooks @ index.js:14075
updateForwardRef @ index.js:16231
beginWork @ index.js:17838
callCallback2 @ index.js:5578
invokeGuardedCallbackDev @ index.js:5603
invokeGuardedCallback @ index.js:5637
beginWork$1 @ index.js:21665
performUnitOfWork @ index.js:21098
workLoopSync @ index.js:21037
renderRootSync @ index.js:21016
performConcurrentWorkOnRoot @ index.js:20578
workLoop @ index.js:2101
flushWork @ index.js:2080
performWorkUntilDeadline @ index.js:2288

index.js:24566 Uncaught TypeError: Cannot read properties of null (reading 'useContext')
    at Object.useContext6 (index.js:24566:29)
    at Button2 (index.js:33174:32)
    at renderWithHooks (index.js:14075:26)
    at updateForwardRef (index.js:16231:28)
    at beginWork (index.js:17838:22)
    at HTMLUnknownElement.callCallback2 (index.js:5578:22)
    at Object.invokeGuardedCallbackDev (index.js:5603:24)
    at invokeGuardedCallback (index.js:5637:39)
    at beginWork$1 (index.js:21665:15)
    at performUnitOfWork (index.js:21098:21)
```
