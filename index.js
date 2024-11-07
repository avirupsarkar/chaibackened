require("dotenv").config();

const express = require("express");

const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send("chai aur avirup");
});

app.get("/twiter", (req, res) => {
  res.send("avirup");
});

app.get("/login", (re, res) => {
  res.send("<h1>please login </h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${port}`);
});
