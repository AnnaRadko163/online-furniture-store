import { useState, useEffect } from 'react';

import "./productMax.sass"

import Carousel from '../carousel/Carousel'


export default function ProductMax({item, addToCart}) {
    const spec = [
        {
            title: "Текстура",
            desc: item.texture,
            id: 1,
        },
        {
            title: "Масса",
            desc: item.weight,
            id: 2,
        },
        {
            title: "Размер",
            desc: item.size,
            id: 3,
        },
    ]
    const itemCopy = item
    const [imgMain, setImgMain] = useState(item.img)
    const [itemQuantiti,setItemQuantiti] = useState(item.quantity)
    
    useEffect(() => {
        itemCopy.quantity = itemQuantiti
    })

    function updateImgMain (src) {
        setImgMain(src)
    }

    function increaseQuantitiItem() {
        setItemQuantiti((prev) => prev + 1)
        
    }

    function decreaseQuantitiItem() {
        if (itemQuantiti > 1) {
        setItemQuantiti((prev) => prev - 1)
        }
    }
    
    function normalPrice(nbr) {
        return String(nbr).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
      };

  return (
    <div key={item.id} className='product-max' > 
        <div className='container'>
            <div className='product-max__wrapper'>
                <p className='product-max__name'>{item.description}</p>
                <div className='product-max__left'>
                    <div className='product-max__left_img-big'>
                        <img src={imgMain} alt={"продукт"}/>
                    </div>
                    <div className='product-max__left_imgs-small'>
                    {item.otherImgs.map((e,i) => ( 
                        <img key={i} src={e} onMouseOver={() => updateImgMain(e)} alt={"продукт"}/>
                    ))}
                    </div>
                </div>
                <div className='product-max__right'>
                    <p className='product-max__right__desc'>{item.specs}</p>
                    <div className='product-max__quant'>
                        <p>Количество</p>
                        <div className='product-quant__btns max'>
                            <button onClick={decreaseQuantitiItem}>-</button>
                            <p>{itemQuantiti}</p>
                            <button onClick={increaseQuantitiItem}>+</button>
                        </div>
                        <p className='product-max__price'>{normalPrice(item.price*itemQuantiti) + '₽'}</p>

                    </div>
                    <button onClick={() => addToCart(itemCopy)} className='product-max__add-btn'>Добавить в корзину</button>
                </div>
            </div>
            <div className='product-max__specifications'>
                {spec.map(e => (<div key={e.id} className='product-max__spec'>
                    <p className='product-max__spec__title'>{e.title}</p>
                    <p className='product-max__spec__desc'>{e.desc}</p>
                </div>))} 
            </div>
        </div>
        <Carousel/>

    </div>
)
}
