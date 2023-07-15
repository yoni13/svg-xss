const net = require('net')

const visit = require('./bot')

const dns = require('dns/promises')

const PORT = process.env.PORT
const REPORT_HOST = process.env.REPORT_HOST

const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');

app.get("/", function (req, res) {
  url = req.query.report
  res.send(url);
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

