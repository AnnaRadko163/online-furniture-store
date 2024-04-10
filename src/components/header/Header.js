import "./header.sass";
import logoImg from "../../img/LOGO.svg"
import { FaShoppingCart } from "react-icons/fa";

import {useState} from "react"

export default function Header() {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
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
          <a href="/"><img src={logoImg} alt="logo"/></a>
          
          <div className="header__nav">
            <a href="/">КАТЕГОРИИ</a>
            <a href="/">СТРАНИЦА ПРОДУКТА</a>
            <div className="shoppingCart__wrapper">
              <FaShoppingCart className="shoppingCart"/> 
              <div className="shoppingCart__icons">5</div>
            </div>
          </div>
        </div>
      </div>
    </header>
    
  )
}
