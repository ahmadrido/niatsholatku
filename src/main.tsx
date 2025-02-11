import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NiatSholatFardhu from './assets/pages/niatSholatFardhu.tsx'
import ErrorPage from './assets/pages/404.tsx'
import IslamicNews from './assets/pages/islamiNews.tsx'
import NiatSholatSunnah from './assets/pages/niatSholatSunnah.tsx'
import PanduanSholat from './assets/pages/panduanSholat.tsx'
import DoaSetelahSholat from './assets/pages/doaSetelahSholat.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/niat-sholat-fardhu',
    element: <NiatSholatFardhu />,
  },
  {
    path: '/islami-news',
    element: <IslamicNews />,
  },
  {
    path: 'niat-sholat-sunnah',
    element: <NiatSholatSunnah />,
  },
  {
    path: 'panduan-sholat',
    element: <PanduanSholat />,
  },
  {
    path: 'doa-setelah-sholat',
    element: <DoaSetelahSholat />,
  }

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
