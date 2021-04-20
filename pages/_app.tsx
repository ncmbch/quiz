import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import { config, dom } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

export default function QuizApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <style>{dom.css()}</style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
