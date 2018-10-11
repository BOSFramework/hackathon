import React, { Component } from 'react';
import './login.css';
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            formErrors: { email: '', password: '', confirmPassword: '' },
            emailValid: false,
            passwordValid: false,
            confirmPasswordValid: false,
            formValid: false
        }
    }
    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value }, () => { this.validateField(name, value) });
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let confirmPasswordValid = this.state.confirmPasswordValid;
        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = (emailValid !== null && emailValid !== undefined) ? '' : 'email is invalid';
                break;
            case 'password':
                passwordValid = (value.length >= 1);
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            case 'confirmPassword':
                let password = document.getElementById("inputPassword").value;
                confirmPasswordValid = (password === value);
                fieldValidationErrors.confirmPassword = confirmPasswordValid ? '' : 'Confirm password do not match with passowrd';
                break;
            default:
                break;
        }
        //After validation set state
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid,
            confirmPasswordValid: confirmPasswordValid,
        }, this.validateForm);
    }
    //set formValid to false if email and password are not valid.
    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid && this.state.confirmPasswordValid });
    }
    //eror class to apply to form-group to indicate error
    errorClass(error) {
        return (error.length === 0 ? '' : "hasError");
    }
    submitRegisterForm(event, state) {
        event.preventDefault();
        var RegisterData = {
            email: state.email,
            password: state.password,
            confirmPassword: state.confirmPassword
        };
        //  var settings={
        //       method:"post",
        //       url:"api/Register",
        //       data:RegisterData, //JSON.Stringify(RegisterData)
        //       headers:{'Content-Type':'application/json;utf-8;'}
        //   };
        //   axios.request(settings)
        //   .then(function (response) {
        //    //this.props.history.push(`/target`)
        //    this.context.router.push({
        //       pathname: '/login'                       
        //   })         
        //    console.log(response);
        //   })
        //   .catch(function (error) {
        //   console.log(error);
        //   });       
        this.props.history.push({
            pathname: '/login'
        })
    }
    render() {
        return (
            <div className="login-form" id="register_section">
                <div className="main-div">
                    <div className="panel">
                        <h1>Register</h1>
                        <p>Please enter email address & password</p>
                    </div>
                    <form id="register" className={(this.state.formValid) ? "was-validated" : ""}>
                        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                            <input type="email" name="email" className="form-control" id="inputEmail" placeholder="Email Address"
                                onChange={(event) => this.handleUserInput(event)} />
                        </div>
                        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                            <input type="password" name="password" className="form-control" id="inputPassword" placeholder="Password"
                                onChange={(event) => this.handleUserInput(event)} />
                        </div>
                        <div className={`form-group ${this.errorClass(this.state.formErrors.confirmPassword)}`}>
                            <input type="password" name="confirmPassword" className="form-control" id="inputConfirmPassword" placeholder="Retype Password"
                                onChange={(event) => this.handleUserInput(event)} />
                        </div>
                        <button type="button" className="btn btn-primary" disabled={!this.state.formValid} onClick={(event) => this.submitRegisterForm(event, this.state)}>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}
