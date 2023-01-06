import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import NavTop from "../components/Navbar/NavTop";
import NavMiddle from "../components/Navbar/NavMiddle";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap");
  }, []);
  return (
    <div >
      <NavTop />
      <NavMiddle/>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
