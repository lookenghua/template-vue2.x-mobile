const CompressionPlugin = require("compression-webpack-plugin");
const path = require("path");
const dayjs = require("dayjs");

process.env.VUE_APP_TIME = dayjs().format("YYYY-MM-DD HH:mm:ss");
const isProd = process.env.NODE_ENV === "production";
module.exports = {
  productionSourceMap: false,
  css: {
    sourceMap: !isProd
  },
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
  chainWebpack: config => {
    if (process.env.use_analyzer) {
      config
        .plugin("webpack-bundle-analyzer")
        .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
    }
    config.plugin("html").tap(args => {
      if (isProd) {
        args[0].minify.removeComments = false;
      }
      return args;
    });
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/assets/scss/mixins.scss")]
    }
  }
};
