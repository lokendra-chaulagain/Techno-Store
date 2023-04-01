import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap");
  }, []);

  return (
    <Provider store={store}>
      <div className="app_min_height">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </Provider>
  );
}

export default MyApp;
