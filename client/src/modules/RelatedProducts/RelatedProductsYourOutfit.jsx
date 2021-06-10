import React from 'react';
import Axios from 'axios';
import RelatedProducts from './RelatedProducts.jsx';
//import YourOutfit from './YourOutfit.jsx';

class Related extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      relatedProductsList: []
    }
    this.getRelatedProducts = this.getRelatedProducts.bind(this);
  }

  componentDidMount() {
    this.getRelatedProducts(25167);
  }

  getRelatedProducts (id) {
    const option = {
      "method": 'get',
      "url": `/related/${id}`,
      "params": {
        ID: id
      }
    }
    Axios(option)
      .then(response => {
        this.setState({relatedProductsList: response.data});
      })
      .catch(err => {
        console.log(err);
      })
    }

  render () {
    return (
      <div>
        <h3>Related Products</h3>
        <RelatedProducts products={this.state.relatedProductsList} />
        <h3>Your Outfit</h3>
      </div>
    )
  }
}

export default Related;