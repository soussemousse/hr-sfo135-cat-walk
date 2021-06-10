import React from 'react';
import QuestionItem from './QuestionItem.jsx';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isExpanded: false,
      sortedQuestions: this.props.questions
    };
  }

  //if not expanded, render first two
  //if expanded, render all
  render() {
    return (
      <div className="questions-list">
        {this.state.sortedQuestions.slice(0, 4).map((question, index) => {
          return <QuestionItem QA={question} key={index}/>
        })}
      </div>
    )
  }
}

export default QuestionsList;