import React from 'react';
import Axios from 'axios';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';
import sampleData from './SampleRelated.js';

class Related extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      currentProduct: sampleData,
      relatedProductsList: [],
      relatedCarosel: [],
      yourOutfit: [],
      outfitCarosel: [],
      relatedStart: 0,
      relatedEnd: 6,
      outfitStart: 0,
      outfitEnd: 5,
      outfitShown: [],
      starClick: false
    }
    this.getRelatedProducts = this.getRelatedProducts.bind(this);
    this.relatedCaroselClickLeft = this.relatedCaroselClickLeft.bind(this);
    this.relatedCaroselClickRight = this.relatedCaroselClickRight.bind(this);
    this.outfitCaroselClickLeft = this.outfitCaroselClickLeft.bind(this);
    this.outfitCaroselClickRight = this.outfitCaroselClickRight.bind(this);
    this.addToOutfit = this.addToOutfit.bind(this);
    this.getProductInfo = this.getProductInfo.bind(this);
    this.removeFromOutfit = this.removeFromOutfit.bind(this);
  }

  componentDidMount() {
    const yourOutfit = localStorage.yourOutfit ? JSON.parse(localStorage.yourOutfit) : this.state.yourOutfit;

    this.getRelatedProducts(this.state.currentProduct.id);
    this.setState({yourOutfit: yourOutfit});
  }

  relatedCaroselClickRight () {
    const start = this.state.relatedStart + 1;
    const end = this.state.relatedEnd + 1;
    const carosel = this.state.relatedProductsList.slice(start, end);

    this.setState({relatedCarosel: carosel, relatedStart: start, relatedEnd: end});
  }

  relatedCaroselClickLeft () {
    const start = this.state.relatedStart - 1;
    const end = this.state.relatedEnd - 1;
    const carosel = this.state.relatedProductsList.slice(start, end);

    this.setState({relatedCarosel: carosel, relatedStart: start, relatedEnd: end});
  }

  outfitCaroselClickRight () {
    const start = this.state.outfitStart + 1;
    const end = this.state.outfitEnd + 1;
    const carosel = this.state.yourOutfit.slice(start, end);

    this.setState({outfitCarosel: carosel, outfitStart: start, outfitEnd: end});
  }

  outfitCaroselClickLeft () {
    const start = this.state.outfitStart - 1;
    const end = this.state.outfitEnd - 1;
    const carosel = this.state.yourOutfit.slice(start, end);

    this.setState({outfitCarosel: carosel, outfitStart: start, outfitEnd: end});
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

  removeFromOutfit (product) {
    const oldOutfit = this.state.yourOutfit.slice();
    const outfitIds = oldOutfit.map(product => {return product.id});
    const productId = outfitIds.indexOf(product.id);

    oldOutfit.splice(productId, 1);

    this.setState({yourOutfit: oldOutfit});
    localStorage.setItem('yourOutfit', JSON.stringify(oldOutfit));
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
        const relatedObjArr = response.data.map((product) => {
          return {productDetails: product[0], productPhotos: product[1], ratings: product[2]};
        })
        const carosel = relatedObjArr.slice(this.state.start, this.state.end);

        this.setState({relatedProductsList: relatedObjArr, relatedCarosel: carosel});
      })
      .catch(err => {
        console.log(err);
      })
  }

  render () {
    return (
      <div className='relatedProducts'>
        <h3>Related Products</h3>
        <RelatedProducts relatedInfo={this.state} products={this.state.relatedCarosel} caroselClickRight={this.relatedCaroselClickRight} caroselClickLeft={this.relatedCaroselClickLeft} comparison={this.comparisonClick}/>
        <h3>Your Outfit</h3>
        <YourOutfit caroselClickRight={this.outfitCaroselClickRight} caroselClickLeft={this.outfitCaroselClickLeft} addToOutfit={this.addToOutfit} outfitInfo={this.state} removeFromOutfit={this.removeFromOutfit} />
      </div>
    )
  }
}

export default Related;