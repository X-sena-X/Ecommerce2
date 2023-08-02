import './App.css';
import Nav3 from './components/header/Nav3';
import NavBar from './components/header/Newnavbar';
import Home from './screens/Homepage';
import SignIn from './components/signUp_signin/Sign_in';
import SignUp from './components/signUp_signin/Sign_up';
import { Routes, Route } from "react-router-dom";
import Getproduct from './components/Getproduct/Getproduct';
import Footer from './components/footer/Footer';
import Cart from './components/cart/cart';
import ComingSoon from './components/ComingSoon/SoonPage';
import FootWearPage from './components/Category/Footwearpage';
import ProductFoot from './components/ProductView/ProductFootWear';
import ClothingPage from './components/Category/Clothingpage';
import CartContextProvider from './components/cart/CartContext';
import CheckoutSuccess from './components/Payment/CheckoutSuccess';


function App() {
  console.log(process.env.SERVER_URL);
  return (
    <div className="App">
      <CartContextProvider>

        <Routes>
          
          <Route path='/login' element={<><SignIn /></>} />
          <Route path='/signup' element={<><SignUp /></>} />
          <Route path="/" element={<><NavBar /><Home /></>} />
          <Route path='/getproduct/:id' element={<><NavBar /><Getproduct /><Footer /></>} />
          <Route path='/cart' element={<><NavBar /><Cart /></>} />
          <Route path='/checkout-success' element={<><CheckoutSuccess/></>} />
          <Route path="/soon" element={<><ComingSoon /></>} />
          <Route path="/footwear" element={<><FootWearPage /></>} />
          <Route path='/footwearproducts/:id' element={<><NavBar /><ProductFoot /><Footer /></>} />
          <Route path="/clothes" element={<><NavBar /><ClothingPage /></>} />
        </Routes>
      </CartContextProvider>


    </div>
  );

}

export default App;

