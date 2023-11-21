import { GlobalStyles } from "./styles/GlobalStyles"

import { BrowserRouter } from "react-router-dom"
import Routes from "./routes/Routes"
import { useEffect } from "react"
import { useHomeStore } from "./store/home"
//components
import { Layout, Navbar } from "./components"
import Footer from "./components/Footer/Footer"

function App() {
  const { setGenres, setImagesUrl } = useHomeStore((state) => state)

  useEffect(
    function () {
      setImagesUrl()
      setGenres()
    },
    [setImagesUrl, setGenres]
  )

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />
        <Layout>
          <Routes />
          <Footer />
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
