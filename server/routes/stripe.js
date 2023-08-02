const stripe = require('stripe')('sk_test_51MrlpcSGwkWJmN2oY9FyelaHWD1NRhOZxh1GkM8FTEWeDgjXKC2FhEH2D6linFOTD3L1DGQCboZlZMuhRvlACTgf00DFO8wI2l');
const express = require('express');
const router = express.Router()


const calculateOrderAmount = (items) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
};

router.post('/create-checkout-session', async(req, res) =>{

    const line_items = req.body.cartItems.map((item) => ({
        price_data: {
          currency: 'inr',
          product_data: {
            name: item.title.shortTitle,
            images: [item.mainUrl] // Use the name from the cart item or replace it with the correct property
          },
          unit_amount: item.price, // Replace this with the actual unit amount for the item, maybe item.price?
        },
        quantity: 1, // You can set the quantity based on the cart item or change it accordingly
      }));
      
    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url: `https://shoplify-gold.vercel.app/checkout-success`,
        cancel_url: `https://shoplify-gold.vercel.app/cart`,
    });
    res.send({url:session.url});
});

module.exports = router;