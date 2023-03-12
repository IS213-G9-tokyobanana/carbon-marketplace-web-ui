import type { AppProps } from 'next/app';
import Head from 'next/head';
import styled from 'styled-components';

import 'globals.css';
import fonts from 'fonts';

import Header from '../components/Header';


const App = styled.main`
  * {
    font-family: ${fonts.dmSans.style.fontFamily};
  }
`;

export default ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        {/* <title>Enter site title here</title> */}
      </Head>

      <App>
        <Header />

        <Component {...pageProps} />
      </App>
    </>
  );
}