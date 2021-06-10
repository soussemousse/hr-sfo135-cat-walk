const express = require('express');
const app = express();
const path = require('path');
const port = 3001;
const productController = require('./controller/products.js');
const questionController = require('./controller/questions.js');
const ratingsController = require('./controller/ratings.js');
const relatedProductsController = require('./controller/RelatedProductsController.js');

app.listen(port, (err = `connected to ${port}`) => {
  console.log(err);
});

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

app.get('/products', (req, res) => {
  productController.productDetailOverview(req.body.id, res);
})

app.get('/reviews/:id', (req, res) => {
  const id = req.params.id;
  ratingsController.ratingsAndReviews(id, res);
});

app.get('/ratings', (req, res) => {

});

app.get('/reviews', (req, res) => {

});

app.get('/qa/questions', (req, res) => {
  questionController.getAllQuestions(req.body.id, res);
});

app.get('/related/:id', (req, res) => {
  const id = req.params.id;

  relatedProductsController.relatedProductsController(id, res);
});

app.get('/qa/questions/:question_id/answers', (req, res) => {
  questionController.getAllAnswers(req.body.question_id, res);
})
