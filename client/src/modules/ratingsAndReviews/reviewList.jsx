import React from 'react';
import Review from './review.jsx';
// import ReviewFormModal from './reviewFormModal.jsx';
import ReactDOM from 'react-dom';

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
  }

  closePortal() {
    this.setState({openPortal: false});
  }

  handleInputChange(event) {
    console.log(event);
    console.log(event.target.value);
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  handleStarRating(value) {
    console.log(value);
    this.setState({rating: value})
  }

  //<span name="rating" value={1} onClick={()=>{this.handleInputChange({target: {value: 1, name: 'rating'}})}}>&#9734;</span>
  reviewFormModal() {
    //work on page overlay, star rating system and uploading images
    //could use conditional rendering inside the body of the span to keep stars filled after clicking
    return ReactDOM.createPortal(
      <div className="reviewForm">
        <div className="reviewStarRating">
          <span onClick={()=>{this.handleStarRating(5)}}>&#9734;</span>
          <span onClick={()=>{this.handleStarRating(4)}}>&#9734;</span>
          <span onClick={()=>{this.handleStarRating(3)}}>&#9734;</span>
          <span onClick={()=>{this.handleStarRating(2)}}>&#9734;</span>
          <span onClick={()=>{this.handleStarRating(1)}}>&#9734;</span>
        </div>
        <form>
          <label>
            Recommended:
            <input
              name="recommend"
              type="checkbox"
              checked={this.state.recommend}
              onChange={this.handleInputChange} />
          </label>
          <br></br>
          <label>
            summary
            <input type="text" name="summary" value={this.state.summary} onChange={this.handleInputChange}></input>
          </label>
          <br></br>
          <label>
            body
            <input type="text" name="body" value={this.state.body} onChange={this.handleInputChange}></input>
          </label>
          <br></br>
          <label>
            name
            <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange}></input>
          </label>
          <br></br>
          <label>
            email
            <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange}></input>
          </label>
          <br></br>
          <label>
            images
            <input type="text" name="images" value={this.state.images} onChange={this.handleInputChange}></input>
          </label>
        </form>
      </div>,
      document.getElementById('reviewPortal')
    );
  }



  render() {
    console.log(this.state);
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
          {this.state.openPortal ? this.reviewFormModal() : null}
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