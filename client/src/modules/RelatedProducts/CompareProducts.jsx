import React from 'react';
import ReactDOM from 'react-dom';
import ComparisonRows from './ComparisonTableRow.jsx';

const createCurrentObj = (currentArr) => {
  let currentFeatures = {};

  currentArr.forEach(detail => {
    currentFeatures[detail.feature] = detail.value;
  });

  return currentFeatures;
}

const createCompareObj = (compareArr) => {
  let compareFeatures = {};

  compareArr.forEach(detail => {
    compareFeatures[detail.feature] = detail.value;
  })

  return compareFeatures;
}

const getAllFeatures = (currentObj, compareObj) => {
  const currentKeys = Object.keys(currentObj);
  const compareKeys = Object.keys(compareObj);
  const allKeysArr = currentKeys.concat(compareKeys);
  const allFeaturesArr = [];

  allKeysArr.forEach(key => {
    if (allFeaturesArr.includes(key) === false) {
      allFeaturesArr.push(key);
    }
  })

  return allKeysArr;
}

const compareFeatures = (feature, obj1, obj2) => {
  if (obj1[feature] && obj2[feature]) {
    return <ComparisonRows key={feature} currentFeature={obj1[feature]} feature={feature} compareFeature={obj2[feature]} />;
  } else if (obj1[feature] && obj2[feature] === undefined) {
    return <ComparisonRows key={feature} currentFeature={obj1[feature]} feature={feature} compareFeature='null' />;
  } else if (obj1[feature] === undefined && obj2[feature]) {
    return <ComparisonRows key={feature} currentFeature='null' feature={feature} compareFeature={obj2[feature]} />;
  }
}

function CompareProducts (props) {
  const currentProductFeatures = createCurrentObj(props.currentProduct.features);
  const compareProductFeatures = createCompareObj(props.compareProduct.productDetails[4]);
  const allFeatures = getAllFeatures(currentProductFeatures, compareProductFeatures);

  return ReactDOM.createPortal(
    <div className='comparisonTable'>
      <span className='upperLeft'><label>&#935;<input type='radio' className='radio' onClick={props.close}></input></label></span>
      <table className='compareTable'>
        <thead>
          <tr className='tableRow'>
            <th>{props.currentProduct.name}</th>
            <th></th>
            <th>{props.compareProduct.productDetails[1]}</th>
          </tr>
        </thead>
        <tbody>
          {allFeatures.map(feature => {
            return compareFeatures(feature, currentProductFeatures, compareProductFeatures);
          })}
        </tbody>
      </table>
    </div>
    ,
    document.getElementById('related-portal')
  )
}

export default CompareProducts;