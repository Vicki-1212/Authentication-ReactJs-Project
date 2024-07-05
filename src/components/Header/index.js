import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  render() {
    return (
      <nav className="nav-container">
        <div className="lg-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="header-logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="logout-image"
          />
          <ul className="lg-list-container">
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/product">
                Products
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>
            <button className="logut-button" type="button">
              LogOut
            </button>
          </ul>
        </div>
        <div className="sm-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="sm-icon home"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="sm-icon product"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="sm-icon cart"
          />
        </div>
      </nav>
    )
  }
}

export default Header
