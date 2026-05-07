import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import PlayerNames from './components/PlayerNames.tsx'
import Game from './components/Game.tsx'
import GridType from './components/GridType.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/input-names/:numPlayers', 
    element: <PlayerNames />
  },
  {
    path: '/grid-type',
    element: <GridType />
  },
  {
    path: '/game',
    element: <Game />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
