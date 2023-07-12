import React from 'react';
import "./css/navbar.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import image1 from './Shoplify_logo.png';
//import {onAuthStateChanged,signOut} from "firebase/auth";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { NavLink } from "react-router-dom";


function Navbar() {
    /*const [user,setUser] = useState({});
    // to remember the previous user that logged in 
    
    onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
    })
    const handleAuthentication = async ()=>{
        if(user){
            auth.signOut();
        }
    }*/
    return (

        <div className="header flex items-center justify-around flex-row">
            <Link to='/login'>
                <img src={image1} alt="Logo" className="header-logo" />
            </Link>

            <div className="header_search">
                <input type="text" className="header_searchInput" />
                {/*SEARCH LOGO */}
                <SearchIcon className='header_searchIcon' />
            </div>
            <div className="header_nav mr-5">
                {/*
                <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className="header_option">
                    <span className="header_optionLineOne">hello {!user?"Guest": user?.email}</span>
                    <span className="header_optionLineTwo">{user ? "sign Out": "sign In"}</span>
                </div>
                </Link>
                */}
                <div className="header_option">
                    <span className="header_optionLineOne">Hello User</span>
                    <span className="header_optionLineTwo">signIn</span>
                </div>

                <div className="header_option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>

                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Yours</span>
                    <span className="header_optionLineTwo">Prime</span>

                </div>
                <div className="header_optionBasket" >
                    <NavLink to={`/cart`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>

                        <span className="header_optionLineTwo">2</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
export default Navbar