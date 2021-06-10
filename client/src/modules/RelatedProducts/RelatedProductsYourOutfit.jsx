import React from 'react';
import Axios from 'axios';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';

class Related extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      currentProduct: {
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
    this.caroselClickLeft = this.caroselClickLeft.bind(this);
    this.caroselClickRight = this.caroselClickRight.bind(this);
  }

  componentDidMount() {
    this.getRelatedProducts(this.state.currentProduct.id);
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
        <YourOutfit caroselClickRight={this.caroselClickRight} caroselClickLeft={this.caroselClickLeft} />
      </div>
    )
  }
}

export default Related;