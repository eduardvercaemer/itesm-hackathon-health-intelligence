import Head from "next/head";
import { useEffect, useState } from "react";
import MainNav from "../components/main-nav";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  let content;
  if (loading) {
    content = <p>Loading...</p>;
  } else {
    content = (
      <ul>
        {data.map((user) => (
          <li key={user.username}>{user.username}</li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <Head>
        <title>Hackathon</title>
        <meta name="description" content="Hackathon Web Prototype" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainNav />
      <main>{content}</main>
    </div>
  );
}
