import React from 'react';

const CardProductsPresentation = (props) =>{

  let cardName = props.cardProducts.cardProducts.name ? props.cardProducts.cardProducts.name : '';

  return(
    <div>{cardName}<button onClick={props.onNext}>{'Next'}</ button></div>
  )
};

export default CardProductsPresentation;