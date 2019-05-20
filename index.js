const express = require("express");
const app = express();
const pinyinConverter = require("pinyin-convert");

app.get("/", (req, res) => {
  console.log("Hello world received a request.");
  const target = process.env.TARGET || "World";
  res.send(`Hello ${target}!`);
});

app.post("convert", (req, res) => {
  const q = req.query;
  console.log(q);
  res.send("OK!");
});

const port = process.env.PORT || 3200;
app.listen(port, () => {
  console.log("Pinyin Conversion Service listening on port", port);
});
