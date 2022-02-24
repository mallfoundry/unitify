import fs from "fs";
import { resolve } from "path";

export default function framework(config) {
  const { targetPath, fileName, originPath } = config;

  return {
    closeBundle() {
      fs.readFile(originPath, "utf-8", (err, data) => {
        if (err) {
          console.log(originPath, "读取失败");
          return;
        }
        fs.writeFile(resolve(targetPath, fileName), data, (err) => {
          if (!err) {
            console.log(resolve(targetPath, fileName), "写入完成");
          } else {
            console.log(resolve(targetPath, fileName), "写入失败");
          }
        });
      });
    },
  };
}
