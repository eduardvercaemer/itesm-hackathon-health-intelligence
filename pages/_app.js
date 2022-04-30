import "../styles/globals.css";
import "../styles/bootstrap.min.css";
import Head from "next/head";
import MainNav from "../components/main-nav";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Hackathon</title>
        <meta name="description" content="Hackathon Web Prototype" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainNav />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
