const express = require('express');
const app = express();
const path = require('path');
const port = 3001;
const productController = require('./controller/products.js');
const questionController = require('./controller/questions.js');
const ratingsController = require('./controller/ratings.js');
const relatedListController = require('./controller/RelatedProductsController.js');

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
  // res.send(id);
  ratingsController.ratingsAndReviews(id, res);
});

// app.get('/ratings', (req, res) => {

// });

// app.get('/reviews', (req, res) => {

// });

app.get('/qa/questions/:product_id/:page/:count', (req, res) => {
  questionController.getAllQuestions(req.params.product_id, req.params.page, req.params.count, res);
});

app.get('/related/:id', (req, res) => {
  const id = req.params.id;

  relatedListController.relatedListController(id, res);
});

app.post('/related/productInfo', (req, res) => {

  const productsInfo = req.body.products.map((productId) => {
    return [relatedListController.relatedProductsController(productId), relatedListController.relatedPhotosController(productId), relatedListController.relatedRatingsController(productId)];
  })

  const resolveInfoPromises = productsInfo.map((information) => {
    return Promise.all(information)
      .then(response => {
        return response;
      })
      .catch(err => {
        console.log(err);
      })
  })

  Promise.all(resolveInfoPromises)
    .then(response => {
      res.send(response);
    })
})

app.get('/qa/questions/:question_id/answers', (req, res) => {
  questionController.getAllAnswers(req.params.question_id, res);
})
