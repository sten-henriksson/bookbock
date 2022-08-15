import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import { Key } from 'react'
import { Book } from '../../types'
import { BookElem } from '../../components/list-component'
export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("helo");

  const id = context.params;
  const res = await fetch(`http://localhost:5010/tagsearch/` + id?.pid)
  const data: Book[] = await res.json()
  console.log(data);

  return {
    props: {
      books: await data,
    },
  }
}

const Blog = ({ books }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // will resolve posts to type Post[]6
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        {
          books.map((x: Book, index: Key) => {
            return <div key={index}>
              {BookElem({ name: x.name, hash: x.hash, path: x.path })}
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