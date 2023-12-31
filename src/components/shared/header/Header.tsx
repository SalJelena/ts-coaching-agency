import { NavLink } from "react-router-dom"
import logoImg from "../../../assets/images/logo.png"
import { useState } from "react"
import Cart from "../../layout/cart/Cart"
import { useAppSelector } from "../../../store/hooks"

function Header() {

  const [cartIsVisible, setCartIsVisible] = useState(false)
  const items = useAppSelector((state) => state.cart.items)

  const cartQuantityNumber = items.length
  

  function handleCartOpen() {
    setCartIsVisible(true)
  }

  function handleCartClose() {
    setCartIsVisible(false)
  }

  return (
    <>
      {cartIsVisible && <Cart onDone={handleCartClose} />}
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
              <button type="button" className="button" onClick={handleCartOpen}>Cart {cartQuantityNumber}</button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header