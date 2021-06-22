import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Layout from "../components/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useContext } from "react";
import { SnackbarContextProvider } from "../contexts/SnackbarContext";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);

  return (
    <SnackbarContextProvider>
      <Layout>
        <div className="py-20 lg:py-24 xl:py-36 min-h-screen">
          <Component {...pageProps} />
        </div>
      </Layout>
    </SnackbarContextProvider>
  );
}

export default MyApp;
