import React, { useRef, forwardRef } from 'react'
import SectionHeader from '../../shared/SectionHeader';
import PackageDetails from '../../shared/PackageDetails';
import Modal from '../../shared/Modal';
import BookNow from '../../shared/BookNow';

export default function Dubai() {

    const modalRef = useRef();

    const openModal = () => {
        modalRef.current.openModal();
    };
    
    const closeModal = () => {
        modalRef.current.close();
    };
    
    const location = {location: 'Santorini'};
    
    return (
        <div>
            <SectionHeader 
                title = 'SANTORINI TOUR PACKAGE'
                subtitle = 'Experience Santorini'
            />
            <PackageDetails 

                image = '/assets/images/pages/santo.jpg'
                 
                features = 'One week visitation' 
                
                content='Santorini is the supermodel of the Greek islands, a head-turner whose face is 
                instantly recognizable around the world: multicolored cliffs soar out of a sea-drowned 
                volcanic crater, topped by whitewahsed buildings.
                (b)
                With its reputation for dazzling panoramas, romantic sunsets and volcanic-sand beaches, it is 
                hardly surpprising Santorini features on so many traveles bucket lists. There is no denying the 
                uniqueness of this place of its hge allure: the island hosts 2 million visitors annually, leading
                some question whether Santorini has become a victim of overtourism.
                (b)
                Part of the Cyclades island group, Santorini; officially known as Thira, a name that encompasses the volcanic
                islets within Santorini orbit sits in the Aegean sea, roughly halfway between Athens and Crete. The 
                island is shaped like a whonky croissant, and the neighboring islets hint at the fact that Santorini  
                was once circular. It was knwon as Strongili (the Round one). Thousands o fyears ago, a huge volcanic eruption 
                caused the center of Strongili to sink, leaving a caldera or carter with towering cliffs along the 
                east side, now Santorinis trademark landscape.'

                url='/booknow'
            />
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
