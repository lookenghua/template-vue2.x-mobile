const Koa = require("koa");
const path = require("path");
const fs = require("fs");
const figlet = require("figlet");
const serve = require("koa-static");
const history = require("connect-history-api-fallback");
const proxy = require("koa-server-http-proxy");
const compress = require("koa-compress");
const router = require("koa-router")();
const defaultConfig = require("./config.json");
let customConfig = {};
if (fs.existsSync(process.cwd() + "/config.json")) {
  customConfig = require(process.cwd() + "/config.json");
}
let config;
if (customConfig) {
  config = Object.assign({}, defaultConfig, customConfig);
} else {
  config = defaultConfig;
}
console.log("配置");
console.table(config);
const app = new Koa();
// 压缩请求
app.use(
  compress({
    filter: function(content_type) {
      // 只有在请求的content-type中有gzip类型，我们才会考虑压缩，因为zlib是压缩成gzip类型的
      return /text/i.test(content_type);
    },
    threshold: 1024, // 阀值，当数据超过1kb的时候，可以压缩
    flush: require("zlib").Z_SYNC_FLUSH // zlib是node的压缩模块
  })
);
// 路由
app.use(router.routes());
app.use(router.allowedMethods());
// 转发请求
if (config.proxy && config.proxy.length > 0) {
  config.proxy.forEach(item => {
    app.use(
      proxy(item.api, {
        ...item
      })
    );
  });
}
// 静态文件
app.use(serve(path.join(__dirname, "./static")));
// 配置单页面刷新问题
app.use(history());

app.use((ctx, next) => {
  //ctx 代表响应 ctx.compress = true 代表允许压缩
  ctx.compress = true;
  next();
});
// 启动
app.listen(config.port || 3000);
figlet(`App Serve Start At Port ${config.port || 3000}`, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
