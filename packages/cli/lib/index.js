#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 指定脚本解释器类型
var commander_1 = require("commander");
var develop_1 = require("./commands/develop");
commander_1.program.version("0.0.1");
commander_1.program.command("develop").description("develop").action(develop_1.develop);
commander_1.program.parse(process.argv);
