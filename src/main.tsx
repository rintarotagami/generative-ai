import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from '@/routes/AppRoute'
import Layout from '@/components/layout/layout'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
)
