/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import theme from 'src/theme';
import GlobalStyle from 'src/theme/GlobalStyle';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      @import url('https://fonts.googleapis.com/css?family=Open+Sans');
    </Head>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;
