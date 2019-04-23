import React from 'react';
import ReactDOM from 'react-dom';
import MainContain from './mainContain.js'

class RenderContain extends React.Component {
  render(){
    return (
        <MainContain />
      )
  }
};

ReactDOM.render(
    <RenderContain />,
    document.getElementById('root')
);