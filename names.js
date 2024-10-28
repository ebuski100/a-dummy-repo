const fs = require("fs");
const file = fs.readFile("./contents/test.txt", "utf8", (err, res) => {
  if (err) {
    throw new Error();
  } else {
    console.log(res);
  }
});

// file;
