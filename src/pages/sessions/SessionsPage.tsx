import useSessions from "../../hooks/useSessions";

export default function SessionsPage() {
  const { data, error } = useSessions()
  console.log(data);
  
  if (error) return <p>{error.message}</p>
  
  
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
      <ul>
        {data?.map(session => <li key={session.id}>{session.title}</li>)}
      </ul>
    </main>
  );
}
