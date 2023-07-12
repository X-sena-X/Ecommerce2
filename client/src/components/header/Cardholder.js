import React from 'react';
import ProductCard from './productCard';
import './css/Cardholder.css';

function Cardholder({styles,products}){
    return(
        <div className='cardholder_container flex flex-col lg:flex-row mx-1 lg:justify-evenly justify-center items-center' style={styles} >
            <ProductCard title="Keep shopping for.." products={products}/>
            <ProductCard title="Buy again.." products={products}/>
            <ProductCard title="Gift your closed one's.." products={products}/>
        </div>
    )
}
export default Cardholder;