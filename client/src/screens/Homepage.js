import React, { useEffect } from 'react';
import './css/Homepage.css';
import Banner from "../components/header/carousel";
import Slider from '../components/header/slider';
import Cardholder from '../components/header/Cardholder';
import Footer from '../components/footer/Footer';
import { getProducts } from '../components/redux/action/action';
import {useDispatch,useSelector} from "react-redux";
import Section3 from '../components/header/Section3';
import Section1 from '../components/header/Section1';
import Banner2 from '../images/shoe_banner.png';
import Category from '../components/header/Category';
import image1 from '../components/header/images/samsung.png';
import Banner3 from '../images/fashion_banner.png';
import { useNavigate } from 'react-router-dom';
// useselector to get data into component

var StyleForCardHolder ={
    marginTop:'-10%',

}

const Home = ()=>{
    const navigate = useNavigate();

  const goTosoon = () => {
    navigate('/soon'); // Replace '/otherpage' with the path of the page you want to navigate to
  };

    const {products}  = useSelector(state=> state.getproductsdata);
    //console.log(products);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch]);

    return(
        <div className='home_section'>
            <div className='carousel_part'>
                <Banner />
            </div>
            <Cardholder styles={StyleForCardHolder} products={products}/>

            <Category/>

            <div className='slide_part mt-3 hidden lg:flex'>
                <div className="left_slide mx-4">
                    <Slider title="Deals of the Day" products={products}/>
                </div>
                <div className="right_slide relative rounded-2xl">
                    <div className='absolute w-full h-full '>
                        <img src={image1} className="w-full h-full object-cover rounded-2xl"alt="banner1"/>
                    </div>
                    <div className='absolute right-0 top-0 mt-4 mr-1 h-6 w- rounded-3xl items-center justify-center hover:bg-black hover:text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>

                    </div>
                    <span className='text-xl whitespace-nowrap z-10 top-0 absolute font-bold'>Festive Latest Launch</span>
                    <button className='absolute bottom-0 h-8 w-16 mt-2  rounded-3xl bg-blue-600 text-sm text-white z-10'>See more</button>
                    
                </div>
            </div>
            <div className='w-screen relative flex bg-blue-100 my-8'>
                <img className='object-cover shoeBanner' src={Banner2} alt="banner"/>
                <button onClick={goTosoon} className='absolute lg:h-14 h-6 lg:w-28 w-16 bottom-0 left-0 lg:ml-72 ml-16 lg:mb-36 mb-14 hover:opacity-80 text-black  bg-yellow-400 lg:rounded-2xl rounded-lg text-sm lg:text-md'>Buy Now</button>
            </div>
            <Section1/>
            <div className='w-screen relative  bg-blue-100 my-8 lg:flex hidden'>
                <img className='object-cover shoeBanner' src={Banner3} alt="banner"/>
            </div>
            <Section3/>
            
            <Slider title="Lightning Deal" products={products}/>
            <Slider title="Best seller" products={products}/>
            
            <Footer/>
        </div>
        
    )
}

export default Home;