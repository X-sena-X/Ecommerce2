import React, { useState, useEffect } from 'react';

import Rating from '@mui/material/Rating';
export default function ClothingPage(){
    const [value,setValue] = useState(2);
    return(
        <>  
            <div className=' bg-slate-500 flex flex-col'>
                <div className='grid lg:grid-cols-4 grid-cols-2 lg:grid-rows-2 grid-rows-4 gap-x-2 gap-y-2 w-full h-96 mt-10'>
                    <div className=' col-span-2 row-span-2 bg-blue-200'>

                    </div>
                    <div className='grid col-span-1 bg-red-200'>

                    </div>
                    <div className='grid col-span-1 bg-slate-400'>

                    </div>
                    <div className='grid col-span-1 bg-green-200'>

                    </div>
                    <div className='grid col-span-1 bg-red-200'>
                        
                    </div>
                </div>
                <div className='sortingSection w-48 sticky flex'>
                    <div className='wrapper ml-5 flex flex-col justify-items-start items-start'>
                        
                    </div>
                </div>
                <div className='w-full h-auto lg:px-20 flex'>
                    <div className='grid lg:grid-cols-4 grid-cols-3 w-full lg:gap-5 gap-3 lg:px-20 px-8'>
                        <div className='flex flex-col h-80 w-full bg-blue-400'>
                            <div className='h-5/6 w-full '>

                            </div>
                            <div className='h-1/6 w-full'>
                                <Rating name="read-only" value={value} readOnly />
                            </div>
                        </div>
                        <div className='flex flex-col h-80 w-full bg-blue-400'>
                            <div className='h-5/6 w-full '>

                            </div>
                            <div className='h-1/6 w-full'>
                                <Rating name="read-only" value={value} readOnly />
                            </div>
                        </div>
                        <div className='flex flex-col h-80 w-full bg-blue-400'>
                            <div className='h-5/6 w-full '>

                            </div>
                            <div className='h-1/6 w-full'>
                                <Rating name="read-only" value={value} readOnly />
                            </div>
                        </div>
                        <div className='flex flex-col h-80 w-full bg-blue-400'>
                            <div className='h-5/6 w-full '>

                            </div>
                            <div className='h-1/6 w-full'>
                                <Rating name="read-only" value={value} readOnly />
                            </div>
                        </div>
                        <div className='flex flex-col h-80 w-full bg-blue-400'>
                            <div className='h-5/6 w-full '>

                            </div>
                            <div className='h-1/6 w-full'>
                                <Rating name="read-only" value={value} readOnly />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}