import React, { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { grey } from '@mui/material/colors';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useParams } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import './Footwearpage.css';
export default function FootWearPage() {
    const { id } = useParams("");

    const [inddata, setInddata] = useState([]);
    const getInddata = async () => {
        // changed for deployment "/getproducts"
        const res = await fetch(`https://server-zmuv.onrender.com/getproducts2`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }

        });
        const data = await res.json();
        //console.log(data);
        if (res.status !== 201) {
            console.log("No data availabale");
        } else {
            console.log('gotdata');
        }
        setInddata(data);
    }
    useEffect(() => {
        getInddata();
        console.log(inddata.length);
    }, [id]);

    const ShoeCategoryItems = [
        'Running',
        'Sneakers',
        'Jordan',
        'Athletics',
        'Sandals',
        'Boots',
        'Footwear'
    ];
    const Gender = ['Men', 'Women', 'Unisex'];
    const Prices = ['Under $2500.00', '$2,501.00 - $7,500', '$799 - $1299', 'Over $1599'];
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const numberOfCards = 10;
    return (

        <>
            <div className='footwearpage_container flex flex-row '>
                <div className='sortingSection w-48 sticky left-0 flex'>
                    <div className='wrapper ml-5 fixed flex flex-col justify-items-start items-start font-RobotoSlab'>
                        <div className=' my-6'>Men's Shoes</div>
                        <div className="shoeCategory flex flex-col items-start justify-items-start">
                            {ShoeCategoryItems.map((item, index) => (
                                <span key={index} className='mx-1 text-sm font-bold'>{item}</span>
                            ))}
                        </div>
                        <div className='SubSection mt-4'>Gender(1)</div>
                        <div className='GenderSection flex flex-col '>
                            {Gender.map((item, index) => (
                                <FormControlLabel className='flex w-fit text-xs' control={<Checkbox
                                    {...label}

                                    sx={{
                                        color: grey[900],
                                        '&.Mui-checked': {
                                            color: grey[900],
                                        },
                                    }}
                                    key={index}
                                />} label={item} />
                            ))}
                        </div>
                        <div className='mt-4'>Shop By Price(1)</div>
                        <div className='PriceSection flex flex-col text-xs'>
                            {Prices.map((item, index) => (
                                <FormControlLabel className='flex w-fit text-xs' control={<Checkbox
                                    {...label}

                                    sx={{
                                        color: grey[900],
                                        '&.Mui-checked': {
                                            color: grey[900],
                                        },
                                    }}
                                    key={index}
                                />} label={item} />
                            ))}
                        </div>
                        <div className='text-xl mt-4 mb-2'>Color</div>
                        <div className='grid grid-cols-3 justify-evenly'>
                            <div className='flex flex-col text-center'>
                                <span className=' w-5 h-5 rounded-full bg-black'></span>
                                <span>Black</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className=' w-5 h-5 rounded-full bg-blue-700'></span>
                                <span>Blue</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className=' w-5 h-5 rounded-full bg-gray-500'></span>
                                <span>Grey</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className=' w-5 h-5 rounded-full bg-yellow-400'></span>
                                <span>Yellow</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className=' w-5 h-5 rounded-full bg-red-400'></span>
                                <span>Red</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className=' w-5 h-5 rounded-full bg-white'></span>
                                <span>White</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footwearSection flex flex-grow px-16'>
                    <div className='grid mx-4 my-4 lg:grid-cols-3 gap-4'>

                        {inddata.map((products, index) => {
                            if (products.category === 'footwear') {
                                return (
                                    <NavLink to={`/footwearproducts/${products.id} `}>
                                        <div className='bg-reg-400 flex w-80 h-80 flex-col bg-gray-100 rounded-xl'>
                                            <div className='w-full h-52 flex'>
                                                <img src={products.mainUrl} alt="shoe" className='object-contain mix-blend-multiply h-full w-full shoeimage' />
                                            </div>
                                            <div id="Content" className='flex flex-col items-start ml-4'>
                                                <span className='my-1'>{products.title.shortTitle}</span>
                                                <span className='my-1 font-bold'> Men's </span>
                                                <span className='my-1'> 4 Colours</span>
                                                <span className='my-1 font-bold'>{products.price}</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                );
                            }

                        })}
                    </div>
                </div>

            </div >
        </>
    )

}

/*
{inddata.map((data, index) => {
                            if (data.Categories === 'FootWear') {
                                return (
                                    <>
                                        <div className='bg-red-400 flex '>
                                            <div className=''>
                                                <img src={data.url} className=' object-cover'/>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        })}
{Array.from({ length: numberOfCards }).map((_, index) => (
    <NavLink to={`/footwearproducts/${123456} `}>
    <div className='bg-reg-400 flex w-80 h-80 flex-col bg-green-200'>
        <div className=' w-max h-52 flex'>
            <img src="" alt="shoe" className='object-cover' />
        </div>
        <div id="Content" className='flex flex-col items-start '>
            <span className='my-1'> Nike offset</span>
            <span className='my-1 font-bold'> Men's Slides</span>
            <span className='my-1'> 4 Colours</span>
            <span className='my-1 font-bold'> $299</span>
        </div>
    </div>
</NavLink>
))}


 (
                            <NavLink to={`/footwearproducts/${products.id} `}>
                                <div className='bg-reg-400 flex w-80 h-80 flex-col bg-gray-100 rounded-xl'>
                                    <div className='w-full h-52 flex'>
                                        <img src={products.mainUrl} alt="shoe" className='object-contain mix-blend-multiply h-full w-full shoeimage'/>
                                    </div>
                                    <div id="Content" className='flex flex-col items-start ml-4'>
                                        <span className='my-1'>{products.title.shortTitle}</span>
                                        <span className='my-1 font-bold'> Men's </span>
                                        <span className='my-1'> 4 Colours</span>
                                        <span className='my-1 font-bold'>{products.price}</span>
                                    </div>
                                </div>
                            </NavLink>
                        ))
*/