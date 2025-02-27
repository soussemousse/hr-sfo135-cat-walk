import React from 'react';
import ReactDOM from 'react-dom';
import Review from './review.jsx';
// import ReviewFormModal from './reviewFormModal.jsx';
import NewReviewForm from './newReviewForm.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openPortal: false,
      product_id: '',
      rating: '',
      summary: '',
      body: '',
      recommend: '',
      name: '',
      email: '',
      photos: [],
      characteristics: {
      }
    };
    this.closePortal = this.closePortal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStarRating = this.handleStarRating.bind(this);
  }

  closePortal() {
    this.setState({openPortal: false});
  }

  handleInputChange(event) {
    console.log(event);
    console.log(event.target.value);
    console.log(event.target.name);
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({[name]: value});
    console.log(this.state);
  }

  handleStarRating(value) {
    this.setState({rating: value})
    const valueMeaning = ['Poor', 'Fair', 'Average', 'Good', 'Great'];
    return ReactDOM.createPortal(<div>{valueMeaning[value - 1]}</div>, document.getElementById('reactiveStarText'));
  }

  //<span name="rating" value={1} onClick={()=>{this.handleInputChange({target: {value: 1, name: 'rating'}})}}>&#9734;</span>

  // reviewFormModal() {
  //   //work on page overlay, star rating system and uploading images
  //   //could use conditional rendering inside the body of the span to keep stars filled after clicking
  //   return ReactDOM.createPortal(
  //     <div className="reviewForm">
  //       <div className="reviewStarRating">
  //         <div id="reactiveStarText"></div>
  //         <span onClick={()=>{this.handleStarRating(5)}}>&#9734;</span>
  //         <span onClick={()=>{this.handleStarRating(4)}}>&#9734;</span>
  //         <span onClick={()=>{this.handleStarRating(3)}}>&#9734;</span>
  //         <span onClick={()=>{this.handleStarRating(2)}}>&#9734;</span>
  //         <span onClick={()=>{this.handleStarRating(1)}}>&#9734;</span>
  //         gnitar llarevO
  //       </div>
  //       <form>
  //         <label>
  //         Do you recommend this product?
  //           <input
  //             name="recommend"
  //             type="checkbox"
  //             checked={this.state.recommend}
  //             onChange={this.handleInputChange} />
  //         </label>
  //         <br></br>
  //         <label>
  //           Review summary
  //           <input type="text" name="summary" value={this.state.summary} onChange={this.handleInputChange}></input>
  //         </label>
  //         <br></br>
  //         <label>
  //           Review Body
  //           <input type="text" name="body" value={this.state.body} onChange={this.handleInputChange}></input>
  //         </label>
  //         <br></br>
  //         <label>
  //           What is your nickname
  //           <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange}></input>
  //         </label>
  //         <br></br>
  //         <label>
  //           Your email
  //           <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange}></input>
  //         </label>
  //         <br></br>
  //         <label>
  //           images
  //           <input type="text" name="images" value={this.state.images} onChange={this.handleInputChange}></input>
  //         </label>
  //         <div className="reviewFormCharacteristics">
  //           {/* {
  //             Object.keys(this.props.list.characteristics).map((characteristic, index)=> (
  //               <div key={'characteristic' + index}>
  //                 <label>
  //                   {characteristic}
  //                 </label>
  //               </div>
  //             ));
  //           } */}
  //         </div>
  //       </form>
  //     </div>,
  //     document.getElementById('reviewPortal')
  //   );
  // }



  render() {
    // console.log(this.state);
    // && Object.keys(this.props.characteristics).length
    if (this.props.list.productReviews) {
      const max = this.props.list.reviewsToRender;
      const list = this.props.list.productReviews.slice(0, max);
      return (
        <div>
          <div className="reviewList">
            {list.map((review) => {
              return <Review key={review.review_id} currentReview={review}/>
            })}
          </div>
          <button onClick={this.props.pressButton}>more reviews</button>
          <button onClick={() => {this.setState({openPortal: true})}}>add review</button>
          {/* {this.state.openPortal ? <ReviewFormModal this={this} product_id={this.props.product_id} closePortal={this.closePortal}/> : null} */}
          {/* {this.state.openPortal ? this.reviewFormModal() : null} */}
          {this.state.openPortal ? <NewReviewForm state={this.state} characteristics={this.props.list.characteristics} handleStarRating={this.handleStarRating} handleInputChange={this.handleInputChange} /> : null}
        </div>
       )
    } else {
      return (
        <div>loading..</div>
      )
    }
  }
}

export default ReviewList;