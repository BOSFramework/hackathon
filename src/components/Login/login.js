// src/components/Login/login.js
import React, { Component } from 'react';
import axios from 'axios';
import './login.css';
import {  Route,Switch} from 'react-router-dom';
import Register from './register';
import ForgotPassword from './forgotpassword';
import Header from './../Layout/header';
import './login.css';
export default class Login extends Component { 
  constructor(props) {
    super(props);
    this.state = {
        username:'',
        password:'',
        formErrors: {username: '', password: ''},
        usernameValid: false,
        passwordValid: false,
        formValid: false      
    }
  }
  handleUserInput (e) {
  const name = e.target.name;
  const value = e.target.value;
  this.setState({[name]: value},() => { this.validateField(name, value) });
  }
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let usernameValid = this.state.usernameValid;
    let passwordValid = this.state.passwordValid;
    switch(fieldName) {
      case 'username':
            usernameValid = (value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) !== null && value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) !== undefined)? true :false ;
        fieldValidationErrors.username = (usernameValid !== false && usernameValid !== undefined) ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 1;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
     //After validation set state
    this.setState({formErrors: fieldValidationErrors,
                    usernameValid: usernameValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }
  //set formValid to false if username and password are not valid.
  validateForm() {
    this.setState({formValid: this.state.usernameValid && this.state.passwordValid});
  }
//eror class to apply to form-group to indicate error
  errorClass(error) {
    return(error.length === 0 ? '' : "hasError");
 }
  submitLoginForm(){
var loginData={ username: this.state.username,
                password: this.state.password 
              };
   var settings={
        method:"post",
        url:"http://localhost:5123/verify",
        data:loginData, //JSON.Stringify(loginData)
        headers:{'Content-Type':'application/json;utf-8;'}
    };
    axios.request(settings)
    .then(function (response) {
     //this.props.history.push(`/target`)
     this.context.router.push({
        pathname: '/dashboard',
        state: { loginInfo: response}          
    })
    sessionStorage.setItem("loginInfo",""+JSON.Stringify(response))
     console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
}
  render() {    
      return (            
                  <div className="login-form" id="login_section">
                      <div className="main-div">
                          <div className="panel">
                              <h1>Login</h1>
                              <p>Please enter your username and password</p>
                          </div>
                          <form id="Login" className={(this.state.formValid) ? "was-validated" : ""}>
                              <div className={`form-group ${this.errorClass(this.state.formErrors.username)}`}>
                                  <input type="username" name="username" className="form-control" id="inputusername" placeholder="Username Address"
                                      value={this.state.username} onChange={(event) => this.handleUserInput(event)} />
                              </div>
                              <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                                  <input type="password" name="password" className="form-control" id="inputPassword" placeholder="Password"
                                      value={this.state.password} onChange={(event) => this.handleUserInput(event)} />
                              </div>
                              <div className="forgot">
                                  <a href="/App/ForgotPassword">Forgot password?</a>
                              </div>
                              <div className="register">
                                  <a href="/App/Register">Register</a>
                              </div>
                      <button type="button" className="btn btn-primary" disabled={!this.state.formValid} onClick={(event) => this.submitLoginForm(event)}>Login</button>
                          </form>
                      </div>
                  </div>             
    );
  }
}
const LoginContainer = (params) => {
    return (
        <div className="BOS_Login">
            <div className="container-fluid">
                <Header />
                <Switch>
                    <Route path="/App/login" component={Login} />
                    <Route path="/App/register" component={Register} />
                    <Route path="/App/forgotpassword" component={ForgotPassword} />
                </Switch>
            </div>
        </div>
    );
}
export default LoginContainer;
// export const FormErrors = ({formErrors}) =>{
//        
//    return( <div className='formErrors'>
//       {
//         Object.keys(formErrors).map((fieldName, i) => {
//         if(formErrors[fieldName].length > 0){
//           return (
//             <span key={i} style={{ color:'red'}}>{fieldName} {formErrors[fieldName]}</span>
//           )        
//         } else {
//           return 'Please enter username address & password';
//         }
//       })}
//     </div>
//    );
// }
