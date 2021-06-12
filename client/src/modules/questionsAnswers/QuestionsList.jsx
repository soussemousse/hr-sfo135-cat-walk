import React from 'react';
import QuestionItem from './QuestionItem.jsx';
import axios from 'axios';
import AddQuestionModal from './addQuestionModal.jsx';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product_id: this.props.product_id,
      count: 0,
      sortedQuestions: [],
      nextPage: 1,
      fetchedLastPage: false,

      modal: false
    };
    this.maxPageCount = 5;

    this.handleLoadQuestionsClick = this.handleLoadQuestionsClick.bind(this);

    this.handleAddQuestionClick = this.handleAddQuestionClick.bind(this);

    this.getQuestions = this.getQuestions.bind(this);

    this.modalOpen = this.modalOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);
  }

  modalOpen() {
    this.setState({
      modal: true
    })
  }

  modalClose() {
    this.setState({
      modal: false
    })
  }

  handleLoadQuestionsClick() {
    var questionsLength = this.state.sortedQuestions.length;
    var count = this.state.count;

    if (!this.state.fetchedLastPage && (questionsLength - count) <= 2) {
      this.getQuestions();
    } else {
        this.setState({
          count: this.state.count + 2
        })
      }
  }

  handleAddQuestionClick() {
    // const onSubmit = (event) => {
    //   event.preventDefault(event);
    //   console.log(event.target.name.value);
    //   console.log(event.target.email.value);
    // };
  }

  getQuestions() {
    const options = {
      'method': 'GET',
      'url': `/qa/questions/${this.state.product_id}/${this.state.nextPage}/${this.maxPageCount}`
    }
    axios(options)
      .then(response => {
        // questions seem to already sorted when fetched from API

        // response.data.sort((a, b) => {
        //   if (a.question_helpulness === b.question_helpfulness) {
        //     return 0;
        //   } else {
        //     return (a.question_helpfulness < b.question_helpfulness) ? 1 : -1;
        //   }
        // });
        this.setState({
          sortedQuestions: this.state.sortedQuestions.concat(response.data),
          count: this.state.count + 2,
          nextPage: this.state.nextPage + 1,
          fetchedLastPage: (this.maxPageCount > response.data.length)
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (
      <>
        {/* <div className="questions-list">

          {(this.state.sortedQuestions.length !== 0) ? this.state.sortedQuestions.slice(0, this.state.count).map((question, index) => {
              return <QuestionItem QA={question} key={index}/>
            })
          : <></>}
        </div>

        <div className="question-buttons">
          {(this.state.sortedQuestions.length > this.state.count) ? <button id="questions-load-button" onClick={this.handleLoadQuestionsClick}> MORE ANSWERED QUESTIONS </button> : <></>}

          <button id="questions-add-button" onClick={this.handleAddQuestionClick}> ADD A QUESTION + </button>
        </div> */}

        <div className="questions-list">

          {(this.state.sortedQuestions.length !== 0) ? this.state.sortedQuestions.slice(0, this.state.count).map((question, index) => {
              return <QuestionItem QA={question} key={index}/>
            })
          : <></>}
        </div>

        {(this.state.modal) ? <AddQuestionModal content={
        <>
          <h3>Add Question Header</h3>
          <h5>SubHeader</h5>
          <p>Form Stuff</p>
          <button>Submit</button>
        </>} handleClose={this.modalClose}/> : null}

        <div className="question-buttons">
        {(this.state.sortedQuestions.length > this.state.count) ? <button id="questions-load-button" onClick={this.handleLoadQuestionsClick}> MORE ANSWERED QUESTIONS </button> : <></>}

        <button id="questions-add-button" onClick={this.modalOpen}> ADD A QUESTION + </button>
        </div>
      </>
    )
  }
}

export default QuestionsList;