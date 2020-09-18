module.exports = ({ file }) => {
  let rootValue = 75;
  if (file && file.dirname && file.dirname.indexOf("vant") > -1) {
    rootValue = 37.5;
  }

  return {
    plugins: {
      autoprefixer: {
        overrideBrowserslist: ["Android >= 4.0", "iOS >= 8"]
      },
      "postcss-pxtorem": {
        rootValue,
        propList: ["*"]
      }
    }
  };
};
