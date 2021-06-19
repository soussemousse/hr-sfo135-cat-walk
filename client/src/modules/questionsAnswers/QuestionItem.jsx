import React, { useState, useEffect } from 'react';
import AnswersList from './AnswersList.jsx';
import axios from 'axios';
import style from './QA_CSS/questionItem.module.css';

const QuestionItem = (props) => {
  const [helpfulness, setHelpfulness] = useState(props.QA.question_helpfulness);
  const [wasHelpful, setWasHelpful] = useState(false);

  // wasReported = false;

  var answersLength = Object.keys(props.QA.answers).length;

  var handleQuestionHelpfulButton = () => {
    if (!wasHelpful) {
      axiosHelpful();
    }
  }

  var axiosHelpful = () => {
    const option = {
      'method': 'PUT',
      'url': `/qa/questions/${props.QA.question_id}/helpful`
    }
    axios(option)
    .then(response => {
      setWasHelpful(true);
      setHelpfulness(helpfulness + 1);
    })
    .catch(err => {console.log(err);})
  }

  return (
    <article className={style.question}>

      <div className={style.info}>
        <h4 className="question-text"><strong>{`Q: ${props.QA.question_body}`}</strong></h4>

        <div className={style.buttons}>
          <h6 className={style.helpful}>{`Helpful? `}<button className={style.helpfulbutton} onClick={handleQuestionHelpfulButton}><u>Yes</u></button>{` (${helpfulness})`}</h6>

          <button className={style.addanswerbutton}><u>Add Answer</u></button>
        </div>

      </div>

      {(answersLength !== 0) ? <AnswersList question_id={props.QA.question_id}/> : <div></div>}

    </article>
    )
}

export default QuestionItem;