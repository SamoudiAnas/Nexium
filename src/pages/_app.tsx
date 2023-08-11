import CommonLayout from "@/layouts/CommonLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import { store } from "@/store";
import "@/styles/globals.css";
import { isDashboardLayout } from "@/utils/getLayout";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <Provider store={store}>
      <div className="bg-white">
        <Head>
          <title>Restaurant Project | Samoudi Anas</title>
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
