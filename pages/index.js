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
      <h1>Home</h1>
    </div>
  );
}
