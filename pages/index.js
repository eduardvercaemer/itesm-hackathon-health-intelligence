import Head from "next/head";
import MainNav from "../components/main-nav";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const UserData = () => {
  const { error, data } = useSWR("/api/user", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <ul>
      {data.data.map((user) => (
        <li key={user.username}>{user.username}</li>
      ))}
    </ul>
  );
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hackathon</title>
        <meta name="description" content="Hackathon Web Prototype" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainNav />
      <main>
        <UserData />
      </main>
    </div>
  );
}
