import React from 'react'
import "./itemMin.sass"



export default function Items( {key,description, img, price }) {
    return (

        <div key={key} className='product'>
            <a href='#'>
                <div className='product__header'>
                    <img src={img} alt='foto'/>
                    </div>
                <div className='product__details'>
                    <p>{description}</p>
                    <p className='product__price'>{price + " ₽"}</p>
                </div>
            </a>
        </div>
    )
}
