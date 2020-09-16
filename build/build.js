const { spawn, exec } = require("child_process");
const { join } = require("path");
const ora = require("ora");
const fs = require("fs-extra");
const compressing = require("compressing");
/*
 * 打包客户端
 * */
const spinner1 = ora("正在打包客户端").start();
const ls = spawn("vue-cli-service", ["build"], { shell: true });
// ls.stdout.on("data", data => console.log(data.toString()));
// ls.stderr.on("data", data => console.error(data.toString()));
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
          return !src.includes("node_modules");
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
         * 打包成压缩包
         * */
        const spinner4 = ora("正在压缩文件夹").start();
        compressing.zip
          .compressDir(dir1, `${dir1}.zip`)
          .then(() => {
            spinner4.succeed("压缩文件夹成功");
            const dir4 = join(__dirname, `serve-dist.zip`);
            console.log(dir4);
            exec(`explorer.exe /select,"${dir4}"`);
          })
          .catch(() => {
            spinner4.fail("压缩文件夹失败");
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
