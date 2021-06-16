import React, { useState, useEffect } from 'react';
import Answer from './Answer.jsx';
import axios from 'axios';

const AnswersList = (props) => {
  const [visibleAnswers, setVisibleAnswers] = useState([]);
  const [allAnswers, setAllAnswers] = useState([]);
  const [buttonExpand, setButtonExpand] = useState(true);
  const [fetchDone, setFetchDone] = useState(false);
  const [nextPage, setNextPage] = useState(1);

<<<<<<< HEAD
    this.state = {
      question_id: this.props.question_id,
      visibleAnswers: [],
      allAnswers: [],
      showButton: false
    }
    this.max = 3;
    this.initialCount = 2;
    this.nextPage = 1;
    this.fetchedLastPage = false;
=======
  var max = 5;
  var initialCount = 2;
>>>>>>> 238079c2f6dff8e33e7c75c69431092d98ad579c

  useEffect(() => {
    if (!fetchDone) {
        getAnswers(true);
    }
  }, [allAnswers])

  useEffect(() => {
    setFetchDone(false);
    setNextPage(1);
    setVisibleAnswers([]);
    setAllAnswers([]);
  }, [props.question_id])

  var handleLoadAnswersClick = () => {
    if (buttonExpand) {
      setButtonExpand(false);

      while(!fetchDone) {
        useEffect(() => {
          setVisibleAnswers(allAnswers);
        }, [allAnswers])
      }
      setVisibleAnswers(allAnswers);
    } else {
      setButtonExpand(true);
      setVisibleAnswers(allAnswers.slice(0, initialCount));
    }
  }

  var getAnswers = () => {
    const option = {
      'method': 'GET',
      'url': `/qa/questions/${props.question_id}/answers/${nextPage}/${max}`
    }
    axios(option)
      .then(response => {
        setFetchDone(max > response.data.length);
        setNextPage(nextPage + 1);

        if (visibleAnswers.length === 0) {
          setVisibleAnswers(response.data.slice(0, initialCount));
          setButtonExpand(initialCount < response.data.length);
        }

        setAllAnswers(allAnswers.concat(response.data));
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="answers-list">
      <div><strong>A: </strong></div>

      <div className="answers-box">
        {visibleAnswers.map((answer, index) => {
          return <Answer answer={answer} key={index}/>
        })}

        {(allAnswers.length > 2) ? <button className="answers-load-button" onClick={handleLoadAnswersClick}>{(buttonExpand) ? 'LOAD MORE ANSWERS' : 'COLLAPSE ANSWERS'}</button> : <></>}

      </div>
    </div>
  )
}





// class AnswersList extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       // question_id: this.props.question_id,
//       visibleAnswers: [],
//       allAnswers: [],
//       buttonExpand: true
//     }
//     this.max = 5;
//     this.initialCount = 2;
//     this.nextPage = 1;
//     this.fetchedLastPage = false;
//     // this.question_id = this.props.question_id;

//     this.handleLoadAnswersClick = this.handleLoadAnswersClick.bind(this);

//     this.getAnswers = this.getAnswers.bind(this);
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.question_id !== this.props.question_id) {
//       console.log('DERRRRP: ', this.props.question_id);

//       this.setState({
//         visibleAnswers: [],
//         allAnswers: [],
//         buttonExpand: true
//       })
//       // this.setState({
//       //   question_id: this.props.question_id
//       // })
//     }
//   }

//   handleLoadAnswersClick() {
//     if (this.state.buttonExpand) {
//       this.setState({
//         buttonExpand: false
//       })

//       while (!this.fetchedLastPage) {
//         this.setState({
//           visibleAnswers: this.state.allAnswers
//         })
//       }

//       this.setState({
//         visibleAnswers: this.state.allAnswers
//       })
//     } else {
//       this.setState({
//         buttonExpand: true,
//         visibleAnswers: this.state.allAnswers.slice(0, this.initialCount)
//       })
//     }
//   }

//   getAnswers(isInitialFetch) {
//     const option = {
//       'method': 'GET',
//       'url': `/qa/questions/${this.props.question_id}/answers/${this.nextPage}/${this.max}`
//     }

//     axios(option)
//       .then(response => {
//         this.fetchedLastPage = (this.max > response.data.length);
//         this.nextPage++;

//         if (isInitialFetch) {
//           this.setState({
//             visibleAnswers: response.data.slice(0, this.initialCount),
//             buttonExpand: this.initialCount < response.data.length
//           });
//         }
//         this.setState({
//           allAnswers: this.state.allAnswers.concat(response.data),
//         }, () => {
//           if (!this.fetchedLastPage) {
//             this.getAnswers(false);
//           }
//         })
//       })
//       .catch(err => {
//         console.log(err);
//       })
//   }

//   componentDidMount() {
//     this.getAnswers(true);
//   }

//   render() {
//     // console.log('answer list QA id: ', this.state.question_id);
//     return (
//       <div className="answers-list">
//         <div><strong>A: </strong></div>

//         <div className="answers-box">
//           {this.state.visibleAnswers.map((answer, index) => {
//             return <Answer answer={answer} key={index}/>
//           })}

//           {(this.state.allAnswers.length > 2) ? <button className="answers-load-button" onClick={this.handleLoadAnswersClick}>{(this.state.buttonExpand) ? 'LOAD MORE ANSWERS' : 'COLLAPSE ANSWERS'}</button> : <></>}

//         </div>

//       </div>
//     )
//   }
// }













// class AnswersList extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       // question_id: this.props.question_id,
//       visibleAnswers: [],
//       allAnswers: [],
//       buttonExpand: false
//     }
//     this.max = 3;
//     this.initialCount = 2;
//     this.nextPage = 1;
//     this.fetchedLastPage = false;

//     this.handleLoadAnswersClick = this.handleLoadAnswersClick.bind(this);

//     this.getAnswers = this.getAnswers.bind(this);
//   }

//   handleLoadAnswersClick() {
//     this.setState({
//       buttonExpand: false
//     })

//     if (this.fetchedLastPage) {
//       this.updateVisibleAnswers(this.state.allAnswers);
//     }
//     this.getAnswers(false);
//   }

//   updateVisibleAnswers(answers) {
//     this.setState({
//       visibleAnswers: answers
//     })
//   }

//   getAnswers(isInitialFetch) {
//     const option = {
//       'method': 'GET',
//       'url': `/qa/questions/${this.state.question_id}/answers/${this.nextPage}/${this.max}`
//     }

//     axios(option)
//       .then(response => {
//         // response.data.sort((a, b) => {
//         //   if (a.helpulness === b.helpfulness) {
//         //     return 0;
//         //   } else {
//         //     return (a.helpfulness < b.helpfulness) ? 1 : -1;
//         //   }
//         // });
//         this.fetchedLastPage = (this.max > response.data.length);
//         this.nextPage++;

//         this.setState({
//           allAnswers: this.state.allAnswers.concat(response.data)
//         }, () => {
//           if (isInitialFetch) {
//             this.updateVisibleAnswers(this.state.allAnswers.slice(0, this.initialCount));

//             this.setState({
//               buttonExpand: this.initialCount < this.state.allAnswers.length
//             })
//           } else if (this.fetchedLastPage) {
//             this.updateVisibleAnswers(this.state.allAnswers);
//           } else {
//             this.getAnswers(false);
//           }
//         })
//       })
//       .catch(err => {
//         console.log(err);
//       })
//   }

//   componentDidMount() {
//     this.getAnswers(true);
//   }

//   render() {
//     return (
//       <div className="answers-list">
//         <div><strong>A: </strong></div>

//         <div className="answers-box">
//           {this.state.visibleAnswers.map((answer, index) => {
//             return <Answer answer={answer} key={index}/>
//           })}

//           {/* {(this.state.buttonExpand) ? (<button className="answers-load-button" onClick={this.handleLoadAnswersClick}>LOAD MORE ANSWERS</button>) : <div></div> } */}

//           <button className="answers-load-button" onClick={this.handleLoadAnswersClick}>{(this.state.buttonExpand) ? 'LOAD MORE ANSWERS' : 'buttonExpand ANSWERS'}</button>

//         </div>

//       </div>
//     )
//   }
// }

export default AnswersList;