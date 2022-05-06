import "../styles/globals.css";
import Header from "../components/Header/header";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header theme="white" />
      <AnimateSharedLayout exitBeforeEnter initial={false}>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    
    </>
  );
}

export default MyApp;
