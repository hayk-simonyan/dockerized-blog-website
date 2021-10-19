const fs = require("fs").promises;
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/post", express.static("post"));

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "pages", "post.html");

  res.sendFile(filePath);
});

app.post("/create", async (req, res) => {
  const title = req.body.title.toLowerCase();
  const content = req.body.text;

  const filePath = path.join(__dirname, "post", title + ".txt");

  await fs.writeFile(filePath, content);

  res.redirect("/");
});

app.listen(8080);
