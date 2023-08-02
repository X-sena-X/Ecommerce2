import { Divider } from '@material-ui/core'
import React, { useContext } from 'react'
import './Cart.css'
import { CartContext } from "./CartContext";
import TextField from '@mui/material/TextField';
import { Button } from 'bootstrap';
import PayButton from '../Payment/PayButton';

const Cart = () => {
    const { cartProducts,setCartProducts } = useContext(CartContext);
    const quantity = [{
        value: 1
    }, {
        value: 2
    },
    {
        value: 3
    },
    {
        value: 4
    },
    {
        value: 5
    },
    {
        value: 6
    }]
    let TotalPrice = 129;

    const handleDeleteItem = (id) => {
        const updatedItems = cartProducts.filter((item) => item.id !== id);
        setCartProducts(updatedItems);
    };

    return (
        <>
            <div className='w-screen h-auto flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-black items-center'>My Cart</span>
                <div className='w-screen h-auto grid grid-cols-5 mt-16'>
                    <div className='col-span-3 bg-white pl-2'>
                        {cartProducts.length === 0 ? (
                            <p>The cart is empty</p>
                        ) : (
                            <>
                                
                                <ul>
                                    {cartProducts.map((product) => (
                                        <div className=' w-full h-44  grid grid-cols-10 pr-1'>
                                            <div className='col-span-2 h-full w-full mt-2'>
                                                < img src={product.mainUrl} alt="img" className='FootImage object-cover w-full h-full mix-blend-multiply aspect-auto' />
                                            </div>
                                            <div className='flex flex-col col-span-4  items-start '>
                                                <span className='flex font-bold text-base'>
                                                    {product.title.longTitle}
                                                </span>
                                                <span className='flex text-gray-500'>Color: OLIVE/MULTI</span>
                                                <span className='flex text-gray-500'>Size: 8</span>
                                                <span className='relative flex items-end justify-end w-full '>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-red-800 hover:cursor-pointer" onClick={()=>handleDeleteItem(product.id)}>
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                    </svg>

                                                </span>
                                            </div>
                                            <div className='flex flex-col col-span-1 items-start '>
                                                <span> Price</span>
                                                <span>${product.price}</span>
                                            </div>
                                            <div className='flex col-span-2 flex-col items-start'>
                                                <span>Quantity</span>
                                                <TextField
                                                    id="standard-select-currency-native"
                                                    select
                                                    defaultValue={product.quantity}
                                                    SelectProps={{
                                                        native: true,
                                                    }}
                                                    helperText="Please select the quantity"
                                                    variant="standard"
                                                >
                                                    {quantity.map((option) => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.value}
                                                        </option>
                                                    ))}
                                                </TextField>
                                            </div>
                                            <div className='flex flex-col col-span-1 items-end ml-4'>
                                                <span className=''>Total</span>
                                                <span> ${TotalPrice}</span>
                                            </div>
                                        </div>
                                    ))}
                                </ul>
                                
                            </>
                        )
                        }

                    </div>

                    <div className='flex col-span-2 flex-col fixed w-2/5 h-screen top-30 right-0 justify-start items-start pl-20 mr-3'>
                        <span>ENTER PROMO CODE</span>
                        <div className='flex flex-row w-full'>
                            <input type='text' className=' h-11 w-8/12 px-3 py-1 border-gray-300 border-2' placeholder='Promo code' />
                            <button type='submit' className='bg-black w-4/12 h-11 text-white' > Submit</button>
                        </div>

                        <ul className=' items-start justify-start flex flex-col w-full mt-10 text-lg' >
                            <li className='w-full flex justify-between'>
                                <span className='flex '>Shipping cost</span>
                                <span className='flex '>$9</span>
                            </li>
                            <li className=' w-full flex justify-between'>
                                <span className='flex '>Discount</span> <span className='flex '>-$0</span>
                            </li>
                            <li className=' w-full flex justify-between'>
                                <span className='flex '>Tax</span > <span className='flex '>$10</span>
                            </li>
                            <li className='w-full flex justify-between text-xl mt-5'>
                                <span className='flex '>Estimated Total</span> <span className='flex '>$139</span>
                            </li>
                        </ul>
                        <div className=" items-center justify-center w-full mt-10">
                            <PayButton cartItems = {cartProducts}/>

                        </div>
                    </div>




                </div>

            </div>
        </>
    )
}
export default Cart;

// 2:44:40
/*
return (
    <div className="buynow_section">
        <div className="buynow_container">
            <div className="left_buy">
                <h1>Shopping Cart</h1>
                <p>Select all items</p>
                <span className='leftbuyprice'>Price</span>
                <Divider/>
                <div className="item_container">
                    <img src="https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70" alt="#"/>
                    <div className="item_details">
                        <h3>Molife Sense 500 smartwatch (Black Strap, Freesize)</h3>
                        <h3>Smart watches</h3>
                        <h3 className='differentprice'>$199</h3>
                        <p className="unusuall">Usually dispatched in 8 days.</p>
                        <p>Eligible for FREE Shipping</p>
                        <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="logo" />
                               
                    </div>
                    <h3 className="item_price">$119.00</h3>
                </div>
                <div className="item_container">
                    <img src='/assets/macbook.png' alt="#" className=''/>
                    <div className="item_details">
                        <h3>Molife Sense 500 smartwatch (Black Strap, Freesize)</h3>
                        <h3>Smart watches</h3>
                        <h3 className='differentprice'>$199</h3>
                        <p className="unusuall">Usually dispatched in 8 days.</p>
                        <p>Eligible for FREE Shipping</p>
                        <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="logo" />
                               
                    </div>
                    <h3 className="item_price">$119.00</h3>
                </div>
                                            
                    
              
            </div>
        </div>
        <div className='total_bill'>
            <span>Bill Amount</span>
            <span>$1399</span>

        </div>
    </div>
  )
  */