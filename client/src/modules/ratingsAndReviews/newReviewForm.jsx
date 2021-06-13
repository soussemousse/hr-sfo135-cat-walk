import React from 'react';
import ReactDOM from 'react-dom';
import NewReviewFormCharacteristic from './newReviewFormCharacteristic.jsx';

const NewReviewForm = function (props) {
  return ReactDOM.createPortal(
    <div className="reviewForm">
      <div className="reviewStarRating">
        <div id="reactiveStarText"></div>
        <span onClick={()=>{props.handleStarRating(5)}}>&#9734;</span>
        <span onClick={()=>{props.handleStarRating(4)}}>&#9734;</span>
        <span onClick={()=>{props.handleStarRating(3)}}>&#9734;</span>
        <span onClick={()=>{props.handleStarRating(2)}}>&#9734;</span>
        <span onClick={()=>{props.handleStarRating(1)}}>&#9734;</span>
        gnitar llarevO
      </div>
      <form>
        <label>
          Do you recommend this product?
          <input
            name="recommend"
            type="checkbox"
            checked={props.state.recommend}
            onChange={props.handleInputChange} />
        </label>
      </form>
      <br></br>
      <div className="reviewFormCharacteristics">
        {
          Object.keys(props.characteristics).map((characteristic, index) => {
            return (
              <div key={'characteristic' + index}>
                <NewReviewFormCharacteristic handleInputChange={props.handleInputChange} characteristic={characteristic} id={props.characteristics[characteristic].id} handleCharacteristicRating={props.handleCharacteristicRating} />
              </div>
            )
          })
        }
      </div>
      <form>
        <label>
          Review summary
          <input type="text" name="summary" value={props.state.summary} onChange={props.handleInputChange}></input>
        </label>
        <br></br>
        <label>
          Review Body
          <input type="text" name="body" value={props.state.body} onChange={props.handleInputChange}></input>
        </label>
        <br></br>
        <label>
          What is your nickname
          <input type="text" name="name" value={props.state.name} onChange={props.handleInputChange}></input>
        </label>
        <br></br>
        <label>
          Your email
          <input type="email" name="email" value={props.state.email} onChange={props.handleInputChange}></input>
        </label>
        <br></br>
        {/* <label>
          images
          <input type="text" name="images" value={props.state.images} onChange={props.handleInputChange}></input>
        </label> */}
      </form>
      <button onClick={() => {props.toggleNewReviewForm(); props.submitReview(props.state)}}>Submit review</button>
    </div>,
    document.getElementById('reviewPortal')
  );
}



export default NewReviewForm;