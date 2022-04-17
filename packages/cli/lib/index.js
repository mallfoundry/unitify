#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 指定脚本解释器类型
var commander_1 = require("commander");
commander_1.program.version("0.0.5");
commander_1.program
    .command("init <name>")
    .description("init project")
    .action(function (name) {
    console.log("hello", name);
});
