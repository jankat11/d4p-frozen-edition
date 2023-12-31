import "@/styles/globals.css";
import "@/styles/animations.css";
import "react-multi-carousel/lib/styles.css";
import Head from "next/head";
import Layout from "@/components/Layout";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics />
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossorigin=""
        />
        <meta charset="UTF-8" />
        <title>design4theplanet</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Inspired by the healing power of art, d4p is an up-cycling workshop that designs products by blending waste materials with nature-friendly materials."
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
