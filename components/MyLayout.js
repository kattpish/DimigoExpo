import Head from 'next/head'

export default ({ children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link href="https://fonts.googleapis.com/css?family=Righteous&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap" rel="stylesheet"></link>
    </Head>
    { children }
    <style jsx global>{`
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            margin: 0;
            width: 100vw;
            height: 100vh;
            overflow-x: hidden;
            background-color: #252423;
            font-family: 'Nanum Gothic', sans-serif;
        }`}
    </style>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js"></script>
  </div>
)