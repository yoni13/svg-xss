const net = require('net')

const visit = require('./bot')

const PORT = process.env.PORT
const REPORT_HOST = process.env.REPORT_HOST

const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  url = req.query.report || 'nothing';
  console.log(url);
  res.send(url);
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

