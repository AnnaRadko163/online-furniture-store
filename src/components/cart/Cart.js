import { useState, useEffect} from 'react';

import "./cart.sass"

import CartItem from '../cartItem/CartItem';
import CartEmpty from '../cartEmpty/CartEmpty';

export default function Cart({cartItem, setCartItem}) {
  const [active, setActive] = useState(false)
  const [totalPrice, setTotalPrice] = useState([])
  const [price, setPrice] = useState(0)  
  let prIt = 0

  useEffect(() => {
    totalPrice.forEach(e => { prIt = prIt + e.price}) 
    setPrice(prIt)
  },[totalPrice])

  function changeTotalPrice(item) {
    if (totalPrice.some(e => e.id === item.id )){
      setTotalPrice(prev => [...prev.filter(e => e.id !== item.id), item])
    } else {
      setTotalPrice(pred => [...pred, item]);
    }
  }

  function deleteInTotalPrice(item) {
    setTotalPrice(prev => prev.filter(e => e.id !== item))
  }

  function closeActiv() {
    setActive(!active)
  }
  function normalPrice(nbr) {
    return String(nbr).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
  };

  let cart;
  if (cartItem.length === 0) {
    cart = false;
  } else {
    cart = cartItem.map(e => (e))
  }
  function openAllCartItems(cart) {
    return (
      <>
        <div className='cart__full-div'>
          <div className='cart__full'>
            {cart.map(e => (<CartItem key={e.id} item={e} setCartItem={setCartItem} 
            cartItem={cartItem} changeTotalPrice={changeTotalPrice}
             deleteInTotalPrice={deleteInTotalPrice} normalPrice={normalPrice}/>))}
          </div>
        </div>
        <div className='cart__subtotal'>
          <div className='cart__subtotal__right'>
            <p>Итого</p>
            <p className='cart__total-price'>{normalPrice(price)} ₽</p> 
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
          <svg onClick={closeActiv}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-x"><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>
        </div>
        <div className='cart__body'>{ (cart.length > 0) ? (openAllCartItems(cart)) : (<CartEmpty closeActiv={closeActiv}/>) }
          
          
        </div>

      </div> 
    </>
  )
}

