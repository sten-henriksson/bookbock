import type { AppProps } from 'next/app'
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from 'next/router'
import Link from 'next/link'
type FormValues = {
  search: string;
};

function MyApp({ Component, pageProps }: AppProps) {
  const { register, handleSubmit } = useForm<FormValues>();
  const router = useRouter()
  const onSubmit: SubmitHandler<FormValues> = data => {
    if (data.search) {
      let search = data.search.replace(/\//g, '_');
      console.log(search);
      router.push(`/search/${search}?page=1`)
    }
  };
  return <div><nav>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Link href="/"><h1 id='nav_button_pc'>book-book</h1></Link>
      <Link href="/"><h1>🐔</h1></Link>
      <input {...register("search")} placeholder="seach" />
      <Link href="/faq"><h1 id='nav_button_faq'>faq</h1></Link>
    </form>
  </nav>
    <Component {...pageProps} />
    <style jsx global>{`
        @media only screen and (max-width: 900px) {
          #nav_button_pc{
            visibility: hidden;
            display: none;
        }
        }
        form{
            display: flex;
            flex-direction: row ;
            flex-wrap: nowrap
        }
        nav{
          margin-right: 15%;
          margin-left: 15%;
          padding: 5px;
          border-bottom-style: solid;
          border-width: 1px;
          border-color: red;
        }
        input{
          margin-left: 15px;
          margin-right: 15px;
        }
        
        h1{
          margin-left: 15px;
          margin-right: 15px;
          font-size: 4.5vh;
          margin: -5px;
          margin-left: 5px;
          margin-right: 5px;
          color: inherit;
          text-decoration: inherit;
          cursor: pointer;
        }
        a {
          color: white;
        }
        p {
          color: white;
          text-decoration: inherit;
          cursor: pointer;
        }
        h1{
          color: white;
        }
        #nav_button_faq{
          margin-left: auto;
          text-decoration: underline;
        }
        main{
          margin-right: 15%;
          margin-left: 15%;
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
}

export default MyApp
