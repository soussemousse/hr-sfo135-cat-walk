import React from 'react';
import ReactDOM from 'react-dom';

const NewReviewFormCharacteristic = function (props) {
  return (
    <div>
      <label>
        {props.characteristic}
        <br></br>
        <label>1</label>
        <input type="radio" name={props.characteristic} onChange={props.handleInputChange} value={1}></input>
        <label>2</label>
        <input type="radio" name={props.characteristic} value={2}></input>
        <label>3</label>
        <input type="radio" name={props.characteristic} value={3}></input>
        <label>4</label>
        <input type="radio" name={props.characteristic} value={4}></input>
        <label>5</label>
        <input type="radio" name={props.characteristic} value={5}></input>
      </label>
    </div>
  );
}

export default NewReviewFormCharacteristic;