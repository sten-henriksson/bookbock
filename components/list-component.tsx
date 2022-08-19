
import { Book, tag, footerParam } from '../types'
import { useForm, SubmitHandler } from "react-hook-form";
import Link from 'next/link'
import { useRouter } from 'next/router'
export const BookElem = ({ name, hash, path }: Book) => (
    <p><a target={"_blank"} href={"https://ipfs.io/ipfs/" + hash + "?filename=" + name} >{name}</a></p>
);
export const TagElem = ({ path }: tag) => (
    <p> <Link href={`/tag/${path.toString().replace(/\//g, '_')}?page=1`} >{path}</Link> </p>
);

export const footerPageSelector = ({ total_pages, current_page, url: searchTerm }: footerParam) => {
    const router = useRouter()
    type FormValues = {
        page: string;
    };
    const { handleSubmit } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = data => {
        if (data.page) {
            router.push(`${searchTerm}?page=${data.page}`)
        }
    };
    return (
        <footer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div id='page_container'>
                    <Link href={`${searchTerm}?page=${(parseInt(current_page) - 1).toString()}`}><p id='nav_button_left'><b> {"<"}</b></p></Link>
                    <p>{current_page + "/" + total_pages}</p>
                    <Link href={`${searchTerm}?page=${(parseInt(current_page) + 1).toString()}`}><p id='nav_button_right'><b>{">"}</b></p></Link>
                </div>
            </form>
            <style jsx global>{`
                footer{
                    position: fixed;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    color: white;
                    text-align: center;
                }
                #nav_button_left{
                    margin-right: 5px;
                    border-radius: 5px;
                    border-width: 1px;
                    padding: 2px;
                    border-color: white;
                    border-style: solid;
                    color: white;
                    font-size: larger;
                    font-family: Georgia, 'Times New Roman', Times, serif;
                }
                #nav_button_right{
                    margin-left: 5px;
                    border-radius: 5px;
                    border-width: 1px;
                    padding: 2px;
                    border-color: white;
                    border-style: solid;
                    color: white;
                    font-size: larger;
                    font-family: Georgia, 'Times New Roman', Times, serif;
                }
                #page_container{
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                #pagecontainer p{
                    
                }
        `}</style>
        </footer>
    )
};