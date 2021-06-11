import React from 'react';
import QuestionsList from './QuestionsList.jsx';
import SearchBox from './SearchBox.jsx';
import axios from 'axios';


class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sortedQuestions: null,
      product_id: this.props.product_id

    };

    this.getQuestions = this.getQuestions.bind(this);
  }

  getQuestions(product_id) {
    const options = {
      'method': 'GET',
      'url': `/qa/questions/${product_id}`
    }
    axios(options)
      .then(response => {
        response.data.sort((a, b) => {
          if (a.question_helpulness === b.question_helpfulness) {
            return 0;
          } else {
            return (a.question_helpfulness < b.question_helpfulness) ? 1 : -1;
          }
        });
        this.setState({
          sortedQuestions: response.data
        })
      })
      .catch(err => {
        console.log(err);
      })

  }

  componentDidMount() {
    this.getQuestions(this.state.product_id);
  }

  render() {
    return (
      <div className="QuestionsAndAnswers">
        <h3>{'QUESTIONS & ANSWERS'} </h3>
        <SearchBox />
        {(this.state.sortedQuestions !== null) ? <QuestionsList questions={this.state.sortedQuestions}/> : <div></div>}

      </div>
    )
  }
}

export default QuestionsAndAnswers;