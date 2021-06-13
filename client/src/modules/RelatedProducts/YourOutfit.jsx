import React from 'react';
import OutfitCard from './OutfitCard.jsx';
import AddOutfit from './AddProductCard.jsx';

class YourOutfit extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div className='carosel'>
        {this.props.outfitInfo.outfitStart !== 0 ? <button className='previous nav' onClick={this.props.caroselClickLeft}>&larr;</button> : null}
        <div className='YourOutfit list'>
          <AddOutfit addToOutfit={this.props.addToOutfit} currentProduct={this.props.outfitInfo.currentProduct} />
          {this.props.outfitInfo.yourOutfit.length > 0 ? this.props.outfitInfo.yourOutfit.map((product) => {
            return <OutfitCard key={product.id} product={product} removeFromOutfit={this.props.removeFromOutfit}/>
          }) : null}
        </div>
        {this.props.outfitInfo.outfitEnd < this.props.outfitInfo.yourOutfit.length ? <button className='next nav' onClick={this.props.caroselClickRight}>&rarr;</button> : null}
      </div>
    )
  }
}

export default YourOutfit;

