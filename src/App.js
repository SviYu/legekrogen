import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Products from './pages/products/Products';
import Faqs from './pages/faqs/Faqs';
import Kundeklub from './pages/customerClub/Kundeklub';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  /* const [cartItems, setCartItems] = useState([]) */

  return (
    <BrowserRouter>
      <Navbar /* cartItems={cartItems } */ />

      <Routes>
        <Route path='' element={<Home /> } />
        <Route path='/produkter' element={<Products /> } />
        <Route path='/faq' element={<Faqs /> } />
        <Route path='/kundeklubben' element={<Kundeklub /> } />
        <Route path='/*' element={<NotFound /> } />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
