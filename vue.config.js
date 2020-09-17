const CompressionPlugin = require("compression-webpack-plugin");
const path = require("path");
const isProd = process.env.NODE_ENV === "production";
module.exports = {
  configureWebpack: config => {
    if (isProd) {
      config.plugins = [
        ...config.plugins,
        new CompressionPlugin({
          test: /\.js$|\.html$|.\css/, // 匹配文件名
          threshold: 10240, // 对超过10k的数据压缩
          deleteOriginalAssets: false // 不删除源文件
        })
      ];
    }
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/assets/scss/mixins.scss")]
    }
  }
};
