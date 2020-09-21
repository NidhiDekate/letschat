import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Main from './Main';
import './index.css';

if(sessionStorage.getItem("userName")==null){

  ReactDOM.render(<Login/>,  document.getElementById('root'));
  
  }else{
  
  ReactDOM.render(<Main />,  document.getElementById('root'));
}