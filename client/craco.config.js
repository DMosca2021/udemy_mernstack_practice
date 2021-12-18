const { loaderByName, addAfterLoader } = require("@craco/craco");

module.exports = {
  webpack: {
    configure: (webpackConfig, { paths }) => {
      const imageLoader = {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve("file-loader"),
        options: {
          name: "static/media/[name].[hash:8].ext",
        },
      };

      const { isAdded } = addAfterLoader(
        webpackConfig,
        loaderByName("url-loader"),
        imageLoader
      );

      return webpackConfig;
    },
  },
};
