import React from 'react';
import './css/productsCard.css';
//import { products } from './productData';

function product_card({title,products}){
    let j=0;
    return(
        <div className="product_container mb-3 lg:mb-0 font-Lato">
            <div className='productcard_title'>{title}</div>
            <div className='product '>
                {
                
                    products.map((prod,i)=>{
                        j=j+1;
                        if(j<=4){
                           return(
                        
                                <div className='product_items'>                            
                                    <img src={prod.detailUrl} alt="#" className='product_img' />
                                    <span className='title'>{prod.title.shortTitle}</span>
                                </div>

                            ) 
                        }
                        else{
                            return(
                                <div></div>
                            )
                        }
                        
                        
                    })
                }
            </div>
            
        </div>
    )
}
export default product_card;