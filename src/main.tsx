import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from '@/routes/AppRoute'
import Layout from '@/components/layout/layout'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Layout>
    <React.StrictMode>
      <AppRoutes />
    </React.StrictMode>
  </Layout>
)
