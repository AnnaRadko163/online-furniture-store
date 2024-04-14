import Header from "./components/header/Header";
import "./app.sass"
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import News from "./components/news/News";
import items from "./components/AllData"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ProductMax from "./components/productMax/ProductMax";
import { useState } from 'react';
import Cart from "./components/cart/Cart";



function App() {
  const [cartItem, setCartItem] = useState([]);
  
  const addToCart = (item) => {
    if (cartItem.some(e => e.id === item.id)){
      return
    } else {
      setCartItem((pred) => [...pred, item]);
      console.log(cartItem)}
  };
  return (
    <Router>  
      

        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/categories" element={<Categories/>}/>
            {items.map(e => ( <Route key={e.id} path={`/categories/product/${e.id}`}  element={
            <ProductMax key={e.id} item={e} addToCart={addToCart}/>  }/>))}
        </Routes>
        <Cart cartItem={cartItem}/> 
        {/* <News/> */}
        {/* <Footer/> */}

      
    </Router>
  );
}

export default App;
