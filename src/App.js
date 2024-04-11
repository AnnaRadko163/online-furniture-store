import Header from "./components/header/Header";
import "./app.sass"
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/footer/Footer";
import News from "./components/news/News";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'



function App() {
  return (
    <Router>  
      

        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/categories" element={<Categories/>}/>
          <Route path="/categories/product/1" element={<ProductPage/>}/>
        
        </Routes>
        <News/>
        <Footer/>

      
    </Router>
  );
}

export default App;
