import { GlobalStyles } from './styles/GlobalStyles'

import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/Routes'
import { useEffect } from 'react'
import { useHomeStore } from './store/home'
//components
import { Layout, Navbar } from './components'

function App() {
  const { setImagesUrl } = useHomeStore((state) => state)

  useEffect(
    function () {
      setImagesUrl()
    },
    [setImagesUrl]
  )

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
