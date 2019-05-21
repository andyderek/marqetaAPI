import React from 'react';

const CardProductsPresentation = (props) =>{

  let cardName = props.cardProducts.cardProducts.name ? props.cardProducts.cardProducts.name : '';

  return(
    <div id='signUp'>
    <div>{cardName}</div><br />
    <button onClick={props.selectThisCard}>{'Select This Card'}</ button>
    <button onClick={props.onNext}>{'Next Card'}</ button>
    </div>
  )
};

export default CardProductsPresentation;