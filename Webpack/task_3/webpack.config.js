const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development", // Set mode to development
  devtool: "inline-source-map", // Set devtool to inline-source-map
  entry: {
    header: "./modules/header/header.js",
    body: "./modules/body/body.js",
    footer: "./modules/footer/footer.js",
  },
  output: {
    filename: "[name].bundle.js", // Output filename
    path: path.resolve(__dirname, "public"), // Output directory
    publicPath: "/", // Public URL of the output directory when referenced in a browser
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: "all", // Set chunks to all
    },
  },
  devServer: {
    contentBase: path.join(__dirname, "public"), // Serve content from the public directory
    compress: true, // Enable gzip compression for everything served
    port: 8564, // Port number for the dev server
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Rule for CSS files
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Rule for image files
        type: "asset/resource",
      },
    ],
  },
};
