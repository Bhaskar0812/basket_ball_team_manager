import React,{useState,useEffect} from 'react'
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/css/style.css';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Routes from './routes'
function App(props) {
  return (
    <Router>
      <div>
        <Switch>
          <Routes /> 
        </Switch>
      </div>  
    </Router>
  );
}

export default App;
