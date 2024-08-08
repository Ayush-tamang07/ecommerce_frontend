import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Product from './pages/Product.jsx';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}