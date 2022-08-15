
import { Book, tag } from '../types'
export const BookElem = ({ name, hash, path }: Book) => (
    <p><a href={"https://ipfs.io/ipfs/" + hash} >{name}</a></p>
);
export const TagElem = ({ path }: tag) => (
    <p><a href={'/tag/' + path.replace('/', '&')} >{path} </a></p>
);