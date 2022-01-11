import { createRequire } from "module";
const require = createRequire(import.meta.url);
import axios from "axios";
import got from 'got';
import request from "request";
import postmanRequest from "postman-request";
import nodeFetch from "node-fetch";
const https = require("https");

const axiosFetch = async () => {
  const {
    data
  } = await axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
  console.log("\nAxios:", data.title);
};
axiosFetch();

const gotFetch = async () => {
  got("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", { json: true })
  .then((response) => {
    console.log("\nGot:",response.body.title);
  })
  .catch((error) => {
    console.log(error.response.body);
  });
}
gotFetch();

const requestFetch = async () => {
  request({
    url: "https://www.tronalddump.io/random/quote",
    json: true
  }, (error, res, body) => {
    if (error) {
      return console.log(error);
    }
    console.log("\nRequest:", body.value)
  });
};
requestFetch();

const postmanRequestFetch = async () => {
  postmanRequest({
    url: "https://www.tronalddump.io/random/quote",
    json: true
  }, (err, res, body) => console.log("\nPostman Request:", body.value));
};
postmanRequestFetch();

const nodeFetchFetch = async () => {
  nodeFetch("https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .then((data) => console.log("\nNode Fetch:", data.value))
    .catch((err) => console.log(err));
};
nodeFetchFetch();

https.get("https://api.chucknorris.io/jokes/random", (res) => {
  let data = "";
  res.on("data", (response) => (data += response));
  res.on("end", () => console.log("\nHttps:", JSON.parse(data.toString()).value));
}).on("error", (error) => {
  console.log("Error: " + error.message);
});;
