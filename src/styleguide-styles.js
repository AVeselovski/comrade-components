const path = require("path");
const rem = require("polished").rem;

const lightestGrey = "#F2F2F2";
const lighterGrey = "#EBEBEC";
const lightGrey = "#E1E1E2";
const grey = "#BFBFC0";
const darkGrey = "#747475";
const darkerGrey = "#565657";
const darkestGrey = "#313132";
const red = "#CC322C";
const darkRed = "#B22520";
const darkGreen = "#357935";

module.exports = {
  template: {
    head: {
      links: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700&display=swap&subset=latin-ext"
        }
      ]
    },
    favicon: path.resolve(__dirname, "assets/favicon.ico") // TODO: fix this
  },
  theme: {
    color: {
      base: darkestGrey,
      baseBackground: lightestGrey,
      border: grey,
      codeBackground: lighterGrey,
      error: red,
      focus: lightGrey,
      light: darkGrey,
      link: darkerGrey,
      linkHover: darkestGrey,
      name: darkGreen,
      sidebarBackground: lightGrey,
      type: darkRed
    },
    fontFamily: {
      base: '"Roboto", sans-serif'
    },
    sidebarWidth: rem("256px")
  },
  styles: {
    Logo: {
      logo: {
        color: darkestGrey,
        fontSize: rem("26px"),
        fontWeight: "500",
        textAlign: "center"
      }
    },
    StyleGuide: {
      "@global body": {
        lineHeight: "1.5"
      },
      logo: {
        alignItems: "center",
        borderBottom: `1px dashed ${grey}`,
        display: "flex",
        height: "calc(30px + 3rem)"
      }
    }
  }
};
