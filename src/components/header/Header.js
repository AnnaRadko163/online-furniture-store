import "./header.sass";
import logoImg from "../../img/LOGO.svg"
import { FaShoppingCart } from "react-icons/fa";

import {useState} from "react"
import { Link } from "react-router-dom";

export default function Header() {
  const [sticky, setSticky] = useState(false);

  function openCart() {
    document.querySelector("#cart").classList.add("cart__active")
    document.querySelector("#cart").classList.remove('cart__none')
    document.querySelector("#cartBac").classList.add("cart__bac__active")
    document.querySelector("#cartBac").classList.remove('cart__bac__none')
  }

  function handleScroll () {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return (
  
    <header className="header">
      <div className="container">
        <div className={`header__wrapper ${sticky ? "cont-sticky" : ""}`}>
          <Link to='/'><img src={logoImg} alt="logo"/></Link>
          
          <div className="header__nav">
            <Link to="/categories">КАТЕГОРИИ</Link>
            <Link to="/categories/product/1">СТРАНИЦА ПРОДУКТА</Link>
            <div onClick={() => openCart()} className="shoppingCart__wrapper">
              <FaShoppingCart className="shoppingCart"/> 
              <div id="quantiti" className="shoppingCart__icons shoppingCart__icons__active">5</div>
            </div>
          </div>
        </div>
      </div>
    </header>
    
  )
}
