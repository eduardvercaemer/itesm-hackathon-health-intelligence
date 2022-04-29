import Head from "next/head";
import MainNav from "../components/main-nav";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hackathon</title>
        <meta name="description" content="Hackathon Web Prototype" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainNav />
    </div>
  );
}
