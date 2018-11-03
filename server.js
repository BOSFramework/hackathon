const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
const uuid = require('uuid/v4');
const bodyParser = require('body-parser');

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Serve static assets
//app.use(express.static(path.resolve(__dirname, '..', 'build')));

//THIS SHOULD BE STORE SECURELY AND PASSED WITH CONFIGURATION
const BOSapiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2ZDMzMWJkMC1jNDMxLTRkNGYtOGY2ZS1kNDg2MGViNjIxMTQiLCJzdWIiOiJCT1NBcGlLZXkiLCJpYXQiOiIxNTM5Mjg1NDE0IiwiYWNjb3VudCI6ImZlZTQ0ODdkLWExYjYtNDU5My05MTYzLTY4MzFiOWQ5ZjAwMSIsInByb2plY3QiOiI1Yzk1YjQ4Yy03MWRiLTQ2ODQtOGM5YS05YjA5ZGM5Y2NjZDIiLCJ0ZW5hbnQiOiJjNjRmY2QxOS0yOWE1LTQ4MDAtOGIyNi02OTgyYjE0MzlmZWQifQ.bRxkDgfYbStpoe4QRp3vaEXN7XYakJyVida3m2c8HzY"

const PORT = 5123;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

app.post('/register', (req, res) => {
    console.log('req: ' + req.body.email);
  axios.post("https://apis.dev.bosframework.com/auth/odata/Users?api-version=1.0", {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
  },
  {
    headers: {'Authorization': 'Bearer '+BOSapiKey}
}).then(r =>{
    const isSuccess = r.data;
    res.send(isSuccess);
  }).catch(ex => {
    console.log(ex);
    res.send(ex.response.statusText);
  });
});

app.post('/verify', (req, res) => {
    axios.post("https://apis.dev.bosframework.com/auth/odata/Verification?api-version=1.0", {
        username: req.body.username,
        password: req.body.password
    },{
        headers: {'Authorization': 'Bearer '+BOSapiKey}
    }).then(r => {
        isSuccess = r.data;
        res.send(isSuccess);
    }).catch(ex => {
        console.log(ex);
        res.send(ex.response.statusText);
    });
  });
