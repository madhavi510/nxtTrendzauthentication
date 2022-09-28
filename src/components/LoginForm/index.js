// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  }

  usernameInputValue = e => {
    this.setState({username: e.target.value})
  }

  passwordInputValue = e => {
    this.setState({password: e.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.push('/')
  }

  onSubmitFailure = () => {
    ;<p>*username and password did not match</p>
  }

  onSubmitForm = async e => {
    e.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    }
    if (response.ok === false) {
      this.onSubmitFailure()
    }
  }

  render() {
    const {username, password} = this.state
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png "
          alt="website login"
          className="login-logo"
        />
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="website-img-logo"
            alt=" website logo"
          />
          <div className="input-container">
            <label className="input-label" htmlFor="username">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              className="input-field"
              value={username}
              onChange={this.usernameInputValue}
            />
          </div>

          <div className="input-container">
            <label className="input-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              className="input-field"
              value={password}
              onChange={this.passwordInputValue}
            />
          </div>
          <button type="submit" className="btn">
            LogIn
          </button>
        </form>
      </div>
    )
  }
}
export default LoginForm
