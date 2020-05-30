const path = require("path");
const rem = require("polished").rem;
const darken = require("polished").darken;

const white = "#FAFAFA";
const grey0 = "#F2F2F2";
const grey1 = "#EBEBEC";
const grey2 = "#E1E1E2";
const grey3 = "#BFBFC0";
const grey4 = "#747475";
const grey5 = "#565657";
const grey6 = "#313132";
const black = "#1D1D1E";
const red2 = "#CC322C";
const red3 = "#B22520";
const green3 = "#357935";

module.exports = {
  theme: {
    color: {
      base: grey6,
      baseBackground: white,
      border: grey3,
      codeBackground: grey0,
      error: red2,
      focus: grey2,
      light: grey4,
      link: grey5,
      linkHover: darken(0.1, grey5),
      name: green3,
      sidebarBackground: grey0,
      type: red3
    },
    fontFamily: {
      base: '"Roboto", sans-serif'
    },
    sidebarWidth: rem("256px")
  },
  styles: {
    Logo: {
      logo: {
        color: grey6,
        fontSize: rem("26px"),
        fontWeight: "500",
        marginRight: "0.25rem",
        textAlign: "center"
      }
    },
    StyleGuide: {
      "@global body": {
        lineHeight: "1.5"
      },
      logo: {
        alignItems: "center",
        borderBottom: "none",
        display: "flex",
        height: "calc(30px + 3rem)"
      }
    }
  }
};
