import { GlobalStyles } from "./styles/GlobalStyles";

import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import { useEffect } from "react";
import { useHomeStore } from "./store/home";
import { Toaster } from "react-hot-toast";
//components
import { Navbar } from "./components";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";

function App() {
  const { setGenres, setImagesUrl } = useHomeStore((state) => state);

  useEffect(
    function () {
      setImagesUrl();
      setGenres();
    },
    [setImagesUrl, setGenres],
  );

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />
        <Banner />
        <Routes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
