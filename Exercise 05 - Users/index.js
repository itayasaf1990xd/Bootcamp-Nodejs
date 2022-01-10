// Enable import and require in the same file
// import {createRequire} from "module";
// const require = createRequire(import.meta.url);

const fs = require("fs");
const uniqid = require("uniqid");
const yargs = require("yargs");

const getUsers = () => {
  try {
    return JSON.parse(fs.readFileSync("users.json").toString());
  } catch (error) {
    console.log(error);
  }
};

yargs.command({
  command: "create",
  builder: {
    name: {
      describe: "the user name",
      type: "string",
      demandOption: true,
    },
    email: {
      describe: "the user email",
      type: "string",
      demandOption: true,
    },
  },
  // node index.js create  --name=avi --email=ron@gmail.com
  handler: (argv) => {
    const users = getUsers();
    users.push({ id: uniqid(), name: argv.name, email: argv.email });
    fs.writeFileSync("./users.json", JSON.stringify(users));
  },
});

yargs.command({
  command: "update",
  builder: {
    id: {
      describe: "the user id",
      type: "string",
      demandOption: true,
    },
    name: {
      describe: "the user name",
      type: "string",
    },
    email: {
      describe: "the user email",
      type: "string",
    },
  },
  // node index.js update -id=458cvllbe4ky8syae7 -name=ernest
  handler: (argv) => {
    const users = getUsers();
    users.forEach((user) => {
      if (user.id === argv.id) {
        if (argv.email) user.email = argv.email;
        if (argv.name) user.name = argv.name;
      }
    });
    fs.writeFileSync("./users.json", JSON.stringify(users));
  },
});

yargs.command({
  command: "read",
  builder: {
    id: {
      describe: "the user id",
      type: "string",
      demandOption: true,
    },
  },
  // node index.js read --id=458cvllbe4ky8syae7
  handler: (argv) => {
    const users = getUsers();
    const user = users.find((user) => {
      return user.id === argv.id;
    });
    user
      ? console.log(`The user with id ${argv.id} details are: name ${user.name} email ${user.email}`)
      : console.log(`The user with id ${argv.id} doesn't exist`);
  },
});

yargs.command({
  command: "delete",
  builder: {
    id: {
      describe: "the id of the user",
      type: "string",
      demandOption: true,
    },
  },
  // node index.js delete --id=458cvllbe4ky8syae7
  handler: (argv) => {
    const users = getUsers();
    const usersFiltered = users.filter((user) => {
      return user.id !== argv.id;
    });
    console.log(usersFiltered);
    usersFiltered ? fs.writeFileSync("./users.json", JSON.stringify(usersFiltered)) : console.log(`The user with id ${usersFiltered.id} doesn't exist`);
  },
});

yargs.parse();
// yargs.argv