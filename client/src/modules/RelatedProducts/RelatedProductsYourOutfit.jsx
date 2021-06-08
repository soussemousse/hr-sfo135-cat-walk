import React from 'react';
import Axios from 'axios';
//import RelatedProducts from './RelatedProducts.jsx';
//import YourOutfit from './YourOutfit.jsx';

class Related extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div>
        <h3>Related Products</h3>
        <h3>Your Outfit</h3>
      </div>
    )
  }
}

export default Related;