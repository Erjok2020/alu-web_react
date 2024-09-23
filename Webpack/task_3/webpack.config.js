const path = require("path");

module.exports = {
  mode: "development", // Set mode to development for the dev server
  entry: "./js/dashboard_main.js", // Entry point for the application
  output: {
    filename: "bundle.js", // Output filename
    path: path.resolve(__dirname, "public"), // Output directory
    publicPath: "/", // Public URL of the output directory when referenced in a browser
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
