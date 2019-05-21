import React from 'react';
import CardContainer from './cardContainer.js';
import SignUpContainer from './signUpContainer.js'
import CardProductsContainer from './CardProductsContainer.js'
import { CSSTransitionGroup } from 'react-transition-group';
import Axios from 'Axios';

// To populate the Card Products Database
const { flyByNight, redEyeAir, shopForBonus } = require('../dist/cardProductCreate.js')

const cardProdArray = [flyByNight, redEyeAir, shopForBonus];

class MainContain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userCreated: false,
        firstName: '',
        lastName: '',
        UserInfo: '',
        CardProducts: '',
        CurrentCardProduct: '',
        CardCount: 1,
        usersCard: ''
    };
    this.userInput = this.userInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onNext = this.onNext.bind(this);
    this.isUserCreated = this.isUserCreated.bind(this);
    this.selectThisCard = this.selectThisCard.bind(this);
  }


  componentDidMount(){
    // Makes call to API and Creates a few Card Products to use in this exploration
    let newCardProducts = [];
    for(var i = 0; i < cardProdArray.length; i++){
    Axios.post('/CreateCardProduct', cardProdArray[i])
      .then((res)=>{
        newCardProducts.push(res.data);
        this.setState({CardProducts: newCardProducts})
      })
      .catch((err)=>{
        console.log('Card Product ERROR:', err);
      })
      .then(()=>{
      })
    }
  }


  userInput(event){
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value}); 
  }

  handleSubmit(event){
    event.preventDefault();

    const postRequest = {first_name: this.state.firstName, last_name: this.state.lastName };
    Axios.post('/UserNameInput', postRequest)
    .then((res)=>{
      this.setState({firstName: res.data.first_name.toUpperCase(), lastName: res.data.last_name.toUpperCase(), UserInfo: res.data, userCreated: true, CurrentCardProduct: this.state.CardProducts[0]});
    })
    .catch((err)=>{
      console.log("ERROR:  ",err);
    })
    .then(()=>{
    })

  }

  selectThisCard(event){
    event.preventDefault()

    const tokens = {card_product_token: this.state.CurrentCardProduct.token, user_token: this.state.UserInfo.token}
    Axios.post('/SelectCard', tokens)
    .then((res)=>{
      console.log(res);
      this.setState({usersCard: res.data})
    })
    .catch((err)=>{
      console.log("Card Select Error: ", err);
    })
    .then(()=>{
      console.log("Select Card was pressed")
    })
  }

  onNext(){
    if(this.state.CardCount === (this.state.CardProducts.length-1)){
      this.setState({CardCount: 0})
    } else {
      this.setState({CardCount: (this.state.CardCount + 1)})
    }
    this.setState({CurrentCardProduct:this.state.CardProducts[this.state.CardCount]})
  } 

  isUserCreated(){
    if(this.state.userCreated){
      return <div id='pod'><CardContainer card={this.state} /><br/><CardProductsContainer cardProducts={this.state.CurrentCardProduct} onNext={this.onNext} selectThisCard={this.selectThisCard} /></div>
    } else {
      return <div id='pod'><CardContainer card={this.state} /><SignUpContainer handleSubmit={this.handleSubmit} /></div>
    }
  }



  render(){
  return (
    <div>
      {this.isUserCreated()}  
    </div>
  )
  }
}

export default MainContain;