const path = require("path");
const styles = require(path.join(__dirname, "src/styleguide-styles"));
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * TODO:
 * 1. Change html file to styleguide.html and point all to build.
 * 2. Check if working locally also.
 * 3. In Link, got to cuurent domain/docs, not hardcoded
 */

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
  dangerouslyUpdateWebpackConfig(webpackConfig, env) {
    // WARNING: inspect Styleguidist Webpack config before modifying
    console.log(webpackConfig);

    webpackConfig.output = {
      path: path.join(__dirname, "build"),
      filename: "[name].sg.bundle.js",
      chunkFilename: "[name].sg.js",
      publicPath: "/"
    };
    webpackConfig.plugins = [
      ...webpackConfig.plugins,
      new HtmlWebpackPlugin({
        filename: "styleguide.html"
      })
    ];

    return webpackConfig;
  },
  title: "Comradeguide",
  ...styles,
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
