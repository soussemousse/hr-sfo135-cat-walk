import React from 'react';
import Axios from 'axios';
import RelatedProducts from './RelatedProducts.jsx';
//import YourOutfit from './YourOutfit.jsx';

class Related extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      relatedProductsList: [],
      relatedCarosel: [],
      //currentUser: this.props.currentUser,
      userOutfit: [],
      start: 0,
      end: 6,
      outfitShown: [],
      starClick: false
    }
    this.getRelatedProducts = this.getRelatedProducts.bind(this);
  }

  componentDidMount() {
    this.getRelatedProducts(25167);
  }

  caroselClickRight () {
    const start = this.state.start + 1;
    const end = this.state.end + 1;
    const carosel = this.state.relatedProductsList.slice(start, end);

    console.log(carosel);

    this.setState({relatedCarosel: carosel, start: start, end: end});
  }

  caroselClickLeft () {
    const start = this.state.start - 1;
    const end = this.state.end - 1;
    const carosel = this.state.relatedProductsList.slice(start, end);

    console.log(carosel);

    this.setState({relatedCarosel: carosel, start: start, end: end});
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
        this.setState({relatedProductsList: response.data, relatedCarosel: response.data.slice(this.state.start, this.state.end)});
      })
      .catch(err => {
        console.log(err);
      })
    }

  render () {
    return (
      <div>
        <h3>Related Products</h3>
        <RelatedProducts relatedInfo={this.state} products={this.state.relatedCarosel} caroselClickRight={this.caroselClickRight} caroselClickLeft={this.caroselClickLeft} comparison={this.comparisonClick}/>
        <h3>Your Outfit</h3>
      </div>
    )
  }
}

export default Related;