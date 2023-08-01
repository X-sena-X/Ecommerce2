import React, { useContext } from "react";
import logo from './images/logo2.png';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { CartContext } from "../cart/CartContext";
import { useNavigate } from "react-router-dom";


export default function NavBar() {
    const navigate = useNavigate();
    const goToCart = () => {
        navigate('/cart'); // Replace '/otherpage' with the path of the page you want to navigate to
    };


    const {cartProducts} = useContext(CartContext);
    return (
        <>
            <div id="NavbarContainer" className="mt-10">
                <div className="h-auto w-screen flex flex-col">
                    <div className="flex justify-around w-screen">
                        <ul className="flex flex-row gap-4">
                            <li>Customer service</li>
                            <li>UNIDAYS</li>
                            <li>ooo</li>
                        </ul>
                        <ul className="flex flex-row gap-4">
                            <li className="flex flex-row gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                    />
                                </svg>
                                SignIn
                            </li >
                            <li className="flex flex-row gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                    />
                                </svg>
                                Favourite
                            </li>
                            <li className="flex flex-row" onClick={goToCart}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                    />
                                </svg>
                                <span className="w-4 h-4 rounded-xl mr-3 text-red-500 mb-2 text-center text-sm">{cartProducts.length}</span>
                                
                                Cart
                                
                            </li>
                        </ul>
                    </div>
                    <div className="logo"><a href="/"><img src={logo} className="w-15 object-contain h-20" alt='Logo' /></a></div>
                    <div className="flex justify-end mr-8">
                        <div>
                          <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'search google maps' }}
                            style={{backgroundColor:'grey',borderRadius:'10px',width:'15em',padding:'2px'}}
                            />
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>  
                        </div>
                        
                    </div>
                </div>
            </div>

        </>
    );
}

/*
const autocompleteData = [
  // Women's Dress
  { category: 'Women Dress', label: 'Women\'s Red Party Dress' },
  { category: 'Women Dress', label: 'Women\'s Floral Maxi Dress' },
  { category: 'Women Dress', label: 'Women\'s Little Black Dress' },
  { category: 'Women Dress', label: 'Women\'s A-line Cocktail Dress' },
  // ... Add more women's dress items here ...

  // Men's Dress
  { category: 'Men Dress', label: 'Men\'s Navy Blue Suit' },
  { category: 'Men Dress', label: 'Men\'s Formal White Shirt' },
  { category: 'Men Dress', label: 'Men\'s Slim Fit Dress Pants' },
  { category: 'Men Dress', label: 'Men\'s Classic Blazer' },
  // ... Add more men's dress items here ...

  // Children's Dress
  { category: 'Children Dress', label: 'Girls\' Party Princess Dress' },
  { category: 'Children Dress', label: 'Boys\' Casual Denim Overalls' },
  { category: 'Children Dress', label: 'Girls\' Floral Summer Dress' },
  { category: 'Children Dress', label: 'Boys\' Striped T-Shirt' },
  // ... Add more children's dress items here ...

  // Sneakers - Nike
  { category: 'Sneakers - Nike', label: 'Nike Air Max 90' },
  { category: 'Sneakers - Nike', label: 'Nike React Infinity Run' },
  { category: 'Sneakers - Nike', label: 'Nike SB Dunk Low' },
  { category: 'Sneakers - Nike', label: 'Nike Air Force 1' },
  // ... Add more Nike sneakers here ...

  // Sneakers - Adidas
  { category: 'Sneakers - Adidas', label: 'Adidas Superstar' },
  { category: 'Sneakers - Adidas', label: 'Adidas Stan Smith' },
  { category: 'Sneakers - Adidas', label: 'Adidas Ultraboost' },
  { category: 'Sneakers - Adidas', label: 'Adidas NMD' },
  // ... Add more Adidas sneakers here ...

  // Sneakers - Puma
  { category: 'Sneakers - Puma', label: 'Puma Suede Classic' },
  { category: 'Sneakers - Puma', label: 'Puma RS-X' },
  { category: 'Sneakers - Puma', label: 'Puma Cali' },
  { category: 'Sneakers - Puma', label: 'Puma Future Rider' },
  // ... Add more Puma sneakers here ...

  // Footwear - Men
  { category: 'Footwear - Men', label: 'Men\'s Leather Oxford Shoes' },
  { category: 'Footwear - Men', label: 'Men\'s Sports Sandals' },
  { category: 'Footwear - Men', label: 'Men\'s Canvas Sneakers' },
  { category: 'Footwear - Men', label: 'Men\'s Running Shoes' },
  // ... Add more men's footwear items here ...

  // Footwear - Women
  { category: 'Footwear - Women', label: 'Women\'s High Heel Pumps' },
  { category: 'Footwear - Women', label: 'Women\'s Flat Sandals' },
  { category: 'Footwear - Women', label: 'Women\'s Ankle Boots' },
  { category: 'Footwear - Women', label: 'Women\'s Slip-on Sneakers' },
  // ... Add more women's footwear items here ...

  // Footwear - Children
  { category: 'Footwear - Children', label: 'Girls\' Mary Jane Shoes' },
  { category: 'Footwear - Children', label: 'Boys\' Velcro Sneakers' },
  { category: 'Footwear - Children', label: 'Girls\' Ballet Flats' },
  { category: 'Footwear - Children', label: 'Boys\' Outdoor Hiking Shoes' },
  // ... Add more children's footwear items here ...

  // Add more items as needed to reach a total of 100 items
];

*/