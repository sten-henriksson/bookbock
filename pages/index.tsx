import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { tag } from '../types'
import { TagElem } from '../components/list-component'
export const getStaticProps = async () => {
  console.log(process.env.NEXT_PUBLIC_ENV_APIURL);
  const res = await fetch(process.env.NEXT_PUBLIC_ENV_APIURL + "/tags")
  const books: tag[] = await res.json()
  return {
    props: {
      books: books,
    },
  }
}

function Blog({ books }: InferGetStaticPropsType<typeof getStaticProps>) {
  // will resolve posts to type Post[]6

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        {
          books.map((x, index) => {
            return <div key={index}>
              {TagElem(x)}
            </div>
          })
        }
      </main>
      <style jsx global>{`
        a {
          color: white;
        }
        html,
        body {
          background: #121212;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export default Blog