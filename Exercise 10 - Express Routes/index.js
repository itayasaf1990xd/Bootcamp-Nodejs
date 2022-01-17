import { createRequire } from "module";
const require = createRequire(import.meta.url);

import express from "express";
import chalk from "chalk";

const app = express();
const port = 8080;
app.use(express.json());

/*
 * Get Request
 * Get to send example:
 * http://localhost:8080/
 */
app.get("/", (req, res) => {
  res.send("Hello World");
});

/*
 * Get Request
 * Params to send example:
 * http://localhost:8080/5
 */
app.get("/get/:id", (req, res) => {
  const { id } = req.params;
  const sendBody = {
    response: "success using get",
    routeName: "GET",
    body: {
      id,
    },
  };
  res.send(sendBody);
});

/*
 * Post Request
 * Body to send example:
 * http://localhost:8080/post
 * "data": [
 *  {
 *    "id": "1"
 *    "name": "John Dou",
 *  },
 *  {
 *    "id": "2",
 *    "name": "David Gore"
 *  }
 *]
 */
app.post("/post", (req, res) => {
  const { data } = req.body;
  const sendBody = {
    response: "success using post",
    routeName: "POST",
    body: {
      data,
    },
  };
  res.send(sendBody);
});

/*
 * Put Request
 * Body to send example:
 * http://localhost:8080/put
 * {
 *  "id":"1", "name":"John Duo"
 * }
 */
app.put("/put", (req, res) => {
  const { id, name } = req.body;
  const sendBody = {
    response: "success using put",
    routeName: "PUT",
    body: {
      id,
      name,
    },
  };
  res.send(sendBody);
});

/*
 * Delete Request
 * Body to send example:
 * http://localhost:8080/delete
 * {
 *  "id":"1", "name":"John Duo"
 * }
 */
app.delete("/delete", (req, res) => {
  const { id, name } = req.body;
  const sendBody = {
    response: "success using delete",
    routeName: "DELETE",
    body: {
      id,
      name,
    },
  };
  res.send(sendBody);

// delete by user:
// {"name":"Shaked","id":"id3"}

// response by server:
// {
//   "response": "success using delete",
//   "routeName": "delete",
//   "body": {
//       "name": "Shaked",
//       "id": "id3"
//   }
// }
});

app.listen(port, () => {
  console.log(chalk.yellow("Server is up and running on port"), chalk.green.inverse(port));
});