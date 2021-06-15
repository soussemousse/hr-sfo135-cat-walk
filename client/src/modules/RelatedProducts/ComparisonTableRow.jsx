import React from 'react';
import style from './RelatedCSS/ComparisonTable.module.css';

function ComparisonRows (props) {
  return (
    <tr className={style.tableRow} data-testid='tableRow'>
      {props.currentFeature !== 'null' ? <td className={style.tableData}>{props.currentFeature}</td> : <td className={style.tableData}>&#8722;</td>}
      <td className={style.tableData}>{props.feature}</td>
      {props.compareFeature !== 'null' ? <td className={style.tableData}>{props.compareFeature}</td> : <td className={style.tableData}>&#8722;</td>}
    </tr>
  )
}

export default ComparisonRows;