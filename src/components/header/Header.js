import {useState} from "react"
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import "./header.sass";

import logoImg from "../../img/LOGO.svg"


export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [mobileNav, setMobileNav] = useState(false)

  function openCart() {
    document.querySelector("#cart").classList.add("cart__active")
    document.querySelector("#cart").classList.remove('cart__none')
    document.querySelector("#cartBac").classList.add("cart__bac__active")
    document.querySelector("#cartBac").classList.remove('cart__bac__none')
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function handleScroll () {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <>
    <div
        className={`mobile-nav-full ${mobileNav ? "open-flex" : "closed-flex"}`}
      >
        <svg onClick={() => setMobileNav(!mobileNav)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="x-mobile"><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>
        <div className="mobile-links">
          <Link onClick={() => setMobileNav(!mobileNav)} to="/categories">
            categories
          </Link>
          <Link
            onClick={() => setMobileNav(!mobileNav)}
            to="/categories/product/1"
          >
            product page
          </Link>
        </div>
      </div>
    <header className="header">
      <div className="container">
        <div className={`header__wrapper ${sticky ? "cont-sticky" : ""}`}>
          <Link onClick={scrollToTop} to='/'><img src={logoImg} alt="logo"/></Link>
          
          <div className="header__nav">
            <Link onClick={scrollToTop} to="/categories" className="link">КАТЕГОРИИ</Link>
            <Link onClick={scrollToTop} to="/categories/product/12" className="link">СТРАНИЦА ПРОДУКТА</Link>
            <div onClick={() => openCart()} className="shoppingCart__wrapper">
              <FaShoppingCart className="shoppingCart"/> 
              <div id="quantiti" className="shoppingCart__icons ">5</div>
            </div>
            <div className="hamburger-menu">
              <i
                onClick={() => setMobileNav(!mobileNav)} 
                className="hamburger-hamb"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-menu-2"><path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"></path></svg>
              </i>
            </div>
          </div>
          
        </div>
      </div>
    </header> 
    </>
  )
}
