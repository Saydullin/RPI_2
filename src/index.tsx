import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import PoetPage from './pages/poets/PoetPage'
import PoetsListPage from './pages/poets/PoetsListPage'

import "./i18n";
import ErrorPage from './pages/error/ErrorPage'
import NotFoundPage from './pages/error/NotFoundPage'
import DevelopersPage from './pages/developers/DevelopersPage'

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    element: <App />,
    path: "/RPI_2",
  },
  {
    errorElement: <ErrorPage />,
    element: <DevelopersPage />,
    path: "/RPI_2/developers",
  },
  {
    errorElement: <ErrorPage />,
    element: <PoetPage />,
    path: "/RPI_2/github",
  },
  {
    errorElement: <ErrorPage />,
    element: <PoetsListPage />,
    path: "/RPI_2/poets",
  },
  {
    errorElement: <ErrorPage />,
    element: <PoetPage />,
    path: "/RPI_2/poet/:id",
  },
  {
    errorElement: <ErrorPage />,
    element: <NotFoundPage />,
    path: "/RPI_2/*",
  },
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)


