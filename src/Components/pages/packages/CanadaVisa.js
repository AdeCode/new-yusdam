import React, {useRef} from 'react'
import SectionHeader from '../../shared/SectionHeader';
import PackageDetails from '../../shared/PackageDetails';
import Modal from '../../shared/Modal';
import BookNow from '../../shared/BookNow';

export default function DubaiResidency() {

    const modalRef = useRef();

    const openModal = () => {
        modalRef.current.openModal();
    };
    
    const closeModal = () => {
        modalRef.current.close();
    };
    
    const location = {location: 'Canada'};

    const UsePackage = { package: 'Canada Visa'}

    return (
        <div>
            <SectionHeader 
                title = 'CANADA VISA'
                subtitle = 'Live and work in Canada'
            />
    
            <PackageDetails>
                <div className="packageDetails-section-image">
                    <img src="/assets/images/pages/jason.jpg" alt="canada-visa" />
                </div>
                
                <div className="packageDetails-section-content">                                                            
                    <div className="packageDetails-section-title">Description </div>
                        <p>
                        Dubai is a land of miracle, beautiful nature, and Man-made
                        innovation. This city is a great way to escape your regular monotonous
                        and tedious schedule. Planning a trip to this dreamland is certainly
                        one of the exciting trips for families, friends, or even couples. 
                        However, keep in mind to get our assistance to avoid any hassle and 
                        make your tour worth remembering every after it ends. Our Dubai City 
                        Tour is meant to showcase the best version of the United Arab Emirates’s 
                        intriguing city. Unlike others, our tours are quite economical and come 
                        with timely discounts to provide facilitation for our interested travelers.
                        (b)
                        With beautiful attractions, zero crime rate safety, strict rules & 
                        regulations, and ultimate luxury, this city is a Hubspot that attracts 
                        visitors across the globe. Dubai has everything a traveler can dream 
                        of, whether they come in a group, with families, or even as a solo 
                        tourist. Beautiful and sandy beaches, theme parks, advanced museums, 
                        vast deserts, and so on. Calling Dubai a land of fame and luxury with 
                        perfect man-made touch is perfectly valid. Let’s know this city and 
                        know our City Tour in Dubai has in the Store for you.
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
