import React from 'react';
import CardProductsPresentation from './CardProductsPresentation'


class CardProductsContainer extends React.Component {
  constructor(props) {
    super(props);
  }


  render(){
    return (
      <CardProductsPresentation cardProducts={this.props} onNext={this.props.onNext} selectThisCard={this.props.selectThisCard}>
      </ CardProductsPresentation>
    )
  }
}

export default CardProductsContainer;