import { createRequire } from "module";
const require = createRequire(import.meta.url);

const http = require("http");
const fs = require("fs");
const path = require("path");

// http://localhost:1337/
// http://localhost:1337/users

const server = http.createServer(function (req, res) {
  console.log(req.method);
  if (req.method === "GET")
    switch (req.url) {
      case "/":
      case "/index.html":
        fs.readFile("./index.html", (error, content) => {
          if (content) {
            res.writeHead(200, {
              "Content-Type": "text/html"
            });
            res.end(content, "utf-8");
          } else {
            res.writeHead(500);
            res.end("Sorry, check with the site admin for error: " + error.code + " ..\n");
          }
        });
        break;
      case "/index.css":
        fs.readFile("./index.css", (error, content) => {
          if (content) {
            res.writeHead(200, {
              "Content-Type": "text/css"
            });
            res.end(content, "utf-8");
          } else {
            res.writeHead(500);
            res.end("Sorry, check with the site admin for error: " + error.code + " ..\n");
          }
        });
        break;
      case "/index.js":
        fs.readFile("./index.js", (error, content) => {
          if (content) {
            res.writeHead(200, {
              "Content-Type": "text/javascript"
            });
            res.end(content, "utf-8");
          } else {
            res.writeHead(500);
            res.end("Sorry, check with the site admin for error: " + error.code + " ..\n");
          }
        });
        break;
      case "/raw-html":
        res.writeHead(200, {
          "Content-Type": "text/html"
        });
        res.end("<h1>Raw HTML Page</h1>", "utf-8");
        break;
      case "/users":
        res.writeHead(200, {
          "Content-Type": "application/json"
        });
        res.end(
          JSON.stringify([{
              name: "jordy",
              age: 24
            },
            {
              name: "yaniv",
              age: 23
            },
            {
              name: "tamer",
              age: 21
            },
          ]),
          "utf-8"
        );
        break;
      default:
        res.writeHead(404);
        res.end("404");
        break;
    }
  else {
    res.writeHead(405);
    res.end("You can only do GET reqs");
  }
});
server.listen(1337);