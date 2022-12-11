import React from 'react'
import { HashRouter } from 'react-router-dom'
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
    path: "/RPI_2",
  },
  {
    element: <PoetPage />,
    path: "/RPI_2/about",
  },
  {
    element: <PoetPage />,
    path: "/RPI_2/developers",
  },
  {
    element: <PoetPage />,
    path: "/RPI_2/github",
  },
  {
    element: <PoetsListPage />,
    path: "/RPI_2/poets",
  },
  {
    element: <PoetPage />,
    path: "/RPI_2/poet/:id",
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


