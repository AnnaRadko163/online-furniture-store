import React from 'react'
import "./cart.sass"
import { useState, useEffect} from 'react';
import CartItem from '../cartItem/CartItem';
import CartEmpty from '../cartEmpty/CartEmpty';

export default function Cart({cartItem}) {
  const [active, setActive] = useState(false)
  function closeActiv() {
    setActive(!active)
    // document.querySelector("#quantiti").classList.remove("shoppingCart__icons__active")
  }

    console.log(cartItem)
    let cart;
    if (cartItem.length === 0) {
      cart = false;
      console.log(cart)
      
      
    
    } else {
      cart = cartItem.map(e => (e))
      document.querySelector("#quantiti").classList.add("shoppingCart__icons__active")
      document.querySelector("#quantiti").textContent = `${cartItem.length}`
      console.log(cart)
    }
    function openAllCartItems(cart) {
      return (
        <>
          <div className='cart__full-div'>
            <div className='cart__full'>
              {cart.map(e => (<CartItem item={e} />  ))}
            </div>
          </div>
          <div className='cart__subtotal'>
            <div className='cart__subtotal__right'>
              <p>Итого</p>
              <p className='cart__total-price'>1000</p>
            </div>
            <div className='cart__subtotal__left'>
              <a href="#">Оформить заказ</a>
            </div>
          </div>
        </>
      )
    }
    
  return (
    <>
      <div id="cartBac" className={  active ? " cart__bac cart__bac__none" : "cart__bac"} onClick={closeActiv}  ></div>
      <div id="cart" className={  active ? " cart cart__none" : "cart"  }>
        <div className='cart__headerWrapper'>
          <p className='cart__title'>Ваша корзина покупок ({cartItem.length})</p>
          <svg onClick={closeActiv}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-x"><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>
        </div>
        <div className='cart__body'>{ (cart.length > 0) ? (openAllCartItems(cart)) : (<CartEmpty closeActiv={closeActiv}/>) }
          
          
        </div>

      </div> 
    </>
  )
}

