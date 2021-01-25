const { spawn } = require("child_process");
const ora = require("ora");
const fs = require("fs-extra");
/*
 * 打包客户端
 * */
const spinner1 = ora("正在打包客户端").start();
const ls = spawn("vue-cli-service", ["build"], { shell: true });
ls.stdout.on("data", data => console.log(data.toString()));
ls.stderr.on("data", data => console.error(data.toString()));
ls.on("close", code => {
  if (code === 0) {
    spinner1.succeed("打包客户端成功");
    /*
     * 复制服务端
     * */
    const spinner2 = ora("正在复制服务端").start();
    try {
      const dir1 = "./build/serve-dist";
      //  1. 创建文件夹
      fs.ensureDirSync(dir1);
      // 2.清空文件夹
      fs.emptyDirSync(dir1);
      // 3.拷贝服务端
      fs.copySync("./serve", dir1, {
        filter: src => {
          return src;
          // return !src.includes("node_modules");
        }
      });
      spinner2.succeed("复制服务端成功");
      /*
       * 复制客户端
       * */
      const spinner3 = ora("正在复制客户端").start();
      try {
        const dir2 = "./build/serve-dist/static";
        //  1. 创建文件夹
        fs.ensureDirSync(dir2);
        // 2.清空文件夹
        fs.emptyDirSync(dir2);
        // 3.拷贝客户端
        fs.copySync("./dist", dir2);
        spinner3.succeed("复制客户端成功");
        /*
         * 打包成服务端
         * */
        const spinner4 = ora("正在打包成服务端").start();
        const ls1 = spawn("npm", ["run", "pkg"], { shell: true });
        ls1.stdout.on("data", data => console.log(data.toString()));
        ls1.stderr.on("data", data => console.error(data.toString()));
        ls1.on("close", code => {
          if (code === 0) {
            spinner4.succeed("打包服务端成功");
          } else {
            spinner4.fail("打包服务端失败");
          }
        });
      } catch {
        spinner3.fail("复制客户端失败");
      }
    } catch {
      spinner2.fail("复制服务端失败");
    }
  } else {
    spinner1.fail("打包客户端失败");
  }
});
