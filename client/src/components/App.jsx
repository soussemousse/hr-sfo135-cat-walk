import React from 'react';
import ProductOverview from '../modules/ProductOverview/ProductOverview.jsx';
import Related from '../modules/RelatedProducts/RelatedProductsYourOutfit.jsx';
import RatingsAndReviews from '../modules/ratingsAndReviews/ratingsAndReviews.jsx';
import QuestionsAndAnswers from '../modules/questionsAnswers/questionsAnswers.jsx';
// import questionsData from '../modules/questionsAnswers/sampleData_Questions.js';

const App = function () {
  return (
    <div>
      <ProductOverview />
      <Related />
      <QuestionsAndAnswers product_id={25167}/>
      <RatingsAndReviews itemId={25167}/>
    </div>
  );
}

export default App;