import { rem } from "polished";

/**
 * Variables in singular for single values and shallow objects ("fontSize.m").
 * Variables in plural may contain an array or object containing arrays.
 */

// COLORS
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

const green0 = "#80C780";
const green1 = "#5CB85C";
const green2 = "#449D44";
const green3 = "#357935";
const green4 = "#296029";

const blue0 = "#7BCCE5";
const blue1 = "#51AFCC";
const blue2 = "#2493B5";
const blue3 = "#1F7E9B";
const blue4 = "#1B6D85";

const colors = {
  black,
  blue: [blue0, blue1, blue2, blue3, blue4],
  green: [green0, green1, green2, green3, green4],
  grey: [grey0, grey1, grey2, grey3, grey4, grey5, grey6],
  pitchBlack,
  red: [red0, red1, red2, red3, red4],
  yellow: [yellow0, yellow1, yellow2, yellow3, yellow4],
  white
};

// FONT
const fontFamily =
  "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";

const fonts = [fontFamily, "monospace"];

// for html default (1rem equals this value)
const baseFontSize = "16px";

const fontS = rem("12px");
const fontM = rem("19px");
const fontL = rem("21px");
const fontXl = rem("26px");
const fontXxl = rem("33px");
const fontXxxl = rem("54px");

const fontSize = {
  s: fontS,
  base: baseFontSize,
  m: fontM,
  l: fontL,
  xl: fontXl,
  xxl: fontXxl,
  xxxl: fontXxxl
};

const fontSizes = [fontS, baseFontSize, fontM, fontL, fontXl, fontXxl, fontXxxl];

const fontWeight = {
  s: "400",
  base: "400",
  m: "500",
  l: "500",
  xl: "400",
  xxl: "400",
  xxxl: "400"
};

const fontWeights = ["100", "300", "400", "500", "700"];

const lineHeight = {
  s: "1.5",
  base: "1.5",
  m: "1.2",
  l: "1.2",
  xl: "1.2",
  xxl: "1.2"
};

const lineHeights = [1.5, 1.2];

// SPACE
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

// OTHER
export const transition = "175ms cubic-bezier(0.23, 1, 0.32, 1)";

export default {
  light: {
    baseFontSize,
    breakpoints,
    colors: {
      ...colors,
      bg: colors.white,
      color: colors.grey[6],
      danger: colors.red[2],
      dark: colors.grey[4],
      info: colors.blue[3],
      light: colors.grey[2],
      link: colors.blue[1],
      muted: colors.grey[3],
      primary: colors.grey[6],
      secondary: colors.grey[4],
      success: colors.green[2],
      textDanger: colors.red[3],
      textInfo: colors.blue[4],
      textWarning: colors.yellow[4],
      textSuccess: colors.green[3],
      warning: colors.yellow[2]
    },
    fontFamily,
    fonts,
    fontSize,
    fontSizes,
    fontWeight,
    fontWeights,
    lineHeight,
    lineHeights,
    mediaQueries,
    sizes,
    space,
    transition
  },
  dark: {
    baseFontSize,
    breakpoints,
    colors: {
      ...colors,
      bg: colors.black,
      color: colors.grey[0],
      danger: colors.red[1],
      dark: colors.grey[4],
      info: colors.blue[3],
      light: colors.grey[2],
      link: colors.blue[1],
      muted: colors.grey[4],
      primary: colors.grey[2],
      secondary: colors.grey[3],
      success: colors.green[1],
      textDanger: colors.red[0],
      textInfo: colors.blue[0],
      textWarning: colors.yellow[0],
      textSuccess: colors.green[0],
      warning: colors.yellow[1]
    },
    fontFamily,
    fonts,
    fontSize,
    fontSizes,
    fontWeight,
    fontWeights,
    lineHeight,
    lineHeights,
    mediaQueries,
    sizes,
    space,
    transition
  }
};

// MOBILE OVERRIDES
// const mobileFontS = rem("12px");
// const mobileBaseFontSize = "16px";
// const mobileFontM = rem("17px");
// const mobileFontL = rem("19px");
// const mobileFontXl = rem("21px");
// const mobileFontXxl = rem("27px");
// const mobileFontXxxl = rem("42px");

// const fontWeightMobile = {
//   s: "400",
//   base: "300",
//   m: "500",
//   l: "500",
//   xl: "500",
//   xxl: "500",
//   xxxl: "400"
// };

// export const mobile = {
//   fontSize: {
//     s: mobileFontS,
//     base: mobileBaseFontSize,
//     m: mobileFontM,
//     l: mobileFontL,
//     xl: mobileFontXl,
//     xxl: mobileFontXxl,
//     xxxl: mobileFontXxxl
//   },
//   fontSizes: [
//     mobileFontS,
//     mobileBaseFontSize,
//     mobileFontM,
//     mobileFontL,
//     mobileFontXl,
//     mobileFontXxl,
//     mobileFontXxxl
//   ],
//   fontWeight: fontWeightMobile
// };
