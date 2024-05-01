import { useState } from 'react';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import {lazy, Suspense} from 'react'

import "./app.sass"

import Header from "./components/header/Header";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import News from "./components/news/News";
import items from "./components/AllData"

import Cart from "./components/cart/Cart";

const Categories = lazy(() => import("./pages/Categories"))
const ProductMax = lazy(() => import("./components/productMax/ProductMax"))


function App() {
  const [cartItem, setCartItem] = useState(JSON.parse(localStorage.getItem("todoloist")) || []);
  
  function addToCart (item) {
    if (cartItem.some(e => e.id === item.id )){
      return
    } else {
      const listitems = [...cartItem, item]
      setCartItem(listitems);
      localStorage.setItem("todoloist", JSON.stringify(listitems))
    }
  };
// basename='/online-furniture-store'

  return (
    <>
      <Header cartItem={cartItem}/>
      <Suspense fallback={<div className='loading'>Загрузка…</div>} >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/categories" element={<Categories/>}/>
          {items.map(e => ( <Route key={e.id} path={`/categories/product/${e.id}`}  element={
          <ProductMax key={e.id} item={e} addToCart={addToCart}/>  }/>))}
        <Route path="*" element={<div className='loading'>Ошибка в адресе ссылки</div>}/>
      </Routes>
      </Suspense>
      <Cart cartItem={cartItem} setCartItem={setCartItem} /> 
      <News/>
    <Footer/>
    </>
  );
}

export default App;
