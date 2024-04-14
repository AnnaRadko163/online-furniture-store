import React from 'react'
import "./cartEmpty.sass"
import img from "../../img/cart/empty-cart.png"

export default function CartEmpty({closeActiv}) {
  return (
    <div className='cart-empty'>
      <img src={img} alt='корзина-пустая'/>
      <p>Ваша корзина пуста</p>
      <button onClick={closeActiv}>Продолжить просмотр</button>
    </div>
  )
}
