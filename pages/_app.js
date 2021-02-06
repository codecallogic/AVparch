import '../styles/app.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <>
      <title>Arthur Pristupa</title>
      <link rel="stylesheet" href="https://use.typekit.net/fwx5kic.css"></link>
      {/* <link rel="stylesheet" href="https://use.typekit.net/fwx5kic.css"></link> */}
      </>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
