import React from 'react';
import ReactDOM from 'react-dom';
import helpers from './helpers.jsx';
import style from './RelatedCSS/ComparisonTable.module.css';

function CompareProducts (props) {
  const currentProductFeatures = helpers.createCurrentObj(props.currentProduct.productDetails[4]);
  const compareProductFeatures = helpers.createCompareObj(props.compareProduct.productDetails[4]);
  const allFeatures = helpers.getAllFeatures(currentProductFeatures, compareProductFeatures);

  return ReactDOM.createPortal(
    <div className={style.comparisonTable} data-testid='comparisonTable'>
      <span className={style.upperLeft}>
        <label>&#935;<input type='radio' className={style.radio} onClick={props.close} data-testid='closeButton'></input></label>
      </span>
      <table className={style.compareTable}>
        <thead>
          <tr className={style.tableRow}>
            <th>{props.currentProduct.productDetails[1]}</th>
            <th></th>
            <th>{props.compareProduct.productDetails[1]}</th>
          </tr>
        </thead>
        <tbody>
          {allFeatures.map(feature => {
            return helpers.compareFeatures(feature, currentProductFeatures, compareProductFeatures);
          })}
        </tbody>
      </table>
    </div>
    ,
    document.getElementById('related-portal')
  )
}

export default CompareProducts;