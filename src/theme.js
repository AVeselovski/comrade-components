import { lighten, rem } from "polished";

/**
 * Variables in singular for single values and shallow objects ("fontSize.m").
 * Variables in plural may contain an array or object containing arrays.
 */

// ** COLORS **

const white = "#FAFAFA";
const grey0 = "#F2F2F2";
const grey1 = "#EBEBEC";
const grey2 = "#E1E1E2";
const grey3 = "#BFBFC0";
const grey4 = "#747475";
const grey5 = "#565657";
const grey6 = "#313132";
const black = "#1D1D1E";
const pitchBlack = "#000";

const blue0 = "#7BCCE5";
const blue1 = "#51AFCC";
const blue2 = "#2493B5";
const blue3 = "#1F7E9B";
const blue4 = "#1B6D85";

const green0 = "#80C780";
const green1 = "#5CB85C";
const green2 = "#449D44";
const green3 = "#357935";
const green4 = "#296029";

const red0 = "#D86F6C";
const red1 = "#D9534F";
const red2 = "#CC322C";
const red3 = "#B22520";
const red4 = "#93211D";

const yellow0 = "#F9B548";
const yellow1 = "#FAA825";
const yellow2 = "#E79005";
const yellow3 = "#CC7D00";
const yellow4 = "#B56F00";

const colors = {
  white,
  black,
  pitchBlack,
  grey: [grey0, grey1, grey2, grey3, grey4, grey5, grey6],
  blue: [blue0, blue1, blue2, blue3, blue4],
  green: [green0, green1, green2, green3, green4],
  red: [red0, red1, red2, red3, red4],
  yellow: [yellow0, yellow1, yellow2, yellow3, yellow4]
};

// ** FONT **

const fontFamily =
  "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";
const fonts = {
  base: fontFamily,
  mono: "monospace"
};

// for html default (1rem equals this value)
const baseFontSize = "16px";

const fontSm = rem("12px");
const fontMd = rem("19px");
const fontLg = rem("21px");
const fontXl = rem("26px");
const fontXxl = rem("33px");
const fontXxxl = rem("54px");

const fontSize = {
  sm: fontSm,
  base: baseFontSize,
  md: fontMd,
  lg: fontLg,
  xl: fontXl,
  xxl: fontXxl,
  xxxl: fontXxxl
};

const fontWeight = {
  thin: "100",
  slim: "300",
  base: "400",
  chunky: "500",
  fat: "700",

  // for passing `size` prop to text components
  sm: "400",
  md: "500",
  lg: "500",
  xl: "500",
  xxl: "500",
  xxxl: "400"
};

// for styled-system
const fontSizes = [fontSm, baseFontSize, fontMd, fontLg, fontXl, fontXxl, fontXxxl];
const fontWeights = ["100", "300", "400", "500", "700"];

// ** SPACE **

const sizes = ["100%", rem("256px")];

export const space = [
  0,
  rem("4px"),
  rem("8px"),
  rem("16px"),
  rem("32px"),
  rem("64px"),
  rem("128px"),
  rem("256px"),
  rem("512px")
];

const breakpoints = ["768px", "992px"];
const mediaQueries = {
  m: `@media screen and (min-width: ${breakpoints[0]})`,
  l: `@media screen and (min-width: ${breakpoints[1]})`
};

// ** OTHER **

export const transition = "175ms cubic-bezier(0.23, 1, 0.32, 1)";

// ** Theme color schemes **
const colorSchemes = {
  ...colors,
  // base
  bg: colors.white,
  color: colors.black,
  text: colors.grey[6],
  highlight: colors.grey[1],
  surface: "#fff",
  faded: colors.grey[4],
  border: colors.grey[2],
  // main
  primary: colors.grey[6],
  secondary: colors.grey[4],
  info: colors.blue[2],
  danger: colors.red[2],
  success: colors.green[2],
  warning: colors.yellow[2],
  infoText: colors.blue[3],
  dangerText: colors.red[3],
  successText: colors.green[3],
  warningText: colors.yellow[3],
  link: colors.blue[2],
  linkActive: colors.blue[4],
  muted: colors.grey[3],
  code: colors.red[4],
  // helper
  light: colors.grey[2],
  dark: colors.grey[4],

  schemes: {
    dark: {
      ...colors,
      // base
      bg: colors.black,
      color: colors.white,
      text: colors.grey[0],
      highlight: lighten(0.05, colors.grey[6]),
      surface: colors.grey[6],
      faded: colors.grey[2],
      border: colors.grey[4],
      // main
      primary: colors.grey[0],
      secondary: colors.grey[2],
      info: colors.blue[1],
      danger: colors.red[1],
      success: colors.green[1],
      warning: colors.yellow[1],
      infoText: colors.blue[0],
      dangerText: colors.red[0],
      successText: colors.green[0],
      warningText: colors.yellow[0],
      link: colors.blue[1],
      linkActive: colors.blue[0],
      muted: colors.grey[4],
      code: colors.red[0],
      // helper
      light: colors.grey[2],
      dark: colors.grey[4]
    },
    light: {
      ...colors,
      // base
      bg: colors.white,
      color: colors.black,
      text: colors.grey[6],
      highlight: colors.grey[1],
      surface: "#fff",
      faded: colors.grey[4],
      border: colors.grey[2],
      // main
      primary: colors.grey[6],
      secondary: colors.grey[4],
      info: colors.blue[2],
      danger: colors.red[2],
      success: colors.green[2],
      warning: colors.yellow[2],
      infoText: colors.blue[3],
      dangerText: colors.red[3],
      successText: colors.green[3],
      warningText: colors.yellow[3],
      link: colors.blue[2],
      linkActive: colors.blue[4],
      muted: colors.grey[3],
      code: colors.red[4],
      // helper
      light: colors.grey[2],
      dark: colors.grey[4]
    }
  }
};

export default {
  colorScheme: "light",
  baseFontSize,
  breakpoints,
  colors: colorSchemes,
  fonts,
  fontSize,
  fontSizes,
  fontWeight,
  fontWeights,
  mediaQueries,
  sizes,
  space,
  transition
};

// MOBILE OVERRIDES
// const mobileFontSm = rem("12px");
// const mobileBaseFontSize = "16px";
// const mobileFontMd = rem("17px");
// const mobileFontLg = rem("19px");
// const mobileFontXl = rem("21px");
// const mobileFontXxl = rem("27px");
// const mobileFontXxxl = rem("42px");

// const fontWeightMobile = {
//   ...fontWeight,
//   sm: "400",
//   base: "400",
//   md: "500",
//   lg: "500",
//   xl: "500",
//   xxl: "500",
//   xxxl: "500"
// };

// export const mobile = {
//   fontSize: {
//     sm: mobileFontSm,
//     base: mobileBaseFontSize,
//     md: mobileFontMd,
//     lg: mobileFontLg,
//     xl: mobileFontXl,
//     xxl: mobileFontXxl,
//     xxxl: mobileFontXxxl
//   },
//   fontWeight: fontWeightMobile,
// };
