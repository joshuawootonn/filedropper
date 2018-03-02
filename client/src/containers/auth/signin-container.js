import React, { Component } from "react";
import { login, resetPassword } from "../../helpers/auth";

function setErrorMsg(error) {
  return {
    loginMessage: error
  };
}
class SignInContainer extends Component {
  state = { loginMessage: null };
  handleSubmit = e => {
    e.preventDefault();
    login(this.email.value, this.password.value).then(asdf =>{
      console.log("asdf")
    }).catch(error => {
      this.setState(setErrorMsg("Invalid username/password."));
    });
  };
  resetPassword = () => {
    resetPassword(this.email.value)
      .then(() =>
        this.setState(
          setErrorMsg(`Password reset email sent to ${this.email.value}.`)
        )
      )
      .catch(error => this.setState(setErrorMsg(`Email address not found.`)));
  };
  render() {
    return (
      <div>
        <h5>Sign In</h5>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input
            className="u-full-width"
            type="email"
            placeholder="asdf@gmail.com"
            ref={(email)=> this.email = email}
          />
          <label>Password</label>
          <input
            className="u-full-width"
            type="password"
            placeholder="*******"
            ref={(password)=> this.password = password}
          />
          {
            this.state.loginMessage &&
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error:</span>
              &nbsp;{this.state.loginMessage} <a href="#" onClick={this.resetPassword} className="alert-link">Forgot Password?</a>
            </div>
          }
          <input className="button-primary" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignInContainer;