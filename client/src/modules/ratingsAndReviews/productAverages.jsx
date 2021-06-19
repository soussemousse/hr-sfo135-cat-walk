import React from 'react';
import style from './relatedCSS/productAverages.modules.css';

class ProductAverages extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }

  render () {
    console.log('meta ', this.props.list.meta);
    return (
      <div className={style.averages}>
        product averages
      </div>
    )
  }
}

export default ProductAverages;