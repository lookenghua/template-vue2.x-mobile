/* eslint-disable no-console */

import { register } from "register-service-worker";

if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log("准备完成");
    },
    registered() {
      console.log("注册成功");
    },
    cached() {
      console.log("缓存");
    },
    updatefound() {
      console.log("正在下载新内容");
    },
    updated() {
      console.log("新内容可用");
    },
    offline() {
      console.log("应用已脱机");
    },
    error(error) {
      console.error("服务注册失败:", error);
    }
  });
}
