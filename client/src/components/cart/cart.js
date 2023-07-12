import { Divider } from '@material-ui/core'
import React from 'react'
import './Cart.css'

const Cart = () => {
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
}
export default Cart;

// 2:44:40