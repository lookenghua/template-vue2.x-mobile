const fs = require("fs-extra");
const dir1 = "./build/serve-dist";
fs.remove(dir1, err => {
  if (err) return console.error(err);
  console.log("移除serve-dist文件夹成功");
});
const dir2 = "./dist";
fs.remove(dir2, err => {
  if (err) return console.error(err);
  console.log("移除dist文件夹成功");
});
const file1 = "./build/serve-dist.zip";
fs.remove(file1, err => {
  if (err) return console.error(err);
  console.log("移除serve-dist.zip文件成功");
});
