import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./css/nav3.css";
import shoplifylogo from "./shoplify-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'




const Nav3 = () => {
   function openNav() {
     document.getElementById("mySidenav").style.width = "250px";
   }
   
   function closeNav(e) {
     e.preventDefault();
     document.getElementById("mySidenav").style.transition = "1s";
     document.getElementById("mySidenav").style.width = "0";
   }


    return (
      <div className='navbar-holder'>
        <div className="container">
            <div className="header_section_top">
               <div className="row">
                  <div className="col-sm-12">
                     <div className="custom_menu">
                        <ul>
                           <li><a href="#">Best Sellers</a></li>
                           <li><a href="#">Tech Wears</a></li>
                           <li><a href="#">New Releases</a></li>
                           <li><a href="#">Today's Deals</a></li>
                           <li><a href="#">Customer Service</a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="logo_section">
            <div className="container">
               <div className="row">
                  <div className="col-sm-12">
                     <div className="logo"><a href="#"><img src={shoplifylogo} alt='Logo'/></a></div>
                  </div>
               </div>
            </div>
         </div>

         <div className="header_section">
            <div className="container">
               <div className="containt_main">
                  <div id="mySidenav" className="sidenav">
                     <a href="" className="closebtn" onclick={closeNav}><FontAwesomeIcon icon={faX} /></a>
                     <a href="#">Home</a>
                     <a href="#">Fashion</a>
                     <a href="#">Electronic</a>
                     <a href="">Jewellery</a>
                  </div>
                  <a onClick={openNav} className='hamburger'>
                  <FontAwesomeIcon icon={faBars} size="2xl"/>
                  </a>
                  {/* <span className="toggle_icon" onclick={openNav}><img src={toggleicon} alt='#'/></span> */}
                  <div className="dropdown all-cat">
                     <button className="btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <FontAwesomeIcon icon={faFilter} /> Filters
                     </button>
                     <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                     </div>
                  </div>
                  <div className="main">
                     <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search the products..."/>
                        <div className="input-group-append">
                           <button className="btn btn-secondary search" type="button" style={{backgroundColor : "#2565EB", borderColor : "#2565EB" }}>
                           <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}} />
                           </button>
                        </div>
                     </div>
                  </div>
                  <div className="header_box">
                     <div className="login_menu">
                        <ul>
                           <li><a href="#">
                              <FontAwesomeIcon icon={faCartShopping} />
                              <span className="padding_10">Cart</span></a>
                           </li>
                           <li><a href="#">
                              <FontAwesomeIcon icon={faUser} />   
                              <span className="padding_10">Profile</span></a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </div>
    );
};

export default Nav3;