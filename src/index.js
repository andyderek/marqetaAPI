import React from 'react';
import ReactDOM from 'react-dom';
import CardProfile from './cardProfileComp.js';
import { CSSTransitionGroup } from 'react-transition-group';
import './index.css'

class MainContain extends React.Component {
  render(){
    return (
            <CSSTransitionGroup
              transitionName="example"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnter={false}
              transitionLeave={false}>
                <CardProfile />
            </CSSTransitionGroup>
        
      )
  }
};

ReactDOM.render(
    <MainContain />,
    document.getElementById('root')
);