import React from 'react';

function OutfitCard (props) {
  return (
    <div className='card'>
      <span className='delete upperleft'>&#935;</span>
      <img className='pictureThumbnail'></img><br></br>
      <small>Category</small>
      <h4>Product Name</h4>
      <span>Price</span><br></br>
      <span>Rating</span>
    </div>
  )
}

export default OutfitCard;