const path = require('path');

const aliasMap = {
  '@': path.resolve(__dirname, 'src'),
  'public': path.resolve(__dirname, 'public'),
};

module.exports = {
  /**
   * @link https://github.com/mozilla-neutrino/webpack-chain
   * @link https://storybook.js.org/docs/configurations/custom-webpack-config/#using-your-existing-config
   * @param {object} config - webpack-chain object
   */
  chainWebpack: (config) => {
    Object.entries(aliasMap).forEach(([key, value]) => {
      config.resolve.alias.set(key, value);
    });
  },
  css: {
    loaderOptions: {
      scss: {
        /**
         * imports for global variables, use an alias (@) and the file path
         * relative to ./src/
         */
        additionalData: `
          @import "@/styles/app.scss";
        `,
      },
    },
  },
};
