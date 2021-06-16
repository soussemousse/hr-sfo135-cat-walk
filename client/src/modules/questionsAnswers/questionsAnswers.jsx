import React from 'react';
//import QuestionsList from './QuestionsList.jsx';
//import QuestionsList2 from './QuestionsList2.jsx';
import QuestionItem from './QuestionItem.jsx';
import SearchBox from './SearchBox.jsx';
import axios from 'axios';
import Modal from './Modal.jsx';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product_id: this.props.product_id,
      visibleQuestions: [],
      allQuestions: [],
      count: 2,
      filteredQuestions: [],
      filterON: false,

      modal: false
    };
    this.maxPerPage = 50;
    this.nextPage = 1;
    this.doneFetch = false;

    this.prevVisible = null;
    this.prevCount = 2;

    this.getQuestions = this.getQuestions.bind(this);

    this.handleLoadQuestionsClick = this.handleLoadQuestionsClick.bind(this);

    this.handleSearchBarInputChange = this.handleSearchBarInputChange.bind(this);
    this.filterQuestions = this.filterQuestions.bind(this);

    this.handleAddQuestionSubmit = this.handleAddQuestionSubmit.bind(this);

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

  handleAddQuestionSubmit(e) {
      e.preventDefault(e);

      var body = document.getElementById("QA-body").value;
      var name = document.getElementById("QA-name").value;
      var email = document.getElementById("QA-email").value;

      axios({
        method: "post",
        url: "/qa/questions",
        data: {
          "product_id": this.state.product_id,
          "body": body,
          "name": name,
          "email": email
        }
      })
      .then(res => {
        console.log(res.status);
      })
      .catch(err => {console.log(err);})
  }

  filterQuestions(searchTerm) {
    var questions = this.state.allQuestions;
    console.log('filter questions: ', questions);
    var filtered = [];

    for (var i = 0; i < questions.length; i++) {
      if (questions[i].question_body.indexOf(searchTerm) > -1) {
        filtered.push(questions[i]);
      }
    }

    console.log('filtered: ', filtered);

    this.setState({
      filteredQuestions: filtered,
      count: 2,
      visibleQuestions: filtered.slice(0, 2)
    })
  }

  handleSearchBarInputChange(e) {
    var searchTerm = e.target.value;

    this.prevVisible = this.prevVisible || this.state.visibleQuestions;
    console.log('prev: ', this.prevVisible);

    if (searchTerm.length >= 3) {

      console.log(searchTerm);

      this.setState({
        filterON: true
      })

      this.filterQuestions(searchTerm);
    } else {
      this.setState({
        filterON: false,
        filteredQuestions: [],
        count: this.prevVisible.length,
        visibleQuestions: this.prevVisible
      })
    }
  }

  handleLoadQuestionsClick() {
    this.setState({
      count: this.state.count + 2
    }, () => {
      this.setState({
        visibleQuestions: (this.state.filterON) ? this.state.filteredQuestions.slice(0, this.state.count) : this.state.allQuestions.slice(0, this.state.count)
      })
    })
  }

  getQuestions() {
    const options = {
      'method': 'GET',
      'url': `/qa/questions/${this.state.product_id}/${this.nextPage}/${this.maxPerPage}`
    }
    axios(options)
      .then(response => {
        this.nextPage++;
        this.doneFetch = response.data.length < this.maxPerPage;

        if (this.state.visibleQuestions.length === 0) {
          this.setState({
            visibleQuestions: response.data.slice(0, this.state.count)
          });
        }

        this.setState({
          allQuestions: this.state.allQuestions.concat(response.data)
        }, () => {
          if (!this.doneFetch) {
            this.getQuestions();
          }
        })
      })
  }

  componentDidMount() {
    this.getQuestions();
  }

  render() {
    // console.log('visible: ', this.state.visibleQuestions);
    // console.log('all: ', this.state.allQuestions);
    // console.log('render filtered: ', this.state.filteredQuestions);
    // console.log('prev visible: ', this.prevVisible);
    return (
      <div className="QuestionsAndAnswers">

        <h3>{'QUESTIONS & ANSWERS'} </h3>

        <SearchBox handleInputChange={this.handleSearchBarInputChange}/>

        <div className="questions-list">
        {this.state.visibleQuestions.map((question, index) => {
          return <QuestionItem QA={question} key={index} />
        })}
      </div>
{/*

        <QuestionsList2 questions={this.state.visibleQuestions} product_id={this.state.product_id}/> */}

        {(this.state.modal) ? <Modal content={
        <>
          <h3>Ask Your Question</h3>
          <h4>About the [Camo Onesie]</h4>
          <form onSubmit={this.handleAddQuestionSubmit} className="QA-form" id="Q-form">

            <div className="QA-form-element">
              <label>Your Question: <em><small>(Required)</small></em></label>
              <textarea id="QA-body" type="text" maxLength="10" className="QA-textarea" required="required"></textarea>
            </div>

            <div className="QA-form-element">
              <label>Your Nickname: <em><small>(Optional)</small></em></label>
              <input id="QA-name" type="text" placeholder="Example: jackson11!" maxLength="5"></input>
              <em><small>For privacy reasons, do not use your full name or email address</small></em>
            </div>

            <div className="QA-form-element">
                <label>Your Email: <em><small>(Required)</small></em></label>
                <input id="QA-email" type="email" placeholder="Why did you like the product or not?" maxLength="20" required="required"></input>
                <em><small>For authentication reasons, you will not be emailed</small></em>
            </div>

            <button>Submit</button>
          </form>

        </>} handleClose={this.modalClose}/> : null}

        <div className="question-buttons">
        {(((!this.state.filterON) ? this.state.allQuestions.length : this.state.filteredQuestions.length) > this.state.count) ? <button id="questions-load-button" onClick={this.handleLoadQuestionsClick}> MORE ANSWERED QUESTIONS </button> : <></>}

        <button id="questions-add-button" onClick={this.modalOpen}> ADD A QUESTION + </button>
        </div>

      </div>
    )
  }
}

export default QuestionsAndAnswers;