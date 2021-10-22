import type {NextPage} from 'next'
import Head from 'next/head'
import LanguageDisplay from './interface/Interface'
import Introduction from './text/introduction.mdx'
import Notes from './text/notes.mdx'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Uqbar</title>
        <meta
          name="description"
          content="A syntax-free symbolic metaprogramming language"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx>{`
        main {
          max-width: 55em;
          padding: 0 2em;
        }
        @media screen and (max-width: 600px) {
          main {
            padding: 0 1em;
          }
        }
        main :global(blockquote) {
          border-left: 4px solid #999;
          padding-left: 1em;
          margin: 1em 0;
        }
        footer {
          padding-top: 35em;
        }
      `}</style>
      <main>
        <Introduction />
        <LanguageDisplay />
        <Notes />
        <footer></footer>
      </main>
    </div>
  )
}

export default Home
