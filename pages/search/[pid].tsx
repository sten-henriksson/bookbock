import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import { Book, ApiCall } from '../../types'
import { BookElem, FooterPageSelector } from '../../components/list-component'
import { Key } from 'react'
export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("helo");

  const id = context.query;
  const res = await fetch(`${process.env.NEXT_PUBLIC_ENV_APIURL}/search/${id?.page}/${id?.pid}`)
  const data: ApiCall = await res.json()
  console.log(context.query.page);

  return {
    props: {
      apicall: await data,
      totalpages: data.pages,
      currentPage: id?.page,
      keyword: id?.pid
    },
  }
}
const Blog = ({ apicall, totalpages, currentPage, keyword }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(apicall);

  // will resolve posts to type Post[]6

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        {
          apicall.books.map((x: Book, index: Key) => {
            return <div key={index}>
              {BookElem({ name: x.name, hash: x.hash, path: x.path })}
            </div>
          })
        }
        {FooterPageSelector({ url: keyword, total_pages: totalpages, current_page: currentPage })}
      </main>

      <style jsx global>{`
      `}</style>
    </div>
  )
}
export default Blog