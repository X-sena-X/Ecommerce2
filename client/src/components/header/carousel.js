import React from 'react';
import './css/carousel.css';
import Carousel from 'react-material-ui-carousel';


const data = [
        "https://i.imgur.com/irHBbbQ.png",
        "https://i.imgur.com/NLLslba.png",
        "https://i.imgur.com/ludSjuB.png",
        "https://i.imgur.com/coV7bFM.png"
]

const Banner = ()=>{
    return(
        <Carousel className='main' autoplay={true} animation='slide' indicators={false} navButtonsAlwaysVisible={true} duration='300' cycleNavigation={true}
        fullHeightHover={true}
        navButtonsProps={{
            style:{
                backgroundColor:'transparent',
                color:"#494949",
                borderRadius:0,
                marginTop:-22,
                height:"104px",
            }
        
        
        }}
        >
            {
                data.map((img,i)=>{
                    return(
                        <>
                            <img src={img} alt="#" className="carousel_img"/>
                        </>
                    )
                })
            }
        </Carousel>
    )
}

export default Banner