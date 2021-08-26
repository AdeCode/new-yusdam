import React, {useRef} from 'react'
import SectionHeader from '../../shared/SectionHeader';
import PackageDetails from '../../shared/PackageDetails';
import Modal from '../../shared/Modal';
import BookNow from '../../shared/BookNow';


export default function CanadaStudy() {

    const modalRef = useRef();

    const openModal = () => {
        modalRef.current.openModal();
    };
    
    const closeModal = () => {
        modalRef.current.close();
    };
    
    const location = {location: 'Canada'};

    const UsePackage = { package: 'Study in Canada'}

    return (
        <div>
            <SectionHeader 
                title = 'Study in Canada'
                subtitle = 'Study in the best Universities in Canada'
            />
    
            <PackageDetails>
                <div className="packageDetails-section-image">
                    <img src="/assets/images/pages/study.png" alt="" />
                </div>
                
                <div className="packageDetails-section-content">
                    <div className="packageDetails-section-title">Description </div>
                        <p>
                            Canada has a well-established position among the world’s leading 
                            study destinations. The most popular Canadian provinces for 
                            international students are Ontario, British Columbia and Quebec, 
                            which between them are home to many of the top universities in Canada.
                            For those looking to study at an elite university in one of the world’s 
                            most developed nations, applying to study in Canada can be an 
                            attractive option. A total of 26 universities in Canada feature in 
                            the QS World University Rankings, of which three are in the world’s 
                            top 50, with 11 more making the world’s top 300 – a feat matched only 
                            by a handful of other nations. 
                        </p>
                    <div className="packageDetails-section-title">Package Inclusions </div>                        
                    <p className="packageDetails-section-title-details">
                        <ul>
                            <li>Visa Processing</li>
                            <li>Residency Application</li>
                            <li>Ticketing</li>
                        </ul>
                        </p> 
                                                
                        
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
