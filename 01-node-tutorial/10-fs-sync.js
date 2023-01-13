const { readFileSync, writeFileSync } = require("fs");

const firstText = readFileSync("./content/first.txt", "utf-8");
const secondText = readFileSync("./content/second.txt", "utf-8");

writeFileSync(
  "./content/result-sync.txt",
  `The result is: ${firstText}, ${secondText}`,
  { flag: "a" }
);
