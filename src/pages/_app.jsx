import Layout from '@/components/Layout'
import '@/styles/globals.css'
import App from "next/app";

//loaded on all pages
//corresponding to wordpress' template
//shared layout for multiple pages with Component tag being all the html and js
export default function MyApp({ Component, pageProps, navData }) {
  return <Layout navData={navData}>
    <Component {...pageProps} />
    </Layout>
}
//getInitialProps - old way of fetching, for now in order to do server-sode fetching inside _app.
//useful if needed to populate pages with data, ex our global layout.
MyApp.getInitialProps = async (appContext) => {
  // Provide the appContext, in order to do 404's
  const appProps = await App.getInitialProps(appContext);
  const res = await fetch('https://kea-alt-del.dk/t7/api/products');
  const navData = await res.json();
  return { ...appProps, navData };
};