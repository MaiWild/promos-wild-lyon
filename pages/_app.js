import React, { useEffect } from 'react';
import { Container, ThemeProvider } from '@material-ui/core';
import { config } from '@fortawesome/fontawesome-svg-core';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Footer } from '../src/components/footer.component';
import theme from '../src/theme';

import '@fortawesome/fontawesome-svg-core/styles.css';
import '../src/icons';

config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Component {...pageProps} />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
