import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Products from './pages/products/Products';
import Faqs from './pages/faqs/Faqs';
import Kundeklub from './pages/customerClub/Kundeklub';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import Cart from './components/Cart';
import CartPage from './pages/cartPage/CartPage';

function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Cart />

      <Routes>
        <Route path='' element={<Home /> } />
        <Route path='/produkter' element={<Products /> } />
        <Route path='/faq' element={<Faqs /> } />
        <Route path='/kundeklubben' element={<Kundeklub /> } />
        <Route path='/kurv' element={<CartPage /> } />
        <Route path='/*' element={<NotFound /> } />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
