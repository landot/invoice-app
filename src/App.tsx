import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "../app/store";
import { Layout } from "./components/Layout";
import { InvoicesPage } from "./pages/InvoicesPage";
import { ViewInvoicePage } from "./pages/ViewInvoicePage";
import GlobalStyle from "./styles/globalStyles";
import Theme from "./styles/themeProvider";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  return (
    <Provider store={store}>
      <Theme>
        <GlobalStyle />
        <React.StrictMode>
          <BrowserRouter>
            <Routes>
              <Route path="*" element={<p>Page not found</p>} />
              <Route path="/" element={<Layout />}>
                <Route index element={<InvoicesPage />} />
                <Route path="/:id" element={<ViewInvoicePage />} />
                <Route path="/error" element={<ErrorPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </React.StrictMode>
      </Theme>
    </Provider>
  );
}

export default App;
