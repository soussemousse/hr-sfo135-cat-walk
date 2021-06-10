import React from 'react';
import QuestionsList from './QuestionsList.jsx';
import SearchBox from './SearchBox.jsx';


class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {


    };
  }

  render() {
    return (
      <div className="QuestionsAndAnswers">
        <h3>{'QUESTIONS & ANSWERS'} </h3>
        <SearchBox />
        <QuestionsList />
      </div>
    )
  }
}

export default QuestionsAndAnswers;