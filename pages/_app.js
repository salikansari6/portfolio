import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="pt-20">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
