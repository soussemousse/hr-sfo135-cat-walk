import React from 'react';
import QuestionItem from './QuestionItem.jsx';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 2,
      sortedQuestions: this.props.questions
    };
  }

  render() {
    return (
      <div className="questions-list">
        {this.state.sortedQuestions.slice(0, this.state.count).map((question, index) => {
          return <QuestionItem QA={question} key={index}/>
        })}
      </div>


    )
  }
}

export default QuestionsList;