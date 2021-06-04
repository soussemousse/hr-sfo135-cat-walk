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