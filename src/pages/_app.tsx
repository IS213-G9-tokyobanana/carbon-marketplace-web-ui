import type { AppProps } from 'next/app';
import Head from 'next/head';
import styled from 'styled-components';
import 'react-widgets/styles.css';

import 'globals.css';
import fonts from 'fonts';

import Header from 'components/Header';
import { color } from 'config';

const App = styled.main`
  --header-height: 70px;
  --font-inter: ${fonts.inter.style.fontFamily};

  * {
    font-family: ${fonts.dmSans.style.fontFamily};
  }

  .rw-cell.rw-state-selected {
    background: ${color.neutral10};
    border-color: ${color.neutral10};
  }
`;

export default ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>{/* <title>Enter site title here</title> */}</Head>

      <App>
        <Header />

        <Component {...pageProps} />
      </App>
    </>
  );
};
