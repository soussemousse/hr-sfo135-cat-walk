import React from 'react';
import QuestionItem from './QuestionItem.jsx';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {


    };
  }

  render() {
    return (
      <div className="questions-list">
        <QuestionItem QA={this.props.questions[1]}/>
        <QuestionItem QA={this.props.questions[2]}/>
      </div>
    )
  }
}

export default QuestionsList;