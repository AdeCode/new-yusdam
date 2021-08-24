import React, { useState, useRef } from 'react'
import Modal from '../../shared/Modal';
import BookNow from '../../shared/BookNow'


export default function Tab(tabTitle) {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    const modalRef = useRef();

    const openModal = () => {
        //evt.preventDefault();
        modalRef.current.openModal();
    };
    
    const closeModal = () => {
        modalRef.current.close();
    };

    const location = {
        location: 'Hajj',
    };

    return (
        <div className="tab-container">
            <div className="bloc-tabs">
                <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} 
                onClick={()=>toggleTab(1)}
                >Basic Package</div>
                <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} 
                onClick={()=>toggleTab(2)}
                >Standard Package</div>               
            </div>
            <div className="content-tabs">
                <div className={toggleState === 1 ? "content active-content" : "content"} 
                onClick={()=>toggleTab(1)}>
                    <div className="content-details">
                        <p>Our basic package is our cheapest hajj package and the cheapest one 
                        you will find anywhere. </p>
                        <p>The basic package includes the following services</p>
                    </div>
                    
                    <br />
                    <p>
                        <ul>
                            <li>Visa Processing</li>
                            <li>Hotel Accommodation</li>
                            <li>Intra-Saudi logistics</li>
                            <li>Feeding</li>
                            <li>Hajj Rites books and souvenir</li>
                            <li>Airport Protocol both in Nigeria and Saudi Arabia</li>
                        </ul>
                    </p>
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

                <div className={toggleState === 2 ? "content active-content" : "content"} 
                onClick={()=>toggleTab(1)}>
                    <div className="content-details">
                        <p>Our standard package is our cheapest hajj package and the cheapest one 
                        you will find anywhere. </p>
                        <p>The basic package includes the following services</p>
                    </div>
                    <br />
                    <p>
                        <ul>
                            <li>Visa Processing</li>
                            <li>Hotel Accommodation</li>
                            <li>MEALS WILL BE SERVED IN MINA & ARAFAT DURING HAJJ</li>
                            <li>Intra-Saudi logistics</li>
                            <li>Feeding</li>
                            <li>Hajj Rites books and souvenir</li>
                            <li>Airport Protocol both in Nigeria and Saudi Arabia</li>
                        </ul>
                    </p>
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
            </div>
        </div>
    )
}
