import React from 'react';
import './index.css'
import Axios from 'Axios';
import CardPresentation from './cardPresentation.js';

class CardContainer extends React.Component {
    constructor(props) {
    super(props);
  }

  render(){
    return (
      <CardPresentation card={this.props} />
      )
  }
}

export default CardContainer;