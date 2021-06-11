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
    console.log('button clicked');
    this.setState({
      showButton: false
    })

    if (this.fetchedLastPage) {
      this.updateVisibleAnswers(this.state.allAnswers);
    }

    console.log('fetched last page handle: ', this.fetchedLastPage);
    this.getAnswers(false);
  }

  updateVisibleAnswers(answers) {
    console.log('in update visible answers');
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
        console.log('got response');
        this.fetchedLastPage = (this.max > response.data.length);
        this.nextPage++;

        this.setState({
          allAnswers: this.state.allAnswers.concat(response.data)
        }, () => {
          console.log('in callback: ', this.state.allAnswers);
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

        {/* <div className="answers-box">
          {this.state.sortedAnswers.slice(0, this.state.count).map((answer, index) => {
            return <Answer answer={answer} key={index}/>
          })}

          {(this.state.sortedAnswers.length > this.state.count) ? (<button className="answers-load-button" onClick={this.handleLoadAnswersClick}>LOAD MORE ANSWERS</button>) : <div></div> }

        </div> */}

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