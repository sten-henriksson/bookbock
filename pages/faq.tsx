function faq() {
  // will resolve posts to type Post[]6
  return (
    <div>
      <main>
        <h1>
          {"Why?"}
        </h1>
        <p>
          Created this after thetrove got shut down and most of the tabletop rpg books i want requires some effort to find.
        </p>
        <h1>
          Is this legal?
        </h1>
        <p>
          Nothing is hosted on this site and all books are retrieved from ipfs
        </p>
        <h1>
          What is ipfs?
        </h1>
        <p>
          A peer to peer network for sharing data.
        </p>
        <h1>
          I cant load pdf
        </h1>
        <p>
          recommend to use ipfs <a href="https://docs.ipfs.tech/install/ipfs-desktop/">desktop</a> and the browser extension.
        </p>
      </main>
      <style jsx global>{`
          
        `}</style>
    </div>
  )
}
export default faq
