import React from 'react';
import OutfitCard from './OutfitCard.jsx';
import AddOutfit from './AddProductCard.jsx';

class YourOutfit extends React.Component {
  constructor (props) {
    super (props);
    console.log(props.outfitInfo);
  }

  render () {
    return (
      <div className='carosel'>
        <button className='previous nav'onClick={this.props.caroselClickLeft}>&larr;</button>
        <div className='YourOutfit list'>
          <AddOutfit addToOutfit={this.props.addToOutfit} currentProduct={this.props.outfitInfo.currentProduct} />
          {this.props.outfitInfo.yourOutfit.length > 0 ? this.props.outfitInfo.yourOutfit.map((product) => {
            return <OutfitCard key={product.id} product={product}/>
          }) : null}
        </div>
        <button className='next nav' onClick={this.props.caroselClickRight}>&rarr;</button>
      </div>
    )
  }
}

export default YourOutfit;

