import Card from "../../components/UI/card/Card";
import List from "../../components/UI/list/List";
import useSessions from "../../hooks/useSessions";
import ErrorPage from "../error/ErrorPage";

export default function SessionsPage() {
  const { data, isLoading, error } = useSessions()
  
  if (error) return <ErrorPage />

  if (isLoading) return <p>Loading...</p>
  
  return (
    <main id="sessions-page">
      <header>
        <h2>Available mentoring sessions</h2>
        <p>
          From an one-on-one introduction to React's basics all the way up to a
          deep dive into state mechanics - we got just the right session for
          you!
        </p>
      </header>
      {data && <List items={data} renderItem={(session) => <Card key={session.id} el={session} />} />}
    </main>
  );
}
