import './global.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { Gallery } from '@/pages/app/gallery.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Gallery />
  </React.StrictMode>,
)
