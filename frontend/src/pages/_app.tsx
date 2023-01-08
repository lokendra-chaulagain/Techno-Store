import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import NavTop from "../components/Navbar/NavTop";
import NavMiddle from "../components/Navbar/NavMiddle";
import Footer from "../components/Footer";
import NavBottom from "../components/Navbar/NavBottom";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap");
  }, []);
  return (
    <Provider store={store}>
      <div className="app_min_height">
        {/* <NavTop /> */}
        {/* <NavBottom /> */}
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  );
}

export default MyApp;
