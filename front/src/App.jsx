

import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/header/Navbar';
import Newnav from './components/header/NavbarBottom/Newnav';
import Maincomp from './components/Home/Maincomp';

import { Routes, Route } from "react-router-dom"

import Sign_in from './components/Signup_signin/Sign_in';

import Sign_up from './components/Signup_signin/Sign_up';

import ProductDetail from './components/ProductDetail/ProductDetail';

import Cart from './components/Cart/Cart';

function App() {




  return (
    <>
      <Navbar />
      <Newnav />




      <Routes>
        <Route path='/' element={<Maincomp />} />

        <Route path='/login' element={ <Sign_in /> } />

        <Route path='/register' element={ <Sign_up /> } />

        <Route path='/product/:id' element={<ProductDetail/> } />

        <Route path='/Cart' element={<Cart/> } />

      </Routes>

      <Footer />


    </>
  );
}

export default App;
