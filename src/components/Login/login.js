// src/components/Login/login.js
import React, { Component } from 'react';

import './login.css';

export default class Login extends Component { 
  constructor(props) {
    super(props);
   
    this.state = {
        email:'',
        password:'',
        formErrors: {email: '', password: ''},
        emailValid: false,
        passwordValid: false,
        formValid: false      
    }

  }



  handleUserInput (e) {
      debugger;
  const name = e.target.name;
  const value = e.target.value;
  this.setState({[name]: value},() => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    debugger;
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
  
    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = (emailValid !== null && emailValid !== undefined) ? '' : ' is invalid';
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
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }
  //set formValid to false if email and password are not valid.
  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  

//eror class to apply to form-group to indicate error
  errorClass(error) {
    return(error.length === 0 ? '' : "hasError");
 }

submitLoginForm(){
var loginData={ email: this.state.email,
                password: this.state.password 
              };

   var settings={
        method:"post",
        url:"api/login",
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
      <div className="BOS_Login">
            <div className="container">
                <div className="login-form">
                    <div className="main-div">
                        <div className="panel">
                            <h1>Login</h1>
                            <p>Please enter your email and password</p>                           
                        </div>
                        <form id="Login" className={(this.state.formValid)?"was-validated":""}>
                            <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                                <input type="email" name="email" className="form-control" id="inputEmail" placeholder="Email Address" 
                                value={this.state.email} onChange={(event) => this.handleUserInput(event)} />
                            </div>
                            <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                                <input type="password" name="password" className="form-control" id="inputPassword" placeholder="Password" 
                                value={this.state.password} onChange={(event) => this.handleUserInput(event)} />
                            </div>
                            <div className="forgot">
                                <a href="/Register">Forgot password?</a>
                            </div>
                            <div className="register">
                                <a href="/Register">Register</a>
                            </div>
                            <button type="button" className="btn btn-primary" disabled={!this.state.formValid} >Login</button>
                        </form>
                    </div>

                </div> 
                
            </div>
     </div> 
    );
  }
}

// export const FormErrors = ({formErrors}) =>{
//     debugger;   
//    return( <div className='formErrors'>
//       {
//         Object.keys(formErrors).map((fieldName, i) => {
//         if(formErrors[fieldName].length > 0){
//           return (
//             <span key={i} style={{ color:'red'}}>{fieldName} {formErrors[fieldName]}</span>
//           )        
//         } else {
//           return 'Please enter email address & password';
//         }
//       })}
//     </div>
//    );
// }


  

