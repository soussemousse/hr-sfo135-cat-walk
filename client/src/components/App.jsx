import React from 'react';
import ProductOverview from '../modules/ProductOverview/ProductOverview.jsx';
import RatingsAndReviews from '../modules/ratingsAndReviews/ratingsAndReviews.jsx';
import QuestionsAndAnswers from '../modules/questionsAnswers/questionsAnswers.jsx';


const App = function () {
  return (
    <div>
      <ProductOverview />
      <RatingsAndReviews/>
      <QuestionsAndAnswers/>
    </div>
  );
}

export default App;