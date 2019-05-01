import React from 'react';

const SignUpPresentation = (props) =>{
  const labelNames = {
    f: "First Name",
    l: "Last Name"
  };

    
  return(
    <label>{labelNames[props.thename] + '    '}
    <input name={props.name} onChange={props.handleChange}  />
    </label>
  )
};

export default SignUpPresentation;