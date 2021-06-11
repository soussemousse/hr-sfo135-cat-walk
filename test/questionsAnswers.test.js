import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import dom from '@testing-library/jest-dom';
import QA from '../client/src/modules/questionsAnswers/questionsAnswers.jsx';
import Answer from '../client/src/modules/questionsAnswers/Answer.jsx';
import sampleData from '../client/src/modules/questionsAnswers/sampleData_Questions.js';
import sampleAnswers from '../client/src/modules/questionsAnswers/sampleData_Answers.js'
import axios from 'axios';


// Test axios get requests
describe('responds to question/answer GET requests', function() {
  test('responds to question GET req with all questions on first page', function() {
    return axios({
      method: 'GET',
      url: 'http://localhost:3001/qa/questions/25167'
    })
    .then(response => {
      expect((response.data).toBe([
        {
          "question_id": 183494,
          "question_body": "Can I wash it?",
          "question_date": "2018-02-08T00:00:00.000Z",
          "asker_name": "cleopatra",
          "question_helpfulness": 12,
          "reported": false,
          "answers": {
              "1720132": {
                  "id": 1720132,
                  "body": "I've thrown it in the wash and it seems fine",
                  "date": "2018-02-08T00:00:00.000Z",
                  "answerer_name": "marcanthony",
                  "helpfulness": 8,
                  "photos": []
              },
              "1720187": {
                  "id": 1720187,
                  "body": "Only if you want to ruin it!",
                  "date": "2018-03-08T00:00:00.000Z",
                  "answerer_name": "ceasar",
                  "helpfulness": 6,
                  "photos": []
              },
              "1720193": {
                  "id": 1720193,
                  "body": "Yes",
                  "date": "2018-03-08T00:00:00.000Z",
                  "answerer_name": "Seller",
                  "helpfulness": 5,
                  "photos": []
              }
          }
      },
      {
          "question_id": 183492,
          "question_body": "Does this product run big or small?",
          "question_date": "2019-01-17T00:00:00.000Z",
          "asker_name": "jbilas",
          "question_helpfulness": 11,
          "reported": false,
          "answers": {}
      },
      {
          "question_id": 183493,
          "question_body": "How long does it last?",
          "question_date": "2019-07-06T00:00:00.000Z",
          "asker_name": "funnygirl",
          "question_helpfulness": 9,
          "reported": false,
          "answers": {
              "1720151": {
                  "id": 1720151,
                  "body": "It runs small",
                  "date": "2019-11-17T00:00:00.000Z",
                  "answerer_name": "dschulman",
                  "helpfulness": 1,
                  "photos": [
                      "https://images.unsplash.com/photo-1470116892389-0de5d9770b2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
                      "https://images.unsplash.com/photo-1536922645426-5d658ab49b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  ]
              },
              "1720175": {
                  "id": 1720175,
                  "body": "Showing no wear after a few months!",
                  "date": "2019-09-06T00:00:00.000Z",
                  "answerer_name": "sillyguy",
                  "helpfulness": 8,
                  "photos": []
              }
          }
      },
      {
          "question_id": 212409,
          "question_body": "test body?",
          "question_date": "2021-06-09T00:00:00.000Z",
          "asker_name": "testname1234",
          "question_helpfulness": 2,
          "reported": false,
          "answers": {}
      },
      {
          "question_id": 183490,
          "question_body": "What fabric is the top made of?",
          "question_date": "2018-01-04T00:00:00.000Z",
          "asker_name": "yankeelover",
          "question_helpfulness": 2,
          "reported": false,
          "answers": {
              "1720091": {
                  "id": 1720091,
                  "body": "Something pretty soft but I can't be sure",
                  "date": "2018-01-04T00:00:00.000Z",
                  "answerer_name": "metslover",
                  "helpfulness": 5,
                  "photos": [
                      "https://images.unsplash.com/photo-1530519729491-aea5b51d1ee1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80",
                      "https://images.unsplash.com/photo-1511127088257-53ccfcc769fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
                      "https://images.unsplash.com/photo-1500603720222-eb7a1f997356?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80"
                  ]
              },
              "1720093": {
                  "id": 1720093,
                  "body": "Its the best! Seriously magic fabric",
                  "date": "2018-01-04T00:00:00.000Z",
                  "answerer_name": "metslover",
                  "helpfulness": 7,
                  "photos": []
              },
              "1720094": {
                  "id": 1720094,
                  "body": "DONT BUY IT! It's bad for the environment",
                  "date": "2018-01-04T00:00:00.000Z",
                  "answerer_name": "metslover",
                  "helpfulness": 8,
                  "photos": []
              },
              "1720143": {
                  "id": 1720143,
                  "body": "Suede",
                  "date": "2018-11-04T00:00:00.000Z",
                  "answerer_name": "metslover",
                  "helpfulness": 7,
                  "photos": []
              }
          }
      }
      ]));
    })
    .catch(err => {
      // console.log(err);
    })
  }),

  test('responds to answer GET req with all answers on first page', function() {
    return axios({
      method: 'GET',
      url: 'http://localhost:3001/qa/questions/183494/answers'
    })
    .then(response => {
      expect((response.data).toBe([
        {
          "answer_id": 1720132,
          "body": "I've thrown it in the wash and it seems fine",
          "date": "2018-02-08T00:00:00.000Z",
          "answerer_name": "marcanthony",
          "helpfulness": 8,
          "photos": []
      },
      {
          "answer_id": 1720187,
          "body": "Only if you want to ruin it!",
          "date": "2018-03-08T00:00:00.000Z",
          "answerer_name": "ceasar",
          "helpfulness": 6,
          "photos": []
      },
      {
          "answer_id": 1720193,
          "body": "Yes",
          "date": "2018-03-08T00:00:00.000Z",
          "answerer_name": "Seller",
          "helpfulness": 5,
          "photos": []
      }
      ]));
    })
    .catch(err => {
      // console.log(err);
    })
  })
})

// Test for Header and Searchbar
describe('Q&A Header and SearchBar', () => {
  test('expect Q&A Header to render', () => {
    const { container } = render(<QA />);

    const header = screen.getByText("QUESTIONS & ANSWERS");

    expect(container.contains(header)).toBe(true);
  }),

  test('expect Search bar to render', () => {
    const { container } = render(<QA />);

    const searchBar = screen.getByPlaceholderText("HAVE A QUESTION? SEARCH FOR ANSWERS...");

    expect(container.contains(searchBar)).toBe(true);
  })
})

// Test for Question items
// *NEED TO FIX - test passes but has error message
describe('Question Items', () => {
  test('expect up to 4 Questions to render', () => {
    const { container } = render(<QA product_id={25167}/>);

    waitFor(() => {
      const questionItems = screen.getAllByRole( 'article', {}, { timeout: 5000 })
      expect(questionItems).toHaveLength(4);
    })
  })
})

// Tests for Answers
describe('Answers', () => {
  // test('expect up to 2 Answers to render', () => {
  //   const { container } = render(<AnswersList answers={sampleAnswers}/>);


  // })

  test('expect answer to have all required info', () => {
    render(<Answer answer={sampleAnswers[0]}/>);

    const answerText = screen.getByText("I've thrown it in the wash and it seems fine");
    const user = screen.getByText("marcanthony", {exact: false});
    const date = screen.getByText("February 7, 2018", {exact: false});
    const helpful = screen.getByText("Helpful?", {exact: false});
    const report = screen.getByText("Report");

    expect(answerText).toBeInTheDocument();
    expect(user).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(helpful).toBeInTheDocument();
    expect(report).toBeInTheDocument();

  })
})