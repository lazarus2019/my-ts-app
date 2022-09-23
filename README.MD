# Using Vite

## Tips

### Custom Port

[Server Options Document](https://vitejs.dev/config/server-options.html)

Solution 1: Vite server always restart when you changed vite.config.\* file

```ts
import { defineConfig } from "vite";
// vite.config.ts;
export default defineConfig({
  server: {
    port: 3030,
  },
  preview: {
    port: 8080,
  },
});
```

Solution 2: Pass port as a `CLI` option

> CLI: command line interface => giao diện dòng lệnh (CMD, Window Terminal, Git Base,...)

```
$ npm run dev -- --port 8000
```

Solution 3: Custom in package.json

```json
// package.json
"scripts": {
    "serve": "vite preview --port 6000"
  },


// OR

"scripts": {
    "serve": "vite --port 8000"
},
// and use command: npm run serve
```

**Note**: Document solution but it's not work this time

```ts
// vite.config.ts;
  server: {
     origin: "http://127.0.0.1:8080",
   },
```
