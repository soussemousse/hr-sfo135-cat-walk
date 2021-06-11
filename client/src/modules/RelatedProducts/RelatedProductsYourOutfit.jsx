import React from 'react';
import Axios from 'axios';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';

class Related extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      currentProduct: this.props.currentProduct,
      relatedProductsList: [],
      relatedCarosel: [],
      //currentUser: this.props.currentUser,
      yourOutfit: [],
      start: 0,
      end: 6,
      outfitShown: [],
      starClick: false
    }
    this.getRelatedProducts = this.getRelatedProducts.bind(this);
    this.caroselClickLeft = this.caroselClickLeft.bind(this);
    this.caroselClickRight = this.caroselClickRight.bind(this);
    this.addToOutfit = this.addToOutfit.bind(this);
    this.getProductInfo = this.getProductInfo.bind(this);
  }

  componentDidMount() {
    const yourOutfit = localStorage.yourOutfit ? JSON.parse(localStorage.yourOutfit) : this.state.yourOutfit;

    this.getRelatedProducts(this.state.currentProduct.id);
    this.setState({yourOutfit: yourOutfit});
  }

  caroselClickRight () {
    const start = this.state.start + 1;
    const end = this.state.end + 1;
    const carosel = this.state.relatedProductsList.slice(start, end);

    this.setState({relatedCarosel: carosel, start: start, end: end});
  }

  caroselClickLeft () {
    const start = this.state.start - 1;
    const end = this.state.end - 1;
    const carosel = this.state.relatedProductsList.slice(start, end);

    this.setState({relatedCarosel: carosel, start: start, end: end});
  }

  addToOutfit (product) {
    const newOutfit = this.state.yourOutfit.slice();
    const outfitIds = newOutfit.map(product => {return product.id});

    if (outfitIds.includes(product.id) === false) {
      newOutfit.push(product);
      this.setState({yourOutfit: newOutfit});
      localStorage.setItem('yourOutfit', JSON.stringify(newOutfit));
    } else {
      console.log('Already there!');
    }
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
        this.getProductInfo(response.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  getProductInfo (relatedIds) {
    const option = {
      "method": 'post',
      "url": `related/productInfo`,
      "data": {
        "products": relatedIds
      }
    }
    Axios(option)
      .then((response) => {
        console.log('related products API data:', response.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render () {
    return (
      <div className='relatedProducts'>
        <h3>Related Products</h3>
        <RelatedProducts relatedInfo={this.state} products={this.state.relatedCarosel} caroselClickRight={this.caroselClickRight} caroselClickLeft={this.caroselClickLeft} comparison={this.comparisonClick}/>
        <h3>Your Outfit</h3>
        <YourOutfit caroselClickRight={this.caroselClickRight} caroselClickLeft={this.caroselClickLeft} addToOutfit={this.addToOutfit} outfitInfo={this.state} />
      </div>
    )
  }
}

export default Related;