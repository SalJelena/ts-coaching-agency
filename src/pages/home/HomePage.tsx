import Card from "../../components/UI/card/Card";
import List from "../../components/UI/list/List";
import useSessions from "../../hooks/useSessions";
import ErrorPage from "../error/ErrorPage";

export default function HomePage() {
  const { data, isLoading, error } = useSessions()
  
  if (error) return <ErrorPage />

  if (isLoading) return <p>Loading...</p>

  return (
    <main id="home-page">
      {data && <List items={data} number={4} renderItem={(session) => <Card key={session.id} el={session} />} />}
    </main>
  );
}
