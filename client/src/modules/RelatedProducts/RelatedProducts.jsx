import React from 'react';
import RelatedCard from './RelatedCard.jsx';
import CompareProducts from './CompareProducts.jsx';

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
      <div className='carosel'>
        {this.props.relatedInfo.relatedStart !== 0 ? <button className='previous nav' onClick={this.props.caroselClickLeft}>&larr;</button> : null}
        <div className='RelatedProducts list'>
          {this.props.products.map((product) => {
            return <RelatedCard key={product.id} product={product} open={this.openCompare}/>
          })}
        </div>
        {!this.state.compare ? null : <CompareProducts close={this.closeCompare} currentProduct={this.props.relatedInfo.currentProduct} compareProduct={this.state.compareProduct}/>}
        {this.props.relatedInfo.relatedEnd <= this.props.relatedInfo.relatedProductsList.length ? <button className='next nav' onClick={this.props.caroselClickRight}>&rarr;</button> : null}
      </div>
    )
  }
}

export default RelatedProducts;