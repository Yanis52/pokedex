import React from "react";
import ReactDOM from "react-dom/client";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./Component/ErrorPage/ErrorPage.jsx";
import HomePage from "./Pages/HomePage.jsx";
import Pokedex from "./Pages/Pokedex.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/Homepage" replace={true} />, // Rediriger de "/" vers "/Homepage"
      },
      {
        path: "pokedex",
        element: <Pokedex />,
      },
      {
        path: "Homepage",
        element: <HomePage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
