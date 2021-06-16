import React from 'react';
import QuestionItem from './QuestionItem.jsx';
import axios from 'axios';
import Modal from './Modal.jsx';

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