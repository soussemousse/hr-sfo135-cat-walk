import React from 'react';
import Answer from './Answer.jsx';
// import axios from 'axios';

class AnswersList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sortedAnswers: this.props.answers,
      count: 2,
      // question_id: this.props.question_id,
      // nextPage: 1,
      // fetchedLastPage: false
    }
    // this.max = 5;

    this.handleLoadAnswersClick = this.handleLoadAnswersClick.bind(this);

    // this.getAnswers = this.getAnswers.bind(this);
  }

  handleLoadAnswersClick() {
    if (this.state.count < this.state.sortedAnswers.length) {
      this.setState({
        count: this.state.sortedAnswers.length
      })
    }

    // if (this.state.fetchedLastPage) {
    //   this.setState({
    //     count: this.state.sortedAnswers.length
    //   })
    // } else {

    // }

  }

  // getAnswers() {
  //   const option = {
  //     'method': 'GET',
  //     'url': `/qa/questions/${this.state.question_id}/answers/${this.state.nextPage}/${this.max}`
  //   }

  //   axios(option)
  //     .then(response => {
  //       // response.data.sort((a, b) => {
  //       //   if (a.helpulness === b.helpfulness) {
  //       //     return 0;
  //       //   } else {
  //       //     return (a.helpfulness < b.helpfulness) ? 1 : -1;
  //       //   }
  //       // });
  //       this.setState({
  //         sortedAnswers: this.state.sortedAnswers.concat(response.data),
  //         nextPage: this.state.nextPate + 1,
  //         fetchedLastPage: (this.max > response.data.length)
  //       })
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }

  // componentDidMount() {
  //   this.getAnswers();
  // }


  render() {
    return (
      <div className="answers-list">
        <div><strong>A: </strong></div>

        <div className="answers-box">
          {this.state.sortedAnswers.slice(0, this.state.count).map((answer, index) => {
            return <Answer answer={answer} key={index}/>
          })}

          {(this.state.sortedAnswers.length > this.state.count) ? (<button className="answers-load-button" onClick={this.handleLoadAnswersClick}>LOAD MORE ANSWERS</button>) : <div></div> }

        </div>

      </div>
    )
  }
}

export default AnswersList;