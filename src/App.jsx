// import { AiFillAndroid } from "react-icons/ai";
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Pagenotfound from "./pages/Pagenotfound";
import View from "./pages/View";

 


function App() {
 

  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="wishlist" element={<Wishlist/>}/>
      <Route path="*" element={<Pagenotfound/>}/>
      <Route path="/:id/view" element={<View/>}/>
    </Routes>
    <Footer/>

    


    </>
  )
}

export default App
