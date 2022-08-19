export type Book = {
    name: string
    hash: string
    path: string
}
export type ApiCall = {
    books: Book[]
    pages: Number
}
export type tag = {
    path: string
}
export type footerParam = {
    url: string
    total_pages: string
    current_page: string

}