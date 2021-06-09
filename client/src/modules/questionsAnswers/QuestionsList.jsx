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
      <div className="QuestionsList">
        <QuestionItem />
        <QuestionItem />
      </div>
    )
  }
}

export default QuestionsList;