This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Anotações:

Como inicio meus apps com ReactJS? Next.js, TypeScript, ESLint e Styled Components | Code/Drops #50
https://www.youtube.com/watch?v=1nVUfZg2dSA

yarn create next-app setupreact
cd setupreact
yarn dev

Adicionando Typescript
yarn add typescript @types/react @types/node -D

yarn dev

Adicionando o eslint ao projeto
yarn add eslint -D

yarn eslint --init
To check syntax, find problems, and enforce code style
JavaScript modules (import/export)
React
Does your project use TypeScript? ‣ No / Yes -> Yes
? Where does your code run? … (Press <space> to select, <a> to toggle all, <i> to invert selection)
✔ Browser -> Com a barra de espaço eu seleciono os dois
✔ Node -> Com a barra de espaço eu seleciono os dois
Use a popular style guide
Standard: https://github.com/standard/standard -> Não usa o ponto e virgula no fim das linnhas
? What format do you want your config file to be in? …
JavaScript
YAML
▸ JSON
? Would you like to install them now with npm? ‣ No / Yes -> Yes

Agora se estiver utilizando o yarn, então deletar o arquivo package-lock.json e rodar o comando
yarn

Adicionando o prettier ao projeto
yarn add prettier eslint-plugin-prettier eslint-config-prettier -D
