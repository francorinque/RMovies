import { GlobalStyles } from './styles/GlobalStyles'

import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/Routes'

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  )
}

export default App
