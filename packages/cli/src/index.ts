#!/usr/bin/env node
// 指定脚本解释器类型
import { program } from "commander";

program.version("0.0.5");
program
  .command("init <name>")
  .description("init project")
  .action(function (name) {
    console.log("hello", name);
  });
