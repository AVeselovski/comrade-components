import { createGlobalStyle } from "styled-components";
import { darken } from "polished";
import themes from "./theme";

const defaultTheme = themes["light"];

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: ${({ theme }) => (theme && theme.baseFontSize) || defaultTheme.baseFontSize};
  }
	*,
	*:before,
	*:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
	}
  body {
    background-color: ${({ theme }) => (theme && theme.colors.bg) || defaultTheme.colors.bg};
    color: ${({ theme }) => (theme && theme.colors.color) || defaultTheme.colors.color};
    font-family: ${({ theme }) => (theme && theme.fontFamily) || defaultTheme.fontFamily};
    line-height: 1.5;
    min-height: 100vh;
    overflow-x: hidden;
    transition: background-color ${({ theme }) => (theme && theme.transition) || defaultTheme.transition},
      color ${({ theme }) => (theme && theme.transition) || defaultTheme.transition};
  }
  p {
   font-size: ${({ theme }) => (theme && theme.fontSize.base) || defaultTheme.fontSize.base};
   font-weight: ${({ theme }) => (theme && theme.fontWeight.base) || defaultTheme.fontWeight.base};
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: ${({ theme }) => (theme && theme.fontSize.m) || defaultTheme.fontSize.m};
    font-weight: ${({ theme }) => (theme && theme.fontWeight.m) || defaultTheme.fontWeight.m};
    line-height: 1.2;

    strong {
      font-weight: ${({ theme }) => (theme && theme.fontWeight.xxxl) || defaultTheme.fontWeight.xxxl};
    }
  }
  a {
    color: ${({ theme }) => (theme && theme.colors.link) || defaultTheme.colors.link};
    text-decoration: none;
  }
  a:hover, a:focus, a:active {
    color: ${({ theme }) =>
      (theme && darken(0.1, theme.colors.link)) || darken(0.1, defaultTheme.colors.link)};
    text-decoration: none;
  }
  svg {
    fill: ${({ theme }) => (theme && theme.colors.black) || defaultTheme.colors.black};
    stroke: ${({ theme }) => (theme && theme.colors.black) || defaultTheme.colors.black};
  }
  ul {
    display: block;
    margin-top: ${({ theme }) => (theme && theme.space[3]) || defaultTheme.space[3]};
    margin-bottom: ${({ theme }) => (theme && theme.space[3]) || defaultTheme.space[3]};
    padding-left: ${({ theme }) => (theme && theme.space[4]) || defaultTheme.space[4]};
  }
`;

export default GlobalStyle;
