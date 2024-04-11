import React from 'react'
import "./carousel.sass"
import items from "../AllData"
import ItemMin from '../itemMin/ItemMin';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function Carousel() {
    const itemsCar = items.slice(8, 20)
    function slideLeft () {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 235;
    };
    
    function slideRight () {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 235;
    };

  return (
    <>
        <div className='carousel'>
            <div className='container'>
                <div className="carousel__header">
                    <p>Актуальные</p>
                    <div className='carousel__arrows'>
                        <button title="scroll left">
                            <FaArrowLeft className='carousel__arrow' onClick={slideLeft}/>
                        </button>
                        <button title="scroll right">
                            <FaArrowRight className='carousel__arrow' onClick={slideRight}/>
                        </button>
                    </div>
                </div>

                <div className='carousel__wrapper' id="slider">

                    {itemsCar.map(e => ( <ItemMin key={e.id} description={e.description} 
                        img={e.img} price={e.price}/>
                    ))}
                </div>

            </div>
        </div>
    </>
    )
    
}
