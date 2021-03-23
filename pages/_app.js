import '../styles/app.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <>
      <title>AVP Architecture</title>
      <link rel="stylesheet" type="text/javascript" href="https://i.imgur.com/gDGDlfr.png"></link>
      <meta property="og:image" content="https://i.imgur.com/W2xHRle.png"/>
      <meta name="description" content="Specializing in residential design, building permits, plan sets, graphic design, and 3D visual rendering type work."></meta>
      {/* <link rel="stylesheet" href="https://use.typekit.net/fwx5kic.css"></link> */}
      </>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
