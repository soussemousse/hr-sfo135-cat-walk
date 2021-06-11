import React from 'react';
import OutfitCard from './OutfitCard.jsx';
//import AddOutfit from './AddProductCard.jsx';

function YourOutfit (props) {
  return (
    <div className='carosel'>
      <button className='previous nav' onClick={props.caroselClickLeft}>&larr;</button>
      <div className='YourOutfit list'>
        <div>Add to Outfit</div>
        <OutfitCard />
        <OutfitCard />
        <OutfitCard />
        <OutfitCard />
      </div>
      <button className='next nav' onClick={props.caroselClickRight}>&rarr;</button>
    </div>
  )
}

export default YourOutfit;

