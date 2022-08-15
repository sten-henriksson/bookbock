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
      router.push('/search/' + data.search.replace('/', '&'))
    }
  };
  return <div><nav>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Link href="/"><h1 id='nav_button'>🐉</h1></Link>
      <input {...register("search")} placeholder="seach" />
    </form>
  </nav>
    <Component {...pageProps} />
    <style jsx global>{`
    form{
        display: flex;
        flex-direction: row ;
        }
        nav{
          padding: 5px;
          border-bottom-style: solid;
          border-width: 1px;
          border-color: red;
        }
        h1{
          margin-left: 15px;
          margin-right: 15px;
          font-size: 40px;
          margin: -5px;
          margin-left: 5px;
          margin-right: 5px;
          color: inherit;
          text-decoration: inherit;
          cursor: pointer;
        }
        main{
          margin-right: 15%;
          margin-left: 15%;
        }
    `}</style>
  </div>
}

export default MyApp
