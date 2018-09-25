const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

let publicPath = "/";

module.exports = {
  mode: "development",
  entry: {
    index: [path.join(__dirname, "src", "index.tsx")]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", "tsx"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: ["ts-loader"],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html")
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
    watchContentBase: true,
    compress: true
  }
};
