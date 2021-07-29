import React from 'react'
import SectionHeader from '../shared/SectionHeader';
import {FaSubway, FaBars, FaCanadianMapleLeaf, FaBtc, FaEnvira} from 'react-icons/fa';
import { BiHotel } from "react-icons/bi";
import { MdFlight } from "react-icons/md";
import {AiFillCar} from "react-icons/ai";
import { Link } from 'react-router-dom';


export default function Service() {
    return (
        <div className="service-section">
            <SectionHeader 
                title = 'Our Services'
                subtitle = 'We have an amazing line up of special services for our amiable clients accross the globe'
            />
           
            <div className="service-section-row">
                <div className="service-section-row-1">
                    <div className="service-section-row-1-col">                  
                            <FaSubway className="service-section-row-1-col-img"/>                           
                            <Link to="#">
                                <h2>Transports</h2>
                                <p>Safe and Secure.  Book confidently and save on our low fare promise.</p>
                            </Link>
                    </div>
                    <div className="service-section-row-1-col">                    
                        <BiHotel className="service-section-row-1-col-img"/>
                        <h2>Hotels Reservation</h2>
                        <p>Safe and Secure.  Book confidently and save on our low fare promise.</p>
                    </div>
                    <div className="service-section-row-1-col">
                        <FaCanadianMapleLeaf className="service-section-row-1-col-img"/>
                        <h2>Visa Application</h2>
                        <p>Safe and Secure.  Book confidently and save on our low fare promise.</p>
                    </div>
                </div>
                <div className="service-section-row-1">
                    <div className="service-section-row-1-col">
                        <MdFlight className="service-section-row-1-col-img"/>
                        <h2>Flight Booking</h2>
                        <p>Safe and Secure.  Book confidently and save on our low fare promise.</p>
                    </div>
                    <div className="service-section-row-1-col">
                        <AiFillCar className="service-section-row-1-col-img"/>
                        <h2>Transports</h2>
                        <p>Safe and Secure.  Book confidently and save on our low fare promise.</p>
                    </div>
                    <div className="service-section-row-1-col">
                        <AiFillCar className="service-section-row-1-col-img"/>
                        <h2>Transports</h2>
                        <p>Safe and Secure.  Book confidently and save on our low fare promise.</p>
                    </div>
                </div>                              
            </div>
           
        </div>
    )
}
