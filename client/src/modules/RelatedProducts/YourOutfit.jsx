import React from 'react';
import ProductCard from './ProductCard.jsx';
import AddOutfit from './AddProductCard.jsx';
import style from './RelatedCSS/Lists.module.css';
import btnStyle from './RelatedCSS/Buttons.module.css';

class YourOutfit extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div className={style.carosel} data-testid='list'>
        {this.props.outfitInfo.outfitStart !== 0 ? <button className={btnStyle.nav} data-testid='clickLeft' onClick={this.props.caroselClickLeft}>&larr;</button> : null}
        <div className={style.list}>
          <AddOutfit addToOutfit={this.props.addToOutfit} currentProduct={this.props.outfitInfo.currentProduct} />
          {this.props.outfitInfo.yourOutfit.length > 0 ? this.props.outfitInfo.yourOutfit.map((product) => {
            return <OutfitCard key={product.id} product={product} removeFromOutfit={this.props.removeFromOutfit}/>
          }) : null}
        </div>
        {this.props.outfitInfo.outfitEnd < this.props.outfitInfo.yourOutfit.length ? <button className={btnStyle.nav} data-testid='clickRight' onClick={this.props.caroselClickRight}>&rarr;</button> : null}
      </div>
    )
  }
}

export default YourOutfit;

