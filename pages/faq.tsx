function faq() {
  // will resolve posts to type Post[]6
  return (
    <div>
      <main>
        <h1>
          {"Why?"}
        </h1>
        <p>
          Made for my tabletop rpg group collection of books. One place to find them all and accessible over mobile.
        </p>
        <h1>
          Is this legal?
        </h1>
        <p>
          Nothing is hosted on this website or its servers. Buuut probably yes but its made for a private community if your not in it don't click any downloads
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
         I recommend to use ipfs <a href="https://docs.ipfs.tech/install/ipfs-desktop/">desktop</a> and the browser extension. Otherwise the gateway can be down and not really anything you can do about that.
        </p>
      </main>
      <style jsx global>{`
          
        `}</style>
    </div>
  )
}
export default faq
