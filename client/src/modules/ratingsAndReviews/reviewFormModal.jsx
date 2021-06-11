import React from 'react';
import ReactDOM from 'react-dom';

const ReviewFormModal = function (props) {
  console.log(document.getElementById('reviewPortal'));
  return ReactDOM.createPortal(
    <div className="reviewForm">test test portal portal</div>,
    document.getElementById('reviewPortal')
  );
}


export default ReviewFormModal;