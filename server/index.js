const express = require('express');
const axios = require('axios');
const app = express();
const path = require('path');
const port = 3001;
const tokenObj = require('../token.js');

app.listen(port, (err = `connected to ${port}`) => {
  console.log(err);
});

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

app.get('/products', (req, res) => {
  const options = {
    "method": 'get',
    "url": `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${req.body.id}`,
    "headers": {
      "user-agent": 'request',
      "Authorization": tokenObj.token
    }
  }
  axios(options)
    .then((response) => {
      res.send(response.data)
    })
    .catch((err) => {
      res.send(err);
      res.end();
    })
})

