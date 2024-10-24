# InstantDB Edge Issue

Super simple Nuxt 3 app to demonstrate the issue with running Nuxt+InstantDB on edge – i.e. Cloudflare Pages.

Simple Query can be found in `/server/api/mydogs.ts` – it's a simple query that returns a list of dogs.
Page fetching the data is in `/app.vue` – it's a simple page that fetches the data and displays it.

## Assumption on what's causing the issue

One of the modules/libraries that InstantDB uses must work only in full node-js environment – i.e. isn't compatible with CF Workers environment. My guess is it would be the same on Vercel Edge.

This is the error:
```
"message": [
	"[nuxt] [request error] [unhandled] [500]",
	"[unenv] crypto.getHashes is not implemented yet!\n  at createNotImplementedError (chunks/routes/api/mydogs.mjs:1:783)  \n  at Object.getHashes (chunks/routes/api/mydogs.mjs:1:1073)  \n  at chunks/routes/api/mydogs.mjs:1:8546  \n  at chunks/routes/api/mydogs.mjs:1:14719"
],
```


## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

