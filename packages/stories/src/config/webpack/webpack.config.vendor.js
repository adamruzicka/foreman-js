const path = require('path');
const { WebpackForemanVendorPlugin, Manifest } = require('@theforeman/vendor');

const getFilenamesWithExt = (files, ext) =>
  files.filter((f) => f.endsWith(ext)).map((f) => path.basename(f));

module.exports = ({ config, mode }) => {
  const vendorManifest = new Manifest(mode);

  const vendorJsFiles = getFilenamesWithExt(vendorManifest.files, '.js');
  const vendorCssFiles = getFilenamesWithExt(vendorManifest.files, '.css');

  const htmlWebpackPlugin = config.plugins.find(
    (p) => p.constructor.name === 'HtmlWebpackPlugin'
  );

  htmlWebpackPlugin.options.templateParameters = (
    compilation,
    assets,
    assetTags,
    options
  ) =>
    Promise.resolve().then(() => {
      try {
        return {
          compilation,
          webpackConfig: compilation.options,
          htmlWebpackPlugin: {
            tags: assetTags,
            files: {
              ...assets,
              js: [...vendorJsFiles, ...assets.js],
              css: [...vendorCssFiles, ...assets.css],
            },
            options,
          },
        };
      } catch (e) {
        compilation.errors.push(new Error(`Template execution failed: ${e}`));
        return Promise.reject(e);
      }
    });

  config.plugins.push(new WebpackForemanVendorPlugin({ mode }));

  return config;
};
