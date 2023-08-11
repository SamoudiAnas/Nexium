import CommonLayout from "@/layouts/CommonLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import { store } from "@/store";
import "@/styles/globals.css";
import { isDashboardLayout } from "@/utils/getLayout";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <Provider store={store}>
      <div className="bg-white">
        <Head>
          <title>Restaurant Project | Samoudi Anas</title>

          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-REWV2S4TZ3"
          ></Script>
          <Script>
            {` 
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-REWV2S4TZ3');
            `}
          </Script>
        </Head>

        {isDashboardLayout(pathname) ? (
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        ) : (
          <CommonLayout>
            <Component {...pageProps} />
          </CommonLayout>
        )}
      </div>
    </Provider>
  );
}
