const path = require("path"); //调用node.js中的路径
/* craco.config.js */
module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      paths.appBuild = "docs";
      webpackConfig.output = {
        ...webpackConfig.output,
        path: path.resolve(__dirname, "docs"), // 修改输出文件目录
        publicPath: "/",
      };
      webpackConfig.en;
      return webpackConfig;
    },
  },
};
