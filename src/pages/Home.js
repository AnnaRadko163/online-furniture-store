import React from 'react'
import Cover from '../components/cover/Cover'
import items from "../components/AllData"
import ItemMin from '../components/itemMin/ItemMin';
import "./home.sass"
import Banner from '../components/banner/Banner';
import Carousel from '../components/carousel/Carousel';

export default function Home() {
  const itemsProud = items.slice(0, 8)
  return (
    <>
    <Cover/>
    <div className='container'>
      <p className='products__header'>Продукция, которой мы гордимся</p>
      <div className='products-grid'>
        {itemsProud.map(e => ( <ItemMin key={e.id} id={e.id} description={e.description} 
        img={e.img} price={e.price}/>
        // <div key={e.id}>{e.description}</div>
        ))}
      </div>
    </div>
    <Banner id="1" /> 
    <Carousel/>
    <Banner id="2" reverse="reverse"/> 


    
    </>
  )
}
