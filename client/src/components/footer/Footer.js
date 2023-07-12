import React from 'react';
import { Divider } from '@mui/material';
import './css/Footer.css';

const Footer = ()=>{
    const year = new Date().getFullYear();

    return(
        <footer className='relative '>
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
                        <li>Sell on shoplify</li>
                        <li>Sell under shoplify Accelator</li>
                        
                    </ul>
                </div>
                <div className='footer_detail_four lg:flex flex-col hidden'>
                    <span className='lg:text-md font-bold text-sm whitespace-nowrap'>Let Us Help You</span>
                    <ul>
                        <li>shoplify App Download</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>

            <Divider />

            <div className='lastDetails absolute bottom-0 items-center justify-center flex-grow w-screen'>
                <span className='flex text-xl'>Shoplify</span>
                <div className='terms mt-6'>
                    
                    <span>Conditions of use & sale &nbsp;&nbsp;&nbsp; Privacy Notice &nbsp;&nbsp;&nbsp; Interest-Based Ads</span>
                    <span>© 1996-{year},Shoplify.com,inc. or its affiliates</span>
                    <span className='text-xl text-red-500 whitespace-nowrap'>Done By SENA</span>
                        
                </div>
                
            </div>
        </footer>
    )
}

export default Footer;