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
    this.handleCharacteristicRating = this.handleCharacteristicRating.bind(this);
  }

  componentDidMount() {
    let characteristicsObj = {};
    const characteristics = this.props.list.characteristics;
    Object.keys(characteristics).forEach((key) => {
      const id = characteristics[key].id;
      // let id, value;
      // [id, value] = [characteristics[key].id, characteristics[key].value];
      characteristicsObj[id] = 0;
    })
    this.setState({characteristics: characteristicsObj});
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

  handleCharacteristicRating(characteristic, rating, characteristics = {}) {
    Object.assign(characteristics, this.state.characteristics);
    characteristics[characteristic] = rating;
    console.log(characteristics);
    this.setState({characteristics});
  }

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
          {this.state.openPortal
            ? <NewReviewForm
                state={this.state}
                characteristics={this.props.list.characteristics}
                handleStarRating={this.handleStarRating}
                handleInputChange={this.handleInputChange}
                handleCharacteristicRating={this.handleCharacteristicRating}
              />
            : null
          }
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