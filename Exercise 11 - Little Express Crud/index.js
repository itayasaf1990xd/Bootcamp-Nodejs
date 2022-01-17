import { createRequire } from "module";
const require = createRequire(import.meta.url);

const express = require("express");
const port = 8080;
const app = express();
const bp = require("body-parser");

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

let numbers = [1, 2, 3, 4, 5, 6];

// http://localhost:8080/numbers
app.get("/numbers", (req, res) => {
  res.send(JSON.stringify(numbers));
});

// http://localhost:8080/numbers
/* {
 *    "number":"7"
 * }
*/
app.post("/numbers", (req, res) => {
  const { number } = req.body;
  if (numbers.includes(+number)) {
    res.status(404).json({ message: "this number exists" });
  } else {
    numbers.push(+number);
    res.send(JSON.stringify(numbers));
  }
});

// http://localhost:8080/numbers/1
/* {
 *    "newNumber":"0"
 * }
*/
app.put("/numbers/:oldNumber", (req, res) => {
  const { oldNumber } = req.params;
  const { newNumber } = req.body;
  if (numbers.includes(+oldNumber)) {
    const editedNumberIndex = numbers.findIndex((number) => number === +oldNumber);
    numbers[editedNumberIndex] = +newNumber;
    res.send(JSON.stringify(numbers));
  } else {
    res.status(400).json({ message: "this number doesn't exist" });
  }
});

// http://localhost:8080/numbers/?number=5
app.delete("/numbers", (req, res) => {
  const { number } = req.query;
  if (numbers.includes(+number)) {
    numbers = numbers.filter((num) => num !== +number);
    res.send(JSON.stringify(numbers));
  } else {
    res.status(400).json({ message: "this number doesn't exist" });
  }
});

app.listen(port, () => {
  console.log("Server is up and running on port", port);
});