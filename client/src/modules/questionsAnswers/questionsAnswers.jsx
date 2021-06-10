import React from 'react';
import QuestionsList from './QuestionsList.jsx';
import SearchBox from './SearchBox.jsx';


class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: this.props.questions

    };
  }

  render() {
    return (
      <div className="QuestionsAndAnswers">
        <h3>{'QUESTIONS & ANSWERS'} </h3>
        <SearchBox />
        <QuestionsList questions={this.state.questions}/>
      </div>
    )
  }
}

export default QuestionsAndAnswers;