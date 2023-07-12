import './css/Category.css';
import image1 from './images/fashion2.jpg';
import image2 from './images/footwear.jpg'
import image3 from './images/electronics.jpg'
export default function Category() {
    return (
        <>
            <div className="Category_container flex flex-col items-center justify-center my-40">
                <span className="flex  text-3xl font-bold ">Shop By category</span>
                <span className='line1 my-4'></span>
                <div className="grid grid-cols-3 gap-6">
                    <div className="Category_card h-fit flex flex-col w-auto p-2 bg-white ">
                        <div className="relative">
                            <div className="Cont1 h-40 lg:h-auto">
                                <img src={image1} alt="Category" className='object-fill'/>
                                <div className='cont1-text hidden hover:flex flex-col'>
                                    <span className='whitespace-nowrap'>Style in Every Stitch</span>
                                    <span className=''>Starts from $29</span>
                                </div>
                                <a href="#"></a>
                            </div>
                        </div>
                        <div className="Category_card_text h-20 flex-grow flex items-center justify-center">
                            <span className='text-2xl font-bold'>Clothing</span>
                        </div>
                    </div>
                    <div className="Category_card h-auto flex flex-col w-auto p-2 bg-white">
                        <div id="" className="relative">
                            <div className="Cont1 h-40 lg:h-auto">
                                <img src={image3} alt="Category" />
                                <div className='cont1-text hidden lg:text-md text-sm flex-col'>
                                    <span className='whitespace-nowrap'>Unlock the Power of Technology.</span>
                                    <span className=''>Starts from $89</span>
                                </div>
                                <a href="#"></a>
                            </div>
                        </div>
                        <div className="Category_card_text h-20 flex-grow flex items-center justify-center">
                            <span className='text-2xl font-bold'>Electronics</span>
                        </div>
                    </div>
                    <div className="Category_card h-auto flex flex-col w-auto p-2 bg-white">
                        <div id="" className="relative">
                            <div className="Cont1 h-40 lg:h-auto">
                                <img src={image2} alt="Category" />
                                <div className='cont1-text hidden hover:flex flex-col'>
                                    <span className='whitespace-nowrap text-white ' >Step into Style and Comfort.</span>
                                    <span className='text-white'>Starts from $59</span>
                                </div>
                                <a href="#"></a>
                            </div>
                        </div>
                        <div className="Category_card_text h-20 flex-grow flex items-center justify-center">
                            <span className='text-2xl font-bold'>FootWear</span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}