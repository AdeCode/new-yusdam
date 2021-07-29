import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import SliderData from './SliderData'
import TourPackages from './TourPackages'
import Service from './Service'



export default function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slideToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
    };

    const sliderStyle = {
        padding: '0px',
        margin: '0px',
        width: 'inherit !important',
        boxSizing: 'border-box',

    }

    // const message = {
    //     position: 'absolute',
    //     color: 'white',
    //     top: '40%',
    //     left: '50%',
    //     transform: 'translate(-50%, -50%)',
    //     padding: '0 20px',
    // }

    return (
        <div className="landing">
            <Slider style={sliderStyle} {...settings}>
                {/* {SliderData.map(slide => {
                     <div className="slide">
                        {slide.image}
                    </div>
                })} */}
                <div className="slide">
                    <img className="img" src='assets/images/pages/Webp.net-compress-image (1).jpg'/>
                    <div className="message">
                        <h1>Yusdam-fly</h1>
                        <h2>Travels and tours...</h2>
                    </div>
                </div>
                <div className="slide">
                    <img className="img" src='assets/images/pages/luna.jpg'/>
                </div>
                <div className="slide">
                    <img className="img" src='assets/images/pages/dino.jpg'/>
                </div>
            </Slider>
           <TourPackages/>
        </div>
    )
}
