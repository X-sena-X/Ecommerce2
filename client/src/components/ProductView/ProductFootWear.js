import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './ProductFoot.css';

export default function ProductFoot(Prod) {
    const [SizeValue, setSize] = useState('5.0Y');

    const handleChange = (event, newSize) => {
        setSize(newSize);
    };

    return (
        <>
            <div> AIR JORDAN</div>
            <div id='wrapper ' className='p-14 flex w-screen flex-row h-fit'>
                <div className='ProductImages grid w-1/2 h-64 grid-cols-2 gap-2 gap-x-5'>
                    <div className='col-span-2 h-52'>
                        <img src="" alt="Shoe1" />
                    </div>
                    <div className=''>
                        <img src="" alt="Shoe2" className='h-24' />
                    </div>
                    <div className=''>
                        <img src="" alt="Shoe3" className='h-24' />
                    </div>
                    <div className=''>
                        <img src="" alt="Shoe4" className='h-24' />
                    </div>
                </div>
                <div className='flex w-1/2 ml-18 flex-col justify-items-start items-start'>
                    <span className=' text-lg font-bold '> Air jordan 1 Low 'Fierce Pink' DZ5365-601</span>
                    <span className=' mt-2'>shoes</span>
                    <span className='text-md mt-2' >$49</span>
                    <span className='mt-5'>SIZE</span>
                
                    <ToggleButtonGroup
                        
                        exclusive
                        aria-label="text alignment"
                        onChange={handleChange}
                        value={SizeValue}
                    >
                        <ToggleButton value="3.5Y" aria-label="1" >
                            <div className="flex flex-col justify-center items-center">
                                <sp className="flex">4Y</sp>
                                <spa className="flex">US $195</spa>
                            </div>
                        </ToggleButton>
                        <ToggleButton value="4.0Y" aria-label="2">
                            <div className="flex flex-col items-center">
                                <span className="flex">4.0Y</span>
                                <span className="flex">US $195</span>
                            </div>
                        </ToggleButton>
                        <ToggleButton value="4.5Y" aria-label="3">
                            <div className="flex flex-col items-center">
                                <span className="flex">4.5Y</span>
                                <span className="flex">US $195</span>
                            </div>
                        </ToggleButton>
                        <ToggleButton value="5.0Y" aria-label="4">
                            <div className="flex flex-col items-center">
                                <span className="flex">5.0Y</span>
                                <span className="flex">US $195</span>
                            </div>
                        </ToggleButton>
                        <ToggleButton value="5.5Y" aria-label="5">
                            <div className="flex flex-col items-center">
                                <span className="flex">5.5Y</span>
                                <span className="flex">US $195</span>
                            </div>
                        </ToggleButton>
                        <ToggleButton value="6.0Y" aria-label="6">
                            <div className="flex flex-col items-center">
                                <span className="flex">6.0Y</span>
                                <span className="flex">US $195</span>
                            </div>
                        </ToggleButton>
                        <ToggleButton value="6.5Y" aria-label="left aligned">
                            <div className="flex flex-col items-center">
                                <span className="flex">6.5Y</span>
                                <span className="flex">US $195</span>
                            </div>
                        </ToggleButton>
                        <ToggleButton value="7.5Y" aria-label="left aligned">
                            <div className="flex flex-col items-center">
                                <span className="flex">7.0Y</span>
                                <span className="flex">US $195</span>
                            </div>
                        </ToggleButton>
                    </ToggleButtonGroup>


                    <div className=''>
                        <div className='mt-3 '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                                />
                            </svg>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}





