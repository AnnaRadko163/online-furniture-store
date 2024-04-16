import { useState,  useEffect} from 'react'

import "./cartItem.sass"

export default function CartItem({item, setCartItem, changeTotalPrice, deleteInTotalPrice, normalPrice}) {
  const [itemQuantiti,setItemQuantiti ] = useState(item.quantity)
  const [itemPrice, setItemPrice] = useState(0)
  
  function deleteItem() {
    setCartItem((pred) => pred.filter(e => e.id !== item.id))
    document.querySelector("#quantiti").classList.remove("shoppingCart__icons__active")
    deleteInTotalPrice(item.id)
  }
  function increaseQuantitiItem() {
    setItemQuantiti((prev) => prev + 1)
  }
  function decreaseQuantitiItem() {
    if (itemQuantiti > 1) {
    setItemQuantiti((prev) => prev - 1)
    } 
  }
  useEffect(() => {
    setItemPrice(pred => (item.price * itemQuantiti))
  },[itemQuantiti])

   useEffect(() => {
    changeTotalPrice({id:item.id, price: itemPrice})
  },[itemPrice])

  return (
    <div className='cart__item'>
      <div className='cart__img'>
        <img src={item.img} alt='продукт'/>
      </div>
      <div className='cart__middle'>
        <p className='cart__name'>{item.description}</p>
        <div className='cart__btns'>
          <button onClick={decreaseQuantitiItem} >-</button>
          <p className='quantiti'>{itemQuantiti }</p>
          <button onClick={increaseQuantitiItem} >+</button>
          
        </div>
      </div>
      <div className='cart__right'>
        <p className='cart__priceItem'>{normalPrice(itemPrice)} ₽</p>
        <svg onClick={deleteItem} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-x"><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>
      </div>
    </div>
  )
}
