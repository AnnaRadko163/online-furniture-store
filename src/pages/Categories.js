import { useState } from 'react';
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

import "./categories.sass"

import CategoriesBTNS from '../components/categoriesBTNS/CategoriesBTNS';
import items from "../components/AllData"
import ItemMin from '../components/itemMin/ItemMin';


export default function Categories() {
  const [currentItems, setCurrentItems] = useState(items)
  const [filterName, setfilterName] = useState("все")

  function chooseCategory(category, name) {
    if (category === "All") {
      setCurrentItems(items)
      setfilterName("Все")
    } else {
      setCurrentItems(items.filter(e => e.category === category))
      setfilterName(name)
    }
  }
  
  return (
    <div className='container'>
      <div className='categories__header'>
        <div className='categories__title-home'>
          <Link to='/'>
            <FaAngleLeft className='categories__title-home__icon'/>Home
          </Link>
          <p>{filterName}</p>
        </div>
        <CategoriesBTNS chooseCategory={chooseCategory} />
      </div>
      <div className='products-grid'>
        {currentItems.map(e => ( <ItemMin key={e.id} id={e.id} description={e.description} 
        img={e.img} price={e.price}/>
        // <div key={e.id}>{e.description}</div>
        ))}
      </div>
    </div>
  )
}
