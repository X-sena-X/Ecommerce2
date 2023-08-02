import React from 'react';
import axios from "axios";
import { useSelector } from "react-redux";

const PayButton = (cartItems) => {
    const handleCheckout = () => {
        axios.post(`http://localhost:8000/create-checkout-session`,
            cartItems
        ).then((res)=>{
            if(res.data.url){
                window.location.href = res.data.url;
            }
        }).catch((err)=> console.log(err.message));
        console.log(cartItems);
    }

    return (
        <>
            <button onClick={() => handleCheckout()} className='flex flex-row font-bold text-sm justify-center items-center bg-yellow-500 rounded-xl h-11 w-40'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 font-bold">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                Checkout
            </button>
        </>
    )
}

export default PayButton;
