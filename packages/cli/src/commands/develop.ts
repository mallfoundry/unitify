import execa from "execa";

export async function develop() {
  console.log("develop");
  //cd packages && cd demo && yarn dev:h5
  const { stdout } = await execa("cd", ["packages","&&","cd","demo","&&","yarn","dev:h5"]);
  console.log(stdout);
}
