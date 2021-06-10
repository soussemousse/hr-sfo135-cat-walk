import React from 'react';
import RelatedCard from './RelatedCard.jsx';

class RelatedProducts extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      compare: false,
      compareProduct: {}
    }
  }

  render () {
    return (
      <div className='carosel'>
        {this.props.relatedInfo.start !== 0 ? <button className='previous nav' onClick={this.props.caroselClickLeft}>&larr;</button> : null}
        <div className='RelatedProducts list'>
          {this.props.products.map((product) => {
            return <RelatedCard key={product.id} product={product} />
          })}
        </div>
      </div>
    )
  }
}

export default RelatedProducts;