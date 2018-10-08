import React, { Component } from 'react';
import './login.css';
export default class ForgotPassword extends Component {
       render() {    
        debugger;       
           return (                 
               <div className="js_forgotpassword" id="forgotpassword_section">
                   <div className="login-form">
                       <div className="main-div resetpassword">
                           <div className="panel">
                               <h1>Reset Password</h1>
                               <p>Please enter your new password</p>
                           </div>
                           <form id="forgotpassword">
                               <div className="form-group">

                                   <input type="password" className="form-control" id="inputEmail" placeholder="Password" />
                               </div>
                               <div className="form-group">
                                   <input type="password" className="form-control" id="inputPassword" placeholder="Retype Password" />
                               </div>
                               <button type="submit" className="btn btn-primary">Submit</button>
                           </form>
                       </div>

                   </div>
               </div>
            );
          }
    }



    