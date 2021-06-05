
const productAxios = function (options) {
  axios(options)
    .then((response) => {
      res.send(response.data)
    })
    .catch((err) => {
      res.send(err);
      res.end();
    })
}

module.exports
