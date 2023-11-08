import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import HomePage from "../pages/HomePage";
import SessionPage from "../pages/SessionPage";
import SessionsPage from "../pages/SessionsPage";

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