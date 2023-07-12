import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import "./css/Newnavbar.css";

const Newnav = ()=>{
    return(
        <div className="Newnav_header">
            <div className='nav-left'>
                <ul className='nav-left_items'>
                    <li className='nav-left_option'><MenuIcon/>ALL</li>
                    <li className='nav-left_option'>Fresh</li>
                    <li className="nav-left_option">Today's Deals</li>
                    <li className="nav-left_option">Buy Again</li>
                    <li className="nav-left_option">Sell</li>
                    <li className="nav-left_option">Gift Cards</li>
                    <li className="nav-left_option">Browsing History</li> 
                </ul>
            </div>
            <div className="nav-right">
                <div className='nav_item'>

                </div>
            </div>
        </div>
    )
}
export default Newnav;