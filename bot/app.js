const net = require('net')

const visit = require('./bot')

const PORT = process.env.PORT
const REPORT_HOST = process.env.REPORT_HOST

const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  url = req.query.report || 'nothing';
  if (url != 'nothing'){
    if (url.toLowerCase().startsWith('https://ctf1.onrender.com/')){
      visit(url);
      res.send('i will try XD')
    }
    else{
      res.send('sus')
    }
    res.send('sus')
  }
  res.send('sus')
});
  
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

