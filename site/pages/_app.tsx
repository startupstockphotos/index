import App from "next/app";
import { ThemeProvider } from "styled-components";

import { theme } from "../lib/theme";

export default class Root extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
