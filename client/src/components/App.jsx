import React from 'react';
import ProductOverview from '../modules/ProductOverview/ProductOverview.jsx';
import RatingsAndReviews from '../modules/ratingsAndReviews/ratingsAndReviews.jsx';


const App = function () {
  return (
    <div>
      <ProductOverview />
      <RatingsAndReviews/>
    </div>
  );
}

export default App;