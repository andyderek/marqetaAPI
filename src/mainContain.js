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
        CardCount: 0,
      
    };
    this.userInput = this.userInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onNext = this.onNext.bind(this);
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
    console.log("First Name: ", this.state.firstName , "Last Name: ", this.state.lastName)
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value}); 
  }

  handleSubmit(event){
    event.preventDefault();
    console.log("onSubmit",this.state.firstName)
    const postRequest = {first_name: this.state.firstName, last_name: this.state.lastName };
    Axios.post('/UserNameInput', postRequest)
      .then((res)=>{
      this.setState({firstName: res.data.first_name.toUpperCase(), lastName: res.data.last_name.toUpperCase(), UserInfo: res.data, userCreated: true});
    })
    .catch((err)=>{
      console.log("ERROR:  ",err);
    })
    .then(()=>{
      console.log("Hello, Something Happened")
    })

  }

  onNext(){
    console.log('Hello, World!',this.state.CardProducts)

    this.setState({CurrentCardProduct:this.state.CardProducts[this.state.CardCount]})
    console.log("onNext", this.state.CurrentCardProduct)
  } 

  render(){
  return (
    <div>
      <CardContainer card={this.state} />
      <SignUpContainer userInput={this.userInput} handleSubmit={this.handleSubmit} />
      <CardProductsContainer cardProducts={this.state.CurrentCardProduct} onNext={this.onNext} />
    </div>
  )
  }
}

export default MainContain;