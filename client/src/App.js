import './App.css';
import Newnav from './components/header/Newnavbar';
import Navbar from './components/header/Navbar';
import Nav3 from './components/header/Nav3';
import Home from './screens/Homepage';
import SignIn from './components/signUp_signin/Sign_in';
import SignUp from './components/signUp_signin/Sign_up';
import {Routes,Route} from "react-router-dom";
import Getproduct from './components/Getproduct/Getproduct';
import Footer from './components/footer/Footer';
import Cart  from './components/cart/cart';


function App() {
  return (
        <div className="App">
          <Routes>
            <Route path='/login' element={<><SignIn/></>}/>
            <Route path='/signup' element={<><SignUp/></>}/>
            <Route path="/" element={<><Nav3/><Home/></>}/>
            <Route path='/getproduct/:id' element={<><Nav3/><Getproduct/><Footer/></>}/>
            <Route path='/cart' element={<><Nav3/><Cart/><Footer/></>}/>
          </Routes>
        </div>
  );

}

export default App;

{/* <Navbar/><Newnav/> */}