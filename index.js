const express = require("express");
const app = express();
const pinyinConverter = require("pinyin-convert");

app.get("/convert", async (req, res) => {
  let result = "";

  try {
    const { chinese, token } = req.query;
    if (token !== process.env.API_SECRET) {
      return res.sendStatus(400);
    }

    const pinyin = await pinyinConverter(chinese);
    result = pinyin[0] || "";
  } catch (err) {
    console.log("Conversion failed - ", err);
  }

  res.send(result);
});

const port = process.env.PORT || 3200;
app.listen(port, () => {
  console.log("Pinyin Conversion Service listening on port", port);
});
