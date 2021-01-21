import React from "react";
import { ThemeProvider } from "styled-components";
// utils
import theme from "./theme";
import GlobalStyle from "./styles";

const StyleGuideWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default StyleGuideWrapper;
