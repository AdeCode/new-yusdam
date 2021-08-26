import React, {useRef, useState} from 'react'
import SectionHeader from '../../shared/SectionHeader';
import PackageDetails from '../../shared/PackageDetails';
import Modal from '../../shared/Modal';
import BookNow from '../../shared/BookNow'


export default function Seychelles() {
    

    const modalRef = useRef();

    const openModal = () => {        
        modalRef.current.openModal();
    };
    
    const closeModal = () => {
        modalRef.current.close();
    };

    const location = {location: 'Seychelles'};

    return (
        <div>
            <SectionHeader 
                title = 'VISIT SEYCHELLES'
                subtitle = 'Experience Seychelles'
            />
            <PackageDetails>            
                <div>
                    <div className="packageDetails-section-image">
                        <img src="/assets/images/pages/seych.jpg" alt="" />
                    </div>
                
                    <div className="packageDetails-section-content">
                        <div className="packageDetails-section-title">Description </div>
                            <p>
                                With all the exquisite attractions and activities 
                                the glorious country has to offer, we are your stepping 
                                stone to making sure that you get the holiday experience 
                                of a lifetime. We offer services varying from guided tours, 
                                to exclusive activities at sea. Tours and Excursion 
                                Seychelles is your solution to a stress free vacation. 
                                We aim to bring services at your doorstep. Our motto is 
                                simple.
                            </p>

                        <div className="packageDetails-section-title">Package Inclusions </div>                        
                            <p className="packageDetails-section-title-details">
                                <ul>
                                    <li>Visa Processing</li>
                                    <li>Residency Application</li>
                                    <li>Ticketing</li>
                                    <li>Airport Pick-up and Drop-off</li>
                                    <li>Accommodation</li>
                                </ul>
                            </p> 
                    </div>
                </div>
            </PackageDetails>
               
                
            
            <div className="packageDetails-section">                
                <button onClick={openModal} className="packageDetails-section-btn">Book Now</button>                
                <Modal ref={modalRef}>
                    <div className="btn-close" onClick={closeModal}>X</div>
                    <h1>Booking Form</h1>
                    <p>Fill all the fields here</p>
                    <BookNow 
                        location={location}
                    />                                                
                </Modal>
            </div>          
        </div>
    )
}
