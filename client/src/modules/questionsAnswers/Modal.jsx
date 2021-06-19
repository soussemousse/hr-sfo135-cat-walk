import React from 'react';
import style from './QA_CSS/modal.module.css';

const Modal = (props) => {

  return (
    <div className={style.popup}>
      <div className={style.box}>
        <div className={style.close} onClick={props.handleClose}>x</div>
        {props.content}
      </div>
    </div>
  );
};

export default Modal;