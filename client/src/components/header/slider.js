import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Divider } from "@mui/material";
import "./css/slider.css";
//import { products } from './productData2';
import { NavLink } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const slide = ({ title, products }) => {
  return (
    <div className="products_section h-auto bg-white flex flex-col my-6 mx-4 rounded-2xl font-RobotoSlab">
      <div className="products_deal relative flex items-center justify-between my-4">
        <span className="lg:text-3xl  text-xl font-bold ml-4">{title}</span>
        <button className="view_btn absolute right-0 text-white bg-blue-800 border px-2 py-1 rounded-md lg:mr-10 mr-4">
          View All
        </button>
      </div>

      <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        transitionDuration={100}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-2-px"
        centerMode={true}
        className="w-auto"
      >
        {products.map((e) => {
          return (
            <NavLink to={`/getproduct/${e.id} `}>
              <div className="products_items w-24 lg:w-auto lg:h-56 h-28  flex flex-col items-center justify-center lg:mx-4 mb-3 rounded-lg ">
                <div className="product_img flex mt-1 lg:h-32 h-20">
                  <img
                    src={e.detailUrl}
                    alt="productItem"
                    className="fit-content"
                  />
                </div>
                <p className="products_name lg:text-xl text-sm lg:font-bold font-Lato">{e.title.shortTitle}</p>
                <p className="products_offer text-sm hidden lg:visible md:visible font-Lato">{e.discount}</p>
              </div>
            </NavLink>
          );
        })}
      </Carousel>
    </div>
  );
};
export default slide;

/*getproduct/${e.id} this makes the link to dynamic cahnges the link according to the item id
// we can also use a onclick function on a div and use Navaigation hook to redirect to respective page

const sendata = ()=>{
    naviagation('/',{state:e.id})
}

*/
/*

<div className="products_itemss w-auto h-56 bg-white flex flex-col items-center justify-center mx-4 mb-3 rounded-lg">
                <div className="Container absolute h-30 w-30 bg-pink-300 " style={{backgroundImage: `url${e.detailUrl}`,backgroundSize:"cover"}}>
                 
                </div>

              </div>


              


              <div className="container">
                <img
                  src={e.detailUrl}
                  alt="productItem"
                  className="fit-content"
                />
                <div className="overlay">
                  <div className="items"></div>
                  <div className="items head">
                    <p>{e.title.shortTitle}</p>
                  </div>
                  <div className="items price">
                    <p className="old">$699</p>
                    <p className="new">{e.discount}</p>
                  </div>
                  <div className="items cart">
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
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>

                    <span>ADD TO CART</span>
                  </div>
                </div>
              </div> */