import React from 'react'
import "./cartItem.sass"

export default function CartItem({item}) {
    console.log(item)

  return (
  
    <div className='cart__item'>
      <div className='cart__img'>
        <img src={item.img} alt='продукт'/>
      </div>
      <div className='cart__middle'>
        <p className='cart__name'>{item.description}</p>
        <div className='cart__btns'>
          <button>-</button>
          <p className='quantiti'>1</p>
          <button>+</button>
          
        </div>
      </div>
      <div className='cart__right'>
        <p className='cart__priceItem'>{item.price}p</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-x"><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>

      </div>
    </div>

  )
}
