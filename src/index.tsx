import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import "./i18n/i18n";
import PoetPage from './pages/poets/PoetPage'
import PoetsListPage from './pages/poets/PoetsListPage'

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
  },
  {
    element: <PoetPage />,
    path: "/about",
  },
  {
    element: <PoetPage />,
    path: "/developers",
  },
  {
    element: <PoetPage />,
    path: "/github",
  },
  {
    element: <PoetsListPage />,
    path: "/poets",
  },
  {
    element: <PoetPage />,
    path: "/poet/:id",
  },
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Suspense fallback="Loading ...">
      {" "}
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
)


