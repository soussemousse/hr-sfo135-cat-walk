import React from 'react';
import ReactDOM from 'react-dom';
import ComparisonRows from './ComparisonTableRow.jsx';

function CompareProducts (props) {
  return ReactDOM.createPortal(
    <div className='comparisonTable'>
      <span className='upperleft'><label>&#935;<input type='radio' className='radio' onClick={props.close}></input></label></span>
      <table>
        <thead>
          <tr>
            <th>{props.currentProduct.name}</th>
            <th></th>
            <th>{props.compareProduct.name}</th>
          </tr>
        </thead>
        <tbody>
          <ComparisonRows />
        </tbody>
      </table>
    </div>
    ,
    document.getElementById('related-portal')
  )
}

export default CompareProducts;