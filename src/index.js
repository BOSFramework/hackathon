// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch, Redirect, browserHistory, IndexRoute } from 'react-router-dom';
import './index.css';
import APP from './components/App';
import About from './components/About/about';
import NotFound from './components/NotFound/notfound';
import Profile from './components/Profile/profile';
import UserDetails from './components/Users/userDetails';
import Users from './components/Users/users';
import LoginContainer from './components/Login/login';
import Register from './components/Login/register';
import ForgotPassword from './components/Login/forgotpassword';
import Calendar from './components/Calendar/calendar';
//import Navigation from './routes';

function loggedIn() {
    debugger;
    var LoginInfo = (sessionStorage.getItem("LoginInfo" !== undefined)) ? JSON.parse(sessionStorage.getItem("LoginInfo" !== undefined)) : null;
    if (LoginInfo === null || LoginInfo === undefined) {
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


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={APP} />
            <Route path="/App/*" component={LoginContainer} />           
            <Route path="/Calendar" component={Calendar} />
            <Route path="/Profile" component={Profile} onEnter={requireAuth} />
            <Route path="/Users" component={Users} />
            <Route path="/User/:id" component={UserDetails} />
            <Route path="/About" component={About} />           
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
