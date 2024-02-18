# Vercel Clone

## Tech Stack

This is not a monorepo and each folder is a seperate service. Folder names should be self-explanatory. For backend I've used following tech, for packages, you could also check package.json.

- AWS : Used extensively, to deploy, run, store code.
- Redis: Used for storing project status etc

For frontend

- React
- Tailwind and Radix UI
- Vite for bundling

## Running the code

For frontend, do `npm install` and `npm run dev` to start vite server.

For backend:

- Set the AWS secret values in `.env` file.

```
AWS_ACCESS_KEY_ID="your AWS access key"
AWS_SECRET_ACCESS_KEY="your aws secret key"
CLOUDFLARE_STORAGE_ENDPOINT="your cloudfront endpoint to connect to s3"
```

- Just do `npm install` and `npx ts-node-dev src/index.ts` or you can also build it using `tsc` or `esbuild` etc.
  AWS_ACCESS_KEY_ID="your AWS access key"
  AWS_SECRET_ACCESS_KEY="your aws secret key"
  CLOUDFLARE_STORAGE_ENDPOINT="your cloudfront endpoint to connect to s3"
