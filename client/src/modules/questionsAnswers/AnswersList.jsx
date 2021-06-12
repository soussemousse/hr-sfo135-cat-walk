import React from 'react';
import Answer from './Answer.jsx';
import axios from 'axios';

class AnswersList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      question_id: this.props.question_id,
      visibleAnswers: [],
      allAnswers: [],
      showButton: true
    }
    this.max = 3;
    this.initialCount = 2;
    this.nextPage = 1;
    this.fetchedLastPage = false;

    this.handleLoadAnswersClick = this.handleLoadAnswersClick.bind(this);

    this.getAnswers = this.getAnswers.bind(this);
  }

  handleLoadAnswersClick() {
    this.setState({
      showButton: false
    })

    if (this.fetchedLastPage) {
      this.updateVisibleAnswers(this.state.allAnswers);
    }
    this.getAnswers(false);
  }

  updateVisibleAnswers(answers) {
    this.setState({
      visibleAnswers: answers
    })
  }

  getAnswers(isInitialFetch) {
    const option = {
      'method': 'GET',
      'url': `/qa/questions/${this.state.question_id}/answers/${this.nextPage}/${this.max}`
    }

    axios(option)
      .then(response => {
        // response.data.sort((a, b) => {
        //   if (a.helpulness === b.helpfulness) {
        //     return 0;
        //   } else {
        //     return (a.helpfulness < b.helpfulness) ? 1 : -1;
        //   }
        // });
        this.fetchedLastPage = (this.max > response.data.length);
        this.nextPage++;

        this.setState({
          allAnswers: this.state.allAnswers.concat(response.data)
        }, () => {
          if (isInitialFetch) {
            this.updateVisibleAnswers(this.state.allAnswers.slice(0, this.initialCount));

            this.setState({
              showButton: this.initialCount < this.state.allAnswers.length
            })
          } else if (this.fetchedLastPage) {
            this.updateVisibleAnswers(this.state.allAnswers);
          } else {
            this.getAnswers(false);
          }
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.getAnswers(true);
  }

  render() {
    return (
      <div className="answers-list">
        <div><strong>A: </strong></div>

        <div className="answers-box">
          {this.state.visibleAnswers.map((answer, index) => {
            return <Answer answer={answer} key={index}/>
          })}

          {(this.state.showButton) ? (<button className="answers-load-button" onClick={this.handleLoadAnswersClick}>LOAD MORE ANSWERS</button>) : <div></div> }

        </div>

      </div>
    )
  }
}

export default AnswersList;