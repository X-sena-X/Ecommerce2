import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({});

export default function CartContextProvider ({children}){
    const [cartProducts, setCartProducts] = useState(
        JSON.parse(localStorage.getItem('cart')) ||[]);

    // now just having setstate when reload the items in cart is reset so we storeit in local storage
    useEffect(()=>{
        if (cartProducts?.length >0 ){
            localStorage.setItem('cart',JSON.stringify(cartProducts));
        }
    })
    function addProducts(productsId){
        setCartProducts(prev=>[...prev,123]);
    }
    return(
        <CartContext.Provider value={{cartProducts,setCartProducts,addProducts}}>
            {children}
        </CartContext.Provider>
    )
}
