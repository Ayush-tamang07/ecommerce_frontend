import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Product from './pages/Product.jsx';
import SingleProduct from './pages/SingleProduct.jsx';
import AddToCart from './pages/AddToCart.jsx';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/singleProduct" element={<SingleProduct />} />
        <Route path="/addToCart" element={<AddToCart />} />
      </Routes>
    </BrowserRouter>
  );
}