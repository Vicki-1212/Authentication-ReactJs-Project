import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showError: false, errorMsg: ''}

  onSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onFailure = errorMsg => {
    this.setState({showError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
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
      this.onSuccess()
    } else {
      this.onFailure(data.error_msg)
    }
  }

  updateUserName = event => {
    this.setState({username: event.target.value})
  }

  updatePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, showError, errorMsg} = this.state
    return (
      <div className="login-container">
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo-image-sm"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-image"
          />
          <form className="form-container" onSubmit={this.submitForm}>
            <div className="lg-logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                alt="website logo"
                className="logo-image-lg"
              />
            </div>

            <label htmlFor="input-text" className="label">
              USERNAME
            </label>
            <input
              type="text"
              id="input-text"
              className="input-text"
              placeholder="UserName"
              value={username}
              onChange={this.updateUserName}
            />
            <label htmlFor="password-text" className="label">
              PASSWORD
            </label>
            <input
              type="password"
              id="password-text"
              className="input-text"
              placeholder="Password"
              value={password}
              onChange={this.updatePassword}
            />
            <button className="button" type="submit">
              Login
            </button>
            {showError && <p className="error-msg">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
