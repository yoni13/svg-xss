const net = require('net')

const visit = require('./bot')

const PORT = process.env.PORT
const IS_RENDER = process.env.RENDER
const REPORT_HOST = process.env.REPORT_HOST

const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  url = req.query.report || 'nothing';
  if (url != 'nothing'){// url is not nothing
    if (url.toLowerCase().startsWith('https://ctf1.onrender.com/')){
      visit(url);
      res.send('i will try XD')
    }
    else if (!IS_RENDER && url.toLowerCase().startsWith('https://animememeshare-main.web.nehs.nicewhite.xyz/')){
      visit(url);
      res.send('i will try XD')
    }
    else{// url doesn't start with a cool url
      res.send('sus')
    }
  }
  else{// url is nothing
    res.send('sus')
  }
});
  
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

