import { useParams } from 'react-router-dom';
import useSession from '../../hooks/useSession';
import ErrorPage from '../error/ErrorPage';

export default function SessionPage() {
  const params = useParams<{ id: string }>();

  const sessionId = params.id;
  const { data: session, isLoading, error } = useSession(sessionId!)

  if (isLoading) return <p>Loading...</p>

  if (error || !session) return <ErrorPage />

  return (
    <main id="session-page">
      <article>
        <header>
          {/* <img
            src={loadedSession.image}
            alt={loadedSession.title}
          /> */}
          <div>
            <h2>{session.title}</h2>
            <time dateTime={new Date(session.date).toISOString()}>
              {new Date(session.date).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </time>
            <p>
              {/* Todo: Add button that opens "Book Session" dialog / modal */}
            </p>
          </div>
        </header>
        <p id="content">{session.description}</p>
      </article>
    </main>
  );
}
