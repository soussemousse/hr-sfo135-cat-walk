import React from 'react';
import axios from 'axios';
// import tokenObj from '../token.js';
import {render, screen, waitFor, fireEvent, cleanup} from '@testing-library/react';
import dom from '@testing-library/jest-dom';
import QA from '../client/src/modules/questionsAnswers/questionsAnswers.jsx';
import QuestionsList from '../client/src/modules/questionsAnswers/QuestionsList2.jsx'
import QuestionItem from '../client/src/modules/questionsAnswers/QuestionItem.jsx';
import AnswersList from '../client/src/modules/questionsAnswers/AnswersList.jsx';
import Answer from '../client/src/modules/questionsAnswers/Answer.jsx';
// jest.mock('axios');
// import sampleData from '../client/src/modules/questionsAnswers/sampleData_Questions.js';
// import sampleAnswers from '../client/src/modules/questionsAnswers/sampleData_Answers.js'

afterEach(cleanup);

const sampleData = [
  {
      "question_id": 183492,
      "question_body": "Does this product run big or small?",
      "question_date": "2019-01-17T00:00:00.000Z",
      "asker_name": "jbilas",
      "question_helpfulness": 8,
      "reported": false,
      "answers": {}
  },
  {
      "question_id": 183494,
      "question_body": "Can I wash it?",
      "question_date": "2018-02-08T00:00:00.000Z",
      "asker_name": "cleopatra",
      "question_helpfulness": 7,
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
          "1720150": {
              "id": 1720150,
              "body": "It says not to",
              "date": "2018-03-08T00:00:00.000Z",
              "answerer_name": "ceasar",
              "helpfulness": 0,
              "photos": []
          },
          "1720182": {
              "id": 1720182,
              "body": "I wouldn't machine wash it",
              "date": "2018-03-08T00:00:00.000Z",
              "answerer_name": "ceasar",
              "helpfulness": 0,
              "photos": []
          },
          "1720187": {
              "id": 1720187,
              "body": "Only if you want to ruin it!",
              "date": "2018-03-08T00:00:00.000Z",
              "answerer_name": "ceasar",
              "helpfulness": 5,
              "photos": []
          },
          "1720193": {
              "id": 1720193,
              "body": "Yes",
              "date": "2018-03-08T00:00:00.000Z",
              "answerer_name": "Seller",
              "helpfulness": 4,
              "photos": []
          }
      }
  },
  {
      "question_id": 183493,
      "question_body": "How long does it last?",
      "question_date": "2019-07-06T00:00:00.000Z",
      "asker_name": "funnygirl",
      "question_helpfulness": 6,
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
      "question_id": 183490,
      "question_body": "What fabric is the top made of?",
      "question_date": "2018-01-04T00:00:00.000Z",
      "asker_name": "yankeelover",
      "question_helpfulness": 1,
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
          },
          "1720181": {
              "id": 1720181,
              "body": "Supposedly suede, but I think its synthetic",
              "date": "2018-12-04T00:00:00.000Z",
              "answerer_name": "metslover",
              "helpfulness": 3,
              "photos": []
          }
      }
  },
  {
      "question_id": 212411,
      "question_body": "are ponytails awesome?",
      "question_date": "2021-06-09T00:00:00.000Z",
      "asker_name": "ponytailmaster123",
      "question_helpfulness": 0,
      "reported": false,
      "answers": {}
  }
];

const sampleAnswers = [
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
      "helpfulness": 5,
      "photos": []
  },
  {
      "answer_id": 1720193,
      "body": "Yes",
      "date": "2018-03-08T00:00:00.000Z",
      "answerer_name": "Seller",
      "helpfulness": 4,
      "photos": []
  },
  {
      "answer_id": 1720150,
      "body": "It says not to",
      "date": "2018-03-08T00:00:00.000Z",
      "answerer_name": "ceasar",
      "helpfulness": 0,
      "photos": []
  },
  {
      "answer_id": 1720182,
      "body": "I wouldn't machine wash it",
      "date": "2018-03-08T00:00:00.000Z",
      "answerer_name": "ceasar",
      "helpfulness": 0,
      "photos": []
  }
];

// Test axios get requests for QA
{
// describe('responds to question/answer GET requests', function() {
//   test('responds to question GET req with all questions on first page', function() {
//     return axios({
//       method: 'GET',
//       url: 'http://localhost:3001/qa/questions/25167/1/3'
//     })
//     .then(response => {
//       expect((response.data).toBe([
//         {
//           "question_id": 183492,
//           "question_body": "Does this product run big or small?",
//           "question_date": "2019-01-17T00:00:00.000Z",
//           "asker_name": "jbilas",
//           "question_helpfulness": 42,
//           "reported": false,
//           "answers": {
//               "1991477": {
//                   "id": 1991477,
//                   "body": "1",
//                   "date": "2021-06-12T00:00:00.000Z",
//                   "answerer_name": "sdgdfg",
//                   "helpfulness": 17,
//                   "photos": []
//               },
//               "1991479": {
//                   "id": 1991479,
//                   "body": "3",
//                   "date": "2021-06-12T00:00:00.000Z",
//                   "answerer_name": "sdgdfg",
//                   "helpfulness": 14,
//                   "photos": []
//               },
//               "1991480": {
//                   "id": 1991480,
//                   "body": "4",
//                   "date": "2021-06-12T00:00:00.000Z",
//                   "answerer_name": "sdgdfg",
//                   "helpfulness": 1,
//                   "photos": []
//               },
//               "1991482": {
//                   "id": 1991482,
//                   "body": "6",
//                   "date": "2021-06-12T00:00:00.000Z",
//                   "answerer_name": "sdgdfg",
//                   "helpfulness": 1,
//                   "photos": []
//               },
//               "1991511": {
//                   "id": 1991511,
//                   "body": "7",
//                   "date": "2021-06-12T00:00:00.000Z",
//                   "answerer_name": "sdgdfg",
//                   "helpfulness": 0,
//                   "photos": []
//               },
//               "1991512": {
//                   "id": 1991512,
//                   "body": "8",
//                   "date": "2021-06-12T00:00:00.000Z",
//                   "answerer_name": "sdgdfg",
//                   "helpfulness": 0,
//                   "photos": []
//               },
//               "1991513": {
//                   "id": 1991513,
//                   "body": "9",
//                   "date": "2021-06-12T00:00:00.000Z",
//                   "answerer_name": "sdgdfg",
//                   "helpfulness": 0,
//                   "photos": []
//               },
//               "1991514": {
//                   "id": 1991514,
//                   "body": "10",
//                   "date": "2021-06-12T00:00:00.000Z",
//                   "answerer_name": "sdgdfg",
//                   "helpfulness": 0,
//                   "photos": []
//               },
//               "1991515": {
//                   "id": 1991515,
//                   "body": "11",
//                   "date": "2021-06-12T00:00:00.000Z",
//                   "answerer_name": "sdgdfg",
//                   "helpfulness": 0,
//                   "photos": []
//               },
//               "1991516": {
//                   "id": 1991516,
//                   "body": "12",
//                   "date": "2021-06-12T00:00:00.000Z",
//                   "answerer_name": "sdgdfg",
//                   "helpfulness": 0,
//                   "photos": []
//               },
//               "1991547": {
//                   "id": 1991547,
//                   "body": "answer23",
//                   "date": "2021-06-13T00:00:00.000Z",
//                   "answerer_name": "sdgdfg",
//                   "helpfulness": 0,
//                   "photos": []
//               },
//               "1991601": {
//                   "id": 1991601,
//                   "body": "a",
//                   "date": "2021-06-14T00:00:00.000Z",
//                   "answerer_name": "n",
//                   "helpfulness": 0,
//                   "photos": []
//               }
//           }
//       },
//       {
//           "question_id": 183493,
//           "question_body": "How long does it last?",
//           "question_date": "2019-07-06T00:00:00.000Z",
//           "asker_name": "funnygirl",
//           "question_helpfulness": 16,
//           "reported": false,
//           "answers": {
//               "1720151": {
//                   "id": 1720151,
//                   "body": "It runs small",
//                   "date": "2019-11-17T00:00:00.000Z",
//                   "answerer_name": "dschulman",
//                   "helpfulness": 14,
//                   "photos": [
//                       "https://images.unsplash.com/photo-1470116892389-0de5d9770b2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
//                       "https://images.unsplash.com/photo-1536922645426-5d658ab49b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
//                   ]
//               },
//               "1991531": {
//                   "id": 1991531,
//                   "body": "answer1",
//                   "date": "2021-06-12T00:00:00.000Z",
//                   "answerer_name": "dfsf",
//                   "helpfulness": 2,
//                   "photos": []
//               }
//           }
//       },
//       {
//           "question_id": 212581,
//           "question_body": "moo",
//           "question_date": "2021-06-12T00:00:00.000Z",
//           "asker_name": "meep",
//           "question_helpfulness": 9,
//           "reported": false,
//           "answers": {
//               "1991582": {
//                   "id": 1991582,
//                   "body": "boo",
//                   "date": "2021-06-13T00:00:00.000Z",
//                   "answerer_name": "sdgdfg",
//                   "helpfulness": 5,
//                   "photos": []
//               },
//               "1991583": {
//                   "id": 1991583,
//                   "body": "woo",
//                   "date": "2021-06-13T00:00:00.000Z",
//                   "answerer_name": "wat",
//                   "helpfulness": 2,
//                   "photos": []
//               },
//               "1991584": {
//                   "id": 1991584,
//                   "body": "loo",
//                   "date": "2021-06-13T00:00:00.000Z",
//                   "answerer_name": "sdgdfg",
//                   "helpfulness": 0,
//                   "photos": []
//               },
//               "1991585": {
//                   "id": 1991585,
//                   "body": "joo",
//                   "date": "2021-06-13T00:00:00.000Z",
//                   "answerer_name": "sdgdfg",
//                   "helpfulness": 0,
//                   "photos": []
//               },
//               "1991586": {
//                   "id": 1991586,
//                   "body": "hi",
//                   "date": "2021-06-13T00:00:00.000Z",
//                   "answerer_name": "sdgdfg",
//                   "helpfulness": 0,
//                   "photos": []
//               }
//           }
//       }
//       ]));
//     })
//     .catch(err => {
//       // console.log(err);
//     })
//   }),

//   test('responds to answer GET req with all answers on first page', function() {
//     return axios({
//       method: 'GET',
//       url: 'http://localhost:3001/qa/questions/183494/answers/1/3'
//     })
//     .then(response => {
//       expect((response.data).toBe([
//         {
//           "answer_id": 1720187,
//           "body": "Only if you want to ruin it!",
//           "date": "2018-03-08T00:00:00.000Z",
//           "answerer_name": "ceasar",
//           "helpfulness": 6,
//           "photos": []
//       },
//       {
//           "answer_id": 1720193,
//           "body": "Yes",
//           "date": "2018-03-08T00:00:00.000Z",
//           "answerer_name": "Seller",
//           "helpfulness": 5,
//           "photos": []
//       },
//       {
//           "answer_id": 1991448,
//           "body": "answer",
//           "date": "2021-06-11T00:00:00.000Z",
//           "answerer_name": "sdgdfg",
//           "helpfulness": 0,
//           "photos": []
//       }
//       ]));
//     })
//     .catch(err => {
//       console.log(err);
//     })
//   })
// })
}

// Test for Header and Searchbar
describe('Q&A Header and SearchBar', () => {
  test('expect Q&A Header to render', () => {
    const { container } = render(<QA />);

    const header = screen.getByText("QUESTIONS & ANSWERS");

    expect(container.contains(header)).toBe(true);
  }),

  test('expect Search bar to render', () => {
    const { container } = render(<QA product_id={25167}/>);

    const searchBar = screen.getByPlaceholderText("HAVE A QUESTION? SEARCH FOR ANSWERS...");

    expect(container.contains(searchBar)).toBe(true);
  })
})

// Test for Question Load/Add Buttons
describe('Q&A Header and SearchBar', () => {
  test('expect Load Button to render', () => {
    const { container } = render(<QA product_id={25167}/>);

    waitFor(() => {
      const loadQuestionsButton = screen.getByText("MORE ANSWERED QUESTIONS", {}, {timeout: 1000});
      expect(container.contains(loadQuestionsButton)).toBe(true);
    })
  }),

  // test('expect Load Button to render 2 more questions when clicked', () => {
  //   const { container } = render(<QA product_id={25167}/>);

  //   waitFor(() => {
  //     const loadQuestionsButton = screen.getByText("MORE ANSWERED QUESTIONS", {exact: false}, {timeout: 1000});
  //     expect(loadQuestionsButton).toBeInTheDocument();

  //     fireEvent.click(loadQuestionsButton);

  //   })
  // }),

  test('expect Add Question Button to render', () => {
    const { container } = render(<QA />);

    const addQuestionsButton = screen.getByText("ADD A QUESTION", {exact: false});
    expect(addQuestionsButton).toBeInTheDocument();
  })

  test('expect Add Question Button to open modal upon click and close modal when X is clicked', () => {
    render(<QA />)

    fireEvent.click(screen.getByText("ADD A QUESTION", {exact: false}));
    expect(screen.getByText("Ask Your Question", {exact: false})).toBeInTheDocument();

    fireEvent.click(screen.getByText("x", {exact: false}));
    expect(screen.getByText("QUESTIONS & ANSWERS", {exact: false})).toBeInTheDocument();
  })
})

// Test for Questions List
describe('Questions List', () => {
  test('expect up to 2 Questions to render', () => {
    const { container } = render(<QuestionsList questions={sampleData.slice(0, 2)}/>);

    const questionItems = screen.getAllByRole( 'article')
    expect(questionItems).toHaveLength(2);
  })
})

// Test for Question Items
describe('Question Items', () => {
  test('expect each question item to have all required info', () => {
    const { container } = render(<QuestionItem QA={sampleData[1]}/>);

    const questionText = screen.getByText("Can I wash it?", {exact: false});
    const helpful = screen.getByText("Helpful?", {exact: false});
    const yes = screen.getByText("Yes", {exact: false});
    const addAnswer = screen.getByText("Add Answer", {exact: false});
    // const report = screen.getByText("Report");

    expect(questionText).toBeInTheDocument();
    expect(helpful).toBeInTheDocument();
    expect(yes).toBeInTheDocument();
    expect(addAnswer).toBeInTheDocument;
    // expect(report).toBeInTheDocument();
  })

  // test('expect question helpful button to increase helpfulness count only once', () => {
  //   axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/25167/answers?page=1&count=1`, {
  //     "headers": {
  //       "user-agent": 'request',
  //       "Authorization": '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'
  //     }
  //   })
  //   .then(res => {
  //     render(<QuestionItem QA={res.data.results[0]}/>);
  //     const currHelpfulness = res.data.results[0].question_helpfulness;

  //     const helpfulness = screen.getByText("lolol");
  //     expect(helpfulness).toBeInTheDocument();
  //   })
  //   .catch(err => {
  //     render(<QuestionItem QA={sampleData[1]} key={0}/>)
  //     const helpfulness = screen.getByText("lolol");
  //     expect(helpfulness).toBeInTheDocument();
  //   })
  //   render(<QuestionItem QA={sampleData[1]} key={0}/>)
  //   const helpfulness = screen.getByText("lolololololol");
  //   expect(helpfulness).toBeInTheDocument();
  // })
})

// Tests for Answers
describe('Answers', () => {
  //need fix
  test('expect "Load More Answers" button to show when more than 2 answers"', () => {
    const { container } = render(<AnswersList question_id={183492}/>);

    waitFor(() => {
      const loadAnswersButton = screen.getByText("LOAD MORE ANSWERS", {exact: false}, {timeout: 1000});
      expect(loadAnswersButton).toBeInTheDocument();
    })
  }),

  //need fix
  test('expect "Load More Answers" button become "Collapse Answers" when clicked', () => {
    const { container } = render(<AnswersList question_id={183492}/>);

    waitFor(() => {
      const loadAnswersButton = screen.getByText("LOAD MORE ANSWERS", {exact: false}, {timeout: 1000});
      expect(loadAnswersButton).toBeInTheDocument();

      fireEvent.click(loadAnswersButton);
      expect(screen.getByText("COLLAPSE ANSWERS", {exact: false})).toBeInTheDocument();
    })
  }),

  test('expect each answer to have all required info', () => {
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