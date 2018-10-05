// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router'

//import App from './components/App';
import About from './components/About/about';
import NotFound from './components/NotFound/notfound';
import Profile from './components/Profile/profile';
import UserDetails from './components/Users/userDetails';
import Users from './components/Users/users';
import Login from './components/Login/login';
import Register from './components/Login/register';
import ForgotPassword from './components/Login/forgotpassword';
import Calendar from './components/Calendar/calendar';

function loggedIn() {
  // ...
  debugger;
  var LoginInfo=(sessionStorage.getItem("LoginInfo"!==undefined))? JSON.parse(sessionStorage.getItem("LoginInfo"!==undefined)):null;
  if(LoginInfo === null || LoginInfo === undefined){
    return false;
  }
  else
  return true;
}

function requireAuth(nextState, replace) {
  if (!loggedIn()) {
    replace({
      pathname: '/login'
    })
  }
}


//onEnter={requireAuth}
const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Login} />
    <Route path="/Login" component={Login} />
    <Route path="/Register" component={Register}  />
    <Route path="/ForgotPassword" component={ForgotPassword} />
    <Route path="/Calendar" component={Calendar} />
    <Route path="/Profile" component={Profile} onEnter={requireAuth} />    
    <Route path="/Users" component={Users}/>   
    <Route path="/User(/:id)" component={UserDetails}/> 
    <Route path="/About" component={About} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
//<Route path="/View/User" component={UserDetails} />  