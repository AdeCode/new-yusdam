import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import SliderData from './SliderData'
import TourPackages from './TourPackages'
import Why from './Why'
import {Link} from "react-router-dom"



export default function Home() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 2000,
        slideToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        adaptiveHeight: true,
    };

    const sliderStyle = {
        padding: '0px',
        margin: '0px',
        width: 'inherit !important',
        boxSizing: 'border-box',

    }

    const message = {
        position: 'absolute',
        color: 'white',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '0 20px',
    }


    return (
        <div className="landing">
            <Slider style={sliderStyle} {...settings}>
                {/* {SliderData.map(slide => {
                     <div className="slide">
                        {slide.image}
                    </div>
                })} */}
                <div className="slide">
                    <img className="img" src='assets/images/pages/johnplane.jpg'/>
                    <div className="message">
                        <h1>Yusdam-Fly</h1>
                        <h2 className="subTitle">Travels and tours...</h2>
                        <button className="order-btn">
                            <Link to="/contact">Book Now</Link>
                        </button>
                    </div>
                </div>
                <div className="slide">
                    <img className="img" src='assets/images/pages/redd.jpg'/>
                    <div className="message">
                        <h1>Explore</h1>
                        <h2 className="subTitle">Explore the world with us</h2>
                       
                    </div>
                </div>
                <div className="slide">
                    <img className="img" src='assets/images/pages/luna.jpg'/>
                    <div className="third">
                        <h2 className="thirdSlide">Your luxury trip starts here</h2>
                        <h3 className="subTitle">Get started...</h3>                       
                    </div>
                </div>
            </Slider>
            <Why />
           <TourPackages/>
        </div>
    )
}
