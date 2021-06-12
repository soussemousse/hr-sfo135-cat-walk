import React from 'react';
import ReactDOM from 'react-dom';

const NewReviewFormCharacteristic = function (props) {
  console.log('test', props.characteristic, props.id);
  return (
    <div>
      <label>
        {props.characteristic}
        <br></br>
        {
          [1,2,3,4,5].map((rating) => {
            // console.log(this.props.characteristic);
            return (
              <span key={props.characteristic + rating}>
                <label>{rating}</label>
                <input type="radio" name={props.characteristic} onChange={() => props.handleCharacteristicRating(props.id, rating)} value={rating}></input>
              </span>
            )
          })
        }
      </label>
    </div>
  )
}

// class NewReviewFormCharacteristic extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {

//     }
//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   componentDidMount() {
//     this.setState({[this.props.characteristic]: 0})
//   }

//   handleInputChange(event) {
//     console.log(event);
//     console.log(event.target.value);
//     console.log(event.target.name);
//     const target = event.target;
//     const value = target.value;
//     const name = target.name;
//     this.setState({[name]: value});
//     console.log(this.state);
//   }

//   render () {
//     return (
//       <div>
//         <label>
//           {this.props.characteristic}
//           <br></br>
//           {
//             [1,2,3,4,5].map((rating, index) => {
//               // console.log(this.props.characteristic);
//               return (
//                 <span key={this.props.characteristic + rating}>
//                   <label>{rating}</label>
//                   <input type="radio" name={this.props.characteristic} onChange={this.handleInputChange} value={rating}></input>
//                 </span>
//               )
//             })
//           }
//         </label>
//       </div>
//     )
//   }
// }

export default NewReviewFormCharacteristic;