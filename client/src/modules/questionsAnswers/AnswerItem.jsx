import React,  { useState } from 'react';
import axios from 'axios';
import style from './QA_CSS/answerItem.module.css';

const Answer = (props) => {
  const [wasHelpful, setWasHelpful] = useState(false);
  const[wasReported, setWasReported] = useState(false);
  const[helpfulness, setHelpfulness] = useState(props.answer.helpfulness);

  var getFormattedDate = () => {
    var date = new Date(props.answer.date);

    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][date.getMonth()];
    var day = date.getDate();
    var year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  }

  var handleAnswerHelpfulButton = () => {
    if (!wasHelpful) {
      axiosHelpful();
    }
  }

  var handleAnswerReportButton= () => {
    if (!wasReported) {
      axiosReport();
    }
  }

  var axiosHelpful = () => {
    const option = {
      'method': 'PUT',
      'url': `/qa/answers/${props.answer.answer_id}/helpful`
    }
    axios(option)
    .then(response => {
      setHelpfulness(helpfulness + 1);
      setWasHelpful(true);
    })
    .catch(err => {console.log(err);})
  }

  var axiosReport = () => {
    const option = {
      'method': 'PUT',
      'url': `/qa/answers/${props.answer.answer_id}/report`
    }
    axios(option)
    .then(response => {
      setWasReported(true);
    })
    .catch(err => {console.log(err);})
  }

  var username = (props.answer.answerer_id === 'Seller') ? <b>Seller</b> : <>{props.answer.answerer_id}</>;

  return (
    <div className={style.answer}>
      <div className="answer-text">{props.answer.body}</div>

      {/* <div className="answer-pics"></div> */}

      <div className={style.answerinfo}>
          <div className={style.answeruser}>{`by `}{username}{`, ${getFormattedDate()}`}</div>

          <div className={style.answerhelpful}>{`Helpful? `}<button className={style.helpfulbutton} onClick={handleAnswerHelpfulButton}><u>Yes</u></button>{` (${helpfulness})`}</div>

          <button className={style.reportbutton} onClick={handleAnswerReportButton}><u>{(wasReported) ? 'Reported' : 'Report'}</u></button>

      </div>
    </div>
  )
}

export default Answer;