import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, useRouteError } from 'react-router-dom'
import SearchBar from './Component/Searchbar/SearchBar.jsx'

const router = createBrowserRouter([
  {
    path: "/SearchBar",
    element: <SearchBar/>,
    errorElement: <p>Erreur</p>,
  },
  {
    path: "/grid",
    element: <p>pelo</p>,
    errorElement: <p>Erreur de pelo</p>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
