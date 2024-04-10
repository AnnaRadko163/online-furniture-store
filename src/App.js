import Header from "./components/header/Header";
import "./app.sass"
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";


function App() {
  return (
    <>
    <Header/>
      <Home/>
      {/* <Categories/> */}
      {/* <ProductPage/> */}
    </>
  );
}

export default App;
