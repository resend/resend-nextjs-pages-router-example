> [!IMPORTANT]
> This repository has been consolidated into the new [resend-examples](https://github.com/resend/resend-examples) monorepo, which contains updated examples for all languages and frameworks.
>
> **[View the Next.js (Pages Router) examples here](https://github.com/resend/resend-examples/tree/main/nextjs-resend-examples)**

---


# Resend with Next.js (Pages Router)

This example shows how to use Resend with [Next.js](https://nextjs.org).

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/resend/resend-nextjs-pages-router-example&project-name=resend-nextjs-pages-router-example&repository-name=resend-nextjs-pages-router-example&env=RESEND_API_KEY)

## Instructions

1. Define environment variables in `.env` file.

```sh
cp .env.example .env
```

2. Install dependencies:

  ```sh
pnpm install
  ```

3. Run Next.js locally:

  ```sh
pnpm dev
  ```

4. Open URL in the browser:

  ```
http://localhost:3000/api/send
  ```

## License

MIT License
