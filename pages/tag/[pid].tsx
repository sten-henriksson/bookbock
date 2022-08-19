import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import { Key } from 'react'
import { ApiCall, Book } from '../../types'
import { BookElem, footerPageSelector } from '../../components/list-component'
export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("helo");
  const id = context.query;
  console.log(id);

  const res = await fetch(`${process.env.NEXT_PUBLIC_ENV_APIURL}/tagsearch/${id?.page}/${id?.pid}`)
  const data: ApiCall = await res.json()
  console.log(data);
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
  // will resolve posts to type Post[]6
  return (
    <div>
      <main>
        {
          apicall.books.map((x: Book, index: Key) => {
            return <div key={index}>
              {BookElem({ name: x.name, hash: x.hash, path: x.path })}
            </div>
          })
        }
        {footerPageSelector({ url: keyword, total_pages: totalpages, current_page: currentPage })}
      </main>

      <style jsx global>{`
      `}</style>
    </div>
  )
}


export default Blog