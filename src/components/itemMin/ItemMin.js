import React from 'react'
import "./itemMin.sass"
import { Link } from 'react-router-dom'



export default function Items( {id,description, img, price }) {
    
    // console.log('/categories/product/' + key.toString())
    return (
 
        <div key={id} className='product'>
            <Link to={`/categories/product/${id}`}>
                <div className='product__header'>
                    <img src={img} alt='foto'/>
                    </div>
                <div className='product__details'>
                    <p>{description}</p>
                    <p className='product__price'>{price + " ₽"}</p>
                </div>
            </Link>
        </div>
    )
}
