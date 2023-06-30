import { InvoiceStatus } from "./components/InvoiceStatus"
import GlobalStyle from "./styles/globalStyles"
import { HeadingS } from "./styles/header/HeadingS.styles"
import Theme from "./styles/themeProvider"


function App() {
  return (
    <Theme>
      <div id='app'>
        <GlobalStyle />
        <p>Vite</p>
        <HeadingS>asdf</HeadingS>
        <InvoiceStatus type='draft'/>
        <InvoiceStatus type='paid'/>
        <InvoiceStatus type='pending'/>
      </div>
    </Theme>
  )
}

export default App
