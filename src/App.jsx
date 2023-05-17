import { GlobalStyles } from './styles/GlobalStyles'

import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/Routes'
import { Layout, Navbar } from './components'

// import { useEffect } from 'react'

function App() {
  // useEffect(function () {
  // }, [])

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
