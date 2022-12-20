import { InferGetStaticPropsType } from 'next'
import absoluteUrl from "next-absolute-url";
import Head from 'next/head'
import { tag } from '../types'
import { TagElem } from '../components/list-component'
import axios from 'axios';
export const getStaticProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_ENV_APIURL}/tags`!);
  const books: tag[] = await res.data
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
        
      `}</style>
    </div>
  )
}
export default Blog
