import "../styles/globals.css";
import { useState } from "react";
import CustomRouter from "../components/CustomRouter";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //You'll need to manage the isLoggedIn state

  return (
    <>
      <CustomRouter isLoggedIn={isLoggedIn} />
      <Header isLoggedIn={isLoggedIn} />
      <Component
        {...pageProps}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <Footer />
    </>
  );
}

export default MyApp;
