import React from 'react';
import QuestionItem from './QuestionItem.jsx';

const QuestionsList2 = (props) => {
  return (
    <>
      <div className="questions-list">
        {props.questions.map((question, index) => {
          return <QuestionItem QA={question} key={index} />
        })}
      </div>
    </>
  )
}

export default QuestionsList2;