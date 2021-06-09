import React from 'react';
import ProductOverview from '../modules/ProductOverview/ProductOverview.jsx';
import Related from '../modules/RelatedProducts/RelatedProductsYourOutfit.jsx';


const App = function () {
  return (
    <div>
      <ProductOverview />
      <Related />
    </div>
  );
}

export default App;