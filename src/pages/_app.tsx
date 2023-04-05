import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap");
  }, []);

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  );
}

export default MyApp;
