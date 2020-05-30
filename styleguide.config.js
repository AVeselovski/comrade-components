const path = require("path");
const styles = require(path.join(__dirname, "src/styleguide-styles"));
const pkg = require("./package");

const template =
  process.env.NODE_ENV === "production"
    ? {
        head: {
          links: [
            {
              rel: "stylesheet",
              href:
                "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700&display=swap&subset=latin-ext"
            }
          ]
        },
        favicon: "/favicon.ico",
        publicPath: "styleguide/"
      }
    : {
        head: {
          links: [
            {
              rel: "stylesheet",
              href:
                "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700&display=swap&subset=latin-ext"
            }
          ]
        },
        favicon: "assets/favicon.ico"
      };

module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    }
  },
  template: template,
  ...styles,
  version: pkg.version,
  title: "Comradeguide",

  styleguideComponents: {
    Wrapper: path.join(__dirname, "src/StyleGuideWrapper")
  },
  styleguideDir: "build/styleguide",
  pagePerSection: true,
  sections: [
    {
      name: "Introduction",
      content: "docs/introduction.md"
    },
    {
      name: "Documentation",
      content: "docs/index.md",
      sections: [
        {
          name: "Installation",
          content: "docs/installation.md"
        },
        {
          name: "Configuration",
          content: "docs/configuration.md"
        }
      ]
    },
    {
      name: "UI Components",
      content: "docs/ui/index.md",
      sections: [
        {
          name: "Foundation",
          content: "docs/ui/foundation.md",
          components: "src/components/foundation/**/*.{js,jsx}"
        },
        {
          name: "Elements",
          content: "docs/ui/elements.md",
          components: "src/components/elements/**/*.{js,jsx}"
        },
        {
          name: "Patterns",
          content: "docs/ui/patterns.md",
          components: "src/components/patterns/**/*.{js,jsx}"
        }
      ]
    }
  ]
};
