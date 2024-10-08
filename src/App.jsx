import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Product from './pages/Product.jsx';
import SingleProduct from './pages/SingleProduct.jsx';
import AddToCart from './pages/AddToCart.jsx';
import AboutUs from './pages/AboutUs.jsx';
import UserForm from './pages/Form.jsx';
import LogIn from './pages/LogIn.jsx';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/singleProduct" element={<SingleProduct />} />
        <Route path="/addToCart" element={<AddToCart />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/register" element={<UserForm />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}