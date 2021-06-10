import React from 'react';
import ProductOverview from '../modules/ProductOverview/ProductOverview.jsx';
import Related from '../modules/RelatedProducts/RelatedProductsYourOutfit.jsx';
import RatingsAndReviews from '../modules/ratingsAndReviews/ratingsAndReviews.jsx';
import QuestionsAndAnswers from '../modules/questionsAnswers/questionsAnswers.jsx';

const App = function () {
  return (
    <div>
      <ProductOverview />
      <Related />
      <QuestionsAndAnswers />
      <RatingsAndReviews />
    </div>
  );
}

export default App;