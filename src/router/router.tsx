import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import HomePage from "../pages/home/HomePage";
import SessionPage from "../pages/session/SessionPage";
import SessionsPage from "../pages/sessions/SessionsPage";
import ErrorPage from "../pages/error/ErrorPage";

export const Router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        { path: 'sessions', element: <SessionsPage /> },
        { path: 'sessions/:id', element: <SessionPage /> }
      ],
    },
]);