import React from 'react';
import { Divider } from '@mui/material';
import './css/Footer.css';
import logo from '../header/images/logo2.png'
const Footer = ()=>{
    const year = new Date().getFullYear();

    return(
        <footer className='relative font-RobotoSlab'>
            <div className='footer_container '>
                <div className="footer_detail_one">
                    <span className='lg:text-md font-bold text-sm whitespace-nowrap'>Get to know Us</span>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        
                    </ul>
                </div>
                <div className='footer_detail_two'>
                    <span className='lg:text-md font-bold text-sm whitespace-nowrap'>Connect with Us</span>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
                <div className='footer_detail_three  lg:flex flex-col hidden items-center justify-start'>
                    <span className='lg:text-md font-bold text-sm whitespace-nowrap'>Make Money with Us</span>
                    <ul>
                        <li>Sell on ShopElites</li>
                        <li>Sell under ShopElites Accelator</li>
                        
                    </ul>
                </div>
                <div className='footer_detail_four lg:flex flex-col hidden'>
                    <span className='lg:text-md font-bold text-sm whitespace-nowrap'>Let Us Help You</span>
                    <ul>
                        <li>ShopElites App Download</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>

            <Divider />

            <div className='lastDetails absolute bottom-0 items-center justify-center flex-grow w-screen'>
                <img src={logo} className="w-40 h-20" alt='Logo'/>
                <div className='terms mt-6'>
                    
                    <span>Conditions of use & sale &nbsp;&nbsp;&nbsp; Privacy Notice &nbsp;&nbsp;&nbsp; Interest-Based Ads</span>
                    <span>© 1996-{year},ShopElites.com,inc. or its affiliates</span>
                    
                    <div className="image-background mt-5">
                        <p className="text-xl font-bold">Done by Sena</p>
                    </div>   
                </div>
                
            </div>
        </footer>
    )
}

export default Footer;