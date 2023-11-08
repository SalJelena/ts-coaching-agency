import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import HomePage from "../pages/Home";
import SessionPage from "../pages/Session";
import SessionsPage from "../pages/Sessions";

export const Router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        { path: 'sessions', element: <SessionsPage /> },
        { path: 'sessions/:id', element: <SessionPage /> },
      ],
    },
]);