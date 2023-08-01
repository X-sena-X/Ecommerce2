import { Divider } from '@material-ui/core'
import React, { useContext } from 'react'
import './Cart.css'
import { CartContext } from "./CartContext";
import TextField from '@mui/material/TextField';
import { Button } from 'bootstrap';

const Cart = () => {
    const { cartProducts } = useContext(CartContext);
    const quantity = [{
        value: 1
    }, {
        value: 2
    },
    {
        value: 3
    }]
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
                                <Divider />
                                <ul>
                                    {cartProducts.map((product) => (
                                        <div className=' w-full h-44  grid grid-cols-10 pr-1'>
                                            <div className='col-span-2'>
                                                < img src="" alt="img" className='' />
                                            </div>
                                            <div className='flex flex-col col-span-4 justify-start items-start'>
                                                <span className='flex font-bold text-base'>
                                                    Palid Skirt & buttoned Skirt
                                                </span>
                                                <span className='flex text-gray-500'>Color: OLIVE/MULTI</span>
                                                <span className='flex text-gray-500'>Size: 8</span>
                                            </div>
                                            <div className='flex flex-col col-span-1 items-start '>
                                                <span> Price</span>
                                                <span> $123</span>
                                            </div>
                                            <div className='flex col-span-2 flex-col items-start'>
                                                <span>Quantity</span>
                                                <TextField
                                                    id="standard-select-currency-native"
                                                    select
                                                    defaultValue="1"
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
                                                <span>$39.99</span>
                                            </div>
                                        </div>
                                    ))}
                                </ul>
                                <Divider />
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
                        <div className=" items-center w-full mt-10">
                            <button className='w-40 h-10 bg-yellow-500 rounded-lg'>
                                <div className='flex flex-row font-bold text-sm'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                    </svg>
                                    Checkout
                                </div>

                            </button>

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