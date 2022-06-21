import React, { Component } from "react";
import {Switch, Route , Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from "./Home/index.js";
import Login from "./Home/Login.js";
import Signup from "./Home/Signup";
import Dashboard from "./Dashboard";
import Discussion from "./Dashboard/discussion";
import Profile from "./Dashboard/profile";


class App extends Component {
  constructor(props){ 
    super()
  }
  render() {
    return (
      <div className="main-container">
        <div className="container mt-3">
          <Switch>
            <Route exact path="/" component = {Home}/>
            <Route path="/login" component= {Login}/>
            <Route path="/Signup" component= {Signup }/>
            <Route path="/dashboard" component= {Dashboard }/>
            <Route path="/discussion" component={Discussion}/>
            <Route path="/profile" component={Profile }/>

          </Switch>
        </div>
        
      </div>
    )
  }
}
  
     


export default App;
