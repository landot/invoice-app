import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import Theme from './styles/themeProvider'
import GlobalStyle from './styles/globalStyles'
import { InvoicesPage } from './pages/InvoicesPage'
import { ViewInvoicePage } from './pages/ViewInvoicePage'
import { Provider } from 'react-redux'
import { store } from "../app/store"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Theme>
      <GlobalStyle />
      <React.StrictMode>
          <BrowserRouter>
            <Routes>
                <Route path='*' element={<p>Page not found</p>}/>
                <Route path="/" element={<Layout />}>
                  <Route index element={<InvoicesPage />} errorElement={<p>error</p>}/>
                  <Route path="/:id" element={<ViewInvoicePage />} errorElement={<p>error</p>}/>
                </Route>
            </Routes>
          </BrowserRouter>
      </React.StrictMode>
    </Theme>
  </Provider>
)
