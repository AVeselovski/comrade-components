import { createGlobalStyle } from "styled-components";
import { darken } from "polished";
import themes from "./theme";

const defaultTheme = themes["light"];

const GlobalStyle = createGlobalStyle`
  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }
  body {
    margin: 0;
  }
  main {
    display: block;
  }
  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }
  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  a {
    background-color: transparent;
  }
  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
  }
  button,
  input { /* 1 */
    overflow: visible;
  }
  button,
  select { /* 1 */
    text-transform: none;
  }
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }
  progress {
    vertical-align: baseline;
  }
  textarea {
    overflow: auto;
  }
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }
  details {
    display: block;
  }
  summary {
    display: list-item;
  }
  template {
    display: none;
  }
  [hidden] {
    display: none;
  }

  /* Inherit box-sizing to more easily change it's value on a component level.
  * @link http://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/
  */

  html {
    box-sizing: border-box;
    font-size: ${({ theme }) => (theme && theme.baseFontSize) || defaultTheme.baseFontSize};
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({ theme }) => (theme && theme.colors.bg) || defaultTheme.colors.bg};
    color: ${({ theme }) => (theme && theme.colors.text) || defaultTheme.colors.text};
    font-family: ${({ theme }) => (theme && theme.fonts.base) || defaultTheme.fonts.base};
    line-height: 1.5;
    min-height: 100vh;
    overflow-x: hidden;
    transition: background-color ${({ theme }) => (theme && theme.transition) || defaultTheme.transition},
      color ${({ theme }) => (theme && theme.transition) || defaultTheme.transition};
  }
  p {
    font-size: ${({ theme }) => (theme && theme.fontSize.base) || defaultTheme.fontSize.base};
    font-weight: ${({ theme }) => (theme && theme.fontWeight.base) || defaultTheme.fontWeight.base};
    margin-bottom: ${({ theme }) => (theme && theme.space[3]) || defaultTheme.space[3]};
  }
  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
  }
  h1 {
    font-size: ${({ theme }) => (theme && theme.fontSize.xxxl) || defaultTheme.fontSize.xxxl};
    font-weight: ${({ theme }) => (theme && theme.fontWeight.base) || defaultTheme.fontWeight.base};
    margin-bottom: ${({ theme }) => (theme && theme.space[3]) || defaultTheme.space[3]};
    margin-top: 0;
  }
  h2 {
    font-size: ${({ theme }) => (theme && theme.fontSize.xxl) || defaultTheme.fontSize.xxl};
    font-weight: ${({ theme }) => (theme && theme.fontWeight.chunky) || defaultTheme.fontWeight.chunky};
    margin-bottom: ${({ theme }) => (theme && theme.space[3]) || defaultTheme.space[3]};
    margin-top: 0;
  }
  h3 {
    font-size: ${({ theme }) => (theme && theme.fontSize.xl) || defaultTheme.fontSize.xl};
    font-weight: ${({ theme }) => (theme && theme.fontWeight.chunky) || defaultTheme.fontWeight.chunky};
    margin-bottom: ${({ theme }) => (theme && theme.space[3]) || defaultTheme.space[3]};
    margin-top: 0;
  }
  h4 {
    font-size: ${({ theme }) => (theme && theme.fontSize.lg) || defaultTheme.fontSize.lg};
    font-weight: ${({ theme }) => (theme && theme.fontWeight.chunky) || defaultTheme.fontWeight.chunky};
    margin-bottom: ${({ theme }) => (theme && theme.space[3]) || defaultTheme.space[3]};
    margin-top: 0;
  }
  h5,
  h6 {
    font-size: ${({ theme }) => (theme && theme.fontSize.md) || defaultTheme.fontSize.md};
    font-weight: ${({ theme }) => (theme && theme.fontWeight.chunky) || defaultTheme.fontWeight.chunky};
    margin-bottom: ${({ theme }) => (theme && theme.space[3]) || defaultTheme.space[3]};
    margin-top: 0;
  }
  h1 {
    small {
      color: ${({ theme }) => (theme && theme.colors.secondary) || defaultTheme.colors.secondary};
      font-size: 100%;
      font-weight: ${({ theme }) => (theme && theme.fontWeight.thin) || defaultTheme.fontWeight.thin};
    }
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    small {
      color: ${({ theme }) => (theme && theme.colors.secondary) || defaultTheme.colors.secondary};
      font-size: 100%;
      font-weight: ${({ theme }) => (theme && theme.fontWeight.slim) || defaultTheme.fontWeight.slim};
    }
  }
  a {
    color: ${({ theme }) => (theme && theme.colors.link) || defaultTheme.colors.link};
    fill: ${({ theme }) => (theme && theme.colors.link) || defaultTheme.colors.link};
    display: inline-block;
    stroke: ${({ theme }) => (theme && theme.colors.link) || defaultTheme.colors.link};
    text-decoration: none;
  }
  a:hover,
  a:focus,
  a:active {
    color: ${({ theme }) => (theme && theme.colors.linkActive) || defaultTheme.colors.linkActive};
    fill: ${({ theme }) => (theme && theme.colors.link) || defaultTheme.colors.linkActive};
    stroke: ${({ theme }) => (theme && theme.colors.link) || defaultTheme.colors.linkActive};
    text-decoration: none;
  }
  a.active {
    color: ${({ theme }) => (theme && theme.colors.linkActive) || defaultTheme.colors.linkActive};
    fill: ${({ theme }) => (theme && theme.colors.link) || defaultTheme.colors.linkActive};
    stroke: ${({ theme }) => (theme && theme.colors.link) || defaultTheme.colors.linkActive};
  }
  p a {
    text-decoration: underline;

    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }
  svg {
    fill: ${({ theme }) => (theme && theme.colors.text) || defaultTheme.colors.text};
    stroke: ${({ theme }) => (theme && theme.colors.text) || defaultTheme.colors.text};
  }
  ul,
  ol {
    display: block;
    margin-top: ${({ theme }) => (theme && theme.space[3]) || defaultTheme.space[3]};
    margin-bottom: ${({ theme }) => (theme && theme.space[3]) || defaultTheme.space[3]};
    padding-left: ${({ theme }) => (theme && theme.space[4]) || defaultTheme.space[4]};
  }
  ul li::marker,
  ol li::marker {
    color: ${({ theme }) => (theme && theme.colors.secondary) || defaultTheme.colors.secondary};
  }
  code {
    color: ${({ theme }) => (theme && theme.colors.code) || defaultTheme.colors.code};
  }
`;

export default GlobalStyle;
