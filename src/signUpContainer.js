import React from 'react';
import SignUpPresentation from './signUpPresentation.js'



class SignUp extends React.Component {

  render(){
    return (
      <form>
      <SignUpPresentation thename='f' name='firstName' handleChange={this.props.userInput} /><br />
      <SignUpPresentation thename='l' name='lastName' handleChange={this.props.userInput} /><br />
      <button onClick={this.props.handleSubmit}>Submit</button>
      </form>

    )
  }
}

export default SignUp;