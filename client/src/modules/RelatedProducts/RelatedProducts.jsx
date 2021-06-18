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
        {this.props.relatedInfo.relatedStart !== 0 ? <button className={btnStyle.nav} data-testid='leftClick' onClick={(event) => {this.props.caroselClickLeft('related')}}>&larr;</button> : null}
        <div className={style.list}>
          {this.props.products.map((product, index) => {
            return <ProductCard key={index + 'related' + product.productDetails[0]} product={product} actionButton={this.openCompare} cardClick={this.props.cardClick} list={this.props.list}/>
          })}
        </div>
        {!this.state.compare ? null : <CompareProducts close={this.closeCompare} currentProduct={this.props.relatedInfo.currentProduct} compareProduct={this.state.compareProduct} data-testid='compareProducts'/>}
        {this.props.relatedInfo.relatedEnd < this.props.relatedInfo.relatedList.length ? <button className={btnStyle.nav} data-testid='rightClick' onClick={(event) => {this.props.caroselClickRight('related')}}>&rarr;</button> : null}
      </div>
    )
  }
}

export default RelatedProducts;