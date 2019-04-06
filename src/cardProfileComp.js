import React from 'react';
import './index.css'
import Axios from 'Axios';

class CardProfile extends React.Component {
    constructor(props) {
    super(props);
    this.state = {yoMoma: "hi there"};
  }
  // API call for anything to load with the initial page load.
  componentDidMount(){
    Axios.get('/CardProfile')
    .then((res)=>{
      this.setState({yoMoma: res.data});
      console.log("yo Moma",res.data);
    })
    .catch((err)=>{
      console.log("Yo Daddy",err);
    })
    .then(()=>{
      console.log("Hello, Something Happened")
    })
  }
  render(){
    return (
      <div className='cardProfile'><h3>Card Profile</h3><p>
        Card Product Name (from Card Products)
        <div id='CreditCard'>
          <div id='cardHolderName'>{this.state.yoMoma}</div>
        </div>
        </p>
      </div>
      )
  }
}

export default CardProfile;