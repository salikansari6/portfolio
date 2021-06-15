import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="py-20 min-h-screen">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
