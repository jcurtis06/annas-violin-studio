import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
