import React from 'react';
import {HiChevronDoubleRight, 
        HiOutlinePhone,
        HiLocationMarker,
        HiMail} from "react-icons/hi";
import Copyright from './Copyright';
import {AiFillFacebook} from "react-icons/ai";
import {FaFacebookF, FaTelegramPlane, FaInstagram, FaWhatsapp} from "react-icons/fa";
import {Link} from "react-router-dom"


export default function Footer() {
    return (
        <section>
            <div className="footer">
                <div className="footer-col">
                    <div className="footer-col-img">
                        <img src="assets/images/pages/yusdam-banner.jpeg" alt="yusdam-banner" />
                    </div>
                    <p>
                    Yusdam-fly Travels and Tours is a Company set up to provide Travel and 
                    related business to Corporate organizations and individuals. 
                    We are ranked among the top Management Companies in the market. 
                    We are IATA Certified and a member of ASTA ABTA and NANTA
                    </p>

                </div>
                <div className="footer-col link">
                    <h3>COMPANY INFORMATION</h3>
                    <ul>
                        <li>
                            <HiChevronDoubleRight/> 
                            <span>
                                <Link to='/about'>About Us</Link>
                            </span>
                        </li>
                        <li>
                            <HiChevronDoubleRight/> 
                            <span>
                                <Link to='/service'>Our Services</Link>
                            </span>
                        </li>
                        <li>
                            <HiChevronDoubleRight/> 
                            <span>
                                <Link to='/package'>Our Tour Packages</Link>
                            </span>
                        </li>
                        <li>
                            <HiChevronDoubleRight/> 
                            <span>
                                <Link to='/contact'>Contact Us</Link>
                            </span>
                        </li>                        
                    </ul>
                    
                </div>
                <div className="footer-col">
                    <h3>CONTACT INFORMATION</h3>
                    
                    <ul>
                        <li>
                            <HiLocationMarker size={16}/> 
                            <span>Irepodun Local Government Shopping Complex, 
                                Block A4 Shop Number 14, Behind Saki Garage, Sango, Ibadan.</span>
                        </li>
                        <li>
                            <HiOutlinePhone size={16}/> 
                            <span>07046210669</span>
                        </li>
                       
                        <li>
                            <HiMail size={16}/> 
                            <span>yusdamfly2130@gmail.com</span>
                        </li>
                                           
                    </ul>
                </div>
                <div className="footer-col social">                   
                    <ul>
                        <li>
                            <a href="https://wa.me/+2347062643074">
                                <FaWhatsapp size={24}/>                             
                            </a>
                        </li>  
                        <li>
                            <a href="">
                                <FaInstagram size={24}/>                             
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/yusdam-fly" target="_blank">
                                <FaFacebookF size={24}/>                             
                            </a>
                        </li>                       
                        <li>                           
                            <a href="https://www.facebook.com">
                                <FaTelegramPlane size={24}/> 
                            </a>
                        </li>                                           
                    </ul>
                </div>
            </div>
            <Copyright />
        </section>
    )
}
