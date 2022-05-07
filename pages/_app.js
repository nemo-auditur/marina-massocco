import "../styles/globals.css";
import styles from '../styles/Index.module.css'
import Header from "../components/Header/header";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header theme="black" />
    <AnimateSharedLayout exitBeforeEnter initial={false}>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </>
  );
}

export default MyApp;
