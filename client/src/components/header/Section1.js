import './css/Section1.css';
import image1 from './images/shoe_pink.png'
import image2 from './images/shoe_green.png';
import image3 from './images/shoe_yellow.png';
export default function Section1({ title, productName, price }) {
    return (
        <>
            <div className="Section1_container flex flex-col items-center justify-center lg:mt-20 mt-14 ">
                <div className='flex my-5'>
                    <span className='text-6xl font-bold'>New Arrivals</span>
                </div>
                <div className='card_container flex flex-row lg:gap-24 gap-5 gap'>
                    <div className="glassBox flex rounded-xl">
                        <div className="colorPalette absolute right-0 flex-row top-0 flex gap-2 mt-2 mr-3">
                            <span className='bg-green-500 rounded-full w-5 h-5'></span>
                            <span className='bg-blue-400 rounded-full w-5 h-5'></span>
                        </div>
                        <div className="glassBox__imgBox ">
                            <img src={image2} alt="shoe" className=' scale-110'/>
                            <h3 className="glassBox__title">SuperRep Go</h3>
                        </div>
                        <div className="desc absolute bottom-0 left-0 ml-5 mb-5 flex flex-row">
                            <div className="flex flex-col justify-start">
                                <span className="text-xl font-bold flex whitespace-nowrap">by Nike</span>
                                <span className="text-md flex">$129</span>
                            </div>
                            <button className=" w-20 h-8 p-1 rounded-3xl bg-blue-700 text-sm lg:ml-10 ml-2 text-white lg:flex hidden">Buy Now</button>
                        </div>
                    </div>
                    <div className="glassBox relative flex rounded-xl ">
                        <div className="colorPalette absolute right-0 flex-row top-0 flex gap-2 mt-2 mr-3">
                            <span className='bg-pink-500 rounded-full w-5 h-5'></span>
                            <span className='bg-purple-400 rounded-full w-5 h-5'></span>
                        </div>
                        <div className="glassBox__imgBox">
                            <img src={image1} alt="shoe" />
                            <h3 className="glassBox__title">Air Force1</h3>

                        </div>
                        <div className="desc absolute bottom-0 left-0 ml-5 mb-5 flex flex-row">
                            <div className="flex flex-col justify-start">
                                <span className="text-xl font-bold flex whitespace-nowrap">by Nike women's</span>
                                <span className="text-md flex">$159</span>
                            </div>
                            <button className=" w-20 h-8 p-1 rounded-3xl bg-blue-700 text-sm text-white ml-10 lg:flex hidden">Buy Now</button>
                        </div>
                    </div>
                    <div className="glassBox hidden lg:flex  rounded-xl ">
                        <div className="colorPalette absolute right-0 flex-row top-0 flex gap-2 mt-2 mr-3">
                            <span className='bg-yellow-500 rounded-full w-5 h-5'></span>
                            <span className=' bg-gray-800 rounded-full w-5 h-5'></span>
                        </div>
                        <div className="glassBox__imgBox">
                            <img src={image3} alt="shoe" />
                            <h3 className="glassBox__title">OTW</h3>
                        </div>
                        <div className="desc absolute bottom-0 left-0 ml-5 mb-5 flex flex-row">
                            <div className="flex flex-col justify-start">
                                <span className="text-xl font-bold flex whitespace-nowrap">By vans</span>
                                <span className="text-md flex">$69</span>
                            </div>
                            <button className=" w-20 h-8 p-1 rounded-3xl bg-blue-700 text-sm text-white ml-10">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}