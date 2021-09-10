import React, {useRef} from 'react'
import SectionHeader from '../../shared/SectionHeader';
import PackageDetails from '../../shared/PackageDetails';
import Modal from '../../shared/Modal';
import BookNow from '../../shared/BookNow';


export default function Zanzibar() {
    const modalRef = useRef();

    const openModal = () => {
        modalRef.current.openModal();
    };
    
    const closeModal = () => {
        modalRef.current.close();
    };
    
    const location = {location: 'Zanzibar'};

    const UsePackage = { package: 'Zanzibar Tour'}

    return (
        <div>
            <SectionHeader 
                title = 'Zanzibar Tour'
                subtitle = 'Amazing ocean view and plantation'
            />
    
            <PackageDetails>
                <div className="packageDetails-section-image">
                    <img src="/assets/images/pages/zanzibar.jpg" alt="" />
                </div>
                
                <div className="packageDetails-section-content">
                    <div className="packageDetails-section-title">Description </div>
                        <p>
                        The Zanzibar town is famous for its spice tours. Tourists visit the various 
                        coconut and spice plantations in the island. Zanzibar is known for its 
                        variety of spices that are used to prepare food, cosmetics and 
                        medicines. Some of the fruits available include; banana, coconut, 
                        lime, jackfruit and breadfruit. 
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
