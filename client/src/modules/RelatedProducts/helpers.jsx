import React from 'react';
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

export default {createCurrentObj, createCompareObj, getAllFeatures, compareFeatures}