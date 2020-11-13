const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      "node_modules",
      "./src/components",
      "./src/pages",
      "./src",
      "./src/assets",
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: ["./src/assets/scss"],
              },
              sourceMap: true,
              implementation: require("sass"),
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["autoprefixer", {}]],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "url-loader?limit=10000&name=img/[name].[ext]",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
};
