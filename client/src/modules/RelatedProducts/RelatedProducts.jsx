import React from 'react';
import ProductCard from './ProductCard.jsx';
import CompareProducts from './CompareProducts.jsx';
import style from './RelatedCSS/Lists.module.css';
import btnStyle from './RelatedCSS/Buttons.module.css';

class RelatedProducts extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      compare: false,
      compareProduct: {}
    }
  }

  openCompare = (product) => {this.setState({compare: true, compareProduct: product})};
  closeCompare = (event) => {this.setState({compare: false})};

  render () {
    return (
      <div className={style.carosel} data-testid='list'>
        {this.props.relatedInfo.relatedStart !== 0 ? <button className={btnStyle.nav} data-testid='leftClick' onClick={this.props.caroselClickLeft}>&larr;</button> : null}
        <div className={style.list}>
          {this.props.products.map((product) => {
            return <ProductCard key={product.productDetails[0]} product={product} actionButton={this.openCompare} cardClick={this.props.cardClick}/>
          })}
        </div>
        {!this.state.compare ? null : <CompareProducts close={this.closeCompare} currentProduct={this.props.relatedInfo.currentProduct} compareProduct={this.state.compareProduct} data-testid='compareProducts'/>}
        {this.props.relatedInfo.relatedEnd < this.props.relatedInfo.relatedProductsList.length ? <button className={btnStyle.nav} data-testid='rightClick' onClick={this.props.caroselClickRight}>&rarr;</button> : null}
      </div>
    )
  }
}

export default RelatedProducts;