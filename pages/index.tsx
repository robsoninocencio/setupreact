import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Pagina Home</title>
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  )
}

export default Home
