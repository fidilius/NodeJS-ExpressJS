const { readFile } = require("fs");

console.log("task 1");
readFile("./example.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
  console.log("task 2");
});
console.log("task 3");
