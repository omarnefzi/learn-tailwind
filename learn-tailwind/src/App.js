
import NavBar from "./component/NavBar";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Footer from "./component/Footer";
import CartDetails from "./pages/CartDetails";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
function App() {
  return (
    <div className='bg-[#f9fafb]'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<CartDetails />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
