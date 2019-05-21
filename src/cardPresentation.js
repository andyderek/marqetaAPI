import React from 'react';

const CardPresentation = (props) => {

  let userFirst = props.card.card.UserInfo.first_name ? props.card.card.UserInfo.first_name.toUpperCase() : '  ';
  let userLast = props.card.card.UserInfo.last_name ? props.card.card.UserInfo.last_name.toUpperCase() : '  ';
  let cardNumber = props.card.card.usersCard.pan ? props.card.card.usersCard.pan : '----  ----  ----  ----';
  let expireDate = props.card.card.usersCard.expiration ? props.card.card.usersCard.expiration : '--/--';

  return (
  <div id='CreditCard'>
    <div id='cardHolderName'>
      <div id='cardNumber'>{cardNumber}</div><br/><br/>
      <div className='expiration'>{expireDate}</div><br/>
      <div>{userFirst} {userLast}</div>
    </div>
  </div>
  )
}

export default CardPresentation;