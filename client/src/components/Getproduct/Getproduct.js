import { Divider } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import './Getproduct.css';
import { useParams } from 'react-router-dom';

const Cart = () => {

    const {id} = useParams("");

    const [inddata,setInddata] = useState([]); 
    const getInddata = async()=>{
        // changed for deployment "/getproducts"
        const res = await fetch(`${process.env.SERVER_URL}/getproduct/${id}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }

        });
        const data  = await res.json();
        //console.log(data);
        if(res.status!==201){
            console.log("No data availabale");
        }else{
            console.log('getdata');
        }
        setInddata(data);
    }
    useEffect(()=>{
        getInddata();
    },[id]);
    // use effect will only be called after the page loads fully so the the page will not be rendered 
    // fully 


  return (
        <div className="cart_section">
            {inddata && Object.keys(inddata).length &&
                <div className="cart_container">
                    <div className="left_cart">
                        <img src={inddata.detailUrl} alt="cart" />
                        <div className="cart_btn">
                            <button className="cart_btn1" >Add to Cart</button>
                            <button className="cart_btn2">Buy Now</button>
                        </div>
                    </div>
                    <div className="right_cart">
                        <h3 >{inddata.title.shortTitle}</h3>
                        <h4>{inddata.title.longTitle} </h4>
                        <Divider />
                        <p className="mrp">M.R.P. : ${inddata.price.mrp}</p>
                        <p>Deal of the Day : <span style={{ color: "#B12704" }}>${inddata.price.cost}</span></p>
                        <p>You save : <span style={{ color: "#B12704" }}> ${inddata.price.mrp - inddata.price.cost} ({inddata.price.discount}) </span></p>

                        <div className="discount_box">
                            <h5 >Discount : <span style={{ color: "#111" }}>{inddata.discount}</span> </h5>
                            <h4>FREE Delivery : <span style={{ color: "#111", fontWeight: "600" }}>Oct 8 - 21</span> Details</h4>
                            <p style={{ color: "#111" }}>Fastest delivery: <span style={{ color: "#111", fontWeight: "600" }}> Tomorrow 11AM</span></p>
                        </div>
                        <p className="description">{inddata.description} <span style={{ color: "#565959", fontSize: "14px", fontWeight: "500", letterSpacing: "0.4px" }}>Good item</span></p>
                    </div>
                </div>
            }
            {/*
            {!inddata &&
                <div>
                    <div>PRODUCT SOLD OUT.....</div>
                    <a href="/"> continue shopping</a>
                
            </div> : ""}
            */
            }
        </div>
  )
}

export default Cart