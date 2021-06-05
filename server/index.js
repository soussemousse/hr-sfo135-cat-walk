const express = require('express');
const app = express();
const path = require('path');
const port = 3001;
const productController = require('./controller/products.js');
const questionController = require('./controller/questions.js');
const ratingsController = require('./controller/ratings.js');
const relatedItemsController = require('./controller/relatedItems.js');

app.listen(port, (err = `connected to ${port}`) => {
  console.log(err);
});

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

app.get('/products', (req, res) => {
  productController.productDetailOverview(req.body.id, res);
})

app.get('/reviews', (req, res) => {

});

app.get('/ratings', (req, res) => {

});

app.get('/reviews', (req, res) => {

});
<<<<<<< HEAD

app.get('/randomtest', (req, res) => {

});
=======
///
///
///
///
>>>>>>> 5df71a7941b441940f9662067eaf9ad350f56cdd
