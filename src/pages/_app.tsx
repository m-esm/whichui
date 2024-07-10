import "whichui/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

export type NextPageWithLayout<Props>= {
  getLayout?: (page: ReactElement) => ReactNode ;
};


type AppPropsWithLayout<Props> = AppProps & {
  Component: NextPageWithLayout<Props>;
};
export default function App({ Component, pageProps }: AppPropsWithLayout<NextPage>) {
  const getLayout = Component.getLayout ?? (page => page)
  return getLayout(<Component {...pageProps} />);
}