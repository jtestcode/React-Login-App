import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header.js';
import Body from './Body.js';
import reportWebVitals from './reportWebVitals';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loggedIn : false,
      username : '',
    };
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  logIn(username){
    this.setState(
      { loggedIn : true, username : username }
    );
  }

  logOut(){
    this.setState(
      { loggedIn : false, username : '' }
    );
  }

  render(){
    return(
      <div id='pageContainer'>
        <Header loggedIn={this.state.loggedIn} username={this.state.username} logOut={this.logOut} />
        <Body loggedIn={this.state.loggedIn} username={this.state.username} logIn={this.logIn} />
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
