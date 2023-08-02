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
    const getInddata = async (id) => {
        // changed for deployment "/getproducts"
        const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/getproduct2/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }

        });
        const data = await res.json();
        console.log(data);
        if (res.status !== 201) {
            console.log("No data availabale");
        } else {
            console.log('getdata');
        }
        
        const modifiedData = {
            ...data,
            quantity:1,
            addedDate:'07022023'
        }
        setCartProducts(prev=>[...prev,modifiedData]);
    }

    async function addProducts(productsId){
        console.log(productsId);
        const isItemInCart = (cartItems, itemToAdd) => {
            return cartItems.some((cartItem) => cartItem.id === itemToAdd);
        };
        
        if(! isItemInCart(cartProducts,productsId)){
                getInddata(productsId);
            }
        //setCartProducts(prev=>[...prev,productsId]);
    }

   
    return(
        <CartContext.Provider value={{cartProducts,setCartProducts,addProducts}}>
            {children}
        </CartContext.Provider>
    )
}
