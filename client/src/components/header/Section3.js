import './css/Section3.css';
import image5 from './images/dress5.jpg'
import image4 from './images/image6.jpg';
import image3 from './images/image4.png'
import image2 from './images/image2.png';
import image1 from './images/image3edit.png';
import image6 from './images/image5.png';
export default function Section3() {
    return (
        <div className='section3 grid lg:grid-cols-2 mt-32 grid-cols-1 w-screen h-auto bg-white font-RobotoSlab'>
            <div className='leftSide flex flex-col bg-gray-200 items-center justify-center'>
                <div className='Container1 relative flex h-52 rounded-3xl bg-white mx-5 my-2 items-center justify-center'>
                    <div className='absolute w-full h-full overflow-hidden '>
                        <img src={image1} className="img_scale h-full w-full object-cover rounded-2xl  "alt="banner1"/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-black font-bold text-2xl z-10 '>GET UPTO 50% OFF</span>
                        <button className='w-32 h-10 bg-gray-100 rounded-xl text-sm mt-4 z-10 hover:bg-blue-600 hover:text-white'>Get Discount</button>
                    </div>

                </div>
                <div className='Container1 relative flex h-52 rounded-3xl bg-white mx-5 my-2 items-center'>
                        <div className='absolute w-full h-full rounded-2xl overflow-hidden'>
                            <img src={image2} className="  img_scale h-full w-full object-cover rounded-2xl "alt="banner1"/>
                        </div>
                    
                    <div className='flex flex-row'>
                       
                        <div className='flex  flex-col ml-12'>
                            <span className='text-black font-bold text-2xl z-10'>Winter's Weekend</span>
                            <span className='text-black text-sm flex justify-self-start z-10'>Keep it casual</span>
                            <div className='absolute right-0 top-0 m-4 h-6 w-8 rounded-3xl items-center justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex relative flex-row lg:space-x-28 space-x-5 mt-3'>
                    <div className='Container4 flex relative h-44 w-44 lg:h-64 lg:w-64 rounded-3xl justify-center items-center'>
                        <div className='absolute w-full h-full overflow-hidden rounded-2xl'>
                            <img src={image4} className="img_scale h-full w-full object-cover rounded-2xl "alt="banner1"/>
                        </div>
                        <div className='absolute flex right-0 top-0 mt-2 mr-2 bg-white w-8 h-8 rounded-full text-center justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  block m-0 hover:fill-red-600 focus:fill-red-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </div>
                        <button className='h-8 lg:w-18 absolute bottom-0 mb-8 opacity-60 bg-transparent rounded-xl border-black border-2 text-sm px-3 hover:bg-blue-600 hover:text-blue-800'>Avail Offers</button>
                    </div>
                    <div className='Container4 flex relative h-44 w-44 lg:h-64 lg:w-64 rounded-3xl'>
                        <div className='absolute flex right-0 top-0 mt-2 mr-2 bg-white w-8 h-8 rounded-full text-center justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  block m-0 hover:fill-red-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
            <div className='grid mt-3 lg:mt-0'>
                <div className='rightSide grid lg:grid-cols-2 grid-cols-1 lg:space-x-1 space-y-5 lg:space-y-0 place-items-center'>
                    <div className='Container2 flex bg-gray-100 relative rounded-2xl  '>
                        <div className='absolute w-full h-full overflow-hidden '>
                            <img src={image6} className=" img_scale h-full w-full object-cover rounded-2xl"alt="banner1"/>
                        </div>
                        <div className="colorPalette flex-row flex gap-2 mt-2 ml-3">
                            <span className='bg-pink-300 rounded-full w-5 h-5'></span>
                            <span className='bg-green-700 rounded-full w-5 h-5'></span>
                        </div>
                        <div className='absolute flex right-0 top-0 mt-2 mr-2 bg-white w-10 h-10 rounded-full items-center justify-center text-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 justify-self-center hover:fill-red-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>

                        </div>
                        <div className='absolute bottom-0 flex flex-row mb-5 ml-4 justify-evenly'>
                            <div className='flex flex-col justify-start '>
                                <span className='text-sm text-gray-600 flex whitespace-nowrap'>your Picks</span>
                                <span className='font-bold flex text-md whitespace-nowrap'>Supper Skinny</span>
                                <span className='font-bold flex text-md whitespace-nowrap'>Jogger in Brown</span>
                            </div>
                            <button className='h-8 w-14 lg:ml-20 ml-16 rounded-3xl bg-blue-600 text-sm text-white'>$39</button>
                        </div>


                    </div>
                    <div className='Container2 bg-gray-100 flex relative rounded-2xl'>
                        <div className='absolute w-full h-full overflow-hidden'>
                            <img src={image5} className=" img_scale h-full w-full object-cover rounded-2xl"alt="banner1"/>
                        </div>
                        
                        <div className="colorPalette absolute flex-row flex gap-2 mt-2 ml-3">
                            <span className='bg-yellow-500 rounded-full w-5 h-5'></span>
                            <span className=' bg-sky-400 rounded-full w-5 h-5'></span>
                        </div>
                        <div className='absolute flex right-0 top-0 mt-2 mr-2 bg-white w-10 h-10 rounded-full text-center justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  block m-0 hover:fill-red-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>

                        </div>
                        <div className='absolute bottom-0 flex flex-row mb-5 ml-4 justify-evenly'>
                            <div className='flex flex-col justify-start'>
                                <span className='text-sm flex whitespace-nowrap text-white'>Our Picks</span>
                                <span className='font-bold text-md flex text whitespace-nowrap text-white'>WMX Rubeer</span>
                                <span className='font-bold text-md flex whitespace-nowrap text-white'>Zebra sandal</span>
                            </div>
                            <button className='h-8 w-14 lg:ml-28 ml-24 rounded-3xl bg-blue-600 text-sm text-white'>$39</button>
                        </div>
                    </div>


                </div>
                <div className='Container3 relative flex h-48 bg-red-600 mt-3 ml-5 lg:ml-7 rounded-2xl self-center items-center'>
                        <div className='absolute w-full h-full overflow-hidden '>
                            <img src={image3} className="img_scale h-full w-full object-cover rounded-2xl"alt="banner1"/>
                        </div>
                        <div className='flex flex-col ml-11'>
                            <span className='text-gray-700 font-bold lg:text-3xl text-xl z-10'>Bring Bold Fashion</span>
                            <span className=' text-md flex justify-self-start z-10 text-gray-500 text-'>Layer on Layers</span>
                        </div>
                        
                    <div className='absolute right-0 top-0 m-4 h-6 w-8 rounded-3xl items-center justify-center'>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>

                    </div>
                </div>
            </div>
        </div>
    )
}