import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import Theme from './styles/themeProvider'
import GlobalStyle from './styles/globalStyles'
import { InvoicesPage } from './pages/InvoicesPage'
import { ViewInvoicePage } from './pages/ViewInvoicePage'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Theme>
    <GlobalStyle />
    <React.StrictMode>
        <BrowserRouter>
          <Routes>
              <Route path='*' element={<p>Page not found</p>}/>
              {/* layout with sidebar */}
              <Route path="/" element={<Layout />}>
                {/* invoice list page */}
                <Route index element={<InvoicesPage />} errorElement={<p>error</p>}/>
                {/* <Route index element={<InvoicesPage />} errorElement={<p>error</p>}/> */}
                {/* view invoice page */}
                <Route path="/:id" element={<ViewInvoicePage />} errorElement={<p>error</p>}/>
              </Route>
          </Routes>
        </BrowserRouter>
    </React.StrictMode>
  </Theme>
)
