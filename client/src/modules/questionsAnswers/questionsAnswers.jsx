import React from 'react';
import QuestionsList from './QuestionsList.jsx';
import SearchBox from './SearchBox.jsx';
import axios from 'axios';


class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sortedQuestions: true,
      product_id: this.props.product_id

    };
  }

  render() {
    return (
      <div className="QuestionsAndAnswers">
        <h3>{'QUESTIONS & ANSWERS'} </h3>
        <SearchBox />
        {(this.state.sortedQuestions !== null) ? <QuestionsList product_id={this.state.product_id}/> : <div></div>}

      </div>
    )
  }
}

export default QuestionsAndAnswers;