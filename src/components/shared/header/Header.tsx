import { NavLink } from "react-router-dom"
import logoImg from "../../../assets/images/logo.png"
import { useState } from "react"
import Cart from "../../layout/cart/Cart"

function Header() {

  const [cartIsVisible, setCartIsVisible] = useState(false)

  return (
    <>
      {cartIsVisible && <Cart />}
      <header className="header">
        <div className="wrap">
          <div className="header__inner">
            <a href="/" className="header__logo">
              <img className="header__img" src={logoImg} alt="Logo of the company" />
            </a>
            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__item">
                  <NavLink to={"/"} className="nav__link" end>Home</NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to={"/sessions"} className="nav__link">Courses</NavLink>
                  </li>
                <li className="nav__item">
                  <NavLink to={"/events"} className="nav__link">Events</NavLink>
                </li>
              </ul>
            </nav>
            <div className="header__cart">
              <button type="button" className="button">Cart (0)</button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header