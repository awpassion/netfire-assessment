import GlobalJSXStyle from "@/components/GlobalJSXStyle";
import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalJSXStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
