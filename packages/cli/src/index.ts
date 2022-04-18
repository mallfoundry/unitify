#!/usr/bin/env node
// 指定脚本解释器类型
import { program } from "commander";
import { develop } from "./commands/develop";
program.version("0.0.1");
program.command("develop").description("develop").action(develop);
program.parse(process.argv);
