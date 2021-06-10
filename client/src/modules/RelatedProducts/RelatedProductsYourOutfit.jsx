import React from 'react';
import Axios from 'axios';
import RelatedProducts from './RelatedProducts.jsx';
//import YourOutfit from './YourOutfit.jsx';
const sampleProductsArr = [{
  "id": 25168,
  "campus": "hr-sfo",
  "name": "Bright Future Sunglasses",
  "slogan": "You've got to wear shades",
  "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
  "category": "Accessories",
  "default_price": "69.00",
  "created_at": "2021-06-02T16:53:33.359Z",
  "updated_at": "2021-06-02T16:53:33.359Z",
  "features": [
      {
          "feature": "Lenses",
          "value": "Ultrasheen"
      },
      {
          "feature": "UV Protection",
          "value": null
      },
      {
          "feature": "Frames",
          "value": "LightCompose"
      }
  ]
},
{
  "id": 25169,
  "campus": "hr-sfo",
  "name": "Morning Joggers",
  "slogan": "Make yourself a morning person",
  "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
  "category": "Pants",
  "default_price": "40.00",
  "created_at": "2021-06-02T16:53:33.359Z",
  "updated_at": "2021-06-02T16:53:33.359Z",
  "features": [
      {
          "feature": "Fabric",
          "value": "100% Cotton"
      },
      {
          "feature": "Cut",
          "value": "Skinny"
      }
  ]
}];

class Related extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div>
        <h3>Related Products</h3>
        <RelatedProducts products={} />
        <h3>Your Outfit</h3>
      </div>
    )
  }
}

export default Related;