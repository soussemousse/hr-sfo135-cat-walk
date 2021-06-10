import React from 'react';
import RelatedCard from './RelatedCard.jsx';

function RelatedProducts(props) {
  return (
    <div className='carosel'>
      <button className='previous nav'>&larr;</button>
      <div className='RelatedProducts list'>
        {props.products.map((product) => {
          return <RelatedCard key={product.id} product={product} />
        })}
      </div>
      <button className='next nav'>&rarr;</button>
    </div>
  )
}

export default RelatedProducts;