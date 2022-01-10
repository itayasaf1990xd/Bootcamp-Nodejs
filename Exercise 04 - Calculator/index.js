const yargs = require("yargs");

yargs.command({
  command: "calc",
  describe: "calculates based on command",
  builder: {
    // Command to run: node index.js calc add 5 5 = 10
    add: {
      describe: "adds two nums",
      type: "array",
    },
    // Command to run: node index.js calc sub 5 5 = 0
    sub: {
      describe: "sub two nums",
      type: "array",
    },
    // Command to run: node index.js calc mult 5 5 = 25
    mult: {
      describe: "mult two nums",
      type: "array",
    },
    // Command to run: node index.js calc pow 5 3 = 125
    pow: {
      describe: "pow of num",
      type: "array",
    },
  },
  handler: function (argv) {
    if (argv._[1] === "add") {
      console.log(argv._[2] + argv._[3]);
    } else if (argv._[1] === "sub") {
      console.log(argv._[2] - argv._[3]);
    } else if (argv._[1] === "mult") {
      console.log(argv._[2] * argv._[3]);
    } else if (argv._[1] === "pow") {
      console.log(argv._[2] ** argv._[3]);
    } else {
      console.log("something went wrong");
    }
  },
});

yargs.parse();
