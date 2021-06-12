import React from 'react';

function AddOutfit (props) {
  return (
    <div className='card' data-testid='outfitCard'>
      <label className='addProduct'>&#43;<input type='radio' className='addProductButton' data-testid='addProduct' onClick={(event) => {props.addToOutfit(props.currentProduct)}}></input></label>
      <h4 className='addOutfit'>Add to Your Outfit</h4>
    </div>
  )
}

export default AddOutfit;