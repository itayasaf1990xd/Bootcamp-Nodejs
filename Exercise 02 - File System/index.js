// Method 01 Old and Sync
const fs = require("fs");
fs.writeFileSync("./newFile.txt", "Random content inside");
fs.copyFileSync("./newFile.txt", "copyFile.txt");
fs.renameSync("./newFile.txt", "./newNameFile.txt");
console.log("Files list:", fs.readdirSync("."));
const data = fs.readFileSync("./copyFile.txt", { encoding: "utf8", flag: "r" });
console.log("copyFile content:", data);

// Method 02 New and Async
// const fsPromises = require("fs").promises;
// const fs = require("fs");
// const path = require("path");
// const filesHandle = async () => {
//   try {
//     // 01
//     await fsPromises.writeFile(
//       path.join(__dirname, "originTextFile.txt"),
//       "Created new text file"
//     );
//     // 02
//     await fsPromises.copyFile(
//       path.join(__dirname, "originTextFile.txt"),
//       path.join(__dirname, "copyTextFile.txt")
//     );
//     // 03
//     await fsPromises.rename(
//       path.join(__dirname, "copyTextFile.txt"),
//       path.join(__dirname, "copyAndRenameTextFile.txt")
//     );
//     // 04
//     fs.readdir(__dirname, (err, files) => {
//       files.forEach((file) => {
//         console.log(file);
//       });
//     });
//     // 05
//     await fsPromises.unlink(path.join(__dirname, "originTextFile.txt"));
//   } catch (err) {
//     console.log(err);
//   }
// };
// filesHandle();
