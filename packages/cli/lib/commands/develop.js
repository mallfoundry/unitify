"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.develop = void 0;
var execa_1 = __importDefault(require("execa"));
function develop() {
    var _a;
    console.log("develop");
    //cd packages && cd demo && yarn dev:h5
    var subprocess = execa_1.default.command("pnpm dev", {
        cwd: "./packages/docs",
    });
    (_a = subprocess.stdout) === null || _a === void 0 ? void 0 : _a.on("data", function (data) {
        console.log("stdout 输出:", data.toString());
    });
    subprocess.on("close", function () {
        console.log("进程关闭");
    });
    subprocess.on("message", function (data) {
        subprocess.send({ msg: "123123123" });
        console.log("subprocess message:", data);
    });
    subprocess.on("exit", function () {
        console.log("进程退出");
    });
    process.on("SIGINT", function () {
        console.log("Exit now!", subprocess.exitCode);
        subprocess.kill();
        process.exit();
    });
}
exports.develop = develop;
