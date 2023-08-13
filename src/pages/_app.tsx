import "@/styles/globals.css";

import { store } from "@/store";
import type { AppProps } from "next/app";

import Head from "next/head";
import Script from "next/script";

import { Provider } from "react-redux";
import { useRouter } from "next/router";

import CommonLayout from "@/layouts/CommonLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import { isDashboardLayout } from "@/utils/getLayout";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <title>Nexium | Samoudi Anas</title>
      </Head>
      <Script
        async
        id="analytics"
        src="https://www.googletagmanager.com/gtag/js?id=G-REWV2S4TZ3"
      ></Script>
      <Script id="analytics-script">
        {` 
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-REWV2S4TZ3');
            `}
      </Script>

      <div className="bg-white">
        <Provider store={store}>
          {isDashboardLayout(pathname) ? (
            <DashboardLayout>
              <Component {...pageProps} />
            </DashboardLayout>
          ) : (
            <CommonLayout>
              <Component {...pageProps} />
            </CommonLayout>
          )}
        </Provider>{" "}
      </div>
    </>
  );
}
