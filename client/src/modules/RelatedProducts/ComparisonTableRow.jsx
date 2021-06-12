import React from 'react';

function ComparisonRows (props) {
  return (
    <tr className='tableRow'>
      {props.currentFeature !== 'null' ? <td className='tableData'>{props.currentFeature}</td> : <td className='tableData'>&#8722;</td>}
      <td className='tableData'>{props.feature}</td>
      {props.compareFeature !== 'null' ? <td className='tableData'>{props.compareFeature}</td> : <td className='tableData'>&#8722;</td>}
    </tr>
  )
}

export default ComparisonRows;