import React from 'react';

const CardPresentation = (props) => {

  let userFirst = props.card.card.UserInfo.first_name ? props.card.card.UserInfo.first_name.toUpperCase() : '';
  let userLast = props.card.card.UserInfo.last_name ? props.card.card.UserInfo.last_name.toUpperCase() : '';

  return (
  <div className='cardProfile'>
  <div id='CreditCard'>
  <div id='cardHolderName'>{userFirst} {userLast}</div>
  </div>
  </div>
  )
}

export default CardPresentation;