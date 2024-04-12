import React from 'react'
import "./productMax.sass"
import Carousel from '../carousel/Carousel'
import { useState } from 'react';

export default function ProductMax({item}) {

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

    const [imgMain, setImgMain] = useState(item.img)
    function updateImgMain (src) {
        setImgMain(src)
    }


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
                    {item.otherImgs.map(e => ( 
                        <img src={e} onMouseOver={() => updateImgMain(e)} alt={"продукт"}/>
                    ))}
                    </div>
                </div>
                <div className='product-max__right'>
                    <p className='product-max__right__desc'>{item.specs}</p>
                    <div className='product-max__quant'>
                        <p>Количество</p>
                        <div className='product-quant__btns max'>
                            <button>-</button>
                            <p>{item.quantity}</p>
                            <button>+</button>
                        </div>
                        <p className='product-max__price'>{item.price + '₽'}</p>

                    </div>
                    <button className='product-max__add-btn'>Добавить в корзину</button>
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
