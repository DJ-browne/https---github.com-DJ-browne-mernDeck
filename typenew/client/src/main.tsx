import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Deck from './Deck.tsx'

const router = createBrowserRouter([{
  path:'/',
  element:<App/>
},
{
  path:'/decks/:id',
  element: <Deck/>
}
],
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)